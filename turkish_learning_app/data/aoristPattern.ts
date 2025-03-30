import { GrammarPattern } from '../types/grammar';

export const aoristPattern: GrammarPattern = {
  id: 'aorist-tense',
  slug: 'aorist-tense',
  name: 'Aorist Tense for Habits and Generalizations',
  difficulty: 'advanced',
  category: 'tense',
  summary: 'The aorist tense in Turkish (-ir/-ır/-ur/-ür or -r) is used to express habitual actions, general truths, abilities, and future plans with certainty.',
  formulas: [
    'Single-syllable verb stems ending in a consonant + -er/-ar',
    'Multi-syllable verb stems ending in a consonant + -ir/-ır/-ur/-ür',
    'Verb stems ending in a vowel + -r',
    'Negative: Verb stem + -mez/-maz (all verbs)',
    'Question: Verb stem + aorist suffix + question particle (mi/mı/mu/mü)'
  ],
  examples: [
    {
      turkish: 'Her sabah erken kalkarım.',
      english: 'I wake up early every morning.',
      breakdown: {
        segments: [
          { text: 'Her', type: 'determiner', meaning: 'every' },
          { text: 'sabah', type: 'noun', meaning: 'morning' },
          { text: 'erken', type: 'adverb', meaning: 'early' },
          { text: 'kalk', type: 'verb-root', meaning: 'wake up' },
          { text: 'ar', type: 'aorist', meaning: 'aorist tense (habitual)' },
          { text: 'ım', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Su 100 derecede kaynar.',
      english: 'Water boils at 100 degrees.',
      breakdown: {
        segments: [
          { text: 'Su', type: 'noun', meaning: 'water' },
          { text: '100', type: 'numeral', meaning: '100' },
          { text: 'derece', type: 'noun', meaning: 'degree' },
          { text: 'de', type: 'locative-case', meaning: 'at (locative case)' },
          { text: 'kayn', type: 'verb-root', meaning: 'boil' },
          { text: 'ar', type: 'aorist', meaning: 'aorist tense (general truth)' }
        ]
      }
    },
    {
      turkish: 'Türkçe konuşur musun?',
      english: 'Do you speak Turkish?',
      breakdown: {
        segments: [
          { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
          { text: 'konuş', type: 'verb-root', meaning: 'speak' },
          { text: 'ur', type: 'aorist', meaning: 'aorist tense (ability)' },
          { text: 'mu', type: 'question-particle', meaning: 'question particle' },
          { text: 'sun', type: 'person-marker', meaning: '2nd person singular' }
        ]
      }
    },
    {
      turkish: 'Balıklar yüzmez.',
      english: 'Fish don\'t swim.',
      breakdown: {
        segments: [
          { text: 'Balık', type: 'noun', meaning: 'fish' },
          { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
          { text: 'yüz', type: 'verb-root', meaning: 'swim' },
          { text: 'mez', type: 'aorist-negative', meaning: 'negative aorist' }
        ]
      }
    },
    {
      turkish: 'Yarın kesinlikle gelirim.',
      english: 'I will definitely come tomorrow.',
      breakdown: {
        segments: [
          { text: 'Yarın', type: 'adverb', meaning: 'tomorrow' },
          { text: 'kesinlikle', type: 'adverb', meaning: 'definitely' },
          { text: 'gel', type: 'verb-root', meaning: 'come' },
          { text: 'ir', type: 'aorist', meaning: 'aorist tense (future with certainty)' },
          { text: 'im', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    }
  ],
  explanation: "The aorist tense in Turkish is a versatile tense used to express habitual actions, general truths, abilities, and future plans with certainty. It's formed by adding specific suffixes to the verb stem, following vowel harmony rules. For single-syllable verbs ending in a consonant, the suffixes -er/-ar are used. For multi-syllable verbs ending in a consonant, the suffixes -ir/-ır/-ur/-ür are used. For verbs ending in a vowel, the suffix -r is used. The negative form of the aorist is unique: it uses -mez/-maz for all verbs, regardless of syllable count or ending. The aorist is one of the most commonly used tenses in Turkish and is essential for expressing general statements about the world, habits, and abilities.",
  usageNotes: [
    'Use the aorist for habitual actions ("I walk to work every day")',
    'Use the aorist for general truths and scientific facts ("The Earth revolves around the Sun")',
    'Use the aorist to express abilities ("She speaks five languages")',
    'Use the aorist for future events with certainty ("I\'ll definitely come tomorrow")',
    'Use the aorist for hypothetical situations ("What would you do if...?")',
    'The negative form always uses -mez/-maz, regardless of the verb'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Aorist Suffix Forms',
      description: 'The different forms of the aorist suffix based on verb type',
      data: {
        headers: ['Verb Type', 'Aorist Suffix', 'Example'],
        rows: [
          ['Single-syllable verb ending in consonant', '-ar/-er', 'gel- (come) → gelir (comes)'],
          ['Multi-syllable verb ending in consonant', '-ir/-ır/-ur/-ür', 'konuş- (speak) → konuşur (speaks)'],
          ['Verb ending in vowel', '-r', 'bekle- (wait) → bekler (waits)'],
          ['Any verb (negative form)', '-maz/-mez', 'gel- (come) → gelmez (doesn\'t come)']
        ],
        caption: 'Aorist suffix forms according to verb type',
        footnote: 'There are some exceptions to these rules that must be memorized.'
      }
    },
    {
      type: 'table',
      title: 'Aorist Conjugation',
      description: 'Full conjugation of the aorist tense for different persons',
      data: {
        headers: ['Person', 'Positive', 'Negative', 'Question', 'Negative Question'],
        rows: [
          ['I', 'gelirim', 'gelmem', 'gelir miyim?', 'gelmez miyim?'],
          ['You (singular)', 'gelirsin', 'gelmezsin', 'gelir misin?', 'gelmez misin?'],
          ['He/She/It', 'gelir', 'gelmez', 'gelir mi?', 'gelmez mi?'],
          ['We', 'geliriz', 'gelmeyiz', 'gelir miyiz?', 'gelmez miyiz?'],
          ['You (plural)', 'gelirsiniz', 'gelmezsiniz', 'gelir misiniz?', 'gelmez misiniz?'],
          ['They', 'gelirler', 'gelmezler', 'gelirler mi?', 'gelmezler mi?']
        ],
        caption: 'Full conjugation of the verb "gelmek" (to come) in the aorist tense',
        footnote: 'Note the unique negative form with -mez/-maz instead of the regular negative suffix -me/-ma.'
      }
    },
    {
      type: 'table',
      title: 'Aorist Usage Examples',
      description: 'Different contexts where the aorist tense is used',
      data: {
        headers: ['Usage', 'Turkish Example', 'English Translation'],
        rows: [
          ['Habitual action', 'Her gün spor yaparım.', 'I exercise every day.'],
          ['General truth', 'Dünya Güneş etrafında döner.', 'The Earth revolves around the Sun.'],
          ['Ability', 'Beş dil konuşur.', 'She speaks five languages.'],
          ['Future with certainty', 'Yarın kesinlikle gelirim.', 'I will definitely come tomorrow.'],
          ['Hypothetical', 'Zengin olsam dünyayı gezerim.', 'If I were rich, I would travel the world.'],
          ['Polite request', 'Pencereyi açar mısınız?', 'Would you open the window?']
        ],
        caption: 'Different contexts where the aorist tense is used in Turkish',
        footnote: 'The aorist is one of the most versatile tenses in Turkish, with many different uses depending on context.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Her sabah saat 7\'de kalk___ (I wake up).',
      correctAnswer: 'arım',
      alternatives: ['ırım', 'erim', 'ırız'],
      explanation: 'The aorist form of "kalkmak" (to wake up) for first person singular is "kalkarım" because "kalk" is a single-syllable verb stem ending in a consonant.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "Cats don\'t like water"?',
      correctAnswer: 'Kediler suyu sevmez.',
      alternatives: [
        'Kediler suyu sevmiyor.',
        'Kediler suyu sevmedi.',
        'Kediler suyu sevmeyecek.'
      ],
      explanation: 'The correct answer uses "sevmez," which is the negative aorist form of "sevmek" (to love), indicating a general truth about cats.'
    },
    {
      type: 'matching',
      prompt: 'Match the verbs with their correct aorist forms',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'gelmek (to come)', match: 'gelir' },
        { item: 'bakmak (to look)', match: 'bakar' },
        { item: 'konuşmak (to speak)', match: 'konuşur' },
        { item: 'beklemek (to wait)', match: 'bekler' }
      ],
      explanation: 'The aorist form depends on the verb type: single-syllable verbs ending in consonants use -ar/-er, multi-syllable verbs ending in consonants use -ir/-ır/-ur/-ür, and verbs ending in vowels use -r.'
    },
    {
      type: 'translation',
      prompt: 'Translate to Turkish: "Do you speak English?"',
      correctAnswer: 'İngilizce konuşur musun?',
      alternatives: [
        'İngilizce konuşur musunuz?',
        'İngilizce bilir misin?'
      ],
      explanation: 'This question about ability uses the aorist form "konuşur" from "konuşmak" (to speak) with the question particle "mu" and the second person singular suffix "sun".'
    }
  ],
  relatedPatterns: ['present-tense', 'future-tense', 'verb-conjugation', 'vowel-harmony'],
  notes: 'The aorist tense is one of the most important and versatile tenses in Turkish, used for expressing habitual actions, general truths, abilities, and future events with certainty.',
  exceptions: [
    'Some single-syllable verbs take -ir/-ır/-ur/-ür instead of the expected -ar/-er',
    'The verbs "almak" (to take), "bilmek" (to know), "bulmak" (to find), "durmak" (to stand), "gelmek" (to come), "görmek" (to see), "kalmak" (to stay), "olmak" (to be), "ölmek" (to die), "sanmak" (to think), "varmak" (to arrive), "vermek" (to give), and "vurmak" (to hit) are exceptions that take -ir/-ür despite being single-syllable',
    'The negative form always uses -mez/-maz, regardless of the verb type',
    'The first person singular negative ("I don\'t") is often contracted from "gelmezim" to "gelmem"',
    'The first person plural negative ("we don\'t") is often "gelmeyiz" rather than "gelmeziz"'
  ]
};
