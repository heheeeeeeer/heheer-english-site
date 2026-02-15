const learningData = [
  {
    category: "动作",
    items: [
      {
        english: "He lowered his head in shame.",
        chinese: "羞愧低头",
        tags: ["脑袋", "羞愧"],
        image: "head_down"
      },
      {
        english: "Her eyes sparkled with joy.",
        chinese: "眼泛喜悦",
        tags: ["眼睛", "喜悦"],
        image: "sparkling_eyes"
      },
      {
        english: "He clenched his fists tightly.",
        chinese: "握紧拳头",
        tags: ["手", "愤怒", "决心"],
        image: "clenched_fists"
      },
      {
        english: "Warm memories / reminiscences of those bygone days flooded into her nervous mind.",
        chinese: "回忆涌入",
        tags: ["脑", "回忆", "想象"],
        image: "memories"
      },
      {
        english: "Scene after scene came vividly in my mind.",
        chinese: "场景浮现",
        tags: ["脑", "场景"],
        image: "scenes"
      },
      {
        english: "Sinking into a trance with my eyes downcast.",
        chinese: "陷入恍惚",
        tags: ["脑", "恍惚", "低垂"],
        image: "trance"
      },
      {
        english: "He was totally intoxicated in the aromatic fragrance and the rosy illusions of mom's radiant smile when she received the rose.",
        chinese: "美好幻想",
        tags: ["脑", "幻想"],
        image: "illusion"
      },
      {
        english: "She tried to hide her tears, but her trembling lip betrayed the sadness etched on her face.",
        chinese: "难掩悲伤",
        tags: ["脸", "悲伤"],
        image: "sad_face"
      },
      {
        english: "Her weather-beaten face and blood-drained cheeks registered deathly gloom and dismay.",
        chinese: "面色苍白",
        tags: ["脸", "苍白"],
        image: "pale_face"
      },
      {
        english: "The man's face was pallid, revealing deep exhaustion and worry.",
        chinese: "脸色惨白",
        tags: ["脸", "苍白", "疲惫"],
        image: "pallid_face"
      },
      {
        english: "The child's face beamed with innocence, free from any worry.",
        chinese: "天真无邪",
        tags: ["脸", "天真"],
        image: "innocent_face"
      },
      {
        english: "Catching sight of the unrestrained smile on her face, he felt a rush of happiness flooding his heart.",
        chinese: "见笑心喜",
        tags: ["眼", "笑容", "开心"],
        image: "smile_sight"
      },
      {
        english: "Take a quick peek inside.",
        chinese: "迅速偷瞄",
        tags: ["眼", "偷瞄"],
        image: "peek"
      },
      {
        english: "He gazed at her with emotional eyes reflecting profound gratitude.",
        chinese: "深情凝视",
        tags: ["眼", "凝视", "感激"],
        image: "gaze"
      },
      {
        english: "Her eyes downcast, she knew her fault was not to be tolerated and attempted to shrink back.",
        chinese: "垂眼退缩",
        tags: ["眼", "低垂", "退缩"],
        image: "downcast_eyes"
      },
      {
        english: "Her eyebrows knitted into a straight line as she glared at him.",
        chinese: "眉头紧锁",
        tags: ["眉毛", "怒视"],
        image: "straight_eyebrows"
      },
      {
        english: "His ears strained to catch every word of the distant conversation, eager for information.",
        chinese: "竖耳倾听",
        tags: ["耳朵", "倾听"],
        image: "listen"
      },
      {
        english: "His ears perked up at the sound of her laughter, bringing a smile to his face.",
        chinese: "闻笑展颜",
        tags: ["耳朵", "笑声"],
        image: "laughter"
      },
      {
        english: "The soothing melody reached his ears, calming his racing thoughts.",
        chinese: "旋律入耳",
        tags: ["耳朵", "旋律", "平静"],
        image: "melody"
      },
      {
        english: "Suddenly, a faint sound flew into his ear, sending shivers down his spine.",
        chinese: "闻声战栗",
        tags: ["耳朵", "恐惧"],
        image: "sound_flew"
      },
      {
        english: "She explained in a most humble and feeble voice, obviously on the verge of shedding tears.",
        chinese: "卑微解释",
        tags: ["嘴", "讲话", "谦卑"],
        image: "humble_voice"
      },
      {
        english: "His lips curled into a sneer.",
        chinese: "嘴角讥笑",
        tags: ["嘴唇", "讥笑"],
        image: "sneer"
      },
      {
        english: "Teeth clenched and lip bitten, he felt nothing but a suffocating pain.",
        chinese: "咬紧牙关",
        tags: ["牙齿", "痛苦"],
        image: "clenched_teeth"
      },
      {
        english: "Like a volcano erupting, I snarled...",
        chinese: "愤怒咆哮",
        tags: ["愤怒", "咆哮"],
        image: "snarl"
      },
      {
        english: "He timidly asked in an inquiring voice, \"Is this for me?\"",
        chinese: "谨慎询问",
        tags: ["询问", "谨慎"],
        image: "ask"
      },
      {
        english: "I squeezed out a smile, attempting to conceal my nervousness.",
        chinese: "强颜欢笑",
        tags: ["微笑", "紧张"],
        image: "squeezed_smile"
      },
      {
        english: "After pouring out the words, I felt that there were no more butterflies in my stomach.",
        chinese: "倾诉释然",
        tags: ["倾诉", "释然"],
        image: "pour_words"
      },
      {
        english: "Weighing what to say to plead for mom's forgiveness and show her gratitude.",
        chinese: "斟酌言辞",
        tags: ["纠结", "感恩"],
        image: "weigh_words"
      },
      {
        english: "She wrapped her soft arms around him.",
        chinese: "温柔拥抱",
        tags: ["手", "拥抱"],
        image: "hug"
      },
      {
        english: "Stroking his ruffled bronze hair, she gently whispered...",
        chinese: "抚摸头发",
        tags: ["手", "抚摸"],
        image: "stroke_hair"
      },
      {
        english: "His finger stabbed at the bottom of the flashlight.",
        chinese: "猛戳手电",
        tags: ["手指", "动作"],
        image: "finger_press"
      },
      {
        english: "With a pounding heart, she raised her hand timidly towards the door before guilt got better hold of her.",
        chinese: "胆怯举手",
        tags: ["举手", "胆怯", "愧疚"],
        image: "raise_hand"
      },
      {
        english: "She summoned all her strength and hesitantly pushed the unlocked door, poking her head to sneak a quick peek inside.",
        chinese: "犹豫推门",
        tags: ["推门", "犹豫", "偷看"],
        image: "push_door"
      },
      {
        english: "I crossed my sweating hands on my lap, praying in the depths of my heart.",
        chinese: "交握祈祷",
        tags: ["手", "紧张", "祈祷"],
        image: "sweaty_hands"
      },
      {
        english: "He clamped his hand over Jack's mouth.",
        chinese: "捂住嘴巴",
        tags: ["捂嘴"],
        image: "cover_mouth"
      },
      {
        english: "Heart pumping frantically...",
        chinese: "心脏狂跳",
        tags: ["心跳", "紧张"],
        image: "heart_pump"
      },
      {
        english: "Everything is still, except my wildly pounding heart.",
        chinese: "唯闻心跳",
        tags: ["心跳", "寂静"],
        image: "pounding_heart"
      },
      {
        english: "Upon arrival, I made a dash for the wastebasket, stooped down and fumbled for something desperately.",
        chinese: "急冲翻找",
        tags: ["冲", "急切"],
        image: "dash"
      },
      {
        english: "Rushing out of the car, striding upstairs and darting into my office, I kneeled down in front of the wastebasket and fumbled inside with my trembling fingers.",
        chinese: "狂奔翻找",
        tags: ["冲", "冲刺"],
        image: "sprint"
      },
      {
        english: "Hardly had he made up his mind when he bounced off his bed, put on a winter coat and darted to the gift shop despite the bone-chilling temperature.",
        chinese: "下床奔去",
        tags: ["冲", "下床"],
        image: "bounce_bed"
      },
      {
        english: "Barely constraining his inner excitement, he grasped the gifts, lengthened his stride and knocked at the door.",
        chinese: "大步流星",
        tags: ["走", "大步", "兴奋"],
        image: "stride"
      },
      {
        english: "She drew back nastily, nailed to the spot and immersed in deep meditation.",
        chinese: "后退沉思",
        tags: ["后退", "停住", "沉思"],
        image: "step_back"
      },
      {
        english: "I avoided her gaze, went inside and slammed the door.",
        chinese: "进屋摔门",
        tags: ["走", "摔门", "回避"],
        image: "go_inside"
      },
      {
        english: "As the door swung open, out came a little figure, whose gaze landed upon the shiny gift package.",
        chinese: "开门而出",
        tags: ["走", "出门"],
        image: "go_out"
      },
      {
        english: "His footsteps sounded like the thunder which severely tortured my conscience.",
        chinese: "脚步如雷",
        tags: ["脚步", "雷声", "内疚"],
        image: "thunder_steps"
      },
      {
        english: "Desire for survival forced her to forge ahead.",
        chinese: "奋勇前进",
        tags: ["前进", "生存"],
        image: "forge_ahead"
      },
      {
        english: "I couldn't restrain my impulse to dash toward it.",
        chinese: "冲动奔去",
        tags: ["冲动", "冲"],
        image: "impulse_dash"
      },
      {
        english: "My ears were ringing with the deafening applause.",
        chinese: "掌声震耳",
        tags: ["耳朵", "掌声", "震耳"],
        image: "ears_ringing"
      },
      {
        english: "The shrill ringing of the bell jerked my mind back to reality.",
        chinese: "拉回现实",
        tags: ["脑", "思绪", "现实"],
        image: "mind_back_reality"
      },
      {
        english: "Suddenly, an idea flashed across my mind like a lightning bolt in the dark night.",
        chinese: "灵光乍现",
        tags: ["脑", "顿悟", "灵光"],
        image: "idea_flash"
      },
      {
        english: "My mind went blank, and panic began to set in.",
        chinese: "大脑空白",
        tags: ["脑", "空白", "慌张"],
        image: "mind_blank"
      },
      {
        english: "Conflicting thoughts were wrestling in his mind.",
        chinese: "思绪纷乱",
        tags: ["脑", "思绪", "冲突"],
        image: "conflicting_thoughts"
      },
      {
        english: "Her mother’s warning echoed in her ears, reminding her of the potential danger.",
        chinese: "警告回响",
        tags: ["脑", "回忆", "警告"],
        image: "warning_echo"
      },
      {
        english: "Crimson crept up her neck and flooded her cheeks.",
        chinese: "满脸通红",
        tags: ["脸", "羞愧", "害羞"],
        image: "crimson_cheeks"
      },
      {
        english: "Her face lit up with a radiant smile, sweeping away the previous gloom.",
        chinese: "容光焕发",
        tags: ["脸", "表情", "开心"],
        image: "radiant_smile"
      },
      {
        english: "His smile froze on his face when he heard the bad news.",
        chinese: "笑容凝固",
        tags: ["脸", "表情", "僵硬"],
        image: "frozen_smile"
      },
      {
        english: "She cast a glance at the clock ticking on the wall.",
        chinese: "迅速一瞥",
        tags: ["脸", "表情", "一瞥"],
        image: "quick_glance"
      },
      {
        english: "Their eyes met, and a silent understanding passed between them.",
        chinese: "心领神会",
        tags: ["脸", "表情", "眼神"],
        image: "eyes_met"
      },
      {
        english: "A piercing scream tore through the silence.",
        chinese: "尖叫划破",
        tags: ["耳朵", "刺耳", "尖叫"],
        image: "piercing_scream"
      }
    ]
  },
  {
    category: "情绪",
    items: [
      {
        english: "A wave of sadness washed over him.",
        chinese: "悲伤袭来",
        tags: ["悲伤", "描写"],
        image: "sadness_wave"
      },
      {
        english: "She was bursting with excitement.",
        chinese: "激动不已",
        tags: ["激动", "开心"],
        image: "excitement"
      },
      {
        english: "Overwhelmed by the exceeding astonishment and bubbling ecstasy, I carefully opened the bag with expectation.",
        chinese: "惊喜交加",
        tags: ["开心", "激动", "期待"],
        image: "bubbling_ecstasy"
      },
      {
        english: "Never had I been so craving to see sth.",
        chinese: "极度渴望",
        tags: ["期待", "渴望"],
        image: "craving"
      },
      {
        english: "Barely constraining his inner excitement, he grasped the gifts, lengthened his stride and knocked at the door.",
        chinese: "难掩兴奋",
        tags: ["激动", "兴奋"],
        image: "inner_excited"
      },
      {
        english: "So inspiring was the message that he grinned with delight, propped himself up and jumped out of the bed.",
        chinese: "咧嘴欢笑",
        tags: ["笑", "开心"],
        image: "grin"
      },
      {
        english: "She couldn't restrain her ecstasy and let out a high-pitched scream.",
        chinese: "狂喜尖叫",
        tags: ["狂喜", "尖叫"],
        image: "ecstasy"
      },
      {
        english: "He gazed at her with emotional eyes reflecting profound gratitude.",
        chinese: "感激凝视",
        tags: ["凝视", "感激"],
        image: "gaze_emotion"
      },
      {
        english: "Racing on the endless grassland, I was totally enchanted by the magnificent scenery and immersed in the fragrance in the surroundings.",
        chinese: "沉醉美景",
        tags: ["沉醉", "景色"],
        image: "scenery"
      },
      {
        english: "I let my tears splatter onto the childish handwriting.",
        chinese: "泪落纸上",
        tags: ["泪水", "纸上"],
        image: "tears_paper"
      },
      {
        english: "My tears uncontrollably leaked down and splattered on the wrinkled paper clutched in my trembling fingers.",
        chinese: "泪溅纸上",
        tags: ["泪水", "纸上", "颤抖"],
        image: "tears_splatter"
      },
      {
        english: "She explained in a most humble and feeble voice, obviously on the verge of shedding tears.",
        chinese: "泪眼婆娑",
        tags: ["哭泣", "谦卑"],
        image: "verge_tears"
      },
      {
        english: "His faint voice gradually faded into slight sobs, deeply penetrating my heart like a sharp needle.",
        chinese: "抽泣刺心",
        tags: ["抽泣", "声音"],
        image: "sobs"
      },
      {
        english: "The whole class was enveloped in the sorrowful parting atmosphere.",
        chinese: "离别伤感",
        tags: ["悲伤", "气氛"],
        image: "sorrow_atmosphere"
      },
      {
        english: "He came back on the verge of collapse with a tear-stained face.",
        chinese: "濒临崩溃",
        tags: ["崩溃", "泪痕"],
        image: "collapse"
      },
      {
        english: "Rooted to the ground, I summoned all my strength to crack a fake smile.",
        chinese: "强颜欢笑",
        tags: ["假笑", "伪装"],
        image: "fake_smile"
      },
      {
        english: "Although the whole world was saturated with delight and warmth, I still felt the inner cold rising from the bottom of my heart.",
        chinese: "内心凄凉",
        tags: ["难过", "内心寒冷"],
        image: "inner_cold"
      },
      {
        english: "The time ticked away and tightened the threat in everyone's heart.",
        chinese: "时间紧迫",
        tags: ["紧张", "时间"],
        image: "tightened"
      },
      {
        english: "The slow passage of time intensified everyone's tension, stretching their nerves to the breaking point.",
        chinese: "极度紧张",
        tags: ["紧张", "崩溃"],
        image: "tension_break"
      },
      {
        english: "The terrifying sound brought his uneasiness to the climax.",
        chinese: "不安至极",
        tags: ["不安", "顶点"],
        image: "uneasiness"
      },
      {
        english: "Isolated in the scary darkness, he was thrown into greatest dread.",
        chinese: "深陷恐惧",
        tags: ["绝望", "黑暗", "恐惧"],
        image: "darkness"
      },
      {
        english: "Tentacles of fear closed around his body.",
        chinese: "恐惧缠绕",
        tags: ["恐惧"],
        image: "fear_tentacles"
      },
      {
        english: "Teeth clenched and lip bitten, he felt nothing but a suffocating pain.",
        chinese: "痛苦窒息",
        tags: ["痛苦", "窒息"],
        image: "suffocating_pain"
      },
      {
        english: "Haunted by horror, he closed his eyes and muttered with a lump in his throat \"Don't kill me!\"",
        chinese: "惊恐求饶",
        tags: ["恐惧", "求饶"],
        image: "haunted"
      },
      {
        english: "Panic-stricken, I lost control of the horse and my mind went blank and void.",
        chinese: "惊慌失措",
        tags: ["惊慌", "空白"],
        image: "panic"
      },
      {
        english: "As the temperature dropped gradually, a chill of apprehension rippled through my spine.",
        chinese: "背脊发凉",
        tags: ["寒意", "紧张"],
        image: "chill_spine"
      },
      {
        english: "A gush of suffocating tension came dominating the whole class.",
        chinese: "窒息紧张",
        tags: ["紧张", "窒息"],
        image: "suffocating_tension"
      },
      {
        english: "Tired and hungry, she struggled to her feet, hoping to get something for her suffering stomach.",
        chinese: "饥寒交迫",
        tags: ["痛苦", "挣扎"],
        image: "struggle"
      },
      {
        english: "She felt like she was swallowed by the deepest darkness, and there was no flash of hope.",
        chinese: "黑暗吞噬",
        tags: ["黑暗", "绝望"],
        image: "swallowed_darkness"
      },
      {
        english: "Making the worst assumptions, she trembled in terror.",
        chinese: "恐惧战栗",
        tags: ["恐惧", "设想"],
        image: "worst_assumptions"
      },
      {
        english: "Stuck in the traffic jam, I impatiently drummed my fingers on the steering wheel.",
        chinese: "焦躁敲指",
        tags: ["烦躁", "不耐烦"],
        image: "impatient_fingers"
      },
      {
        english: "When he heard the noise again, his mind went into a turmoil.",
        chinese: "思绪混乱",
        tags: ["混乱", "思绪"],
        image: "turmoil"
      },
      {
        english: "He rubbed his eyes repeatedly in disbelief to ensure it wasn't fantasy.",
        chinese: "难以置信",
        tags: ["惊讶", "揉眼睛"],
        image: "rub_eyes"
      },
      {
        english: "It was so incredible that she rubbed her eyes over and over again to ensure it was true.",
        chinese: "揉眼确认",
        tags: ["惊讶", "确认"],
        image: "confirm_rub_eyes"
      },
      {
        english: "Taking a deep breath in disbelief, he...",
        chinese: "惊讶深呼",
        tags: ["惊讶", "深呼吸"],
        image: "deep_breath"
      },
      {
        english: "Never in her wildest dream could she imagine that her little dream would come true.",
        chinese: "梦寐以求",
        tags: ["不可思议", "梦想"],
        image: "wildest_dream"
      },
      {
        english: "What caught his eyes instantly threw him in utter astonishment.",
        chinese: "惊愕不已",
        tags: ["惊讶", "震惊"],
        image: "utter_astonishment"
      },
      {
        english: "A tinge of regret secretly emerged in my heart.",
        chinese: "悔意滋生",
        tags: ["愧疚", "后悔"],
        image: "tinge_regret"
      },
      {
        english: "Sensing a trace of timidity in her voice, I was seized by the torturous and agonizing guilt.",
        chinese: "愧疚难当",
        tags: ["愧疚", "痛苦"],
        image: "agonizing_guilt"
      },
      {
        english: "His burning face completely betrayed him.",
        chinese: "面红耳赤",
        tags: ["脸红", "羞愧"],
        image: "blush"
      },
      {
        english: "With a pounding heart, she raised her hand timidly towards the door before guilt got better hold of her.",
        chinese: "愧疚胆怯",
        tags: ["愧疚", "胆怯"],
        image: "guilt"
      },
      {
        english: "Overcome by an outburst of sheer regret and shame, I crouched down, nibbled my twisted fingers and burst into tears.",
        chinese: "羞愧蜷缩",
        tags: ["蜷缩", "羞愧", "哭泣"],
        image: "crouch_tears"
      },
      {
        english: "Guilt crept into me, deeper and clearer, burning my heart like a flame.",
        chinese: "内疚灼心",
        tags: ["内疚", "痛苦"],
        image: "guilt_crept"
      },
      {
        english: "He rekindled his courage to face the abyss of the unknown darkness.",
        chinese: "鼓起勇气",
        tags: ["勇气", "黑暗"],
        image: "rekindled_courage"
      },
      {
        english: "It seemed as if I was the only one excluded from the festive delight and the convivial atmosphere.",
        chinese: "格格不入",
        tags: ["孤单", "被排除"],
        image: "excluded"
      },
      {
        english: "Breathing deeply, he struggled to calm the raging storm within, his eyes narrowed in a furious glare.",
        chinese: "怒火中烧",
        tags: ["愤怒", "怒视"],
        image: "furious_glare"
      },
      {
        english: "She trembled with anger, eyes flashing with unrestrained fury.",
        chinese: "怒不可遏",
        tags: ["愤怒", "发抖"],
        image: "tremble_anger"
      },
      {
        english: "Every nerve in her body tingled with indignation.",
        chinese: "义愤填膺",
        tags: ["愤怒", "刺痛"],
        image: "nerve_tingle"
      },
      {
        english: "She shot him a venomous glare, her eyes ablaze with fury.",
        chinese: "恶毒怒视",
        tags: ["愤怒", "瞪"],
        image: "venomous_glare"
      },
      {
        english: "Clenching his teeth, he fought to keep his temper in check.",
        chinese: "咬牙忍耐",
        tags: ["愤怒", "克制"],
        image: "clench_teeth"
      },
      {
        english: "The simmering rage in his eyes was unmistakable, betraying the intensity of his anger.",
        chinese: "怒火中烧",
        tags: ["愤怒", "怒火"],
        image: "simmering_rage"
      },
      {
        english: "Her hesitation gave way to great ecstasy, with thanks repeatedly stammered out of her mouth.",
        chinese: "转忧为喜",
        tags: ["变化", "犹豫", "狂喜"],
        image: "hesitation_ecstasy"
      },
      {
        english: "Suddenly, all his sleepiness and anxiety gave way to wild exhilaration and excitement.",
        chinese: "困倦全消",
        tags: ["困倦", "兴奋"],
        image: "sleepiness_vanish"
      },
      {
        english: "Hesitantly and timidly, he lifted his head and met his mother's caring gaze which dispelled all his unsettlement.",
        chinese: "目光安抚",
        tags: ["不安", "目光", "母亲"],
        image: "gaze_dispel"
      },
      {
        english: "It was when we were about to give up that I noticed a slight but clear sound.",
        chinese: "绝处逢生",
        tags: ["希望", "坚持"],
        image: "hope_before_giveup"
      },
      {
        english: "At this precise moment, the previous disappointment vanished utterly, while exhilaration got better hold of me, bringing tears of pleasant surprise to my eyes.",
        chinese: "悲喜交加",
        tags: ["变化", "失望", "希望"],
        image: "disappointment_excitement"
      },
      {
        english: "My restlessness vanished without a trace.",
        chinese: "烦躁消散",
        tags: ["变化", "消失"],
        image: "restlessness_vanish"
      },
      {
        english: "His anger melted away, replaced by a sudden surge of sympathy.",
        chinese: "怒气全消",
        tags: ["变化", "同情"],
        image: "anger_to_sympathy"
      },
      {
        english: "The sorrow gradually transformed into a determination to change.",
        chinese: "化悲为力",
        tags: ["变化", "悲伤", "力量", "决定"],
        image: "sorrow_to_strength"
      },
      {
        english: "Despair gave way to a glimmer of hope as the rescue team arrived.",
        chinese: "绝望生机",
        tags: ["变化", "希望"],
        image: "despair_to_hope"
      },
      {
        english: "A pang of conscience struck him.",
        chinese: "良心谴责",
        tags: ["愧疚", "良心"],
        image: "pang_conscience"
      },
      {
        english: "He raked his fingers through his hair in exasperation, his patience wearing thin.",
        chinese: "焦躁抓头",
        tags: ["烦躁", "不耐烦"],
        image: "rake_fingers_hair"
      },
      {
        english: "Restless and agitated, she paced the floor like a caged animal.",
        chinese: "焦躁踱步",
        tags: ["烦躁", "不耐烦"],
        image: "pace_floor"
      },
      {
        english: "Letting out a heavy sigh of frustration, he threw the pen onto the desk.",
        chinese: "无奈叹气",
        tags: ["烦躁", "不耐烦"],
        image: "heavy_sigh"
      },
      {
        english: "She squared her shoulders, took a deep breath, and stepped forward to face the crowd.",
        chinese: "挺身而出",
        tags: ["勇气", "勇敢"],
        image: "squared_shoulders"
      },
      {
        english: "\"I did it,\" he admitted, his voice trembling yet firm with newfound bravery.",
        chinese: "颤抖坚定",
        tags: ["勇气", "勇敢"],
        image: "trembling_bravery"
      },
      {
        english: "He felt like a solitary island in a vast ocean of people.",
        chinese: "孤岛般的",
        tags: ["孤单"],
        image: "solitary_island"
      },
      {
        english: "He walked home alone, his long shadow being his only companion under the streetlights.",
        chinese: "形影相吊",
        tags: ["孤单"],
        image: "long_shadow_companion"
      },
      {
        english: "Pressing his face against the window, he gazed longingly at the warm family reunion inside.",
        chinese: "渴望团聚",
        tags: ["孤单", "渴望"],
        image: "longing_reunion"
      }
    ]
  },
  {
    category: "环境",
    items: [
      {
        english: "The sun was setting, painting the sky orange.",
        chinese: "夕阳西下",
        tags: ["天空", "夕阳"],
        image: "sunset"
      },
      {
        english: "A gentle breeze rustled the leaves.",
        chinese: "微风拂叶",
        tags: ["风", "树叶"],
        image: "breeze"
      },
      {
        english: "The breeze carried the delicate fragrance of wildflowers, filling the air with a sweet and intoxicating perfume.",
        chinese: "微风送香",
        tags: ["风", "花", "香气"],
        image: "breeze_flowers"
      },
      {
        english: "As the breeze danced through the meadow, the tall grasses swayed in harmony.",
        chinese: "风吹草低",
        tags: ["微风", "草地"],
        image: "breeze_meadow"
      },
      {
        english: "Sunbeams filtered through the gloomy window, demonstrating that even small gestures can generate a profound blessing.",
        chinese: "阳光穿窗",
        tags: ["阳光", "窗"],
        image: "sunbeam_window"
      },
      {
        english: "After the unparalleled feast of music, an explosion of thunderous applause put this wonderful performance to an end.",
        chinese: "掌声雷动",
        tags: ["掌声", "音乐"],
        image: "applause"
      },
      {
        english: "Snowflakes swirled and danced around them, witnessing the true miracle created by the pure kindness and selfless dedication.",
        chinese: "雪花飞舞",
        tags: ["雪", "舞"],
        image: "snowflakes"
      },
      {
        english: "The aroma caught his attention.",
        chinese: "香气袭人",
        tags: ["花香"],
        image: "aroma"
      },
      {
        english: "It was such an adorable bunny, its fur light grey and fluffy, and its eyes resembling two rubies.",
        chinese: "可爱萌兔",
        tags: ["兔子", "可爱"],
        image: "bunny"
      },
      {
        english: "Meandering and streaming through the meadow, there lay a river, its course winding gracefully.",
        chinese: "蜿蜒河流",
        tags: ["河流", "蜿蜒"],
        image: "meandering_river"
      },
      {
        english: "The ruthless wind was still roaring and sending a chill down his spine.",
        chinese: "寒风刺骨",
        tags: ["寒风", "刺骨"],
        image: "biting_wind"
      },
      {
        english: "The unceasing sound of the pelting rain and the rustling of furious wind cast a flicker of guilt on his heart.",
        chinese: "风雨交加",
        tags: ["暴雨", "狂风"],
        image: "pelting_rain"
      },
      {
        english: "As the temperature dropped gradually, a chill of apprehension rippled through my spine.",
        chinese: "寒意袭人",
        tags: ["寒气", "脊背"],
        image: "chill_spine_env"
      },
      {
        english: "Then fell an unbearable and frightful silence during which a second passed like a year.",
        chinese: "死寂难熬",
        tags: ["寂静", "漫长"],
        image: "silence_long"
      },
      {
        english: "A deathly hush pervaded the air, with endless darkness descending upon us.",
        chinese: "死寂黑暗",
        tags: ["黑暗", "寂静"],
        image: "deathly_hush"
      },
      {
        english: "She felt like she was swallowed by the deepest darkness, and there was no flash of hope.",
        chinese: "黑暗吞噬",
        tags: ["黑暗", "绝望"],
        image: "swallowed_darkness_env"
      },
      {
        english: "The golden sun bathed the room in a warm glow.",
        chinese: "金光洒满",
        tags: ["阳光", "景色"],
        image: "sun_warm_glow"
      },
      {
        english: "Birds were chirping merrily in the trees, and the air was scented with blooming flowers.",
        chinese: "鸟语花香",
        tags: ["花", "香气", "风", "景色"],
        image: "birds_flowers"
      },
      {
        english: "The night sky was studded with twinkling stars, like diamonds on black velvet.",
        chinese: "星空璀璨",
        tags: ["星空", "景色"],
        image: "starry_sky"
      },
      {
        english: "A gentle breeze caressed her face, soothing her restless mind.",
        chinese: "微风轻拂",
        tags: ["微风", "风"],
        image: "gentle_breeze"
      },
      {
        english: "The storm ceased, and a beautiful rainbow arched across the clear blue sky.",
        chinese: "彩虹横空",
        tags: ["彩虹", "景色", "阳光"],
        image: "rainbow_clear"
      },
      {
        english: "The rain was pouring down in sheets, drumming against the windowpane.",
        chinese: "倾盆大雨",
        tags: ["暴雨", "雨"],
        image: "heavy_rain"
      },
      {
        english: "The wind howled like a wounded beast, shaking the old house.",
        chinese: "狂风怒号",
        tags: ["狂风", "风", "寒风"],
        image: "howling_wind"
      },
      {
        english: "Dark clouds gathered overhead, threatening a heavy storm.",
        chinese: "乌云密布",
        tags: ["乌云", "黑暗"],
        image: "dark_clouds"
      },
      {
        english: "A thick fog enveloped the forest, obscuring the path ahead.",
        chinese: "迷雾笼罩",
        tags: ["迷雾", "寂静"],
        image: "thick_fog"
      },
      {
        english: "The atmosphere was suffocating, heavy with tension.",
        chinese: "气氛压抑",
        tags: ["紧张", "寂静", "黑暗"],
        image: "stifling_air"
      }
    ]
  },
  {
    category: "升华",
    items: [
      {
        english: "Perseverance is the key to success.",
        chinese: "坚持即胜",
        tags: ["坚持", "成功"],
        image: "key"
      },
      {
        english: "Sunbeams filtered through the gloomy window, demonstrating that even small gestures can generate a profound blessing, fortifying the roof of love, which shelters every lonely soul.",
        chinese: "爱之微光",
        tags: ["爱", "阳光", "祝福"],
        image: "sunbeam_love"
      },
      {
        english: "What contributed to this educational miracle must be his unconditional love, mutely melting the ice that once swallowed an indifferent heart, and passionately lighting the soul that had been buried in the suffocating solitude.",
        chinese: "爱融冰心",
        tags: ["爱", "改变"],
        image: "love_melt_ice"
      },
      {
        english: "With unconditional love, he shielded me from the potential hardship I may have to endure.",
        chinese: "爱之庇护",
        tags: ["爱", "保护"],
        image: "love_shield"
      },
      {
        english: "Home is not simply a shelter sparing you from gusts of wind and currents of rain, but a harbor for your heart, offering eternal comfort, spiritual nourishment and most importantly, unconditional love.",
        chinese: "家是港湾",
        tags: ["家", "港湾", "爱"],
        image: "home_harbor"
      },
      {
        english: "Snowflakes swirled and danced around them, witnessing the true miracle created by the pure kindness and selfless dedication.",
        chinese: "善意与奉献",
        tags: ["善意", "奉献"],
        image: "kindness_dedication"
      },
      {
        english: "True friendship is a beacon in the darkest nights, guiding us through storms with unwavering light and steadfast support.",
        chinese: "友谊灯塔",
        tags: ["友谊", "灯塔"],
        image: "friendship_beacon"
      },
      {
        english: "The bond between teacher and student is the eternal flame that ignites the torch of knowledge, the guiding hand that leads us towards the brightest horizons of understanding and wisdom.",
        chinese: "师生情谊",
        tags: ["师生", "知识"],
        image: "teacher_student_bond"
      },
      {
        english: "Life is an adventure where only by getting out of our comfort zone can we embrace a marvelous future.",
        chinese: "走出舒适区",
        tags: ["成长", "挑战"],
        image: "comfort_zone"
      },
      {
        english: "You will never explore your internal potential to the fullest until you let go of excessive reliance.",
        chinese: "挖掘潜力",
        tags: ["潜力", "独立"],
        image: "explore_potential"
      },
      {
        english: "After all, nothing is impossible to a willing heart.",
        chinese: "有志竟成",
        tags: ["成长", "愿力", "信念"],
        image: "willing_heart"
      },
      {
        english: "No more fear, no more timidity, she was ready to be the best version of herself, a shining diamond.",
        chinese: "成就自我",
        tags: ["成长", "自我", "勇敢"],
        image: "best_self"
      },
      {
        english: "It dawned on her that birth defects could disable her body, but could never disable her soul from pursuing a dream.",
        chinese: "身残志坚",
        tags: ["梦想", "勇敢", "坚持"],
        image: "chase_dream"
      },
      {
        english: "It was more than an adventure or a narrow escape, but a life lesson for me that there is always wisdom that comes from experience.",
        chinese: "经验生智",
        tags: ["智慧", "经验", "成长"],
        image: "wisdom_experience"
      },
      {
        english: "Sometimes, silence speaks louder than words, conveying love that language cannot express.",
        chinese: "此时无声",
        tags: ["爱", "感动", "沉默"],
        image: "silent_love"
      },
      {
        english: "The bond of family is the anchor that holds us steady in the rough sea of life.",
        chinese: "亲情之锚",
        tags: ["家", "纽带", "稳固"],
        image: "family_bond"
      },
      {
        english: "Mistakes are not failures, but stepping stones to success.",
        chinese: "失败铺路",
        tags: ["成长", "学习", "错误", "成功"],
        image: "mistakes_learning"
      },
      {
        english: "The true victory lies not in defeating others, but in conquering one's own fear.",
        chinese: "自我超越",
        tags: ["勇气", "自我", "超越", "恐惧"],
        image: "self_conquer"
      },
      {
        english: "Love is not merely a soft emotion, but an invincible armor that shields us from the arrows of life.",
        chinese: "爱是铠甲",
        tags: ["爱", "铠甲", "保护"],
        image: "love_armor"
      },
      {
        english: "It is love that bridges the chasm of despair and ignites the torch of hope in the darkest winter.",
        chinese: "爱跨越鸿沟",
        tags: ["爱", "希望", "跨越"],
        image: "love_bridge"
      },
      {
        english: "Where love resides, no obstacle remains invincible.",
        chinese: "爱无不胜",
        tags: ["爱", "哲理"],
        image: "love"
      }
    ]
  }
];

window.learningData = learningData;
