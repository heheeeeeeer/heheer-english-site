// 状态管理
let currentCategory = learningData[0].category; // 默认选中第一个分类
let activeTags = []; // 当前选中的标签，为空表示全选
let isEnglishVisible = true; // 英语句子是否可见
let isFilterPanelOpen = true; // 筛选面板是否展开
const hiddenPerCard = new Map();
const visibleOverride = new Map();
let searchQuery = '';
let isRandomMode = false;
let randomQueue = [];
let randomPtr = 0;
let currentRandom = null;
let randomReveal = false;

// 主题色（按需求指定 HEX）
function getTheme(cat) {
    if (cat === '动作') return { 
        hex: '#FFA7B9', // 粉
        tabActive: 'bg-pink-500 text-white'
    };
    if (cat === '情绪') return { 
        hex: '#A59BC8', // 紫
        tabActive: 'bg-purple-500 text-white'
    };
    if (cat === '环境') return { 
        hex: '#A1C1A1', // 绿
        tabActive: 'bg-green-500 text-white'
    };
    if (cat === '升华') return { 
        hex: '#66A8C8', // 蓝
        tabActive: 'bg-blue-500 text-white'
    };
    return { hex: '#FFA7B9', tabActive: 'bg-pink-500 text-white' };
}

function themeComputed(cat) {
    const t = getTheme(cat);
    const hex = t.hex;
    // 近似的浅背景与胶带条纹
    const rgbaLight = hex === '#FFA7B9' ? 'rgba(255,167,185,0.10)'
                  : hex === '#A59BC8' ? 'rgba(165,155,200,0.10)'
                  : hex === '#A1C1A1' ? 'rgba(161,193,161,0.10)'
                  : hex === '#66A8C8' ? 'rgba(102,168,200,0.10)'
                  : 'rgba(255,167,185,0.10)';
    const rgbaStrong = hex === '#FFA7B9' ? 'rgba(255,167,185,0.18)'
                   : hex === '#A59BC8' ? 'rgba(165,155,200,0.18)'
                   : hex === '#A1C1A1' ? 'rgba(161,193,161,0.18)'
                   : hex === '#66A8C8' ? 'rgba(102,168,200,0.18)'
                   : 'rgba(255,167,185,0.18)';
    return { hex, rgbaLight, rgbaStrong, tabActive: t.tabActive };
}

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function highlightText(text, query) {
    if (!query || !query.trim()) return text;
    const re = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(re, '<mark class="bg-pink-200 text-pink-700 rounded px-0.5">$1</mark>');
}

// DOM 元素引用
const categoryTabsContainer = document.getElementById('categoryTabs');
const tagListContainer = document.getElementById('tagList');
const contentGrid = document.getElementById('contentGrid');
const filterPanel = document.getElementById('filterPanel');
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const eyeIcon = document.getElementById('eyeIcon');
const emptyState = document.getElementById('emptyState');

// 初始化
function init() {
    renderCategories();
    renderTags();
    renderCards();
    setupEventListeners();
}

// 渲染分类标签
function renderCategories() {
    categoryTabsContainer.innerHTML = '';
    learningData.forEach(data => {
        const btn = document.createElement('button');
        const isActive = (!isRandomMode) && (data.category === currentCategory);
        const theme = themeComputed(data.category);
        const emoji = data.category === '动作' ? '🏃 ' 
                     : data.category === '情绪' ? '💖 '
                     : data.category === '环境' ? '🌿 '
                     : data.category === '升华' ? '✨ ' : '📘';
        
        const baseClasses = "px-6 py-2 rounded-lg text-base font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 hover:scale-105 hover:shadow";
        const activeClasses = `${theme.tabActive} shadow-md transform scale-105`;
        const inactiveClasses = "text-gray-600 bg-white border border-gray-200 hover:bg-gray-100 hover:text-pink-500";
        
        btn.className = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
        btn.textContent = `${emoji} ${data.category}`;
        
        btn.onclick = () => {
            isRandomMode = false;
            currentCategory = data.category;
            activeTags = []; // 切换分类时重置标签筛选
            // 切换分类时清空搜索
            const si = document.getElementById('searchInput');
            searchQuery = '';
            if (si) si.value = '';
            renderCategories(); // 重新渲染以更新高亮
            renderTags();
            renderCards();
        };
        
        categoryTabsContainer.appendChild(btn);
    });
}

