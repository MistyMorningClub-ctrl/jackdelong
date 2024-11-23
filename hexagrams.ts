export interface Hexagram {
  number: number;
  name: string;
  meaning: string;
  interpretation: string;
}

export const hexagrams: Hexagram[] = [
  {
    number: 1,
    name: "Force (乾 Qián)",
    meaning: "Creative power, strength, initiating action.",
    interpretation: "A period of strong energy and creativity. It's time to take initiative and move forward confidently. Success is achieved through perseverance and assertive action."
  },
  {
    number: 2,
    name: "Field (坤 Kūn)",
    meaning: "Receptive, nurturing, the earth.",
    interpretation: "Embrace receptiveness and adaptability. Yield to circumstances when necessary, support others, and cultivate patience. True strength lies in being nurturing and open."
  },
  {
    number: 3,
    name: "Sprouting (屯 Zhūn)",
    meaning: "Difficulty at the beginning, initial challenges.",
    interpretation: "Beginnings can be tough. Face early obstacles with determination and careful planning. Patience and perseverance are essential as new ventures take root."
  },
  {
    number: 4,
    name: "Enveloping (蒙 Méng)",
    meaning: "Youthful folly, inexperience.",
    interpretation: "Seek guidance and wisdom from others. Be humble and open to learning. Avoid impulsive actions due to lack of understanding."
  },
  {
    number: 5,
    name: "Attending (需 Xū)",
    meaning: "Waiting, needing, nourishment.",
    interpretation: "Exercise patience and wait for the right moment to act. Trust in the process and prepare yourself thoroughly during this time of anticipation."
  },
  {
    number: 6,
    name: "Arguing (讼 Sòng)",
    meaning: "Conflict, disputes.",
    interpretation: "Disagreements may arise. Approach conflicts with caution and seek fair resolutions. Open communication can help avoid unnecessary confrontations."
  },
  {
    number: 7,
    name: "Leading (师 Shī)",
    meaning: "The army, collective force.",
    interpretation: "Success comes through discipline and teamwork. Lead with integrity and organize resources effectively. Unity and order bring strength."
  },
  {
    number: 8,
    name: "Grouping (比 Bǐ)",
    meaning: "Holding together, union.",
    interpretation: "Foster trust and solidarity within groups. Emphasize relationships and alliances. Collaboration leads to mutual benefit and success."
  },
  {
    number: 9,
    name: "Small Accumulating (小畜 Xiǎo Chù)",
    meaning: "The taming power of the small, gentle restraint.",
    interpretation: "Focus on small efforts and attention to detail. Exercise restraint and patience. Modest actions can lead to significant progress."
  },
  {
    number: 10,
    name: "Treading (履 Lǚ)",
    meaning: "Conduct, careful steps.",
    interpretation: "Proceed cautiously and be mindful of your actions. Respect social norms and act conscientiously. Correct conduct leads to success."
  },
  {
    number: 11,
    name: "Pervading (泰 Tài)",
    meaning: "Peace, harmony.",
    interpretation: "A time of prosperity and balance. Positive energy flows freely. Enjoy the harmony and continue to promote goodwill."
  },
  {
    number: 12,
    name: "Obstruction (否 Pǐ)",
    meaning: "Standstill, stagnation.",
    interpretation: "Obstacles and stagnation prevail. Communication may break down. Remain patient and avoid forcing issues; this phase will pass."
  },
  {
    number: 13,
    name: "Concording People (同人 Tóng Rén)",
    meaning: "Fellowship, community.",
    interpretation: "Build relationships based on shared ideals. Unity with others leads to success. Embrace openness and collective efforts."
  },
  {
    number: 14,
    name: "Great Possessing (大有 Dà Yǒu)",
    meaning: "Abundance, great resources.",
    interpretation: "Enjoy prosperity and abundance. Use resources wisely and share generously. Great wealth comes with responsibility."
  },
  {
    number: 15,
    name: "Humbling (谦 Qiān)",
    meaning: "Modesty, humility.",
    interpretation: "Adopt a humble attitude. Recognize your strengths and limitations without arrogance. Modesty attracts respect and paves the way forward."
  },
  {
    number: 16,
    name: "Providing-For (豫 Yù)",
    meaning: "Enthusiasm, preparation.",
    interpretation: "Harness enthusiasm to inspire action. Prepare thoroughly and motivate others. Positive energy leads to significant progress."
  },
  {
    number: 17,
    name: "Following (随 Suí)",
    meaning: "Adaptability, compliance.",
    interpretation: "Be adaptable and follow the natural course of events. Align with worthy goals and be flexible to achieve harmony."
  },
  {
    number: 18,
    name: "Correcting (蛊 Gǔ)",
    meaning: "Work on what has been spoiled, decay.",
    interpretation: "Address past neglect or corruption. Take corrective action to heal and restore. Confront issues directly for renewal."
  },
  {
    number: 19,
    name: "Nearing (临 Lín)",
    meaning: "Approach, oversight.",
    interpretation: "A favorable time is approaching. Be benevolent and guide others wisely. Prepare to embrace upcoming opportunities."
  },
  {
    number: 20,
    name: "Viewing (观 Guān)",
    meaning: "Contemplation, observation.",
    interpretation: "Step back to observe your situation. Reflect to gain insight. Mindful contemplation leads to understanding."
  },
  {
    number: 21,
    name: "Gnawing Bite (噬嗑 Shì Kè)",
    meaning: "Biting through, resolving obstacles.",
    interpretation: "Face challenges head-on. Clear obstacles with firm and fair measures. Justice and determination lead to progress."
  },
  {
    number: 22,
    name: "Adorning (贲 Bì)",
    meaning: "Grace, beauty.",
    interpretation: "Appreciate and enhance beauty in life. Superficial changes can uplift spirits, but remember to value substance over style."
  },
  {
    number: 23,
    name: "Stripping (剥 Bō)",
    meaning: "Splitting apart, deterioration.",
    interpretation: "Be aware of decline or disintegration. Maintain integrity and avoid drastic actions. Endure difficulties with patience."
  },
  {
    number: 24,
    name: "Returning (复 Fù)",
    meaning: "Renewal, turning point.",
    interpretation: "A time of renewal is at hand. Embrace change and new beginnings. The cycle turns, bringing opportunities for growth."
  },
  {
    number: 25,
    name: "Without Embroiling (无妄 Wú Wàng)",
    meaning: "Innocence, the unexpected.",
    interpretation: "Act with pure intentions. Avoid deceit and stay true to yourself. Trust your natural instincts and maintain integrity."
  },
  {
    number: 26,
    name: "Great Accumulating (大畜 Dà Chù)",
    meaning: "The taming power of the great, restraint.",
    interpretation: "Harness great potential through self-discipline. Prepare for future action by cultivating inner strength. Patience leads to achievements."
  },
  {
    number: 27,
    name: "Swallowing (颐 Yí)",
    meaning: "Nourishment, sustenance.",
    interpretation: "Pay attention to nourishment of body and spirit. Words and thoughts are as important as physical food. Nurture yourself and others wisely."
  },
  {
    number: 28,
    name: "Great Exceeding (大过 Dà Guò)",
    meaning: "Preponderance of the great, excess.",
    interpretation: "Recognize when things are overextended. Take action to prevent collapse. Balance responsibilities to support your endeavors."
  },
  {
    number: 29,
    name: "Gorge (坎 Kǎn)",
    meaning: "The abysmal water, danger.",
    interpretation: "Challenges and risks are present. Stay resilient and maintain faith. Perseverance is key to navigating difficulties."
  },
  {
    number: 30,
    name: "Radiance (离 Lí)",
    meaning: "The clinging fire, brightness.",
    interpretation: "Seek clarity and enlightenment. Radiate warmth and understanding. Cultivate what brings light and passion into your life."
  },
    {
    number: 31,
    name: "Conjoining (咸 Xián)",
    meaning: "Influence, attraction.",
    interpretation: "Relationships and emotions are highlighted. Be receptive to influences and open to connections. Harmonious interactions bring positive outcomes."
  },
  {
    number: 32,
    name: "Persevering (恒 Héng)",
    meaning: "Duration, constancy.",
    interpretation: "Commit to long-term goals with consistency. Endurance brings success. Stay true to your path despite any challenges."
  },
  {
    number: 33,
    name: "Retiring (遁 Dùn)",
    meaning: "Retreat, withdrawal.",
    interpretation: "It's time to step back from adverse situations. Preserve your strength by withdrawing wisely. Retreat is preparation, not defeat."
  },
  {
    number: 34,
    name: "Great Invigorating (大壮 Dà Zhuàng)",
    meaning: "The power of the great, vigor.",
    interpretation: "You possess immense power. Use it ethically and wisely. Assertiveness leads to achievement when balanced with responsibility."
  },
  {
    number: 35,
    name: "Prospering (晋 Jìn)",
    meaning: "Progress, advancement.",
    interpretation: "Favorable conditions allow for progress. Capitalize on opportunities and be visible. Share your successes with others."
  },
  {
    number: 36,
    name: "Brightening Injury (明夷 Míng Yí)",
    meaning: "Darkening of the light, adversity.",
    interpretation: "Difficult times may require you to conceal your talents. Protect yourself by adapting. Endure hardships with resilience."
  },
  {
    number: 37,
    name: "Dwelling People (家人 Jiā Rén)",
    meaning: "The family, domestic matters.",
    interpretation: "Focus on home and familial relationships. Harmonious family life brings stability. Nurture loved ones and uphold family values."
  },
  {
    number: 38,
    name: "Polarising (睽 Kuí)",
    meaning: "Opposition, divergence.",
    interpretation: "Differences and disagreements may surface. Recognize opposing views and seek common ground. Understanding bridges divides."
  },
  {
    number: 39,
    name: "Limping (蹇 Jiǎn)",
    meaning: "Obstruction, impediment.",
    interpretation: "Obstacles hinder your path. Reflect on alternative strategies and seek help if needed. Challenges offer growth opportunities."
  },
  {
    number: 40,
    name: "Taking-Apart (解 Xiè)",
    meaning: "Deliverance, liberation.",
    interpretation: "Relief from difficulties is near. Resolve tensions and embrace freedom. Move forward without burdens."
  },
  {
    number: 41,
    name: "Diminishing (损 Sǔn)",
    meaning: "Decrease, sacrifice.",
    interpretation: "Letting go of excess leads to gains. Simplify life and focus on essentials. Sacrifices now will benefit you later."
  },
  {
    number: 42,
    name: "Augmenting (益 Yì)",
    meaning: "Increase, enhancement.",
    interpretation: "Fortunate developments are ahead. Share prosperity and support others. Generosity amplifies blessings."
  },
  {
    number: 43,
    name: "Parting (夬 Guài)",
    meaning: "Breakthrough, resoluteness.",
    interpretation: "Time for decisive action. Assert your position clearly. Overcoming obstacles requires firm resolve."
  },
  {
    number: 44,
    name: "Coupling (姤 Gòu)",
    meaning: "Coming to meet, encounters.",
    interpretation: "Unexpected meetings may occur. Be cautious of influences that could disrupt your path. Stay grounded and discerning."
  },
  {
    number: 45,
    name: "Clustering (萃 Cuì)",
    meaning: "Gathering together, massing.",
    interpretation: "Unite people for a common purpose. Collective efforts yield significant results. Foster community and shared goals."
  },
  {
    number: 46,
    name: "Ascending (升 Shēng)",
    meaning: "Pushing upward, advancement.",
    interpretation: "Steady progress leads to elevation. Be diligent and persistent. Consistent efforts reach great heights."
  },
  {
    number: 47,
    name: "Confining (困 Kùn)",
    meaning: "Oppression, exhaustion.",
    interpretation: "You may feel trapped or drained. Maintain inner resilience and seek support. Adversity tests and strengthens character."
  },
  {
    number: 48,
    name: "Welling (井 Jǐng)",
    meaning: "The well, resource.",
    interpretation: "Tap into fundamental sources of nourishment and wisdom. Ensure shared resources are maintained and accessible to all."
  },
  {
    number: 49,
    name: "Skinning (革 Gé)",
    meaning: "Revolution, transformation.",
    interpretation: "Embrace significant change. Shed old patterns that no longer serve you. Renewal comes through radical shifts."
  },
  {
    number: 50,
    name: "Holding (鼎 Dǐng)",
    meaning: "The cauldron, nourishment.",
    interpretation: "Focus on what nourishes the spirit and sustains society. Cultivate higher principles and contribute meaningfully to the greater good."
  },
  {
    number: 51,
    name: "Shake (震 Zhèn)",
    meaning: "The arousing, shock.",
    interpretation: "Sudden events may startle you. Use this energy as motivation for positive change. Stay alert and adaptable to new circumstances."
  },
  {
    number: 52,
    name: "Bound (艮 Gèn)",
    meaning: "Keeping still, mountain.",
    interpretation: "Practice stillness and introspection. In quietude, find clarity and peace. Pause actions to reflect and center yourself."
  },
  {
    number: 53,
    name: "Infiltrating (渐 Jiàn)",
    meaning: "Development, gradual progress.",
    interpretation: "Progress unfolds slowly. Be patient and persistent. Trust in the natural growth process and steady advancement."
  },
  {
    number: 54,
    name: "Converting The Maiden (归妹 Guī Mèi)",
    meaning: "The marrying maiden, transitions.",
    interpretation: "Adapt to new roles and changing circumstances. Be mindful of your position in relationships. Balance independence with new responsibilities."
  },
  {
    number: 55,
    name: "Abounding (丰 Fēng)",
    meaning: "Abundance, fullness.",
    interpretation: "Experience prosperity and fulfillment. Share your good fortune. Be grateful and generous in abundance."
  },
  {
    number: 56,
    name: "Sojourning (旅 Lǚ)",
    meaning: "The wanderer, journeying.",
    interpretation: "Life is a journey with temporary stops. Stay adaptable and resourceful. Respect local customs and remain mindful of your surroundings."
  },
  {
    number: 57,
    name: "Ground (巽 Xùn)",
    meaning: "The gentle, wind.",
    interpretation: "Influence situations subtly. Patience and gentle persuasion are effective. Be flexible and willing to accommodate."
  },
  {
    number: 58,
    name: "Open (兑 Duì)",
    meaning: "The joyous, lake.",
    interpretation: "Cultivate joy and open communication. Sharing happiness strengthens bonds. Be sincere and encouraging to others."
  },
  {
    number: 59,
    name: "Dispersing (涣 Huàn)",
    meaning: "Dispersion, dissolution.",
    interpretation: "Dissolve barriers and misunderstandings. Promote unity by clearing confusion. Open communication restores harmony."
  },
  {
    number: 60,
    name: "Articulating (节 Jié)",
    meaning: "Limitation, moderation.",
    interpretation: "Recognize the importance of setting boundaries. Establish limits to maintain balance. Discipline brings freedom within structure."
  },
  {
    number: 61,
    name: "Center Confirming (中孚 Zhōng Fú)",
    meaning: "Inner truth, sincerity.",
    interpretation: "Trust your inner convictions. Authenticity resonates with others. Let inner truth guide your actions and decisions."
  },
  {
    number: 62,
    name: "Small Exceeding (小过 Xiǎo Guò)",
    meaning: "Preponderance of the small, attention to detail.",
    interpretation: "Focus on minor matters requiring care. Small things can have significant impacts. Exercise caution and avoid overreaching."
  },
  {
    number: 63,
    name: "Already Fording (既济 Jì Jì)",
    meaning: "After completion, transition.",
    interpretation: "A cycle has been completed successfully. Stay vigilant to maintain accomplishments. Continuous effort ensures lasting success."
  },
  {
    number: 64,
    name: "Not-Yet Fording (未济 Wèi Jì)",
    meaning: "Before completion, uncertainty.",
    interpretation: "The end is near but not yet realized. Proceed carefully to finalize matters. Patience and attention are needed for successful completion."
  }
];