import { GrammarPattern } from '../types/grammar';

export const complexTimeExpressionsPattern: GrammarPattern = {
  id: 'complex-time-expressions',
  slug: 'complex-time-expressions',
  name: 'Complex Time Expressions',
  difficulty: 'intermediate',
  category: 'Verbs',
  summary: 'Turkish offers sophisticated ways to express complex time relationships, including past continuous, compound past tenses, future continuous, and various aspects of completed, ongoing, and habitual actions.',
  formulas: [
    'Past Continuous: Verb stem + -(i)yor + past suffix (-du/-dı/-tu/-tı)',
    'Past Perfect (Pluperfect): Verb stem + -miş/-mış + past suffix (-ti/-tı/-tu/-tü)',
    'Future in the Past: Verb stem + -(y)ecek/-(y)acak + past suffix (-ti/-tı/-tu/-tü)',
    'Future Continuous: Verb stem + -(y)ecek/-(y)acak + ol- + -(i)yor'
  ],
  examples: [
    {
      turkish: 'Yemek yiyordu.',
      english: 'He/she was eating.',
      breakdown: {
        segments: [
          { text: 'Yemek', type: 'noun', meaning: 'food' },
          { text: 'yi', type: 'verb-root', meaning: 'eat' },
          { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous' },
          { text: 'du', type: 'past-tense', meaning: 'past tense marker' }
        ]
      }
    },
    {
      turkish: 'Gelmişti.',
      english: 'He/she had come.',
      breakdown: {
        segments: [
          { text: 'Gel', type: 'verb-root', meaning: 'come' },
          { text: 'miş', type: 'reported-past', meaning: 'reported/perfect past' },
          { text: 'ti', type: 'past-tense', meaning: 'past tense marker' }
        ]
      }
    },
    {
      turkish: 'Gidecekti.',
      english: 'He/she was going to go.',
      breakdown: {
        segments: [
          { text: 'Git', type: 'verb-root', meaning: 'go' },
          { text: 'ecek', type: 'future-tense', meaning: 'future' },
          { text: 'ti', type: 'past-tense', meaning: 'past tense marker' }
        ]
      }
    },
    {
      turkish: 'Çalışıyor olacağım.',
      english: 'I will be working.',
      breakdown: {
        segments: [
          { text: 'Çalış', type: 'verb-root', meaning: 'work' },
          { text: 'ıyor', type: 'present-cont-marker', meaning: 'continuous aspect' },
          { text: 'ol', type: 'auxiliary-verb', meaning: 'to be' },
          { text: 'acak', type: 'future-tense', meaning: 'future tense' },
          { text: 'ım', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    }
  ],
  explanation: "Turkish has a rich system for expressing complex time relationships. The past continuous (-(i)yordu) describes ongoing actions in the past. The past perfect or pluperfect (-mişti) indicates actions completed before a point in the past. The future in the past (-ecekti/-acaktı) expresses intentions or scheduled events that were planned in the past. The future continuous (-(y)ecek/-(y)acak + ol- + -(i)yor) describes actions that will be in progress at a future time. These compound tenses allow for precise expression of the timing and aspect of actions.",
  usageNotes: [
    'Past Continuous (-(i)yordu): "Kitap okuyordum" (I was reading a book) - used for ongoing actions in the past',
    'Past Perfect (-mişti): "Daha önce oraya gitmiştim" (I had gone there before) - for actions completed before another past action',
    'Future in the Past (-ecekti/-acaktı): "Sana yardım edecektim" (I was going to help you) - for planned actions in the past that may or may not have happened',
    'Future Continuous: "Yarın bu saatte çalışıyor olacağım" (I will be working at this time tomorrow) - for actions that will be ongoing at a specific future time',
    'Habitual Past: (-irdi/-ardı): "Her gün okula giderdi" (He used to go to school every day) - for regular/habitual actions in the past'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Complex Turkish Tenses',
      description: 'Formation and usage of compound tenses in Turkish',
      data: {
        headers: ['Tense', 'Formation', 'Example', 'Usage'],
        rows: [
          ['Past Continuous', 'stem + -(i)yor + -du/-dı', 'Geliyordu', 'Actions in progress in the past'],
          ['Past Perfect', 'stem + -miş/-mış + -ti/-tı', 'Gelmişti', 'Actions completed before a point in the past'],
          ['Future in the Past', 'stem + -(y)ecek/-(y)acak + -ti/-tı', 'Gelecekti', 'Planned future from a past perspective'],
          ['Future Continuous', 'stem + -(i)yor + olacak', 'Geliyor olacak', 'Actions that will be in progress in the future'],
          ['Habitual Past', 'stem + -(i)r/-(a)r + -di/-dı', 'Gelirdi', 'Regular/repeated actions in the past']
        ],
        caption: 'Formation and Usage of Compound Tenses in Turkish',
        footnote: 'Turkish compound tenses allow for precise expression of complex temporal relationships between actions.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Sen geldiğinde ben uyuyor_____. (When you came, I was sleeping.)',
      correctAnswer: 'dum',
      alternatives: ['um', 'muştum', 'acaktım'],
      explanation: 'To express an ongoing action in the past, we use the past continuous tense with -(i)yor + -du/-dı.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "I had already finished when you called"?',
      correctAnswer: 'Sen aradığında ben çoktan bitirmiştim.',
      alternatives: [
        'Sen aradığında ben bitirecektim.',
        'Sen aradığında ben bitiriyordum.',
        'Sen arayınca ben bitirdim.'
      ],
      explanation: 'For actions completed before another past action, we use the past perfect tense with -miş/-mış + -ti/-tı.'
    },
    {
      type: 'translation',
      prompt: 'Translate: I was going to call you tomorrow.',
      correctAnswer: 'Seni yarın arayacaktım.',
      alternatives: [
        'Yarın seni arayacağım.',
        'Seni yarın arıyordum.'
      ],
      explanation: 'For a future action planned in the past, we use the future in the past with -(y)ecek/-(y)acak + -ti/-tı.'
    },
    {
      type: 'error-correction',
      prompt: 'Correct this sentence if needed: "Yarın bu saatte toplantıda oluyorum."',
      correctAnswer: 'Yarın bu saatte toplantıda olacağım.',
      explanation: 'To talk about a future situation, we need the future tense, not the present continuous.'
    }
  ],
  relatedPatterns: ['present-continuous', 'past-tense', 'reported-past-tense', 'future-tense', 'conditionals'],
  notes: 'Compound tenses in Turkish allow speakers to express subtle distinctions in the timing, completion, and certainty of actions.',
  exceptions: [
    'In colloquial speech, the auxiliary verb "ol-" is sometimes omitted in certain compound forms',
    'The aorist past (-irdi/-ardı) can express both habitual past and a softer, less certain simple past',
    'The combination of aspects can sometimes create forms with no direct equivalent in English'
  ]
};
