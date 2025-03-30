import { GrammarPattern } from '../types/grammar';

export const personalPronounsPattern: GrammarPattern = {
  id: 'personal-pronouns',
  slug: 'personal-pronouns',
  name: 'Personal Pronouns',
  difficulty: 'beginner',
  category: 'Pronouns',
  summary: 'Turkish personal pronouns distinguish between first, second, and third person in both singular and plural forms, and they change form when used with different cases.',
  formulas: [
    'Subject Pronouns: ben (I), sen (you), o (he/she/it), biz (we), siz (you-plural), onlar (they)',
    'Pronoun + Case Suffix: Pronoun changes form when taking case suffixes',
    'Possessive Pronouns: benim (my/mine), senin (your/yours), etc.'
  ],
  examples: [
    {
      turkish: 'Ben Türkçe öğreniyorum.',
      english: 'I am learning Turkish.',
      breakdown: {
        segments: [
          { text: 'Ben', type: 'noun', meaning: 'I (subject pronoun)' },
          { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
          { text: 'öğreniyor', type: 'verb-root', meaning: 'learn (present continuous)' },
          { text: 'um', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Sana bir hediye aldım.',
      english: 'I bought you a gift.',
      breakdown: {
        segments: [
          { text: 'Sana', type: 'noun', meaning: 'to you (dative case of "sen")' },
          { text: 'bir', type: 'determiner', meaning: 'a/one' },
          { text: 'hediye', type: 'noun', meaning: 'gift' },
          { text: 'al', type: 'verb-root', meaning: 'buy' },
          { text: 'dı', type: 'past-tense', meaning: 'past tense' },
          { text: 'm', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Bu kitap benim.',
      english: 'This book is mine.',
      breakdown: {
        segments: [
          { text: 'Bu', type: 'determiner', meaning: 'this' },
          { text: 'kitap', type: 'noun', meaning: 'book' },
          { text: 'benim', type: 'noun', meaning: 'mine (possessive pronoun)' }
        ]
      }
    },
    {
      turkish: 'Onlarla sinemaya gittik.',
      english: 'We went to the cinema with them.',
      breakdown: {
        segments: [
          { text: 'Onlar', type: 'noun', meaning: 'they' },
          { text: 'la', type: 'instrumental-case', meaning: 'with (instrumental case)' },
          { text: 'sinema', type: 'noun', meaning: 'cinema' },
          { text: 'ya', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'git', type: 'verb-root', meaning: 'go' },
          { text: 'ti', type: 'past-tense', meaning: 'past tense' },
          { text: 'k', type: 'person-marker', meaning: '1st person plural' }
        ]
      }
    }
  ],
  explanation: "Turkish personal pronouns distinguish between first, second, and third person in both singular and plural forms. Unlike English, Turkish doesn't have gender-specific pronouns (he/she), using 'o' for all third-person singular references. When pronouns take case suffixes, their base forms often change. Personal pronouns are frequently omitted in Turkish sentences when the subject is clear from the verb ending, making Turkish a 'pro-drop' language.",
  usageNotes: [
    'Turkish pronouns change form when taking case suffixes',
    'Subject pronouns are often omitted since the verb ending indicates the person',
    'The formal "you" in Turkish is "siz", which is also the plural "you"',
    'The third-person singular pronoun "o" is used for he, she, and it',
    'Possessive pronouns are formed by adding the genitive case to personal pronouns'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Turkish Personal Pronouns',
      description: 'Basic forms of Turkish personal pronouns',
      data: {
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st Person', 'ben (I)', 'biz (we)'],
          ['2nd Person', 'sen (you)', 'siz (you-plural/formal)'],
          ['3rd Person', 'o (he/she/it)', 'onlar (they)']
        ],
        caption: 'Basic forms of Turkish personal pronouns',
        footnote: 'Note that "o" is used for all genders (he, she, it) and "siz" is used for both plural "you" and formal "you".'
      }
    },
    {
      type: 'table',
      title: 'Pronoun Case Forms',
      description: 'How pronouns change when taking case suffixes',
      data: {
        headers: ['Case', 'ben (I)', 'sen (you)', 'o (he/she/it)', 'biz (we)', 'siz (you-pl)', 'onlar (they)'],
        rows: [
          ['Nominative', 'ben', 'sen', 'o', 'biz', 'siz', 'onlar'],
          ['Accusative', 'beni', 'seni', 'onu', 'bizi', 'sizi', 'onları'],
          ['Dative', 'bana', 'sana', 'ona', 'bize', 'size', 'onlara'],
          ['Locative', 'bende', 'sende', 'onda', 'bizde', 'sizde', 'onlarda'],
          ['Ablative', 'benden', 'senden', 'ondan', 'bizden', 'sizden', 'onlardan'],
          ['Genitive', 'benim', 'senin', 'onun', 'bizim', 'sizin', 'onların']
        ],
        caption: 'Personal pronouns in different cases',
        footnote: 'Note the irregular forms, especially in the dative case (bana, sana, ona).'
      }
    },
    {
      type: 'table',
      title: 'Possessive Pronouns',
      description: 'Possessive forms of Turkish pronouns',
      data: {
        headers: ['Person', 'Possessive Pronoun', 'Example'],
        rows: [
          ['1st Person Singular', 'benim', 'Bu kitap benim. (This book is mine.)'],
          ['2nd Person Singular', 'senin', 'Bu kalem senin. (This pen is yours.)'],
          ['3rd Person Singular', 'onun', 'Bu araba onun. (This car is his/hers.)'],
          ['1st Person Plural', 'bizim', 'Bu ev bizim. (This house is ours.)'],
          ['2nd Person Plural', 'sizin', 'Bu masa sizin. (This table is yours.)'],
          ['3rd Person Plural', 'onların', 'Bu bilgisayarlar onların. (These computers are theirs.)']
        ],
        caption: 'Possessive pronouns in Turkish',
        footnote: 'Possessive pronouns are identical to the genitive case forms of personal pronouns.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: '___ Ankara\'da yaşıyorum. (I live in Ankara.)',
      correctAnswer: 'Ben',
      alternatives: ['Sen', 'O', 'Biz'],
      explanation: 'The first-person singular pronoun "Ben" is needed here to match the verb ending "-yorum".'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct dative form of "sen" (you)?',
      correctAnswer: 'sana',
      alternatives: [
        'sene',
        'senin',
        'seni'
      ],
      explanation: 'The dative form of "sen" is irregular: "sana" (to you).'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish personal pronouns with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'ben', match: 'I' },
        { item: 'sen', match: 'you (singular)' },
        { item: 'o', match: 'he/she/it' },
        { item: 'biz', match: 'we' },
        { item: 'siz', match: 'you (plural/formal)' },
        { item: 'onlar', match: 'they' }
      ],
      explanation: 'Turkish personal pronouns are relatively straightforward compared to other languages, with no gender distinctions and a formal/informal distinction only in the second person.'
    },
    {
      type: 'translation',
      prompt: 'Translate: This house is ours.',
      correctAnswer: 'Bu ev bizim.',
      alternatives: [
        'Bu ev bizimdir.',
        'Bu bizim ev.'
      ],
      explanation: 'To express possession with pronouns, we use the genitive form of the pronoun: "bizim" (ours).'
    }
  ],
  relatedPatterns: ['possessive-constructions', 'genitive-case', 'verb-conjugation'],
  notes: 'Personal pronouns are fundamental to Turkish grammar and are used differently than in English, particularly in terms of pronoun dropping and case changes.',
  exceptions: [
    'The dative forms of pronouns are irregular: bana, sana, ona (not bene, sene, ona)',
    'In colloquial speech, "ben" is sometimes pronounced as "ben" even when it should change form',
    'The pronoun "o" can refer to people, animals, or objects, unlike English which uses different pronouns',
    'In some dialects, "bizler" and "sizler" are used as emphatic forms of "biz" and "siz"'
  ]
};
