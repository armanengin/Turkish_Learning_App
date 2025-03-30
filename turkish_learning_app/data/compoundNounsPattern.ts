import { GrammarPattern } from '../types/grammar';

export const compoundNounsPattern: GrammarPattern = {
  id: 'compound-nouns',
  slug: 'compound-nouns',
  name: 'Compound Nouns',
  difficulty: 'intermediate',
  category: 'Nouns',
  summary: 'Turkish forms compound nouns through several methods, primarily using the possessive construction where the second noun takes the third-person possessive suffix.',
  formulas: [
    'Definite Compound: Noun1 + Noun2 + -(s)i/ı/u/ü (Noun2 takes 3rd person possessive suffix)',
    'Indefinite Compound: Noun1 + Noun2 (simple juxtaposition)',
    'Genitive Compound: Noun1 + -(n)in/ın/un/ün + Noun2 + -(s)i/ı/u/ü (full possessive construction)'
  ],
  examples: [
    {
      turkish: 'çay bardağı',
      english: 'tea glass',
      breakdown: {
        segments: [
          { text: 'çay', type: 'noun', meaning: 'tea' },
          { text: 'bardağ', type: 'noun', meaning: 'glass' },
          { text: 'ı', type: 'possessive-marker', meaning: '3rd person possessive suffix' }
        ]
      }
    },
    {
      turkish: 'demir kapı',
      english: 'iron door',
      breakdown: {
        segments: [
          { text: 'demir', type: 'noun', meaning: 'iron' },
          { text: 'kapı', type: 'noun', meaning: 'door' }
        ]
      }
    },
    {
      turkish: 'Türkiye\'nin başkenti',
      english: 'the capital of Turkey',
      breakdown: {
        segments: [
          { text: 'Türkiye', type: 'noun', meaning: 'Turkey' },
          { text: '\'nin', type: 'genitive-case', meaning: 'genitive case marker' },
          { text: 'başkent', type: 'noun', meaning: 'capital' },
          { text: 'i', type: 'possessive-marker', meaning: '3rd person possessive suffix' }
        ]
      }
    },
    {
      turkish: 'otobüs durağı',
      english: 'bus stop',
      breakdown: {
        segments: [
          { text: 'otobüs', type: 'noun', meaning: 'bus' },
          { text: 'durağ', type: 'noun', meaning: 'stop' },
          { text: 'ı', type: 'possessive-marker', meaning: '3rd person possessive suffix' }
        ]
      }
    }
  ],
  explanation: "Turkish forms compound nouns in several ways. The most common is the 'definite compound' structure, where the second noun takes the third-person possessive suffix (-(s)i/ı/u/ü), creating a specific relationship between the nouns (e.g., 'çay bardağı' - tea glass). In 'indefinite compounds,' nouns are simply placed next to each other without any suffix, often forming a new concept (e.g., 'demir kapı' - iron door). The 'genitive compound' uses the full possessive construction, with the first noun in the genitive case and the second taking a possessive suffix, indicating a more specific possession relationship (e.g., 'Türkiye'nin başkenti' - the capital of Turkey).",
  usageNotes: [
    'Definite compounds (with possessive suffix) indicate a specific relationship or function',
    'Indefinite compounds (without suffix) often describe material or characteristic',
    'Genitive compounds express clear ownership or belonging',
    'When a compound noun takes a case suffix, it attaches to the end of the entire compound',
    'The stress in definite compounds typically falls on the syllable before the possessive suffix'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Types of Compound Nouns in Turkish',
      description: 'The three main types of compound noun structures',
      data: {
        headers: ['Type', 'Structure', 'Example', 'Meaning'],
        rows: [
          ['Definite Compound', 'Noun1 + Noun2-possessive', 'çay bardağı', 'tea glass (a glass for tea)'],
          ['Indefinite Compound', 'Noun1 + Noun2', 'demir kapı', 'iron door (a door made of iron)'],
          ['Genitive Compound', 'Noun1-genitive + Noun2-possessive', 'Türkiye\'nin başkenti', 'the capital of Turkey']
        ],
        caption: 'The three main types of compound nouns in Turkish',
        footnote: 'The definite compound is the most common type in everyday Turkish.'
      }
    },
    {
      type: 'table',
      title: 'Case Suffixes with Compound Nouns',
      description: 'How case suffixes attach to compound nouns',
      data: {
        headers: ['Compound Noun', 'With Case Suffix', 'Meaning'],
        rows: [
          ['çay bardağı', 'çay bardağında', 'in the tea glass'],
          ['otobüs durağı', 'otobüs durağına', 'to the bus stop'],
          ['okul kitabı', 'okul kitabını', 'the school book (accusative)'],
          ['Türkiye\'nin başkenti', 'Türkiye\'nin başkentinden', 'from the capital of Turkey']
        ],
        caption: 'Case suffixes attach to the end of the entire compound noun',
        footnote: 'Note that with the 3rd person possessive, a buffer consonant "n" appears before vowel-initial suffixes.'
      }
    },
    {
      type: 'table',
      title: 'Semantic Relationships in Compounds',
      description: 'Different semantic relationships expressed by compound nouns',
      data: {
        headers: ['Relationship', 'Example', 'Meaning'],
        rows: [
          ['Purpose/Function', 'diş fırçası', 'toothbrush (brush for teeth)'],
          ['Content', 'elma suyu', 'apple juice (juice of apple)'],
          ['Location', 'deniz kenarı', 'seashore (edge of sea)'],
          ['Material', 'altın yüzük', 'gold ring (ring made of gold)'],
          ['Time', 'akşam yemeği', 'dinner (evening meal)'],
          ['Possession', 'annenin çantası', 'mother\'s bag (bag of mother)']
        ],
        caption: 'Compound nouns express various semantic relationships between the component nouns',
        footnote: 'The type of compound structure often reflects the semantic relationship between the nouns.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Araba anahtar___ masanın üstünde. (The car key is on the table.)',
      correctAnswer: 'ı',
      alternatives: ['sı', 'si', 'su'],
      explanation: 'We need the 3rd person possessive suffix for "anahtar" (key), which is "ı" according to vowel harmony: "araba anahtarı" (car key).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to say "kitchen door"?',
      correctAnswer: 'mutfak kapısı',
      alternatives: [
        'mutfağın kapısı',
        'mutfak kapı',
        'mutfakın kapısı'
      ],
      explanation: 'For a definite compound noun, we use Noun1 + Noun2 + possessive suffix: "mutfak kapısı" (kitchen door).'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish compound nouns with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'Türkiye Cumhuriyeti', match: 'Republic of Turkey' },
        { item: 'çay bardağı', match: 'tea glass' },
        { item: 'kapı kolu', match: 'door handle' },
        { item: 'okul müdürü', match: 'school principal' }
      ],
      explanation: 'Turkish compound nouns are formed using the possessive construction, where the second noun takes the third-person possessive suffix.'
    },
    {
      type: 'translation',
      prompt: 'Translate: I\'m waiting at the bus stop.',
      correctAnswer: 'Otobüs durağında bekliyorum.',
      alternatives: [
        'Otobüs durağında bekliyorum.',
        'Otobüs durağı bekliyorum.'
      ],
      explanation: 'We use the definite compound "otobüs durağı" (bus stop) with the locative case suffix: "otobüs durağında" (at the bus stop).'
    }
  ],
  relatedPatterns: ['genitive-case', 'possessive-constructions', 'noun-cases'],
  notes: 'Compound nouns are extremely common in Turkish and understanding their formation is essential for building vocabulary and expressing complex concepts.',
  exceptions: [
    'Some common compounds have become lexicalized and may not follow the regular patterns',
    'In some definite compounds, the first noun might take the genitive case even though it\'s not strictly necessary in standard Turkish',
    'Some compounds borrowed from Persian use the Persian izafet construction with "i" between the nouns',
    'In colloquial speech, the possessive suffix might be omitted in some common compounds'
  ]
};
