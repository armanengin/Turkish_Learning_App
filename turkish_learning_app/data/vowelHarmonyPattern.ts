import { GrammarPattern } from '../types/grammar';

export const vowelHarmonyPattern: GrammarPattern = {
  id: 'vowel-harmony',
  slug: 'vowel-harmony',
  name: 'Vowel Harmony',
  difficulty: 'beginner',
  category: 'Phonology',
  summary: 'Vowel harmony is a fundamental phonological principle in Turkish where vowels in suffixes change to harmonize with the vowels in the word stem.',
  formulas: [
    'Front vowels (e, i, ö, ü) → followed by front vowels in suffixes',
    'Back vowels (a, ı, o, u) → followed by back vowels in suffixes',
    'Two-way harmony: e/a, i/ı, ö/o, ü/u'
  ],
  examples: [
    {
      turkish: 'ev-ler',
      english: 'houses',
      breakdown: {
        segments: [
          { text: 'ev', type: 'noun', meaning: 'house' },
          { text: 'ler', type: 'plural-marker', meaning: 'plural suffix (after front vowel)' }
        ]
      }
    },
    {
      turkish: 'kitap-lar',
      english: 'books',
      breakdown: {
        segments: [
          { text: 'kitap', type: 'noun', meaning: 'book' },
          { text: 'lar', type: 'plural-marker', meaning: 'plural suffix (after back vowel)' }
        ]
      }
    },
    {
      turkish: 'gel-di',
      english: 'came',
      breakdown: {
        segments: [
          { text: 'gel', type: 'verb-root', meaning: 'to come' },
          { text: 'di', type: 'past-tense', meaning: 'past tense suffix (after front vowel)' }
        ]
      }
    },
    {
      turkish: 'bak-tı',
      english: 'looked',
      breakdown: {
        segments: [
          { text: 'bak', type: 'verb-root', meaning: 'to look' },
          { text: 'tı', type: 'past-tense', meaning: 'past tense suffix (after back vowel)' }
        ]
      }
    }
  ],
  explanation: "Vowel harmony is a core principle of Turkish phonology where vowels in suffixes adapt to match the vowels in the word stem. This creates a harmonious flow of sounds within words. There are two main types of vowel harmony in Turkish: two-way (e/a) and four-way (i/ı/u/ü) harmony. Vowel harmony affects virtually all suffixes in Turkish, making it essential to master for proper pronunciation and grammar.",
  usageNotes: [
    'Applies to nearly all suffixes in Turkish',
    'Determines the correct form of plural markers (-ler/-lar)',
    'Affects case endings, verb conjugations, and other grammatical markers',
    'Some loanwords may not follow vowel harmony internally, but suffixes added to them still follow the rules'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Turkish Vowel Classification',
      description: 'Classification of Turkish vowels by position and roundedness',
      data: {
        headers: ['', 'Front', 'Back'],
        rows: [
          ['Unrounded', 'e, i', 'a, ı'],
          ['Rounded', 'ö, ü', 'o, u']
        ],
        caption: 'The eight vowels of Turkish classified by position and roundedness',
        footnote: 'Front vowels are pronounced with the tongue positioned forward in the mouth, while back vowels are pronounced with the tongue positioned toward the back of the mouth.'
      }
    },
    {
      type: 'table',
      title: 'Two-way Vowel Harmony',
      description: 'Shows how suffixes with e/a alternate based on the last vowel of the stem',
      data: {
        headers: ['Last Vowel in Stem', 'Suffix Vowel', 'Example'],
        rows: [
          ['e, i, ö, ü (front)', 'e', 'ev → evde (in the house)'],
          ['a, ı, o, u (back)', 'a', 'kitap → kitapta (in the book)']
        ],
        caption: 'Two-way vowel harmony determines whether e or a appears in suffixes',
        footnote: 'This applies to suffixes like -de/-da (locative), -e/-a (dative), etc.'
      }
    },
    {
      type: 'table',
      title: 'Four-way Vowel Harmony',
      description: 'Shows how suffixes with i/ı/ü/u alternate based on the last vowel of the stem',
      data: {
        headers: ['Last Vowel in Stem', 'Suffix Vowel', 'Example'],
        rows: [
          ['e, i (front, unrounded)', 'i', 'ev → evi (his/her house)'],
          ['a, ı (back, unrounded)', 'ı', 'kız → kızı (his/her daughter)'],
          ['ö, ü (front, rounded)', 'ü', 'göz → gözü (his/her eye)'],
          ['o, u (back, rounded)', 'u', 'yol → yolu (his/her road)']
        ],
        caption: 'Four-way vowel harmony determines whether i, ı, ü, or u appears in suffixes',
        footnote: 'This applies to suffixes like -i/-ı/-ü/-u (accusative), -di/-dı/-dü/-du (past tense), etc.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Köpek___ (dogs)',
      correctAnswer: 'ler',
      alternatives: ['lar'],
      explanation: 'Since "köpek" has the front vowel "e" as its last vowel, we use the front vowel "e" in the suffix: köpekler.'
    },
    {
      type: 'fill-in-blank',
      prompt: 'Araba___ (cars)',
      correctAnswer: 'lar',
      alternatives: ['ler'],
      explanation: 'Since "araba" has the back vowel "a" as its last vowel, we use the back vowel "a" in the suffix: arabalar.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct locative form of "üniversite" (university)?',
      correctAnswer: 'üniversitede',
      alternatives: [
        'üniversiteda',
        'üniversitete',
        'üniversiteta'
      ],
      explanation: 'Since "üniversite" ends with the front vowel "e", the locative suffix should be "-de" according to vowel harmony rules.'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish words with their correct suffix forms',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'ev + de', match: 'evde (at home)' },
        { item: 'kitap + lar', match: 'kitaplar (books)' },
        { item: 'göz + ler', match: 'gözler (eyes)' },
        { item: 'okul + dan', match: 'okuldan (from school)' }
      ],
      explanation: 'Vowel harmony determines the form of suffixes. Back vowels (a, ı, o, u) are followed by back vowel suffixes, while front vowels (e, i, ö, ü) are followed by front vowel suffixes.'
    }
  ],
  relatedPatterns: ['consonant-harmony', 'suffix-formation', 'word-structure'],
  notes: 'Vowel harmony is one of the most distinctive features of Turkish and other Turkic languages. Understanding this concept is crucial for learning Turkish grammar.',
  exceptions: [
    'Some compound words may not follow vowel harmony internally, but suffixes added to them still follow the rules based on the final vowel',
    'Some loanwords, especially from Arabic, Persian, and European languages, may contain both front and back vowels',
    'A few native Turkish suffixes like -yor (present continuous) and -ki (relative suffix) do not follow vowel harmony',
    'The progressive suffix -iyor always has "o" regardless of vowel harmony, but its initial vowel "i" may change to "ı", "u", or "ü" according to harmony'
  ]
};
