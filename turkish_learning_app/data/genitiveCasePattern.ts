import { GrammarPattern } from '../types/grammar';

export const genitiveCasePattern: GrammarPattern = {
  id: 'genitive-case',
  slug: 'genitive-case',
  name: 'Genitive Case (-(n)in/ın/un/ün)',
  difficulty: 'beginner',
  category: 'Nouns',
  summary: 'The genitive case in Turkish is used to show possession or relationship between nouns, similar to the English possessive \'-s\' or \'of\' structure.',
  formulas: [
    'Noun + -(n)in/ın/un/ün (according to vowel harmony)',
    'After vowels: Noun + -nin/nın/nun/nün',
    'After consonants: Noun + -in/ın/un/ün'
  ],
  examples: [
    {
      turkish: 'kızın kitabı',
      english: 'the girl\'s book',
      breakdown: {
        segments: [
          { text: 'kız', type: 'noun', meaning: 'girl' },
          { text: 'ın', type: 'genitive-case', meaning: 'genitive case marker' },
          { text: 'kitab', type: 'noun', meaning: 'book' },
          { text: 'ı', type: 'possessive-marker', meaning: '3rd person possessive' }
        ]
      }
    },
    {
      turkish: 'öğretmenin arabası',
      english: 'the teacher\'s car',
      breakdown: {
        segments: [
          { text: 'öğretmen', type: 'noun', meaning: 'teacher' },
          { text: 'in', type: 'genitive-case', meaning: 'genitive case marker' },
          { text: 'araba', type: 'noun', meaning: 'car' },
          { text: 'sı', type: 'possessive-marker', meaning: '3rd person possessive' }
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
          { text: 'i', type: 'possessive-marker', meaning: '3rd person possessive' }
        ]
      }
    }
  ],
  explanation: "The genitive case in Turkish shows possession or relationship between nouns. It answers the question 'whose?'. When a noun is in the genitive case, the possessed noun must also take a possessive suffix that agrees with the possessor. This creates a possession structure that functions as a single grammatical unit.",
  usageNotes: [
    'Used to express ownership or possession: "Ali\'nin arabası" (Ali\'s car)',
    'Used in compound nouns to show the relationship between nouns: "Türkiye\'nin başkenti" (the capital of Turkey)',
    'Used with pronouns to create possessive forms: "benim evim" (my house), "senin arabanı" (your car)',
    'Required before postpositions that govern the genitive case: "evin içinde" (inside the house)'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Genitive Case Formation',
      description: 'Shows how genitive case endings change based on vowel harmony',
      data: {
        headers: ['Word Ending', 'Genitive Suffix', 'Example', 'Meaning'],
        rows: [
          ['Consonant + e/i', '-in', 'ev → evin', 'of the house'],
          ['Consonant + a/ı', '-ın', 'kız → kızın', 'of the girl'],
          ['Consonant + o/u', '-un', 'yol → yolun', 'of the road'],
          ['Consonant + ö/ü', '-ün', 'göz → gözün', 'of the eye'],
          ['Any vowel', '-nin/-nın/-nun/-nün', 'araba → arabanın', 'of the car']
        ],
        caption: 'Genitive case suffixes follow vowel harmony rules',
        footnote: 'Note: In formal or literary contexts, an apostrophe is used when adding the genitive suffix to proper nouns: İstanbul\'un, Türkiye\'nin'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Anne_____ çantası nerede? (mother\'s bag)',
      correctAnswer: 'nin',
      alternatives: ['nın', 'nun', 'nün'],
      explanation: 'Since "anne" ends with "e" and is a vowel, we add -nin according to vowel harmony rules.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to say "the door of the house"?',
      correctAnswer: 'evin kapısı',
      alternatives: [
        'ev kapısı',
        'evin kapı',
        'ev kapı'
      ],
      explanation: 'To show possession, the possessor takes the genitive case (ev → evin) and the possessed noun takes the appropriate possessive suffix (kapı → kapısı).'
    },
    {
      type: 'translation',
      prompt: 'Translate: The teacher\'s pen is on the table.',
      correctAnswer: 'Öğretmenin kalemi masanın üstünde.',
      alternatives: [
        'Öğretmenin kalemi masada.',
        'Hocanın kalemi masanın üzerinde.'
      ],
      explanation: 'Both "öğretmen" (teacher) and "masa" (table) take the genitive case, and their possessed nouns take the corresponding possessive suffixes.'
    }
  ],
  relatedPatterns: ['possessive-suffixes', 'accusative-case', 'noun-cases'],
  notes: 'The genitive case often works together with possessive suffixes to form complete possessive structures in Turkish.',
  exceptions: [
    'In colloquial speech, the genitive marker might be omitted in some common expressions: "kapı kolu" instead of "kapının kolu" (door handle)',
    'When the genitive is used with pronouns, the forms are unique: ben → benim, sen → senin, o → onun, etc.',
    'Proper nouns take an apostrophe before the genitive suffix in written Turkish: Ahmet\'in, İstanbul\'un'
  ]
};
