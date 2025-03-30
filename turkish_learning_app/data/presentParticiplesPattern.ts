import { GrammarPattern } from '../types/grammar';

export const presentParticiplesPattern: GrammarPattern = {
  id: 'present-participles',
  slug: 'present-participles',
  name: 'Present Participles',
  difficulty: 'intermediate',
  category: 'Verbs',
  summary: 'Present participles in Turkish are verb forms that function as adjectives, describing ongoing actions or states. They are primarily formed with the suffix -en/-an.',
  formulas: [
    'Verb stem + -en/-an (according to vowel harmony)',
    'Verb stem + -dik/-dık/-duk/-dük + possessive suffix (for object participles)',
    'Verb stem + -ecek/-acak + possessive suffix (for future participles)'
  ],
  examples: [
    {
      turkish: 'koşan adam',
      english: 'the running man',
      breakdown: {
        segments: [
          { text: 'koş', type: 'verb-root', meaning: 'run' },
          { text: 'an', type: 'present-participle', meaning: 'present participle suffix' },
          { text: 'adam', type: 'noun', meaning: 'man' }
        ]
      }
    },
    {
      turkish: 'okuduğum kitap',
      english: 'the book that I read/am reading',
      breakdown: {
        segments: [
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 'duğ', type: 'object-participle', meaning: 'object participle suffix' },
          { text: 'um', type: 'possessive-marker', meaning: '1st person singular possessive' },
          { text: 'kitap', type: 'noun', meaning: 'book' }
        ]
      }
    },
    {
      turkish: 'gelen öğrenciler',
      english: 'the students who are coming',
      breakdown: {
        segments: [
          { text: 'gel', type: 'verb-root', meaning: 'come' },
          { text: 'en', type: 'present-participle', meaning: 'present participle suffix' },
          { text: 'öğrenciler', type: 'noun', meaning: 'students' }
        ]
      }
    },
    {
      turkish: 'çalışacağım şirket',
      english: 'the company where I will work',
      breakdown: {
        segments: [
          { text: 'çalış', type: 'verb-root', meaning: 'work' },
          { text: 'acağ', type: 'future-participle', meaning: 'future participle suffix' },
          { text: 'ım', type: 'possessive-marker', meaning: '1st person singular possessive' },
          { text: 'şirket', type: 'noun', meaning: 'company' }
        ]
      }
    }
  ],
  explanation: "Present participles in Turkish are verb forms that function as adjectives, describing ongoing actions or states. The most common present participle is formed with the suffix -en/-an (following vowel harmony), which corresponds to the English '-ing' form when used as an adjective. Turkish also has other participle forms, including the object participle (-dik/-dık/-duk/-dük + possessive) and future participle (-ecek/-acak + possessive). These participles are essential for forming relative clauses in Turkish, as the language doesn't have relative pronouns like 'who', 'which', or 'that'.",
  usageNotes: [
    'The -en/-an participle describes the subject of the action (the one performing the action)',
    'The -dik/-dık/-duk/-dük participle describes the object of the action (the one receiving the action)',
    'Participles always precede the nouns they modify, following Turkish\'s adjective-before-noun pattern',
    'Participles can take case endings when used as nouns',
    'Participles are essential for forming relative clauses in Turkish'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Subject Participle (-en/-an)',
      description: 'Shows how the subject participle is formed and used',
      data: {
        headers: ['Verb', 'Participle', 'Example', 'Meaning'],
        rows: [
          ['gelmek (to come)', 'gelen', 'gelen mektup', 'the letter that comes/is coming'],
          ['bakmak (to look)', 'bakan', 'bakan kişi', 'the person who looks/is looking'],
          ['uyumak (to sleep)', 'uyuyan', 'uyuyan çocuk', 'the sleeping child'],
          ['gitmek (to go)', 'giden', 'giden tren', 'the departing train']
        ],
        caption: 'The subject participle describes the subject of the action',
        footnote: 'Note that when the verb stem ends in a vowel, a buffer consonant "y" is inserted: uyumak → uyuyan.'
      }
    },
    {
      type: 'table',
      title: 'Object Participle (-dik/-dık/-duk/-dük)',
      description: 'Shows how the object participle is formed and used',
      data: {
        headers: ['Verb', 'Participle Base', 'With Possessive', 'Example', 'Meaning'],
        rows: [
          ['görmek (to see)', 'gördük', 'gördüğüm', 'gördüğüm film', 'the film that I saw/see'],
          ['almak (to take)', 'aldık', 'aldığın', 'aldığın hediye', 'the gift that you took/take'],
          ['okumak (to read)', 'okuduk', 'okuduğu', 'okuduğu kitap', 'the book that he/she read/reads'],
          ['sevmek (to love)', 'sevdik', 'sevdiğimiz', 'sevdiğimiz müzik', 'the music that we love']
        ],
        caption: 'The object participle describes the object of the action and requires a possessive suffix',
        footnote: 'The possessive suffix indicates who is performing the action. When followed by a vowel, "k" changes to "ğ".'
      }
    },
    {
      type: 'table',
      title: 'Future Participle (-ecek/-acak)',
      description: 'Shows how the future participle is formed and used',
      data: {
        headers: ['Verb', 'Participle Base', 'With Possessive', 'Example', 'Meaning'],
        rows: [
          ['gitmek (to go)', 'gidecek', 'gideceğim', 'gideceğim ülke', 'the country that I will go to'],
          ['yapmak (to do)', 'yapacak', 'yapacağın', 'yapacağın iş', 'the work that you will do'],
          ['okumak (to read)', 'okuyacak', 'okuyacağı', 'okuyacağı kitap', 'the book that he/she will read'],
          ['almak (to take)', 'alacak', 'alacağımız', 'alacağımız ev', 'the house that we will buy']
        ],
        caption: 'The future participle describes actions that will happen in the future',
        footnote: 'Like the object participle, the future participle requires a possessive suffix to indicate who will perform the action.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Parkta ___ çocuklar çok mutlu. (The children playing in the park are very happy.)',
      correctAnswer: 'oynayan',
      alternatives: ['oynuyan', 'oynadık', 'oynayacak'],
      explanation: 'We need the present participle of "oynamak" (to play), which is "oynayan" (playing).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to say "the letter that I wrote"?',
      correctAnswer: 'yazdığım mektup',
      alternatives: [
        'yazan mektup',
        'yazacağım mektup',
        'yazdım mektup'
      ],
      explanation: 'We need the object participle with 1st person possessive: "yazdığım mektup" (the letter that I wrote).'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish participle forms with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'koşan adam', match: 'the man who runs/is running' },
        { item: 'okuduğum kitap', match: 'the book that I read/am reading' },
        { item: 'gelecek hafta', match: 'next week (the week that will come)' },
        { item: 'yazılmış mektup', match: 'the letter that has been written' }
      ],
      explanation: 'Turkish uses different participle forms to create relative clauses: -an/-en for subject participles, -dik/-dık + possessive for object participles, and -ecek/-acak for future participles.'
    },
    {
      type: 'translation',
      prompt: 'Translate: The woman who lives in this house is a doctor.',
      correctAnswer: 'Bu evde yaşayan kadın bir doktor.',
      alternatives: [
        'Bu evde yaşayan kadın doktordur.',
        'Bu evde oturan kadın bir doktor.'
      ],
      explanation: 'We use the subject participle "yaşayan" (living) to describe the woman who performs the action of living.'
    }
  ],
  relatedPatterns: ['relative-clauses', 'verb-conjugation', 'adjectives'],
  notes: 'Participles are essential for forming complex sentences in Turkish, as they replace the relative clauses that would use "who," "which," or "that" in English.',
  exceptions: [
    'Some verbs have irregular participle forms, especially with the -en/-an suffix',
    'When a verb stem ends in a vowel, a buffer consonant "y" is inserted before the -en/-an suffix: beklemek → bekleyen',
    'The final "k" in the -dik/-dık/-duk/-dük suffix changes to "ğ" when followed by a vowel: gördük + üm → gördüğüm',
    'In colloquial speech, the future participle might be shortened: yapacağım → yapcağım'
  ]
};
