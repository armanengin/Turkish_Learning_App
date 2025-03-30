import { GrammarPattern } from '../types/grammar';

export const passiveVoicePattern: GrammarPattern = {
  id: 'passive-voice',
  slug: 'passive-voice',
  name: 'Passive Voice',
  difficulty: 'intermediate',
  category: 'voice',
  summary: 'The passive voice in Turkish is formed by adding the suffix -il/-ıl/-ul/-ül (after consonants) or -n/-in/-ın/-un/-ün (after vowels) to the verb stem.',
  formulas: [
    'Verb stem + -il/-ıl/-ul/-ül (after consonants)',
    'Verb stem + -n/-in/-ın/-un/-ün (after vowels)',
    'Then add tense and person markers'
  ],
  examples: [
    {
      turkish: 'Kitap okundu.',
      english: 'The book was read.',
      breakdown: {
        segments: [
          { text: 'Kitap', type: 'noun', meaning: 'book' },
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 'n', type: 'passive', meaning: 'passive marker' },
          { text: 'du', type: 'past-tense', meaning: 'past tense' }
        ]
      }
    },
    {
      turkish: 'Bu şehirde çok güzel binalar yapılıyor.',
      english: 'Very beautiful buildings are being built in this city.',
      breakdown: {
        segments: [
          { text: 'Bu', type: 'determiner', meaning: 'this' },
          { text: 'şehir', type: 'noun', meaning: 'city' },
          { text: 'de', type: 'locative-case', meaning: 'in (locative case)' },
          { text: 'çok', type: 'adverb', meaning: 'very' },
          { text: 'güzel', type: 'adjective', meaning: 'beautiful' },
          { text: 'bina', type: 'noun', meaning: 'building' },
          { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
          { text: 'yap', type: 'verb-root', meaning: 'make/build' },
          { text: 'ıl', type: 'passive', meaning: 'passive marker' },
          { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous' }
        ]
      }
    },
    {
      turkish: 'Kapı açılacak.',
      english: 'The door will be opened.',
      breakdown: {
        segments: [
          { text: 'Kapı', type: 'noun', meaning: 'door' },
          { text: 'aç', type: 'verb-root', meaning: 'open' },
          { text: 'ıl', type: 'passive', meaning: 'passive marker' },
          { text: 'acak', type: 'future-tense', meaning: 'future tense' }
        ]
      }
    },
    {
      turkish: 'Türkiye\'de çay çok sevilir.',
      english: 'Tea is much loved in Turkey.',
      breakdown: {
        segments: [
          { text: 'Türkiye', type: 'noun', meaning: 'Turkey' },
          { text: '\'de', type: 'locative-case', meaning: 'in (locative case)' },
          { text: 'çay', type: 'noun', meaning: 'tea' },
          { text: 'çok', type: 'adverb', meaning: 'much/very' },
          { text: 'sev', type: 'verb-root', meaning: 'love' },
          { text: 'il', type: 'passive', meaning: 'passive marker' },
          { text: 'ir', type: 'aorist', meaning: 'aorist tense (general truth)' }
        ]
      }
    }
  ],
  explanation: "The passive voice in Turkish is formed by adding specific suffixes to the verb stem. These suffixes follow vowel harmony rules. After consonants, the suffixes -il/-ıl/-ul/-ül are used. After vowels, the suffixes -n/-in/-ın/-un/-ün are used. The passive construction in Turkish is similar to English in that it shifts focus from the doer of the action to the action itself or the recipient of the action. In Turkish passive sentences, the agent (doer) is often omitted, but when mentioned, it's marked with the 'tarafından' (by) postposition.",
  usageNotes: [
    'The passive is commonly used when the doer of the action is unknown, unimportant, or obvious from context',
    'Turkish passive can be used with both transitive and intransitive verbs',
    'The passive suffix comes before tense and person markers',
    'When the verb stem ends in a vowel, use -n forms (-n/-in/-ın/-un/-ün)',
    'When the verb stem ends in a consonant, use -il forms (-il/-ıl/-ul/-ül)',
    'Passive forms follow vowel harmony rules'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Passive Suffix Forms',
      description: 'The different forms of the passive suffix based on vowel harmony and the final sound of the verb stem',
      data: {
        headers: ['Verb Ending', 'Last Vowel in Stem', 'Passive Suffix', 'Example'],
        rows: [
          ['Consonant', 'e, i', '-il', 'gel- → gelir (comes) → gelilir (is being come)'],
          ['Consonant', 'a, ı', '-ıl', 'yaz- → yazar (writes) → yazılır (is written)'],
          ['Consonant', 'o, u', '-ul', 'sor- → sorar (asks) → sorulur (is asked)'],
          ['Consonant', 'ö, ü', '-ül', 'gör- → görür (sees) → görülür (is seen)'],
          ['Vowel', 'e, i', '-n', 'ye- → yer (eats) → yenir (is eaten)'],
          ['Vowel', 'a, ı', '-n', 'başla- → başlar (starts) → başlanır (is started)'],
          ['Vowel', 'o, u', '-n', 'oku- → okur (reads) → okunur (is read)'],
          ['Vowel', 'ö, ü', '-n', 'söyle- → söyler (says) → söylenir (is said)']
        ],
        caption: 'Passive suffix forms according to vowel harmony and verb stem ending',
        footnote: 'Note that after a vowel, the passive marker is simply -n, but an additional buffer vowel may appear before tense markers.'
      }
    },
    {
      type: 'table',
      title: 'Active vs. Passive Sentences',
      description: 'Comparison of active and passive sentence structures in Turkish',
      data: {
        headers: ['Active', 'Passive', 'English Translation'],
        rows: [
          ['Ali mektubu yazdı.', 'Mektup (Ali tarafından) yazıldı.', 'Ali wrote the letter. / The letter was written (by Ali).'],
          ['Öğretmen soruyu soruyor.', 'Soru (öğretmen tarafından) soruluyor.', 'The teacher is asking the question. / The question is being asked (by the teacher).'],
          ['Biz evi temizleyeceğiz.', 'Ev (bizim tarafımızdan) temizlenecek.', 'We will clean the house. / The house will be cleaned (by us).'],
          ['Herkes bu filmi seviyor.', 'Bu film (herkes tarafından) seviliyor.', 'Everyone loves this movie. / This movie is loved (by everyone).']
        ],
        caption: 'Comparison between active and passive constructions in Turkish',
        footnote: 'The agent phrase with "tarafından" (by) is optional and often omitted in Turkish passive sentences.'
      }
    },
    {
      type: 'table',
      title: 'Passive in Different Tenses',
      description: 'Examples of passive voice in various tenses',
      data: {
        headers: ['Tense', 'Active Form', 'Passive Form', 'English Translation'],
        rows: [
          ['Present Continuous', 'Yazıyorum', 'Yazılıyor', 'I am writing / It is being written'],
          ['Simple Present', 'Yazarım', 'Yazılır', 'I write / It is written'],
          ['Past Tense', 'Yazdım', 'Yazıldı', 'I wrote / It was written'],
          ['Future Tense', 'Yazacağım', 'Yazılacak', 'I will write / It will be written'],
          ['Present Perfect', 'Yazmışım', 'Yazılmış', 'I have written / It has been written'],
          ['Conditional', 'Yazsam', 'Yazılsa', 'If I write / If it is written']
        ],
        caption: 'Passive forms across different tenses',
        footnote: 'The passive suffix always comes immediately after the verb stem, before any tense or person markers.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Bu kitap geçen yıl yaz___ (write - passive past tense).',
      correctAnswer: 'ıldı',
      alternatives: ['dı', 'ıldım', 'ıldın'],
      explanation: 'The passive form of "yazmak" (to write) in the past tense is "yazıldı" (was written).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence means "This door is opened every morning"?',
      correctAnswer: 'Bu kapı her sabah açılır.',
      alternatives: [
        'Bu kapı her sabah açar.',
        'Bu kapı her sabah açtı.',
        'Bu kapı her sabah açıyor.'
      ],
      explanation: 'The correct answer uses "açılır," which is the passive form of "açmak" (to open) in the simple present tense, indicating a habitual action.'
    },
    {
      type: 'matching',
      prompt: 'Match the active sentences with their passive equivalents',
      correctAnswer: 'All matches correctly made',
      pairs: [
        { item: 'Öğretmen dersi anlattı.', match: 'Ders anlatıldı.' },
        { item: 'İşçiler binayı yapıyorlar.', match: 'Bina yapılıyor.' },
        { item: 'Herkes bu filmi izleyecek.', match: 'Bu film izlenecek.' },
        { item: 'Annem yemeği pişirdi.', match: 'Yemek pişirildi.' }
      ],
      explanation: 'In passive sentences, the object of the active sentence becomes the subject, and the verb takes a passive suffix.'
    },
    {
      type: 'translation',
      prompt: 'Translate to Turkish: "This book was written in 2010."',
      correctAnswer: 'Bu kitap 2010\'da yazıldı.',
      alternatives: [
        'Bu kitap 2010 yılında yazıldı.',
        'Bu kitap 2010 senesinde yazıldı.'
      ],
      explanation: 'The passive form of "yazmak" (to write) in the past tense is "yazıldı" (was written).'
    }
  ],
  relatedPatterns: ['verb-conjugation', 'vowel-harmony', 'tense-markers'],
  notes: 'The passive voice is an essential grammatical structure in Turkish that allows speakers to shift focus from the doer of an action to the action itself or its recipient.',
  exceptions: [
    'Some verbs have irregular passive forms',
    'Verbs ending in "l" take the suffix -in/-ın/-un/-ün to avoid double "l" sounds',
    'The verb "yemek" (to eat) has the irregular passive form "yenilmek" rather than "yenmek"',
    'Some passive forms have acquired specific meanings different from the simple passive of the original verb'
  ]
};