// 获取当前分类下的所有不重复标签
function getAvailableTags() {
    const categoryData = learningData.find(d => d.category === currentCategory);
    if (!categoryData) return [];
    
    const allTags = new Set();
    categoryData.items.forEach(item => {
        item.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags);
}

// 渲染筛选标签
function renderTags() {
    tagListContainer.innerHTML = '';
    const defs = getSectionDefs(currentCategory);
    const theme = themeComputed(currentCategory);
    defs.forEach(sec => {
        const btn = document.createElement('button');
        const isActive = activeTags.length === 1 && activeTags[0] === sec.key;
        
        const baseClasses = "px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200";
        const activeClasses = "bg-white";
        const inactiveClasses = "bg-white border-gray-200 text-gray-500 hover:border-pink-200 hover:text-pink-500";
        
        btn.className = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
        btn.textContent = sec.label;
        if (isActive) {
            btn.style.borderColor = theme.hex;
            btn.style.backgroundColor = theme.hex;
            btn.style.color = '#fff';
            btn.style.boxShadow = `0 2px 8px ${theme.rgbaStrong}`;
            btn.style.fontWeight = '700';
        } else {
            btn.style.borderColor = theme.hex;
            btn.style.backgroundColor = theme.rgbaLight;
            btn.style.color = theme.hex;
            btn.style.boxShadow = 'none';
            btn.style.fontWeight = '500';
        }
        
        btn.onclick = () => {
            isRandomMode = false;
            if (activeTags.length === 1 && activeTags[0] === sec.key) {
                activeTags = [];
            } else {
                activeTags = [sec.key];
            }
            // 点击标签时清空搜索
            const si = document.getElementById('searchInput');
            searchQuery = '';
            if (si) si.value = '';
            renderTags();
            renderCards();
        };
        
        tagListContainer.appendChild(btn);
    });
}

// 渲染内容卡片
function renderCards() {
    if (isRandomMode) {
        contentGrid.innerHTML = '';
        if (!currentRandom) {
            ensureRandomQueue();
            pickNextRandom();
        }
        const theme = themeComputed(currentRandom._category);
        const card = document.createElement('div');
        card.className = `paper tape rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden`;
        card.style.backgroundColor = theme.rgbaLight;
        card.style.borderColor = theme.hex;
        card.style.setProperty('--tape-strong', theme.rgbaStrong);
        card.style.setProperty('--tape-light', theme.rgbaLight);
        const eyeStroke = '#ec4899';
        const eyeSvg = (!randomReveal)
            ? `<span class="text-xl">🙈</span>`
            : `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="${eyeStroke}" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              `;
        const englishClass = randomReveal ? "opacity-100" : "opacity-0 select-none blur-sm";
        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3 flex-wrap">
                    <span class="heheer-logo">H</span>
                    <h3 class="text-base font-bold text-gray-800">${currentRandom.chinese}</h3>
                    <div class="flex gap-1 flex-wrap">
                        ${currentRandom.tags.map(tag => `<span class="text-[11px] px-2 py-1 rounded-full border" style="background:${theme.rgbaLight};border-color:${theme.hex};color:${theme.hex}">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="toggle-single text-gray-500 hover:text-pink-600 transition-colors" title="隐藏/显示该句子">
                        ${eyeSvg}
                    </button>
                </div>
            </div>
            <div class="relative min-h-[3rem] flex items-center rounded-lg p-3 transition-all duration-300">
                <p class="text-gray-700 font-medium italic w-full transition-all duration-300 ${englishClass} english-text">
                    ${currentRandom.english}
                </p>
                ${(!randomReveal) ? `
                    <div class="absolute inset-0 flex items-center justify-center cursor-pointer reveal-overlay">
                        <span class="text-xs text-pink-400 font-medium">点击查看</span>
                    </div>
                ` : ''}
            </div>
        `;
        const logo = card.querySelector('.heheer-logo');
        if (logo) {
            logo.style.backgroundColor = theme.rgbaLight;
            logo.style.color = theme.hex;
        }
        const toggleBtn = card.querySelector('.toggle-single');
        toggleBtn.onclick = () => {
            randomReveal = !randomReveal;
            renderCards();
        };
        if (!randomReveal) {
            const overlay = card.querySelector('.reveal-overlay');
            if (overlay) {
                overlay.onclick = () => {
                    randomReveal = true;
                    renderCards();
                };
            }
        }
        contentGrid.appendChild(card);
        const nextWrap = document.createElement('div');
        nextWrap.className = 'mt-3 flex justify-end';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm';
        nextBtn.textContent = '换一句';
        nextBtn.onclick = () => { pickNextRandom(); renderCards(); };
        nextWrap.appendChild(nextBtn);
        contentGrid.appendChild(nextWrap);
        emptyState.classList.add('hidden');
        return;
    }
    contentGrid.innerHTML = '';
    const normalizedQuery = (searchQuery || '').trim().toLowerCase();
    let totalVisible = 0;
    // 如果有搜索词，遍历所有分类进行全局搜索
    if (normalizedQuery) {
        learningData.forEach(catData => {
            const defs = getSectionDefs(catData.category);
            const groups = groupBySection(catData.items, defs);
                const theme = themeComputed(catData.category);
            defs.forEach((sec, idx) => {
                const items = groups[sec.key] || [];
                if (items.length === 0) return;
                const itemsFilteredBySearch = items.filter(it => (
                    it.english.toLowerCase().includes(normalizedQuery) || it.chinese.toLowerCase().includes(normalizedQuery)
                ));
                if (itemsFilteredBySearch.length === 0) return;
                totalVisible += itemsFilteredBySearch.length;
                const section = document.createElement('div');
                section.className = "space-y-4 mb-8";
                    const header = document.createElement('div');
                    header.className = `section-title`;
                header.textContent = `${catData.category} · ${sec.label}`;
                    header.style.color = theme.hex;
                section.appendChild(header);
                let idxCounter = 0;
                itemsFilteredBySearch.forEach(item => {
                    const card = document.createElement('div');
                    const tiltClass = idxCounter % 3 === 0 ? "tilt-1" : (idxCounter % 3 === 1 ? "tilt-2" : "");
                        card.className = `paper tape rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden ${tiltClass}`;
                        card.style.backgroundColor = theme.rgbaLight;
                        card.style.borderColor = theme.hex;
                        card.style.setProperty('--tape-strong', theme.rgbaStrong);
                        card.style.setProperty('--tape-light', theme.rgbaLight);
                    idxCounter++;
                    const key = item.english;
                    const perHidden = hiddenPerCard.get(key) === true;
                    const showEnglish = (isEnglishVisible && !perHidden) || (!isEnglishVisible && (visibleOverride.get(key) === true));
                    const englishClass = showEnglish ? "opacity-100" : "opacity-0 select-none blur-sm";
                        const eyeStroke = perHidden && isEnglishVisible ? '#9ca3af' : '#ec4899';
                        const eyeSvg = (!isEnglishVisible && !(visibleOverride.get(key) === true)) 
                            ? `<span class="text-xl">🙈</span>`
                            : `
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="${eyeStroke}" stroke-width="2" viewBox="0 0 24 24">
                                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              `;
                    card.innerHTML = `
                        <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3 flex-wrap">
                                    <span class="heheer-logo">H</span>
                                <h3 class="text-base font-bold text-gray-800">${highlightText(item.chinese, searchQuery)}</h3>
                                <div class="flex gap-1 flex-wrap">
                                    ${item.tags.map(tag => `<span class="text-[11px] px-2 py-1 rounded-full border" style="background:${theme.rgbaLight};border-color:${theme.hex};color:${theme.hex}">${tag}</span>`).join('')}
                                </div>
                            </div>
                            <div class="flex items-center">
                                <button class="toggle-single text-gray-500 hover:text-pink-600 transition-colors" title="隐藏/显示该句子">
                                    ${eyeSvg}
                                </button>
                            </div>
                        </div>
                        <div class="relative min-h-[3rem] flex items-center rounded-lg p-3 transition-all duration-300">
                            <p class="text-gray-700 font-medium italic w-full transition-all duration-300 ${englishClass} english-text">
                                ${highlightText(item.english, searchQuery)}
                            </p>
                            ${(!showEnglish) ? `
                                <div class="absolute inset-0 flex items-center justify-center cursor-pointer reveal-overlay">
                                    <span class="text-xs text-pink-400 font-medium">点击查看</span>
                                </div>
                            ` : ''}
                        </div>
                    `;
                        const logo = card.querySelector('.heheer-logo');
                        if (logo) {
                            logo.style.backgroundColor = theme.rgbaLight;
                            logo.style.color = theme.hex;
                        }
                    const toggleBtn = card.querySelector('.toggle-single');
                    toggleBtn.onclick = () => {
                        if (!isEnglishVisible) {
                            const cur = visibleOverride.get(key) === true;
                            visibleOverride.set(key, !cur);
                        } else {
                            const current = hiddenPerCard.get(key) === true;
                            hiddenPerCard.set(key, !current);
                        }
                        renderCards();
                    };
                    if (!showEnglish) {
                        const overlay = card.querySelector('.reveal-overlay');
                        if (overlay) {
                            overlay.onclick = () => {
                                if (!isEnglishVisible) {
                                    visibleOverride.set(key, true);
                                    renderCards();
                                } else {
                                    hiddenPerCard.set(key, false);
                                    renderCards();
                                }
                            };
                        }
                    }
                    section.appendChild(card);
                });
                contentGrid.appendChild(section);
            });
        });
        if (totalVisible === 0) {
            contentGrid.classList.add('hidden');
            emptyState.classList.remove('hidden');
        } else {
            contentGrid.classList.remove('hidden');
            emptyState.classList.add('hidden');
        }
        return;
    }
    // 无搜索词时，仅渲染当前分类并应用标签筛选
    const categoryData = learningData.find(d => d.category === currentCategory);
    if (!categoryData) return;
    const defs = getSectionDefs(currentCategory);
    const groups = groupBySection(categoryData.items, defs);
    const theme = themeComputed(currentCategory);
    totalVisible = 0;
    defs.forEach((sec, idx) => {
        const sectionSelected = (activeTags.length === 0) || activeTags.includes(sec.key);
        if (!sectionSelected) return;
        const items = groups[sec.key] || [];
        if (items.length === 0) return;
        totalVisible += items.length;
        const section = document.createElement('div');
        section.className = "space-y-4 mb-8";
        const header = document.createElement('div');
        header.className = `section-title`;
        header.textContent = sec.label;
        header.style.color = theme.hex;
        section.appendChild(header);
        let idxCounter = 0;
        items.forEach(item => {
            const card = document.createElement('div');
            const tiltClass = idxCounter % 3 === 0 ? "tilt-1" : (idxCounter % 3 === 1 ? "tilt-2" : "");
            card.className = `paper tape rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden ${tiltClass}`;
            card.style.backgroundColor = theme.rgbaLight;
            card.style.borderColor = theme.hex;
            card.style.setProperty('--tape-strong', theme.rgbaStrong);
            card.style.setProperty('--tape-light', theme.rgbaLight);
            idxCounter++;
            const key = item.english;
            const perHidden = hiddenPerCard.get(key) === true;
            const showEnglish = (isEnglishVisible && !perHidden) || (!isEnglishVisible && (visibleOverride.get(key) === true));
            const englishClass = showEnglish ? "opacity-100" : "opacity-0 select-none blur-sm";
            const eyeStroke = perHidden && isEnglishVisible ? '#9ca3af' : '#ec4899';
            const eyeSvg = (!isEnglishVisible && !(visibleOverride.get(key) === true)) 
                ? `<span class="text-xl">🙈</span>`
                : `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="${eyeStroke}" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                `;
            card.innerHTML = `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="heheer-logo">H</span>
                        <h3 class="text-base font-bold text-gray-800">${item.chinese}</h3>
                        <div class="flex gap-1 flex-wrap">
                            ${item.tags.map(tag => `<span class="text-[11px] px-2 py-1 rounded-full border" style="background:${theme.rgbaLight};border-color:${theme.hex};color:${theme.hex}">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button class="toggle-single text-gray-500 hover:text-pink-600 transition-colors" title="隐藏/显示该句子">
                            ${eyeSvg}
                        </button>
                    </div>
                </div>
                <div class="relative min-h-[3rem] flex items-center rounded-lg p-3 transition-all duration-300">
                    <p class="text-gray-700 font-medium italic w-full transition-all duration-300 ${englishClass} english-text">
                        ${item.english}
                    </p>
                    ${(!showEnglish) ? `
                        <div class="absolute inset-0 flex items-center justify-center cursor-pointer reveal-overlay">
                            <span class="text-xs text-pink-400 font-medium">点击查看</span>
                        </div>
                    ` : ''}
                </div>
            `;
            const logo = card.querySelector('.heheer-logo');
            if (logo) {
                logo.style.backgroundColor = theme.rgbaLight;
                logo.style.color = theme.hex;
            }
            const toggleBtn = card.querySelector('.toggle-single');
            toggleBtn.onclick = () => {
                if (!isEnglishVisible) {
                    const cur = visibleOverride.get(key) === true;
                    visibleOverride.set(key, !cur);
                } else {
                    const current = hiddenPerCard.get(key) === true;
                    hiddenPerCard.set(key, !current);
                }
                renderCards();
            };
            if (!showEnglish) {
                const overlay = card.querySelector('.reveal-overlay');
                if (overlay) {
                    overlay.onclick = () => {
                        if (!isEnglishVisible) {
                            visibleOverride.set(key, true);
                            renderCards();
                        } else {
                            hiddenPerCard.set(key, false);
                            renderCards();
                        }
                    };
                }
            }
            section.appendChild(card);
        });
        contentGrid.appendChild(section);
    });
    if (totalVisible === 0) {
        contentGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        contentGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');
    }
}

// 设置事件监听
function setupEventListeners() {
    // 背诵模式开关
    toggleVisibilityBtn.onclick = () => {
        if (isRandomMode) {
            isRandomMode = false;
            randomReveal = false;
        }
        isEnglishVisible = !isEnglishVisible;
        if (isEnglishVisible) {
            hiddenPerCard.clear();
            visibleOverride.clear();
        } else {
            hiddenPerCard.clear();
            visibleOverride.clear();
        }
        renderCategories();
        renderCards();
        
        if (isEnglishVisible) {
            eyeIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#ec4899" stroke-width="2" viewBox="0 0 24 24">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            `;
            toggleVisibilityBtn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        } else {
            eyeIcon.innerHTML = `<span class="text-xl">🙈</span>`;
            toggleVisibilityBtn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
        }
    };
    const randomBtn = document.getElementById('randomModeBtn');
    if (randomBtn) {
        randomBtn.onclick = () => {
            isRandomMode = true;
            // 清空搜索与标签效果，保证随机模式可见
            activeTags = [];
            const si = document.getElementById('searchInput');
            searchQuery = '';
            if (si) si.value = '';
            initRandomQueue();
            pickNextRandom();
            renderCategories();
            renderCards();
        };
    }
}

// 启动
init();
// URL 参数自动进入随机模式
(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('random') === '1') {
        isRandomMode = true;
        initRandomQueue();
        pickNextRandom();
        renderCategories();
        renderCards();
    }
})();
function flattenAll() {
    const arr = [];
    learningData.forEach(cat => {
        cat.items.forEach(it => {
            arr.push(Object.assign({_category: cat.category}, it));
        });
    });
    return arr;
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
}
function initRandomQueue() {
    randomQueue = shuffle(flattenAll());
    randomPtr = 0;
}
function ensureRandomQueue() {
    if (!randomQueue || randomQueue.length === 0) initRandomQueue();
    if (randomPtr >= randomQueue.length) initRandomQueue();
}
function pickNextRandom() {
    ensureRandomQueue();
    currentRandom = randomQueue[randomPtr++];
    randomReveal = false;
}

function getSectionDefs(cat) {
    if (cat === '动作') {
        return [
            {key:'脑', label:'脑（回忆、顿悟、思绪）', tags:['脑','回忆','顿悟','思绪']},
            {key:'脸', label:'脸（表情、脸色）', tags:['脸','表情','脸色']},
            {key:'眼', label:'眼（看、瞄）', tags:['眼','眉毛']},
            {key:'耳朵', label:'耳朵（听）', tags:['耳朵']},
            {key:'嘴', label:'嘴（讲话、嘴唇、牙齿）', tags:['嘴','嘴唇','牙齿','询问','微笑','倾诉','纠结']},
            {key:'手', label:'手（拥抱、推、摸）', tags:['手','手指','拥抱','抚摸','举手','推门','捂嘴']},
            {key:'心', label:'心（跳动）', tags:['心跳']},
            {key:'脚', label:'脚（跑、走、冲、停）', tags:['走','冲','脚步','下床','前进']},
        ];
    }
    if (cat === '情绪') {
        return [
            {key:'开心', label:'开心、激动', tags:['开心','激动','狂喜','笑','兴奋']},
            {key:'难过', label:'难过', tags:['难过','泪水','泪痕','哭泣']},
            {key:'紧张', label:'紧张、不安', tags:['紧张','不安']},
            {key:'绝望', label:'绝望、害怕、痛苦', tags:['绝望','恐惧','痛苦','害怕']},
            {key:'烦躁', label:'烦躁', tags:['烦躁','不耐烦']},
            {key:'惊讶', label:'惊讶', tags:['惊讶','不可思议','震惊','确认','深呼吸']},
            {key:'愧疚', label:'愧疚', tags:['愧疚','后悔','羞愧']},
            {key:'勇敢', label:'勇敢', tags:['勇气']},
            {key:'孤单', label:'孤单', tags:['孤单','被排除']},
            {key:'生气', label:'生气', tags:['愤怒','怒火','怒视','发抖','瞪','克制','刺痛']},
            {key:'情绪变化', label:'情绪变化', tags:['变化','消失','希望','失望','犹豫','目光']},
        ];
    }
    if (cat === '环境') {
        return [
            {key:'美好', label:'美好（烘托积极氛围）', tags:['阳光','风','微风','花','香气','星空','彩虹','掌声','雪','兔子','河流','景色']},
            {key:'恶劣', label:'恶劣（烘托消极、紧张氛围）', tags:['暴雨','狂风','寒风','乌云','迷雾','寒气','寂静','黑暗','紧张','绝望']},
        ];
    }
    if (cat === '升华') {
        return [
            {key:'他人的爱', label:'他人的爱（亲情、友情、师生情...）', tags:['爱','友谊','师生','家','善意','奉献']},
            {key:'自我成长', label:'自我的成长（梦想、挑战、改变、相信...）', tags:['成长','挑战','梦想','潜力','智慧','经验','自我','信念']},
        ];
    }
    return [{key:'其它', label:'其它', tags:[]}];
}

function groupBySection(items, defs) {
    const res = {};
    defs.forEach(d => res[d.key] = []);
    items.forEach(item => {
        let placed = false;
        for (const d of defs) {
            if (d.tags.length === 0) continue;
            if (item.tags.some(t => d.tags.includes(t))) {
                res[d.key].push(item);
                placed = true;
                break;
            }
        }
        if (!placed) {
            const other = defs.find(d => d.key === '其它');
            if (other) {
                if (!res[other.key]) res[other.key] = [];
                res[other.key].push(item);
            }
        }
    });
    return res;
}

// 搜索输入监听
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value || '';
        renderCards();
    });
}
