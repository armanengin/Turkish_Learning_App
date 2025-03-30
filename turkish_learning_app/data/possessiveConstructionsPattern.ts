import { GrammarPattern } from '../types/grammar';

export const possessiveConstructionsPattern: GrammarPattern = {
  id: 'possessive-constructions',
  slug: 'possessive-constructions',
  name: 'Possessive Constructions',
  difficulty: 'beginner',
  category: 'Nouns',
  summary: 'Turkish expresses possession in two main ways: using possessive suffixes attached to the possessed noun, and using possessive constructions with the genitive case for the possessor and a possessive suffix for the possessed.',
  formulas: [
    'Simple Possession: Noun + Possessive Suffix',
    'Complete Possessive: Possessor (Genitive) + Possessed (Possessive Suffix)',
    'Existential Possession: Possessor (Genitive) + Possessed (Possessive Suffix) + var/yok'
  ],
  examples: [
    {
      turkish: 'evim',
      english: 'my house',
      breakdown: {
        segments: [
          { text: 'ev', type: 'noun', meaning: 'house' },
          { text: 'im', type: 'possessive-marker', meaning: '1st person singular possessive' }
        ]
      }
    },
    {
      turkish: 'benim evim',
      english: 'my house',
      breakdown: {
        segments: [
          { text: 'ben', type: 'noun', meaning: 'I' },
          { text: 'im', type: 'genitive-case', meaning: 'genitive case (my)' },
          { text: 'ev', type: 'noun', meaning: 'house' },
          { text: 'im', type: 'possessive-marker', meaning: '1st person singular possessive' }
        ]
      }
    },
    {
      turkish: 'öğretmenin kitabı',
      english: 'the teacher\'s book',
      breakdown: {
        segments: [
          { text: 'öğretmen', type: 'noun', meaning: 'teacher' },
          { text: 'in', type: 'genitive-case', meaning: 'genitive case (of the)' },
          { text: 'kitab', type: 'noun', meaning: 'book' },
          { text: 'ı', type: 'possessive-marker', meaning: '3rd person singular possessive' }
        ]
      }
    },
    {
      turkish: 'benim arabam var',
      english: 'I have a car',
      breakdown: {
        segments: [
          { text: 'ben', type: 'noun', meaning: 'I' },
          { text: 'im', type: 'genitive-case', meaning: 'genitive case (my)' },
          { text: 'araba', type: 'noun', meaning: 'car' },
          { text: 'm', type: 'possessive-marker', meaning: '1st person singular possessive' },
          { text: 'var', type: 'existential', meaning: 'exists/there is' }
        ]
      }
    }
  ],
  explanation: "Turkish has a rich system for expressing possession. The simplest form attaches possessive suffixes directly to nouns (evim = my house). For more explicit possession, Turkish uses a construction where the possessor is in the genitive case and the possessed noun takes a possessive suffix (benim evim = my house). To express 'having' something, Turkish uses the existential words 'var' (exists) or 'yok' (doesn't exist) with possessive constructions (arabam var = I have a car, literally 'my car exists').",
  usageNotes: [
    'Possessive suffixes follow vowel harmony and change form accordingly',
    'When the possessor is a pronoun, it can often be omitted since the possessive suffix indicates the person',
    'The third-person possessive suffix triggers a buffer consonant (-s-) when followed by a case suffix',
    'Possessive constructions are used to express relationships beyond ownership',
    'The "to have" concept is expressed using possessive constructions with "var" (exists) or "yok" (doesn\'t exist)'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Possessive Suffixes',
      description: 'Shows the possessive suffixes for each person',
      data: {
        headers: ['Person', 'After Consonants', 'After Vowels', 'Example'],
        rows: [
          ['1st Person Singular', '-im, -ım, -um, -üm', '-m', 'ev-im (my house), araba-m (my car)'],
          ['2nd Person Singular', '-in, -ın, -un, -ün', '-n', 'ev-in (your house), araba-n (your car)'],
          ['3rd Person Singular', '-i, -ı, -u, -ü', '-si, -sı, -su, -sü', 'ev-i (his/her house), araba-sı (his/her car)'],
          ['1st Person Plural', '-imiz, -ımız, -umuz, -ümüz', '-miz, -mız, -muz, -müz', 'ev-imiz (our house), araba-mız (our car)'],
          ['2nd Person Plural', '-iniz, -ınız, -unuz, -ünüz', '-niz, -nız, -nuz, -nüz', 'ev-iniz (your house), araba-nız (your car)'],
          ['3rd Person Plural', '-leri, -ları', '-leri, -ları', 'ev-leri (their house), araba-ları (their car)']
        ],
        caption: 'Turkish possessive suffixes follow vowel harmony and change form based on whether they follow a consonant or vowel',
        footnote: 'Note that the 3rd person plural form can be ambiguous, as it can mean either "their X" or "his/her Xs".'
      }
    },
    {
      type: 'table',
      title: 'Complete Possessive Constructions',
      description: 'Shows how complete possessive constructions are formed',
      data: {
        headers: ['Possessor', 'Genitive Form', 'Possessed + Suffix', 'Complete Construction'],
        rows: [
          ['ben (I)', 'benim', 'ev + im → evim', 'benim evim (my house)'],
          ['sen (you)', 'senin', 'ev + in → evin', 'senin evin (your house)'],
          ['o (he/she/it)', 'onun', 'ev + i → evi', 'onun evi (his/her house)'],
          ['biz (we)', 'bizim', 'ev + imiz → evimiz', 'bizim evimiz (our house)'],
          ['siz (you-pl)', 'sizin', 'ev + iniz → eviniz', 'sizin eviniz (your house)'],
          ['onlar (they)', 'onların', 'ev + leri → evleri', 'onların evleri (their house)']
        ],
        caption: 'Complete possessive constructions with pronouns as possessors',
        footnote: 'The pronoun (genitive form) is often omitted in speech when the context is clear.'
      }
    },
    {
      type: 'table',
      title: 'Expressing "To Have" in Turkish',
      description: 'Shows how to express having something in Turkish',
      data: {
        headers: ['English', 'Turkish', 'Literal Meaning'],
        rows: [
          ['I have a car', 'Arabam var', 'My car exists'],
          ['You have a house', 'Evin var', 'Your house exists'],
          ['She has a dog', 'Onun bir köpeği var', 'Her dog exists'],
          ['We have time', 'Zamanımız var', 'Our time exists'],
          ['I don\'t have money', 'Param yok', 'My money doesn\'t exist'],
          ['Do you have a pen?', 'Kalemin var mı?', 'Does your pen exist?']
        ],
        caption: 'Turkish uses possessive constructions with "var" (exists) or "yok" (doesn\'t exist) to express having or not having something',
        footnote: 'This construction is different from English, which uses the verb "to have".'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Bu ___ kitabım. (This is my book.)',
      correctAnswer: 'benim',
      alternatives: ['ben', 'benin', 'beni'],
      explanation: 'We need the genitive form of "ben" (I), which is "benim" (my).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to say "your house" in Turkish?',
      correctAnswer: 'evin',
      alternatives: [
        'evsin',
        'evini',
        'eviniz'
      ],
      explanation: '"Evin" is correct for "your house" (singular). "Eviniz" would mean "your house" (plural/formal).'
    },
    {
      type: 'reordering',
      prompt: 'Arrange the words to form a correct sentence: "var / arabası / öğretmenin"',
      correctAnswer: 'Öğretmenin arabası var.',
      alternatives: [
        'Arabası öğretmenin var.',
        'Var öğretmenin arabası.'
      ],
      explanation: 'The most natural word order is "Öğretmenin arabası var." (The teacher has a car.)'
    },
    {
      type: 'translation',
      prompt: 'Translate: I don\'t have time.',
      correctAnswer: 'Zamanım yok.',
      alternatives: [
        'Benim zamanım yok.',
        'Vaktim yok.'
      ],
      explanation: 'To express not having something, we use the possessive construction with "yok": Zamanım yok.'
    }
  ],
  relatedPatterns: ['genitive-case', 'personal-pronouns', 'vowel-harmony'],
  notes: 'Possessive constructions are fundamental to Turkish grammar and are used extensively in everyday speech.',
  exceptions: [
    'In colloquial speech, the genitive pronoun is often omitted: "evim" instead of "benim evim"',
    'Some common expressions use a simpler construction without the genitive: "ev kapısı" (house door) instead of "evin kapısı"',
    'When the possessed noun is followed by a case suffix, a buffer consonant (-n-) is inserted after the 3rd person possessive: "arabası" (his car) → "arabasına" (to his car)',
    'The 3rd person plural possessive suffix "-leri/-ları" can be ambiguous, meaning either "their X" or "his/her Xs"'
  ]
};
