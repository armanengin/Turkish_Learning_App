import { GrammarPattern } from '../types/grammar';

export const basicNegationPattern: GrammarPattern = {
  id: 'basic-negation',
  slug: 'basic-negation',
  name: 'Basic Negation',
  difficulty: 'beginner',
  category: 'Syntax',
  summary: 'Turkish has two main ways to form negation: using the suffix -me/-ma for verbs and the word "değil" for nouns, adjectives, and other non-verbal elements.',
  formulas: [
    'Verb Negation: Verb stem + -me/-ma (+ tense/aspect + person)',
    'Non-verbal Negation: Noun/Adjective + değil (+ person)',
    'Existential Negation: Noun + yok (instead of var)'
  ],
  examples: [
    {
      turkish: 'Ben Türkçe konuşmuyorum.',
      english: 'I don\'t speak Turkish.',
      breakdown: {
        segments: [
          { text: 'Ben', type: 'noun', meaning: 'I' },
          { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
          { text: 'konuş', type: 'verb-root', meaning: 'speak' },
          { text: 'mu', type: 'negation', meaning: 'negation suffix' },
          { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous' },
          { text: 'um', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'O öğrenci değil.',
      english: 'He/She is not a student.',
      breakdown: {
        segments: [
          { text: 'O', type: 'noun', meaning: 'he/she' },
          { text: 'öğrenci', type: 'noun', meaning: 'student' },
          { text: 'değil', type: 'negation', meaning: 'not (for non-verbs)' }
        ]
      }
    },
    {
      turkish: 'Evde kimse yok.',
      english: 'There is nobody at home.',
      breakdown: {
        segments: [
          { text: 'Ev', type: 'noun', meaning: 'house/home' },
          { text: 'de', type: 'locative-case', meaning: 'at/in (locative case)' },
          { text: 'kimse', type: 'noun', meaning: 'anybody/someone' },
          { text: 'yok', type: 'negation', meaning: 'not existing/absent' }
        ]
      }
    },
    {
      turkish: 'Kitabı okumadım.',
      english: 'I didn\'t read the book.',
      breakdown: {
        segments: [
          { text: 'Kitab', type: 'noun', meaning: 'book' },
          { text: 'ı', type: 'accusative-case', meaning: 'accusative case marker' },
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 'ma', type: 'negation', meaning: 'negation suffix' },
          { text: 'dı', type: 'past-tense', meaning: 'past tense' },
          { text: 'm', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    }
  ],
  explanation: "Turkish has distinct ways of forming negation depending on the type of sentence. For verbs, negation is formed by adding the suffix -me/-ma (following vowel harmony) directly after the verb stem and before any tense or person markers. For non-verbal predicates (nouns, adjectives, etc.), negation is formed using the word 'değil' after the predicate. For existential sentences (those with 'var' meaning 'there is/are'), negation is formed by replacing 'var' with 'yok' (meaning 'there isn't/aren't').",
  usageNotes: [
    'The negative suffix -me/-ma follows vowel harmony: -me after front vowels (e, i, ö, ü) and -ma after back vowels (a, ı, o, u)',
    'The negative word "değil" can take personal endings: değilim (I am not), değilsin (you are not), etc.',
    'Double negation is possible in Turkish and creates an emphatic positive meaning',
    'The word "hiç" (never/ever) is often used with negation to emphasize the negative statement',
    'Negative questions are formed by adding the question particle after the negation'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Verb Negation in Different Tenses',
      description: 'Shows how verb negation works across different tenses',
      data: {
        headers: ['Tense', 'Positive Form', 'Negative Form', 'Meaning'],
        rows: [
          ['Present Continuous', 'geliyorum', 'gelmiyorum', 'I am (not) coming'],
          ['Simple Present', 'gelirim', 'gelmem', 'I (don\'t) come'],
          ['Past Tense', 'geldim', 'gelmedim', 'I (didn\'t) come'],
          ['Future Tense', 'geleceğim', 'gelmeyeceğim', 'I will (not) come']
        ],
        caption: 'Negation patterns across different Turkish tenses',
        footnote: 'Note how the negative suffix -me/-ma comes directly after the verb stem and before tense markers.'
      }
    },
    {
      type: 'table',
      title: 'Non-verbal Negation with "değil"',
      description: 'Shows how non-verbal negation works with different types of predicates',
      data: {
        headers: ['Type', 'Positive Form', 'Negative Form', 'Meaning'],
        rows: [
          ['Noun Predicate', 'O öğretmen.', 'O öğretmen değil.', 'He/She is (not) a teacher.'],
          ['Adjective Predicate', 'Hava sıcak.', 'Hava sıcak değil.', 'The weather is (not) hot.'],
          ['Location', 'Kitap masada.', 'Kitap masada değil.', 'The book is (not) on the table.'],
          ['With Personal Ending', 'Hastayım.', 'Hasta değilim.', 'I am (not) sick.']
        ],
        caption: 'Non-verbal negation patterns using "değil"',
        footnote: 'The word "değil" follows the predicate and can take personal endings.'
      }
    },
    {
      type: 'table',
      title: 'Existential Negation with "yok"',
      description: 'Shows how existential negation works',
      data: {
        headers: ['Positive Form (var)', 'Negative Form (yok)', 'Meaning'],
        rows: [
          ['Evde birisi var.', 'Evde birisi yok.', 'There is (not) someone at home.'],
          ['Zamanım var.', 'Zamanım yok.', 'I have (don\'t have) time.'],
          ['Arabası var.', 'Arabası yok.', 'He/She has (doesn\'t have) a car.'],
          ['Burada kafe var.', 'Burada kafe yok.', 'There is (not) a cafe here.']
        ],
        caption: 'Existential negation patterns using "yok" instead of "var"',
        footnote: '"Var" and "yok" are used to express existence/possession and its negation.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Ben kahve iç___. (I don\'t drink coffee.)',
      correctAnswer: 'mem',
      alternatives: ['miyorum', 'medim', 'meyeceğim'],
      explanation: 'For the simple present tense negative, we use the verb stem + negative suffix + person ending: içmem.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to say "I am not a doctor"?',
      correctAnswer: 'Ben doktor değilim.',
      alternatives: [
        'Ben doktorum değil.',
        'Ben değilim doktor.',
        'Ben doktor değil.'
      ],
      explanation: 'For non-verbal negation, "değil" follows the predicate and takes the personal ending: doktor değilim.'
    },
    {
      type: 'translation',
      prompt: 'Translate: They don\'t have any money.',
      correctAnswer: 'Onların parası yok.',
      alternatives: [
        'Onlar para yok.',
        'Onların para değil.'
      ],
      explanation: 'To express lack of possession, we use the possessive construction with "yok": Onların parası yok.'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish negative sentences with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'Gelmiyorum.', match: 'I am not coming.' },
        { item: 'Anlamadım.', match: 'I did not understand.' },
        { item: 'Yapmayacağız.', match: 'We will not do it.' },
        { item: 'Bilmiyor.', match: 'He/She does not know.' }
      ],
      explanation: 'Turkish negation is formed by adding the suffix -me/-ma to the verb stem, before tense and person markers.'
    }
  ],
  relatedPatterns: ['vowel-harmony', 'verb-conjugation', 'question-formation'],
  notes: 'Negation is a fundamental aspect of Turkish grammar and is relatively straightforward once you understand the three main patterns.',
  exceptions: [
    'The verb "bilmek" (to know) has an irregular negative form in the simple present: "bilmem" (I don\'t know)',
    'Some expressions use double negation for emphasis, which actually creates a positive meaning',
    'The word "hiç" (never/ever) is often used with negation but doesn\'t create double negation',
    'In some dialects, the negative suffix might be pronounced as "-mi/-mı" instead of "-me/-ma" in rapid speech'
  ]
};
