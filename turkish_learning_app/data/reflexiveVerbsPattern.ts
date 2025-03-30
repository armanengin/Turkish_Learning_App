import { GrammarPattern } from '../types/grammar';

export const reflexiveVerbsPattern: GrammarPattern = {
  id: 'reflexive-verbs',
  slug: 'reflexive-verbs',
  name: 'Reflexive Verbs',
  difficulty: 'intermediate',
  category: 'voice',
  summary: 'Reflexive verbs in Turkish are formed by adding the suffix -in/-ın/-un/-ün to the verb stem, indicating that the subject performs an action on themselves.',
  formulas: [
    'Verb stem + -in/-ın/-un/-ün (following vowel harmony)',
    'Then add tense and person markers'
  ],
  examples: [
    {
      turkish: 'Ali her sabah yıkanır.',
      english: 'Ali washes himself every morning.',
      breakdown: {
        segments: [
          { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
          { text: 'her', type: 'determiner', meaning: 'every' },
          { text: 'sabah', type: 'noun', meaning: 'morning' },
          { text: 'yıka', type: 'verb-root', meaning: 'wash' },
          { text: 'n', type: 'reflexive', meaning: 'reflexive marker' },
          { text: 'ır', type: 'aorist', meaning: 'aorist tense (habitual action)' }
        ]
      }
    },
    {
      turkish: 'Ayşe aynada kendini gördü.',
      english: 'Ayşe saw herself in the mirror.',
      breakdown: {
        segments: [
          { text: 'Ayşe', type: 'noun', meaning: 'Ayşe (name)' },
          { text: 'ayna', type: 'noun', meaning: 'mirror' },
          { text: 'da', type: 'locative-case', meaning: 'in (locative case)' },
          { text: 'kendi', type: 'pronoun', meaning: 'self' },
          { text: 'ni', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'gör', type: 'verb-root', meaning: 'see' },
          { text: 'dü', type: 'past-tense', meaning: 'past tense' }
        ]
      }
    },
    {
      turkish: 'Çocuklar hemen giyindiler.',
      english: 'The children got dressed immediately.',
      breakdown: {
        segments: [
          { text: 'Çocuk', type: 'noun', meaning: 'child' },
          { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
          { text: 'hemen', type: 'adverb', meaning: 'immediately' },
          { text: 'giy', type: 'verb-root', meaning: 'dress/wear' },
          { text: 'in', type: 'reflexive', meaning: 'reflexive marker' },
          { text: 'di', type: 'past-tense', meaning: 'past tense' },
          { text: 'ler', type: 'person-marker', meaning: '3rd person plural' }
        ]
      }
    },
    {
      turkish: 'Toplantıdan önce hazırlanıyorum.',
      english: 'I am preparing myself before the meeting.',
      breakdown: {
        segments: [
          { text: 'Toplantı', type: 'noun', meaning: 'meeting' },
          { text: 'dan', type: 'ablative-case', meaning: 'from (ablative case)' },
          { text: 'önce', type: 'postposition', meaning: 'before' },
          { text: 'hazırla', type: 'verb-root', meaning: 'prepare' },
          { text: 'n', type: 'reflexive', meaning: 'reflexive marker' },
          { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous' },
          { text: 'um', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    }
  ],
  explanation: "Reflexive verbs in Turkish indicate that the subject performs an action on themselves. They are formed by adding the suffix -in/-ın/-un/-ün to the verb stem, following vowel harmony rules. This suffix transforms a transitive verb (one that takes an object) into a verb where the subject and object are the same entity. Turkish also has the reflexive pronoun 'kendi' (self) which can be used with possessive suffixes (kendim, kendin, etc.) to emphasize the reflexive nature of an action, but the reflexive verb form itself is sufficient to express this meaning.",
  usageNotes: [
    'The reflexive suffix -in/-ın/-un/-ün follows vowel harmony rules',
    'Reflexive verbs often describe personal care actions (washing, dressing, etc.)',
    'Some verbs have acquired specific meanings in their reflexive forms',
    'The reflexive suffix comes immediately after the verb stem, before tense and person markers',
    'Not all verbs can take a reflexive form - it depends on whether the action can logically be performed on oneself',
    'Some reflexive verbs have meanings that have evolved beyond the literal reflexive sense'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Reflexive Suffix Forms',
      description: 'The different forms of the reflexive suffix based on vowel harmony',
      data: {
        headers: ['Last Vowel in Stem', 'Reflexive Suffix', 'Example'],
        rows: [
          ['e, i', '-in', 'sev- (love) → sevin- (be pleased, rejoice)'],
          ['a, ı', '-ın', 'sakla- (hide something) → saklan- (hide oneself)'],
          ['o, u', '-un', 'sor- (ask) → sorun- (pretend to ask, question oneself)'],
          ['ö, ü', '-ün', 'söyle- (tell) → söylen- (mutter to oneself, grumble)']
        ],
        caption: 'Reflexive suffix forms according to vowel harmony',
        footnote: 'The reflexive suffix changes according to the last vowel in the verb stem, following the rules of vowel harmony.'
      }
    },
    {
      type: 'table',
      title: 'Regular Verbs vs. Reflexive Forms',
      description: 'Comparison of regular verbs and their reflexive counterparts',
      data: {
        headers: ['Regular Verb', 'Meaning', 'Reflexive Form', 'Reflexive Meaning'],
        rows: [
          ['yıkamak', 'to wash (something)', 'yıkanmak', 'to wash oneself'],
          ['giydirmek', 'to dress (someone)', 'giyinmek', 'to get dressed'],
          ['hazırlamak', 'to prepare (something)', 'hazırlanmak', 'to prepare oneself'],
          ['savunmak', 'to defend (something)', 'savunmak', 'to defend oneself'],
          ['göstermek', 'to show (something)', 'görünmek', 'to appear, to be seen'],
          ['taramak', 'to comb (something)', 'taranmak', 'to comb one\'s hair']
        ],
        caption: 'Regular verbs and their reflexive counterparts',
        footnote: 'Note that some reflexive forms have meanings that have evolved beyond the literal reflexive sense.'
      }
    },
    {
      type: 'table',
      title: 'Using "Kendi" with Reflexive Verbs',
      description: 'Examples of using the reflexive pronoun "kendi" with reflexive verbs for emphasis',
      data: {
        headers: ['Turkish', 'English Translation', 'Notes'],
        rows: [
          ['Ayşe yıkandı.', 'Ayşe washed herself.', 'Basic reflexive form'],
          ['Ayşe kendini yıkadı.', 'Ayşe washed herself.', 'Using reflexive pronoun with regular verb'],
          ['Ayşe kendini aynada gördü.', 'Ayşe saw herself in the mirror.', 'Reflexive pronoun as direct object'],
          ['Kendime yeni bir gömlek aldım.', 'I bought myself a new shirt.', 'Reflexive pronoun in dative case'],
          ['Kendi kendime konuşuyordum.', 'I was talking to myself.', 'Doubled reflexive for emphasis']
        ],
        caption: 'Different ways of expressing reflexive actions in Turkish',
        footnote: 'The reflexive pronoun "kendi" can be used with or without reflexive verb forms, depending on emphasis and context.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Sabah erkenden kalk___ ve işe gittim. (get up - reflexive past tense)',
      correctAnswer: 'ındım',
      alternatives: ['tım', 'dım', 'andım'],
      explanation: 'The reflexive form of "kalkmak" (to get up) is "kalkmak" itself, but with the meaning of "getting oneself up." The past tense first person singular form is "kalktım."'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "She is getting dressed for the party"?',
      correctAnswer: 'Parti için giyiniyor.',
      alternatives: [
        'Parti için giyiyor.',
        'Parti için giydi.',
        'Parti için giydirildi.'
      ],
      explanation: 'The correct answer uses "giyiniyor," which is the reflexive form of "giymek" (to wear) in the present continuous tense.'
    },
    {
      type: 'matching',
      prompt: 'Match the regular verbs with their reflexive forms',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'yıkamak (to wash)', match: 'yıkanmak (to wash oneself)' },
        { item: 'hazırlamak (to prepare)', match: 'hazırlanmak (to prepare oneself)' },
        { item: 'saklamak (to hide)', match: 'saklanmak (to hide oneself)' },
        { item: 'taramak (to comb)', match: 'taranmak (to comb one\'s hair)' }
      ],
      explanation: 'Reflexive verbs are formed by adding the suffix -in/-ın/-un/-ün to the verb stem, following vowel harmony rules.'
    },
    {
      type: 'translation',
      prompt: 'Translate to Turkish: "I look at myself in the mirror every morning."',
      correctAnswer: 'Her sabah aynada kendime bakıyorum.',
      alternatives: [
        'Her sabah aynada kendime bakarım.',
        'Her sabah kendimi aynada görüyorum.'
      ],
      explanation: 'This sentence uses the reflexive pronoun "kendime" (to myself) with the verb "bakmak" (to look at).'
    }
  ],
  relatedPatterns: ['passive-voice', 'causative-verbs', 'verb-conjugation', 'vowel-harmony'],
  notes: 'Reflexive verbs are an important aspect of Turkish grammar that allow speakers to express actions performed on oneself without needing additional pronouns.',
  exceptions: [
    'Some verbs are inherently reflexive and don\'t have a non-reflexive counterpart',
    'Some reflexive forms have meanings that have evolved beyond the literal reflexive sense',
    'The verb "görünmek" (to appear) is reflexive in form but doesn\'t always have a reflexive meaning',
    'Some verbs use the reflexive form to express passive meaning',
    'The reflexive suffix can sometimes create reciprocal meaning (mutual action) rather than reflexive'
  ]
};
