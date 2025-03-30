import { GrammarPattern } from '../types/grammar';

export const causativeVerbsPattern: GrammarPattern = {
  id: 'causative-verbs',
  slug: 'causative-verbs',
  name: 'Causative Verbs',
  difficulty: 'intermediate',
  category: 'voice',
  summary: 'Causative verbs in Turkish are formed by adding suffixes like -dir/-tir/-dır/-tır to indicate that the subject causes someone else to perform an action.',
  formulas: [
    'Verb stem + -dir/-tir/-dır/-tır (most common)',
    'Verb stem + -t (for some verbs ending in vowels)',
    'Verb stem + -ir/-ır/-ur/-ür (for some specific verbs)',
    'Then add tense and person markers'
  ],
  examples: [
    {
      turkish: 'Öğretmen öğrencilere kitabı okuttu.',
      english: 'The teacher made the students read the book.',
      breakdown: {
        segments: [
          { text: 'Öğretmen', type: 'noun', meaning: 'teacher' },
          { text: 'öğrenci', type: 'noun', meaning: 'student' },
          { text: 'ler', type: 'plural-marker', meaning: 'plural marker' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'kitab', type: 'noun', meaning: 'book' },
          { text: 'ı', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 't', type: 'causative', meaning: 'causative marker' },
          { text: 'tu', type: 'past-tense', meaning: 'past tense' }
        ]
      }
    },
    {
      turkish: 'Annesi çocuğa odayı temizlettiriyor.',
      english: 'The mother is making the child clean the room.',
      breakdown: {
        segments: [
          { text: 'Anne', type: 'noun', meaning: 'mother' },
          { text: 'si', type: 'possessive-marker', meaning: 'his/her' },
          { text: 'çocuğ', type: 'noun', meaning: 'child' },
          { text: 'a', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'oda', type: 'noun', meaning: 'room' },
          { text: 'yı', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'temizle', type: 'verb-root', meaning: 'clean' },
          { text: 't', type: 'causative', meaning: 'causative marker' },
          { text: 'tir', type: 'causative', meaning: 'second causative marker' },
          { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous' }
        ]
      }
    },
    {
      turkish: 'Saçlarımı berbere kestirdim.',
      english: 'I had my hair cut by the barber.',
      breakdown: {
        segments: [
          { text: 'Saç', type: 'noun', meaning: 'hair' },
          { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
          { text: 'ım', type: 'possessive-marker', meaning: 'my' },
          { text: 'ı', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'berber', type: 'noun', meaning: 'barber' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'kes', type: 'verb-root', meaning: 'cut' },
          { text: 'tir', type: 'causative', meaning: 'causative marker' },
          { text: 'di', type: 'past-tense', meaning: 'past tense' },
          { text: 'm', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Müdür sekreterine mektubu yazdıracak.',
      english: 'The manager will have the secretary write the letter.',
      breakdown: {
        segments: [
          { text: 'Müdür', type: 'noun', meaning: 'manager' },
          { text: 'sekreter', type: 'noun', meaning: 'secretary' },
          { text: 'in', type: 'possessive-marker', meaning: 'his/her' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'mektub', type: 'noun', meaning: 'letter' },
          { text: 'u', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'yaz', type: 'verb-root', meaning: 'write' },
          { text: 'dır', type: 'causative', meaning: 'causative marker' },
          { text: 'acak', type: 'future-tense', meaning: 'future tense' }
        ]
      }
    }
  ],
  explanation: "Causative verbs in Turkish indicate that the subject causes or makes someone else perform an action. They are formed by adding specific suffixes to the verb stem. The most common causative suffixes are -dir/-tir/-dır/-tır, which follow consonant harmony rules. Some verbs that end in vowels use the suffix -t instead. A few specific verbs use -ir/-ır/-ur/-ür. The causative construction in Turkish is similar to the English 'make/have someone do something.' In Turkish causative sentences, the person who is made to do the action is marked with the dative case (-(y)e/a).",
  usageNotes: [
    'The causative is used when someone causes or allows another person to do something',
    'The causative suffix comes immediately after the verb stem, before tense and person markers',
    'The person who is made to do the action is marked with the dative case (-(y)e/a)',
    'Double causatives are possible and indicate a chain of causation',
    'The choice of causative suffix depends on the verb\'s final sound and sometimes on the specific verb',
    'Causative forms follow consonant harmony rules'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Causative Suffix Forms',
      description: 'The different forms of the causative suffix based on consonant harmony and verb endings',
      data: {
        headers: ['Verb Ending', 'Causative Suffix', 'Example'],
        rows: [
          ['Vowel', '-t', 'oku- (read) → okut- (make read)'],
          ['Voiced consonant (b, c, d, g, ğ, j, l, m, n, r, v, y, z)', '-dir/-dır/-dur/-dür', 'yaz- (write) → yazdır- (make write)'],
          ['Voiceless consonant (ç, f, h, k, p, s, ş, t)', '-tir/-tır/-tur/-tür', 'yap- (do) → yaptır- (make do)'],
          ['Special cases', '-ir/-ır/-ur/-ür', 'piş- (cook) → pişir- (make cook)']
        ],
        caption: 'Causative suffix forms according to consonant harmony and verb endings',
        footnote: 'Some verbs have irregular causative forms that must be memorized.'
      }
    },
    {
      type: 'table',
      title: 'Regular Verbs vs. Causative Forms',
      description: 'Comparison of regular verbs and their causative counterparts',
      data: {
        headers: ['Regular Verb', 'Meaning', 'Causative Form', 'Causative Meaning'],
        rows: [
          ['gelmek', 'to come', 'getirmek', 'to bring (make come)'],
          ['gitmek', 'to go', 'götürmek', 'to take (make go)'],
          ['yemek', 'to eat', 'yedirmek', 'to feed (make eat)'],
          ['içmek', 'to drink', 'içirmek', 'to make drink'],
          ['görmek', 'to see', 'göstermek', 'to show (make see)'],
          ['ölmek', 'to die', 'öldürmek', 'to kill (make die)']
        ],
        caption: 'Regular verbs and their causative counterparts',
        footnote: 'Some causative forms have become lexicalized with specific meanings.'
      }
    },
    {
      type: 'table',
      title: 'Double Causatives',
      description: 'Examples of double causative constructions',
      data: {
        headers: ['Base Verb', 'First Causative', 'Double Causative', 'Meaning'],
        rows: [
          ['yapmak (to do)', 'yaptırmak (to have done)', 'yaptırtmak (to have someone have something done)', 'I had someone arrange for it to be done'],
          ['okumak (to read)', 'okutmak (to make read)', 'okutturmak (to have someone make someone read)', 'I had someone make someone read'],
          ['temizlemek (to clean)', 'temizletmek (to have cleaned)', 'temizlettirmek (to have someone have something cleaned)', 'I had someone arrange for it to be cleaned'],
          ['yazmak (to write)', 'yazdırmak (to have written)', 'yazdırtmak (to have someone have something written)', 'I had someone arrange for it to be written']
        ],
        caption: 'Examples of double causative constructions in Turkish',
        footnote: 'Double causatives indicate a chain of causation, where the subject causes someone to cause someone else to do something.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Öğretmen öğrencilere şiiri ezberle___ (make memorize).',
      correctAnswer: 'tti',
      alternatives: ['di', 'tirdi', 'tirtti'],
      explanation: 'The causative form of "ezberlemek" (to memorize) is "ezberletmek" (to make memorize). In the past tense, it becomes "ezberletti".'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "I will have my car repaired tomorrow"?',
      correctAnswer: 'Yarın arabamı tamir ettireceğim.',
      alternatives: [
        'Yarın arabamı tamir edeceğim.',
        'Yarın arabam tamir olacak.',
        'Yarın arabamı tamir ettim.'
      ],
      explanation: 'The correct answer uses "tamir ettireceğim," which is the causative form of "tamir etmek" (to repair) in the future tense.'
    },
    {
      type: 'matching',
      prompt: 'Match the regular verbs with their causative forms',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'gelmek (to come)', match: 'getirmek (to bring)' },
        { item: 'gitmek (to go)', match: 'götürmek (to take)' },
        { item: 'yemek (to eat)', match: 'yedirmek (to feed)' },
        { item: 'görmek (to see)', match: 'göstermek (to show)' }
      ],
      explanation: 'Some causative forms in Turkish have irregular forms that must be memorized.'
    },
    {
      type: 'translation',
      prompt: 'Translate to Turkish: "The mother made her child do homework."',
      correctAnswer: 'Anne çocuğuna ödev yaptırdı.',
      alternatives: [
        'Anne çocuğuna ödevini yaptırdı.',
        'Anne çocuğa ödev yaptırdı.'
      ],
      explanation: 'This sentence uses the causative form "yaptırdı" from "yapmak" (to do) and the dative case for "çocuk" (child) to indicate who was made to do the action.'
    }
  ],
  relatedPatterns: ['passive-voice', 'reflexive-verbs', 'verb-conjugation', 'consonant-harmony'],
  notes: 'Causative verbs are an essential grammatical structure in Turkish that allow speakers to express that they caused or arranged for an action to be performed by someone else.',
  exceptions: [
    'Some verbs have irregular causative forms that must be memorized',
    'The verbs "gelmek" (to come) and "gitmek" (to go) have the irregular causative forms "getirmek" (to bring) and "götürmek" (to take)',
    'Some verbs like "görmek" (to see) → "göstermek" (to show) have causative forms that have become lexicalized with specific meanings',
    'A few verbs use the causative suffix -ir/-ır/-ur/-ür instead of the more common forms',
    'Some causative forms have meanings that have evolved beyond the literal causative sense'
  ]
};
