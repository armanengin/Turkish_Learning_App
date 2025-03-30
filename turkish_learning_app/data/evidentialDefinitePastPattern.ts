import { GrammarPattern } from '../types/grammar';

export const evidentialDefinitePastPattern: GrammarPattern = {
  id: 'evidential-definite-past',
  slug: 'evidential-definite-past',
  name: 'Evidential Past vs. Definite Past',
  difficulty: 'intermediate',
  category: 'Verbs',
  summary: 'Turkish distinguishes between two past tenses: the definite past (-di) for witnessed or certain events, and the evidential past (-miş) for reported, inferred, or unwitnessed events.',
  formulas: [
    'Definite Past: Verb stem + -di/-dı/-du/-dü + personal ending',
    'Evidential Past: Verb stem + -miş/-mış/-muş/-müş + personal ending',
    'Combined Past: Verb stem + -miş/-mış/-muş/-müş + -ti/-tı/-tu/-tü + personal ending'
  ],
  examples: [
    {
      turkish: 'Dün sinemaya gittim.',
      english: 'I went to the cinema yesterday.',
      breakdown: {
        segments: [
          { text: 'Dün', type: 'adverb', meaning: 'yesterday' },
          { text: 'sinema', type: 'noun', meaning: 'cinema' },
          { text: 'ya', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'git', type: 'verb-root', meaning: 'go' },
          { text: 'ti', type: 'past-tense', meaning: 'definite past tense' },
          { text: 'm', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Ali gelmiş.',
      english: 'Ali has come. / Apparently, Ali came.',
      breakdown: {
        segments: [
          { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
          { text: 'gel', type: 'verb-root', meaning: 'come' },
          { text: 'miş', type: 'past-tense', meaning: 'evidential past tense' }
        ]
      }
    },
    {
      turkish: 'Yemek çok güzeldi.',
      english: 'The food was very good.',
      breakdown: {
        segments: [
          { text: 'Yemek', type: 'noun', meaning: 'food' },
          { text: 'çok', type: 'adverb', meaning: 'very' },
          { text: 'güzel', type: 'adjective', meaning: 'good/beautiful' },
          { text: 'di', type: 'past-tense', meaning: 'definite past tense' }
        ]
      }
    },
    {
      turkish: 'Hasta olmuşsun.',
      english: 'You have been sick. / I hear you were sick.',
      breakdown: {
        segments: [
          { text: 'Hasta', type: 'adjective', meaning: 'sick' },
          { text: 'ol', type: 'verb-root', meaning: 'be/become' },
          { text: 'muş', type: 'past-tense', meaning: 'evidential past tense' },
          { text: 'sun', type: 'person-marker', meaning: '2nd person singular' }
        ]
      }
    }
  ],
  explanation: "Turkish distinguishes between two past tenses based on the speaker's relationship to the information being conveyed. The definite past tense (-di/-dı/-du/-dü) is used for events that the speaker witnessed directly, experienced personally, or is certain about. The evidential past tense (-miş/-mış/-muş/-müş) is used for events the speaker didn't witness personally but learned about from others, inferred from evidence, or realized after the fact. This distinction allows Turkish speakers to explicitly indicate the source and reliability of their information, a feature not present in many other languages.",
  usageNotes: [
    'The definite past (-di) expresses certainty and direct experience',
    'The evidential past (-miş) expresses hearsay, inference, or surprise',
    'Both tenses follow vowel harmony and change form accordingly',
    'The evidential past can also express perfect aspect (completed action with current relevance)',
    'The combined past (-mişti) expresses a past action that was completed before another past action',
    'The choice between these tenses is determined by the speaker\'s relationship to the information, not by when the event occurred'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Definite Past Tense Conjugation',
      description: 'Shows how the definite past tense is conjugated with different pronouns',
      data: {
        headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)'],
        rows: [
          ['ben (I)', 'geldim', 'yaptım', 'gördüm'],
          ['sen (you)', 'geldin', 'yaptın', 'gördün'],
          ['o (he/she/it)', 'geldi', 'yaptı', 'gördü'],
          ['biz (we)', 'geldik', 'yaptık', 'gördük'],
          ['siz (you-pl)', 'geldiniz', 'yaptınız', 'gördünüz'],
          ['onlar (they)', 'geldiler', 'yaptılar', 'gördüler']
        ],
        caption: 'Definite past tense conjugation for different verbs',
        footnote: 'The definite past tense suffix changes according to vowel harmony: -di/-dı/-du/-dü.'
      }
    },
    {
      type: 'table',
      title: 'Evidential Past Tense Conjugation',
      description: 'Shows how the evidential past tense is conjugated with different pronouns',
      data: {
        headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)'],
        rows: [
          ['ben (I)', 'gelmişim', 'yapmışım', 'görmüşüm'],
          ['sen (you)', 'gelmişsin', 'yapmışsın', 'görmüşsün'],
          ['o (he/she/it)', 'gelmiş', 'yapmış', 'görmüş'],
          ['biz (we)', 'gelmişiz', 'yapmışız', 'görmüşüz'],
          ['siz (you-pl)', 'gelmişsiniz', 'yapmışsınız', 'görmüşsünüz'],
          ['onlar (they)', 'gelmişler', 'yapmışlar', 'görmüşler']
        ],
        caption: 'Evidential past tense conjugation for different verbs',
        footnote: 'The evidential past tense suffix changes according to vowel harmony: -miş/-mış/-muş/-müş.'
      }
    },
    {
      type: 'table',
      title: 'Usage Contexts for Past Tenses',
      description: 'Compares the contexts in which each past tense is used',
      data: {
        headers: ['Context', 'Definite Past (-di)', 'Evidential Past (-miş)'],
        rows: [
          ['Direct Experience', 'Dün yağmur yağdı. (It rained yesterday. - I saw it)', 'Dün yağmur yağmış. (It rained yesterday. - I didn\'t see it, but I see wet streets)'],
          ['Reporting News', 'Cumhurbaşkanı konuşma yaptı. (The president gave a speech. - I watched it)', 'Cumhurbaşkanı konuşma yapmış. (The president gave a speech. - I read about it)'],
          ['Personal States', 'Çok yoruldum. (I got very tired. - I felt it)', 'Çok yorulmuşum. (I\'ve gotten very tired. - I just realized it)'],
          ['Storytelling', 'Bir gün bir kral vardı... (Once there was a king... - fictional, but presented as fact)', 'Bir gün bir kral varmış... (Once there was a king... - traditional fairy tale opening)'],
          ['Surprise/Realization', 'Anahtarımı kaybettim! (I lost my key! - I knew it happened)', 'Anahtarımı kaybetmişim! (I\'ve lost my key! - I just realized it)']
        ],
        caption: 'Contexts for using definite vs. evidential past tense',
        footnote: 'The choice between tenses reflects the speaker\'s relationship to the information, not when the event occurred.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Dün akşam film seyret___. (I watched a movie last night.)',
      correctAnswer: 'tim',
      alternatives: ['mişim', 'miştim', 'dim'],
      explanation: 'Since this is a personal experience that the speaker is certain about, we use the definite past: "seyrettim".'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "Apparently, it rained last night (I didn\'t see it, but the ground is wet)"?',
      correctAnswer: 'Dün gece yağmur yağmış.',
      alternatives: [
        'Dün gece yağmur yağdı.',
        'Dün gece yağmur yağıyordu.',
        'Dün gece yağmur yağacakmış.'
      ],
      explanation: 'The evidential past "yağmış" indicates that the speaker didn\'t witness the rain but inferred it from evidence.'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish past tense sentences with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'Dün okula gittim.', match: 'I went to school yesterday. (definite past)' },
        { item: 'Çocukken çok kitap okumuşum.', match: 'Apparently I read many books when I was a child. (evidential past)' },
        { item: 'Sınava geç kaldı.', match: 'He/She was late for the exam. (definite past)' },
        { item: 'Yemek çok güzelmiş.', match: 'The food was very good, I heard/it seems. (evidential past)' }
      ],
      explanation: 'The definite past (-di) is used for witnessed events or facts, while the evidential past (-miş) is used for unwitnessed events, hearsay, or inference.'
    },
    {
      type: 'translation',
      prompt: 'Translate: I heard that you got a new job.',
      correctAnswer: 'Yeni bir iş bulmuşsun.',
      alternatives: [
        'Duydum ki yeni bir iş bulmuşsun.',
        'Yeni bir iş bulduğunu duydum.'
      ],
      explanation: 'Since this is information heard from others, we use the evidential past: "bulmuşsun" (you have found/apparently you found).'
    }
  ],
  relatedPatterns: ['verb-conjugation', 'vowel-harmony', 'tense-aspect'],
  notes: 'The distinction between definite and evidential past is one of the most characteristic features of Turkish and other Turkic languages, reflecting the importance placed on the source of information.',
  exceptions: [
    'In some dialects, the distinction between these tenses might be less strict',
    'In formal writing, the definite past is sometimes used for historical events even if the writer didn\'t witness them',
    'The evidential past can also express perfect aspect, similar to present perfect in English',
    'The combined past form (-mişti) is used for the pluperfect (past perfect) tense'
  ]
};
