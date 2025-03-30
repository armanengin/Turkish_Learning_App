import { GrammarPattern } from '../types/grammar';

export const imperativeSubjunctivePattern: GrammarPattern = {
  id: 'imperative-subjunctive',
  slug: 'imperative-subjunctive',
  name: 'Imperative and Subjunctive Moods',
  difficulty: 'intermediate',
  category: 'Verbs',
  summary: 'Turkish has several moods for expressing commands, requests, wishes, and possibilities, including the imperative mood for direct commands and the optative/subjunctive mood for wishes and suggestions.',
  formulas: [
    'Imperative (2nd person singular): Verb stem (no ending, just the bare verb)',
    'Imperative (other persons): Verb stem + person-specific endings',
    'Optative/Subjunctive: Verb stem + -(y)e/-(y)a + person endings',
    'Necessitative Subjunctive: Verb stem + -meli/-malı + person endings'
  ],
  examples: [
    {
      turkish: 'Gel!',
      english: 'Come! (singular, informal)',
      breakdown: {
        segments: [
          { text: 'Gel', type: 'verb-root', meaning: 'come (imperative)' }
        ]
      }
    },
    {
      turkish: 'Gelin!',
      english: 'Come! (plural or formal)',
      breakdown: {
        segments: [
          { text: 'Gel', type: 'verb-root', meaning: 'come' },
          { text: 'in', type: 'imperative-ending', meaning: 'plural/formal imperative' }
        ]
      }
    },
    {
      turkish: 'Gidelim.',
      english: 'Let\'s go.',
      breakdown: {
        segments: [
          { text: 'Git', type: 'verb-root', meaning: 'go' },
          { text: 'e', type: 'optative-marker', meaning: 'optative mood' },
          { text: 'lim', type: 'person-marker', meaning: '1st person plural' }
        ]
      }
    },
    {
      turkish: 'Keşke gelse.',
      english: 'If only he/she would come.',
      breakdown: {
        segments: [
          { text: 'Keşke', type: 'adverb', meaning: 'if only' },
          { text: 'gel', type: 'verb-root', meaning: 'come' },
          { text: 'se', type: 'optative-marker', meaning: 'optative/wish' }
        ]
      }
    }
  ],
  explanation: "Turkish has several ways to express commands, wishes, and suggestions. The imperative mood is used for direct commands and is the simplest verb form - often just the verb stem. The optative/subjunctive mood formed with the suffix -(y)e/-(y)a is used to express wishes, suggestions, and possibilities. The necessitative subjunctive with -meli/-malı expresses obligation or necessity. These moods provide a rich system for expressing different shades of requests, commands, and desires.",
  usageNotes: [
    'The imperative for 2nd person singular is simply the verb stem: "Gel!" (Come!)',
    'For formal or plural commands, add -in/-ın/-un/-ün: "Gelin!" (Come!)',
    'For 1st person plural suggestions ("let\'s"), use -(y)elim/-(y)alım: "Gidelim" (Let\'s go)',
    'For 3rd person commands/wishes, use -sin/-sın/-sun/-sün: "Gelsin" (Let him/her come)',
    'The optative with -e/-a can express wishes: "Yaşayasın!" (May you live!)'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Imperative and Optative Forms',
      description: 'How to form commands and wishes for different persons',
      data: {
        headers: ['Person', 'Imperative', 'Example', 'Optative', 'Example'],
        rows: [
          ['1st Singular', '(not used)', '', '-(y)eyim/-(y)ayım', 'Gideyim (Let me go)'],
          ['2nd Singular', 'stem only', 'Gel! (Come!)', '-(y)esin/-(y)asın', 'Gelesin (May you come)'],
          ['3rd Singular', '-sin/-sın/-sun/-sün', 'Gelsin! (Let him/her come!)', '-e/-a', 'Gele (May he/she come)'],
          ['1st Plural', '-(y)elim/-(y)alım', 'Gidelim! (Let\'s go!)', '-(y)elim/-(y)alım', 'Gidelim (May we go)'],
          ['2nd Plural', '-in/-ın/-un/-ün', 'Gelin! (Come!)', '-(y)esiniz/-(y)asınız', 'Gelesiniz (May you come)'],
          ['3rd Plural', '-sinler/-sınlar/-sunlar/-sünler', 'Gelsinler! (Let them come!)', '-eler/-alar', 'Geleler (May they come)']
        ],
        caption: 'Turkish Imperative and Optative Forms by Person',
        footnote: 'The optative is also used in many fixed expressions, such as "Kolay gelsin" (May it come easy = Good luck with your work)'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Lütfen kapıyı aç_____. (Please open the door - formal/plural)',
      correctAnswer: 'ın',
      alternatives: ['', 'sin', 'iniz'],
      explanation: 'For a formal or plural command, we add -ın to the verb "aç" according to vowel harmony.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which form expresses "Let\'s eat"?',
      correctAnswer: 'Yiyelim.',
      alternatives: [
        'Yemek.',
        'Ye!',
        'Yesin.'
      ],
      explanation: 'To express "let\'s" in Turkish, we use the optative suffix -elim/-alım with the first person plural.'
    },
    {
      type: 'translation',
      prompt: 'Translate: May he/she live long!',
      correctAnswer: 'Çok yaşasın!',
      alternatives: [
        'Uzun yaşasın!',
        'Yaşamalı!'
      ],
      explanation: 'For a wish about a third person, we use the third person singular optative form -sin/-sın/-sun/-sün.'
    },
    {
      type: 'error-correction',
      prompt: 'Correct this sentence if needed: "Sinemaya gitmek."',
      correctAnswer: 'Sinemaya gidelim.',
      explanation: 'The sentence is just an infinitive ("to go to the cinema"). To suggest "let\'s go to the cinema", we need the optative form "gidelim".'
    }
  ],
  relatedPatterns: ['necessity-obligation', 'conditionals', 'verb-suffixes'],
  notes: 'The imperative and optative moods are used frequently in everyday Turkish for polite requests, suggestions, and good wishes.',
  exceptions: [
    'Some common expressions use the optative in fixed ways: "Hoşça kal" (Stay well = Goodbye), "Görüşmek üzere" (Until we meet again)',
    'The negative imperative adds the negative suffix before the imperative ending: "Gitme!" (Don\'t go!), "Gitmeyin!" (Don\'t go! - plural/formal)',
    'In very formal contexts, -iniz/-ınız/-unuz/-ünüz can be used instead of -in/-ın/-un/-ün for second person plural'
  ]
};
