import { GrammarPattern } from '../types/grammar';

export const complexSubordinationPattern: GrammarPattern = {
  id: 'complex-subordination',
  slug: 'complex-subordination',
  name: 'Complex Subordination',
  difficulty: 'advanced',
  category: 'Syntax',
  summary: 'Turkish creates complex sentences through various subordination strategies, primarily using verbal nouns, participles, and converbs rather than conjunctions.',
  formulas: [
    'Verbal Noun: Verb stem + -mek/-mak (infinitive)',
    'Action Noun: Verb stem + -me/-ma (gerund)',
    'Converbs: Verb stem + -(y)ip, -(y)erek/-(y)arak, -(y)ince/-(y)ınca, etc.',
    'Conditional: Verb stem + -se/-sa'
  ],
  examples: [
    {
      turkish: 'Eve gidince, yemek yapacağım.',
      english: 'When I go home, I will cook.',
      breakdown: {
        segments: [
          { text: 'Ev', type: 'noun', meaning: 'house/home' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'gid', type: 'verb-root', meaning: 'go' },
          { text: 'ince', type: 'converb', meaning: 'when/after (temporal converb)' },
          { text: 'yemek', type: 'noun', meaning: 'food/meal' },
          { text: 'yap', type: 'verb-root', meaning: 'make/do' },
          { text: 'acağ', type: 'future-tense', meaning: 'future tense' },
          { text: 'ım', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Kitap okumayı seviyorum.',
      english: 'I like reading books.',
      breakdown: {
        segments: [
          { text: 'Kitap', type: 'noun', meaning: 'book' },
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 'ma', type: 'action-noun', meaning: 'gerund (reading)' },
          { text: 'yı', type: 'accusative-case', meaning: 'accusative case' },
          { text: 'sev', type: 'verb-root', meaning: 'like/love' },
          { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous' },
          { text: 'um', type: 'person-marker', meaning: '1st person singular' }
        ]
      }
    },
    {
      turkish: 'Hava güzel olursa, pikniğe gideriz.',
      english: 'If the weather is nice, we will go on a picnic.',
      breakdown: {
        segments: [
          { text: 'Hava', type: 'noun', meaning: 'weather' },
          { text: 'güzel', type: 'adjective', meaning: 'nice/beautiful' },
          { text: 'ol', type: 'verb-root', meaning: 'be/become' },
          { text: 'ur', type: 'aorist', meaning: 'aorist tense' },
          { text: 'sa', type: 'conditional-marker', meaning: 'conditional marker' },
          { text: 'pikniğ', type: 'noun', meaning: 'picnic' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'gid', type: 'verb-root', meaning: 'go' },
          { text: 'er', type: 'aorist', meaning: 'aorist tense' },
          { text: 'iz', type: 'person-marker', meaning: '1st person plural' }
        ]
      }
    },
    {
      turkish: 'Koşarak otobüse yetişti.',
      english: 'He/She caught the bus by running.',
      breakdown: {
        segments: [
          { text: 'Koş', type: 'verb-root', meaning: 'run' },
          { text: 'arak', type: 'converb', meaning: 'by (manner converb)' },
          { text: 'otobüs', type: 'noun', meaning: 'bus' },
          { text: 'e', type: 'dative-case', meaning: 'to (dative case)' },
          { text: 'yetiş', type: 'verb-root', meaning: 'catch/reach' },
          { text: 'ti', type: 'past-tense', meaning: 'past tense' }
        ]
      }
    }
  ],
  explanation: "Turkish creates complex sentences primarily through non-finite verb forms rather than conjunctions. These include verbal nouns (infinitives and gerunds), participles, and converbs. Unlike English, which uses subordinating conjunctions like 'when,' 'because,' or 'if,' Turkish attaches specific suffixes to verbs to create dependent clauses. This approach allows Turkish to express complex relationships between actions and events while maintaining the characteristic Subject-Object-Verb word order. The subordinate clause typically comes before the main clause, setting up the context or condition for the main action.",
  usageNotes: [
    'Subordinate clauses generally precede the main clause in Turkish',
    'Different converb suffixes express different relationships between actions (sequence, manner, cause, etc.)',
    'Verbal nouns can take case suffixes and function as subjects or objects',
    'The conditional suffix -se/-sa can attach to any tense to create different types of conditionals',
    'Turkish subordination is more concise than English, often using a single word where English would use a phrase or clause'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Common Converb Suffixes',
      description: 'Shows the most frequently used converb suffixes and their meanings',
      data: {
        headers: ['Suffix', 'Meaning', 'Example', 'English Translation'],
        rows: [
          ['-(y)ip', 'and, and then (sequential actions)', 'Markete gidip ekmek aldım.', 'I went to the market and bought bread.'],
          ['-(y)erek/-(y)arak', 'by, by means of (manner)', 'Koşarak geldi.', 'He/She came by running.'],
          ['-(y)ince/-(y)ınca', 'when, after (temporal)', 'Eve gelince beni ara.', 'Call me when you come home.'],
          ['-(y)ken', 'while, when (simultaneous)', 'Yemek yerken konuşma.', 'Don\'t talk while eating.'],
          ['-(y)e/-(y)a ... -(y)e/-(y)a', 'repeatedly, continuously', 'Düşüne düşüne çözüm buldu.', 'He/She found a solution by thinking repeatedly.'],
          ['-(y)eli/-(y)alı', 'since (temporal)', 'Buraya geleli üç yıl oldu.', 'It\'s been three years since I came here.']
        ],
        caption: 'Common converb suffixes in Turkish and their functions',
        footnote: 'Converbs create adverbial clauses that modify the main verb.'
      }
    },
    {
      type: 'table',
      title: 'Verbal Nouns and Their Uses',
      description: 'Shows different verbal noun forms and how they function in sentences',
      data: {
        headers: ['Form', 'Function', 'Example', 'English Translation'],
        rows: [
          ['-mek/-mak (infinitive)', 'Purpose, general reference to action', 'Yüzmek istiyorum.', 'I want to swim.'],
          ['-me/-ma (gerund)', 'Action as a noun, can take case suffixes', 'Koşmayı seviyorum.', 'I like running.'],
          ['-iş/-ış/-uş/-üş (verbal noun)', 'Manner or style of action', 'Onun konuşuşu çok güzel.', 'His/Her way of speaking is very nice.'],
          ['-dik/-dık/-duk/-dük + possessive', 'Completed action as noun', 'Geldiğimi biliyordu.', 'He/She knew that I came.'],
          ['-ecek/-acak + possessive', 'Future action as noun', 'Gideceğimi söyledim.', 'I said that I would go.']
        ],
        caption: 'Verbal noun forms in Turkish and their functions',
        footnote: 'Verbal nouns allow verbs to function as nouns in a sentence.'
      }
    },
    {
      type: 'table',
      title: 'Conditional Forms',
      description: 'Shows different conditional structures in Turkish',
      data: {
        headers: ['Type', 'Structure', 'Example', 'English Translation'],
        rows: [
          ['Real Conditional', 'Verb + -(i)rse/-(ı)rsa', 'Yağmur yağarsa, evde kalırız.', 'If it rains, we will stay at home.'],
          ['Unreal Conditional', 'Verb + -seydi/-saydı', 'Zengin olsaydım, dünyayı gezerdim.', 'If I were rich, I would travel the world.'],
          ['Past Conditional', 'Verb + -diyse/-dıysa', 'Söylediyse, doğrudur.', 'If he/she said it, it must be true.'],
          ['Future Conditional', 'Verb + -ecekse/-acaksa', 'Gelecekse, haber versin.', 'If he/she is going to come, let him/her inform us.']
        ],
        caption: 'Conditional structures in Turkish',
        footnote: 'The conditional suffix -se/-sa can attach to different tense markers to create various types of conditionals.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Okula git___, öğretmenle konuşacağım. (When I go to school, I will talk to the teacher.)',
      correctAnswer: 'tiğimde',
      alternatives: ['ince', 'tikten sonra', 'erken'],
      explanation: 'We need the temporal form "-diğimde" (when I) here: "gittiğimde" (when I go).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "By working hard, he succeeded"?',
      correctAnswer: 'Çok çalışarak başardı.',
      alternatives: [
        'Çok çalışınca başardı.',
        'Çok çalışıp başardı.',
        'Çok çalıştığı için başardı.'
      ],
      explanation: 'The converb suffix "-arak" indicates manner or means: "çalışarak" (by working).'
    },
    {
      type: 'matching',
      prompt: 'Match the Turkish subordination patterns with their English translations',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'Yemek yiyip uyudum.', match: 'I ate and then slept.' },
        { item: 'Müzik dinleyerek çalışıyor.', match: 'He/She is studying by listening to music.' },
        { item: 'Eve geldiğimde kimse yoktu.', match: 'When I came home, nobody was there.' },
        { item: 'Yağmur yağarsa gelmem.', match: 'If it rains, I won\'t come.' }
      ],
      explanation: 'Turkish uses different subordination strategies: "-ip" for sequential actions, "-erek" for manner, "-diğimde" for temporal relations, and "-rsa" for conditionals.'
    },
    {
      type: 'translation',
      prompt: 'Translate: I like swimming in the sea.',
      correctAnswer: 'Denizde yüzmeyi seviyorum.',
      alternatives: [
        'Denizde yüzmek hoşuma gidiyor.',
        'Denizde yüzmekten hoşlanıyorum.'
      ],
      explanation: 'We use the gerund form "-me" with the accusative case: "yüzmeyi" (swimming, as the object of "like").'
    }
  ],
  relatedPatterns: ['participles', 'conditionals', 'verb-conjugation'],
  notes: 'Complex subordination is one of the most challenging aspects of Turkish grammar for non-native speakers, but mastering it is essential for advanced communication.',
  exceptions: [
    'Some converb forms have irregular meanings in certain contexts',
    'In colloquial speech, Turkish speakers sometimes use conjunctions borrowed from other languages alongside native subordination strategies',
    'The conditional suffix -se/-sa behaves differently from other suffixes and follows special rules',
    'Some fixed expressions use subordination patterns that don\'t follow the general rules'
  ]
};
