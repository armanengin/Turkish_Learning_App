import { GrammarPattern, ExampleSentence, VisualAidType, WordSegmentType, GrammarDifficulty, GrammarCategory } from '../types/grammar';
import { additionalPatterns } from './additionalPatterns';

// Define the base grammar patterns
const baseGrammarPatterns: GrammarPattern[] = [
  // SECTION 1: Alphabet and Pronunciation
  {
    id: 'turkish-alphabet',
    slug: 'turkish-alphabet',
    name: 'Turkish Alphabet and Special Characters',
    difficulty: 'beginner',
    category: 'alphabet-pronunciation',
    categories: ['alphabet', 'pronunciation'],
    summary: 'Learn the Turkish alphabet, including unique letters and their pronunciation.',
    explanation: 'The modern Turkish alphabet consists of 29 letters (21 consonants and 8 vowels) and uses the Latin script with a few modifications. It was introduced in 1928 as part of Atatürk\'s reforms to replace the Ottoman Turkish script. Turkish pronunciation is largely phonetic, meaning words are pronounced as they are written.',
    examples: [
      {
        turkish: 'ç - çay',
        english: 'ch - tea',
        breakdown: {
          segments: [
            { text: 'ç', type: 'verb-stem', meaning: 'pronounced as "ch" in "chair"' },
            { text: 'ay', type: 'noun', meaning: 'remainder of the word "tea"' }
          ]
        }
      },
      {
        turkish: 'ğ - dağ',
        english: 'silent g - mountain',
        breakdown: {
          segments: [
            { text: 'd', type: 'verb-stem', meaning: 'd sound' },
            { text: 'a', type: 'verb-stem', meaning: 'a vowel' },
            { text: 'ğ', type: 'verb-stem', meaning: 'soft g - often elongates the preceding vowel' }
          ]
        }
      }
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Turkish Alphabet Pronunciation Guide',
        description: 'Full chart showing all 29 letters with pronunciation examples'
      }
    ],
    commonErrors: [
      'Pronouncing "c" as in English instead of as "j" in "jam"',
      'Pronouncing "ç" as "c" instead of as "ch" in "chair"',
      'Pronouncing "ğ" as a hard "g" instead of softly or silently',
      'Pronouncing "ı" (undotted i) like "i" (dotted i) instead of as a schwa sound'
    ]
  },
  
  // SECTION 2: Possessives
  {
    id: 'possessive-suffixes',
    slug: 'possessive-suffixes',
    name: 'Possessive Suffixes',
    difficulty: 'beginner',
    category: 'possessives',
    categories: ['possessives', 'suffixes'],
    summary: 'Possessive suffixes in Turkish indicate ownership and attach directly to the noun being possessed.',
    formulas: [
      'Noun + possessive suffix (-(i)m/-(i)n/-(s)i/-(i)miz/-(i)niz/-(s)i)',
      'Noun + -(ı)m/-(ı)n/-(s)ı/-(ı)mız/-(ı)nız/-(s)ı (back vowel harmony)',
      'Noun + -(u)m/-(u)n/-(s)u/-(u)muz/-(u)nuz/-(s)u (rounded back vowel harmony)',
      'Noun + -(ü)m/-(ü)n/-(s)ü/-(ü)müz/-(ü)nüz/-(s)ü (rounded front vowel harmony)'
    ],
    explanation: 'Possessive suffixes in Turkish attach directly to the noun and indicate ownership or belonging. These suffixes change based on vowel harmony rules and the person they refer to. When a noun ends in a vowel, a buffer consonant (typically "s" for third person) is inserted before the possessive suffix.',
    examples: [
      {
        turkish: 'evim',
        english: 'my house',
        breakdown: {
          segments: [
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'im', type: 'possessive-marker', meaning: 'my (1st person singular possessive)' }
          ]
        }
      },
      {
        turkish: 'kalemen',
        english: 'your pencil',
        breakdown: {
          segments: [
            { text: 'kalem', type: 'noun', meaning: 'pencil' },
            { text: 'en', type: 'possessive-marker', meaning: 'your (2nd person singular possessive)' }
          ]
        }
      },
      {
        turkish: 'arabası',
        english: 'his/her car',
        breakdown: {
          segments: [
            { text: 'araba', type: 'noun', meaning: 'car' },
            { text: 's', type: 'buffer', meaning: 'buffer consonant (inserted when noun ends in vowel)' },
            { text: 'ı', type: 'possessive-marker', meaning: 'his/her (3rd person singular possessive)' }
          ]
        }
      },
      {
        turkish: 'köpeklerimiz',
        english: 'our dogs',
        breakdown: {
          segments: [
            { text: 'köpek', type: 'noun', meaning: 'dog' },
            { text: 'ler', type: 'plural-marker', meaning: 'plural marker' },
            { text: 'imiz', type: 'possessive-marker', meaning: 'our (1st person plural possessive)' }
          ]
        }
      },
      {
        turkish: 'telefonunuz',
        english: 'your phone',
        breakdown: {
          segments: [
            { text: 'telefon', type: 'noun', meaning: 'phone' },
            { text: 'unuz', type: 'possessive-marker', meaning: 'your (2nd person plural possessive)' }
          ]
        }
      },
      {
        turkish: 'evleri',
        english: 'their house/houses',
        breakdown: {
          segments: [
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'leri', type: 'possessive-marker', meaning: 'their (3rd person plural possessive) or his/her houses' }
          ]
        }
      }
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Possessive Suffix Chart',
        description: 'Chart showing all possessive suffixes with examples for different vowel harmony patterns'
      }
    ],
    commonErrors: [
      'Using incorrect vowel harmony with possessive suffixes',
      'Forgetting to add the buffer consonant "s" for third person when the noun ends in a vowel',
      'Confusion between 3rd person possessive and plural possessive (evleri can mean "their house" or "his/her houses")',
      'Placing the possessive suffix before the plural suffix (incorrect order)',
      'Using the wrong consonant when a buffer is needed'
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Bu benim ______. (ev - house)',
        correctAnswer: 'evim',
        explanation: 'The 1st person singular possessive suffix -im is added to "ev" to form "my house".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which is the correct form for "our dog"?',
        correctAnswer: 'köpeğimiz',
        alternatives: ['köpekim', 'köpekimiz', 'köpekiz'],
        explanation: 'The 1st person plural possessive suffix -imiz is added to "köpek", which becomes "köpeğimiz" with the consonant shift.'
      },
      {
        type: 'match-pairs',
        prompt: 'Match the Turkish possessive forms with their English equivalents:',
        correctAnswer: 'evim:my house|evin:your house|evi:his/her house|evimiz:our house|eviniz:your (plural) house|evleri:their houses',
        explanation: 'Each Turkish possessive form corresponds to a specific English possessive pronoun + noun combination.'
      },
      {
        type: 'translation',
        prompt: 'Translate to Turkish: "This is their house."',
        correctAnswer: 'Bu onların evi.',
        alternatives: ['Bu onların evidir.', 'Bu evleri.'],
        explanation: 'To say "their house", we use the 3rd person plural possessive suffix -leri with ev, or use the genitive onların with 3rd person singular possessive evi.'
      }
    ]
  },
  {
    id: 'future-tense',
    slug: 'future-tense',
    name: 'Future Tense (-ecek/-acak)',
    difficulty: 'beginner',
    category: 'verb-tenses',
    categories: ['verb-tenses', 'future-tense', 'basic-grammar'],
    summary: 'Expressing future actions and intentions using the -ecek/-acak suffix.',
    explanation: 'The Turkish future tense, formed with the suffix -ecek/-acak, is used to express actions that will happen in the future. It\'s similar to the English "will" or "going to" constructions. This tense indicates planned, intended, or predicted future events.',
    formulas: [
      'verb stem + -ecek/acak + personal ending',
      'Two-way vowel harmony: -ecek after front vowels (e, i, ö, ü), -acak after back vowels (a, ı, o, u)',
      'Personal endings: -im (I), -sin (you), - (he/she/it), -iz (we), -siniz (you pl.), -ler (they)'
    ],
    examples: [
      {
        turkish: 'geleceğim',
        english: 'I will come',
        breakdown: {
          segments: [
            { text: 'gel', type: 'verb-root', meaning: 'come' },
            { text: 'ecek', type: 'future-tense', meaning: 'future tense marker' },
            { text: 'im', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'yapacaksın',
        english: 'You will do/make',
        breakdown: {
          segments: [
            { text: 'yap', type: 'verb-root', meaning: 'do/make' },
            { text: 'acak', type: 'future-tense', meaning: 'future tense marker' },
            { text: 'sın', type: 'personal-ending', meaning: '2nd person singular' }
          ]
        }
      },
      {
        turkish: 'görecek',
        english: 'He/she will see',
        breakdown: {
          segments: [
            { text: 'gör', type: 'verb-root', meaning: 'see' },
            { text: 'ecek', type: 'future-tense', meaning: 'future tense marker' }
          ]
        }
      },
      {
        turkish: 'gideceğiz',
        english: 'We will go',
        breakdown: {
          segments: [
            { text: 'git', type: 'verb-root', meaning: 'go' },
            { text: 'ecek', type: 'future-tense', meaning: 'future tense marker' },
            { text: 'iz', type: 'personal-ending', meaning: '1st person plural' }
          ]
        }
      }
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Future Tense Conjugation',
        description: 'Full conjugation table showing how the future tense changes with different pronouns and verb types',
        data: {
          headers: ['Verb Stem', '1st Person Singular', '2nd Person Singular', '3rd Person Singular', '1st Person Plural', '2nd Person Plural', '3rd Person Plural'],
          rows: [
            ['gel-', 'geleceğim', 'geleceksin', 'gelecek', 'geleceğiz', 'geleceksiniz', 'gelecekler'],
            ['yap-', 'yapacağım', 'yapacaksın', 'yapacak', 'yapacağız', 'yapacaksınız', 'yapacaklar'],
            ['gör-', 'göreceğim', 'görecek', 'görecek', 'göreceğiz', 'görecek', 'görecekler'],
            ['git-', 'gideceğim', 'gideceksin', 'gidecek', 'gideceğiz', 'gideceksiniz', 'gidecekler']
          ],
          caption: 'Turkish Future Tense Conjugation',
          footnote: 'The future suffix -(y)ecek/-(y)acak follows vowel harmony rules. The buffer consonant -y- is used when the verb stem ends in a vowel.'
        }
      },
      {
        type: 'diagram',
        title: 'Future Time Expressions in Turkish',
        description: 'Visual guide to the various ways of expressing future in Turkish',
        data: {
          layout: 'timeline',
          nodes: [
            {
              id: 'now',
              label: 'NOW',
              highlight: true,
              position: 10,
              description: 'Present moment'
            },
            {
              id: 'imminent',
              label: 'IMMINENT',
              position: 30,
              description: 'About to happen',
              examples: ['Infinitive + üzere']
            },
            {
              id: 'near-future',
              label: 'NEAR FUTURE',
              position: 50,
              description: 'Soon, scheduled',
              examples: ['Present Continuous']
            },
            {
              id: 'distant-future',
              label: 'DISTANT FUTURE',
              position: 70,
              description: 'Later, unscheduled',
              examples: ['-(y)ecek/-(y)acak']
            },
            {
              id: 'conditional',
              label: 'CONDITIONAL',
              position: 90,
              description: 'Future possibilities',
              examples: ['-(y)ecek/-(y)acak + ise/conditional']
            }
          ],
          connections: [
            { from: 'now', to: 'imminent', label: 'just about to' },
            { from: 'now', to: 'near-future', label: 'soon' },
            { from: 'near-future', to: 'distant-future', label: 'later' },
            { from: 'distant-future', to: 'conditional', label: 'if...' }
          ]
        }
      }
    ],
    usageNotes: [
      'Used for actions that will occur in the future',
      'Can express intentions, plans, predictions, or promises',
      'Often used with time expressions like "yarın" (tomorrow), "gelecek haftaya" (next week)'
    ],
    exceptions: [
      'When a suffix starting with a vowel is added after the future tense marker, the final -k changes to -ğ (e.g., gelecek + im → geleceğim)',
      'Some verbs may undergo stem changes when adding the future tense suffix'
    ],
    commonErrors: [
      'Using the wrong vowel harmony variation (-ecek vs. -acak)',
      'Forgetting to change the final -k to -ğ when adding personal endings',
      'Confusing the future tense with the optative mood (-e/-a)'
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben yarın okula _______ (gitmek - to go)',
        correctAnswer: 'gideceğim',
        explanation: 'The verb "gitmek" (to go) has the stem "git-". The future tense suffix is "-ecek" (because "i" is a front vowel), and when we add the personal ending "-im", the k changes to ğ, resulting in "gideceğim".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which is the correct future tense form of "sen yazmak" (you to write)?',
        correctAnswer: 'sen yazacaksın',
        alternatives: ['sen yazeceksin', 'sen yazacağın', 'sen yazacakın'],
        explanation: 'The verb "yazmak" has the stem "yaz-". Since "a" is a back vowel, we use "-acak" as the future tense suffix, then we add "-sın" for "you", resulting in "yazacaksın".'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence: "Biz film izliyeceğiz." (We will watch a movie)',
        correctAnswer: 'Biz film izleyeceğiz.',
        explanation: 'The correct future tense form is "izleyeceğiz", not "izliyeceğiz".'
      },
      {
        type: 'sentence-building',
        prompt: 'Create a sentence using the future tense form of "okumak" (to read) in third person plural',
        correctAnswer: 'Onlar okuyacaklar.',
        alternatives: ['Okuyacaklar.', 'Kitap okuyacaklar.', 'Yarın okuyacaklar.'],
        explanation: 'The verb "okumak" has the stem "oku-". We add the future tense suffix "-yacak" (y acts as a buffer between vowels), then add "-lar" for "they", resulting in "okuyacaklar".'
      },
      {
        type: 'match-pairs',
        prompt: 'Match the verb stems with their correct future tense form (1st person singular):',
        correctAnswer: 'gel-:geleceğim|bak-:bakacağım|gör-:göreceğim|kal-:kalacağım',
        explanation: 'Each verb follows two-way vowel harmony for the future tense suffix (-ecek or -acak) and the personal ending. The k→ğ change occurs when adding the personal ending.'
      },
      {
        type: 'translation',
        prompt: 'Translate to Turkish: "You (plural) will speak Turkish."',
        correctAnswer: 'Türkçe konuşacaksınız.',
        alternatives: ['Siz Türkçe konuşacaksınız.', 'Türkçe konuşacaksınız.'],
        explanation: 'To express future actions, use the future tense suffix -ecek/-acak with the appropriate personal ending.'
      }
    ]
  },
  // Present Tense
  {
    id: 'present-continuous',
    slug: 'present-continuous',
    name: 'Present Continuous Tense (-iyor)',
    difficulty: 'beginner',
    category: 'verb-tenses',
    summary: 'The Turkish present continuous tense expresses actions happening now or around the current time period.',
    formula: 'Verb Stem + (-iyor) + Personal Ending',
    examples: [
      {
        turkish: 'Şu anda yemek yiyorum.',
        english: 'I am eating food right now.',
        breakdown: {
          segments: [
            { text: 'Şu anda', type: 'adverb', meaning: 'Right now' },
            { text: 'yemek', type: 'noun', meaning: 'food' },
            { text: 'yi', type: 'verb-root', meaning: 'eat' },
            { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ],
          notes: 'The verb yemek (to eat) has the stem ye-, to which we add the present continuous suffix -iyor (with vowel harmony) and the personal ending -um.'
        }
      },
      {
        turkish: 'Ali şimdi çalışıyor.',
        english: 'Ali is working now.',
        breakdown: {
          segments: [
            { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
            { text: 'şimdi', type: 'adverb', meaning: 'now' },
            { text: 'çalış', type: 'verb-root', meaning: 'work' },
            { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      },
      {
        turkish: 'Onlar Türkçe öğreniyorlar.',
        english: 'They are learning Turkish.',
        breakdown: {
          segments: [
            { text: 'Onlar', type: 'pronoun', meaning: 'they' },
            { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
            { text: 'öğren', type: 'verb-root', meaning: 'learn' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'lar', type: 'personal-ending', meaning: '3rd person plural' }
          ]
        }
      }
    ],
    explanation: 'The present continuous tense in Turkish is formed by adding the suffix -iyor to the verb stem, followed by the appropriate personal ending. It indicates actions that are happening at the time of speaking or around the present time period. The -iyor suffix follows vowel harmony rules, with variants -ıyor, -uyor, and -üyor depending on the last vowel of the verb stem.',
    usageNotes: [
      'Used for actions happening at the moment of speaking',
      'Also used for ongoing actions in the present time period (not necessarily at the exact moment)',
      'Can be used to express near future plans (like English "I am going to the store later")',
      'The buffer letter "y" is added when the verb stem ends in a vowel'
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben kitap ________ (okumak - to read).',
        correctAnswer: 'okuyorum',
        explanation: 'The verb "okumak" (to read) has the stem "oku-". We add the present continuous suffix "-yor" and the personal ending "-um" for "I", resulting in "okuyorum".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence correctly uses the present continuous tense?',
        correctAnswer: 'Şu anda yemek pişiriyorum.',
        alternatives: ['Şu anda yemek pişireceğim.', 'Şu anda yemek pişirdim.', 'Şu anda yemek pişiririm.'],
        explanation: 'The correct form is "pişiriyorum" (I am cooking), which uses the present continuous tense suffix "-iyor" with the personal ending "-um".'
      }
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Present Continuous Tense Conjugation',
        description: 'Conjugation of verbs in the present continuous tense with various pronouns',
        data: {
          headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)', 'olmak (to be)'],
          rows: [
            ['ben (I)', 'geliyorum', 'yapıyorum', 'görüyorum', 'oluyorum'],
            ['sen (you)', 'geliyorsun', 'yapıyorsun', 'görüyorsun', 'oluyorsun'],
            ['o (he/she/it)', 'geliyor', 'yapıyor', 'görüyor', 'oluyor'],
            ['biz (we)', 'geliyoruz', 'yapıyoruz', 'görüyoruz', 'oluyoruz'],
            ['siz (you-plural)', 'geliyorsunuz', 'yapıyorsunuz', 'görüyorsunuz', 'oluyorsunuz'],
            ['onlar (they)', 'geliyorlar', 'yapıyorlar', 'görüyorlar', 'oluyorlar']
          ],
          caption: 'Turkish Present Continuous Tense',
          footnote: 'Note how the vowel in -iyor changes based on vowel harmony with the verb stem.'
        }
      }
    ]
  },
  // Past Tense
  {
    id: 'past-tense',
    slug: 'past-tense',
    name: 'Definite Past Tense (-di)',
    difficulty: 'beginner',
    category: 'verb-tenses',
    summary: 'The Turkish definite past tense (-di) expresses actions that were completed in the past, with the speaker having witnessed the action.',
    formula: 'Verb Stem + (-di/-dı/-du/-dü) + Personal Ending',
    examples: [
      {
        turkish: 'Dün sinemaya gittim.',
        english: 'I went to the cinema yesterday.',
        breakdown: {
          segments: [
            { text: 'Dün', type: 'adverb', meaning: 'Yesterday' },
            { text: 'sinema', type: 'noun', meaning: 'cinema' },
            { text: 'ya', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'git', type: 'verb-root', meaning: 'go' },
            { text: 'ti', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Ayşe kitabı okudu.',
        english: 'Ayşe read the book.',
        breakdown: {
          segments: [
            { text: 'Ayşe', type: 'noun', meaning: 'Ayşe (name)' },
            { text: 'kitab', type: 'noun', meaning: 'book' },
            { text: 'ı', type: 'accusative-case', meaning: 'the (accusative case marker)' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'du', type: 'past-tense', meaning: 'past tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      }
    ],
    explanation: 'The definite past tense in Turkish is formed with the suffix -di/-dı/-du/-dü (following vowel harmony) and indicates actions that were completed in the past. This tense implies that the speaker witnessed or experienced the action directly. The negative form uses the negation suffix -me/-ma before the past tense suffix.',
    usageNotes: [
      'Used for actions completed in the past that the speaker witnessed or experienced',
      'The suffix follows vowel harmony rules (-di, -dı, -du, -dü)',
      'After voiceless consonants (p, ç, t, k, s, ş, h, f), the suffix becomes -ti, -tı, -tu, -tü',
      'Often used with time expressions like "dün" (yesterday), "geçen haftaya" (last week)'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Definite Past Tense Conjugation',
        description: 'Full conjugation table showing how the past tense changes with different pronouns',
        data: {
          headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)', 'olmak (to be)'],
          rows: [
            ['ben (I)', 'geldim', 'yaptım', 'gördüm', 'oldum'],
            ['sen (you)', 'geldin', 'yaptın', 'gördün', 'oldun'],
            ['o (he/she/it)', 'geldi', 'yaptı', 'gördü', 'oldu'],
            ['biz (we)', 'geldik', 'yaptık', 'gördük', 'olduk'],
            ['siz (you-plural)', 'geldiniz', 'yaptınız', 'gördünüz', 'oldunuz'],
            ['onlar (they)', 'geldiler', 'yaptılar', 'gördüler', 'oldular']
          ],
          caption: 'Turkish Definite Past Tense',
          footnote: 'The consonant in the suffix changes based on consonant harmony: -di after voiced consonants and vowels, -ti after voiceless consonants.'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Dün akşam ben film ________ (izlemek - to watch).',
        correctAnswer: 'izledim',
        explanation: 'The verb "izlemek" (to watch) has the stem "izle-". The past tense suffix is "-di" (because "e" is a front vowel), and we add the personal ending "-m" for "I", resulting in "izledim".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which is the correct past tense form of "koşmak" (to run) for "we"?',
        correctAnswer: 'koştuk',
        alternatives: ['koşduk', 'koştık', 'koşdık'],
        explanation: 'The verb "koşmak" has the stem "koş-". Since "ş" is a voiceless consonant, we use "-tu" as the past tense suffix (not "-du"), and add "-k" for "we", resulting in "koştuk".'
      }
    ]
  },
  {
    id: 'reported-past-tense',
    slug: 'reported-past-tense',
    name: 'Reported/Indefinite Past Tense (-miş)',
    difficulty: 'intermediate',
    category: 'Verbs',
    summary: 'The reported past tense is used to express actions that occurred in the past but were not directly witnessed by the speaker or for expressing surprise or inference.',
    formulas: [
      'Verb stem + -miş/mış/muş/müş + personal ending',
      'Negation: Verb stem + -me/-ma + -miş/mış/muş/müş + personal ending',
      'Question: Verb stem + -miş/mış/muş/müş + personal ending + mi/mı/mu/mü'
    ],
    examples: [
      {
        turkish: 'Ayşe İstanbul\'a gitmiş.',
        english: 'Apparently Ayşe went to Istanbul. / I heard that Ayşe went to Istanbul.',
        breakdown: {
          segments: [
            { text: 'Ayşe', type: 'noun', meaning: 'Ayşe (name)' },
            { text: 'İstanbul', type: 'noun', meaning: 'Istanbul (city)' },
            { text: 'a', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'git', type: 'verb-root', meaning: 'go' },
            { text: 'miş', type: 'past-tense', meaning: 'reported past tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      },
      {
        turkish: 'Çok güzel yemekler yapmışsın!',
        english: 'You have made very delicious meals! (I just discovered this)',
        breakdown: {
          segments: [
            { text: 'Çok', type: 'adverb', meaning: 'very' },
            { text: 'güzel', type: 'adjective', meaning: 'beautiful/delicious' },
            { text: 'yemek', type: 'noun', meaning: 'food/meal' },
            { text: 'ler', type: 'plural-marker', meaning: 'plural marker' },
            { text: 'yap', type: 'verb-root', meaning: 'make/do' },
            { text: 'mış', type: 'past-tense', meaning: 'reported past tense marker' },
            { text: 'sın', type: 'personal-ending', meaning: '2nd person singular' }
          ]
        }
      },
      {
        turkish: 'Kar yağmamış.',
        english: 'It apparently didn\'t snow. / I heard it didn\'t snow.',
        breakdown: {
          segments: [
            { text: 'Kar', type: 'noun', meaning: 'snow' },
            { text: 'yağ', type: 'verb-root', meaning: 'fall (for precipitation)' },
            { text: 'ma', type: 'negation', meaning: 'negation marker' },
            { text: 'mış', type: 'past-tense', meaning: 'reported past tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      }
    ],
    explanation: 'The reported past tense (also called inferential past or evidential past) is formed with the suffix -miş/-mış/-muş/-müş and indicates actions that the speaker did not witness directly. It is used for hearsay, inference, or expressing surprise at discovering something new. It contrasts with the definite past tense (-di/-dı/-du/-dü), which indicates directly witnessed events.',
    usageNotes: [
      'Used for events not directly witnessed or experienced by the speaker',
      'Used for reporting information learned from others (hearsay)',
      'Used to express surprise or new discoveries',
      'Used in storytelling, folk tales, and narratives',
      'The suffix follows vowel harmony rules (-miş, -mış, -muş, -müş)'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Reported Past Tense Conjugation',
        description: 'Full conjugation table showing how the reported past tense changes with different pronouns',
        data: {
          headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)', 'olmak (to be)'],
          rows: [
            ['ben (I)', 'gelmişim', 'yapmışım', 'görmüşüm', 'olmuşum'],
            ['sen (you)', 'gelmişsin', 'yapmışsın', 'görmüşsün', 'olmuşsun'],
            ['o (he/she/it)', 'gelmiş', 'yapmış', 'görmüş', 'olmuş'],
            ['biz (we)', 'gelmişiz', 'yapmışız', 'görmüşüz', 'olmuşuz'],
            ['siz (you-plural)', 'gelmişsiniz', 'yapmışsınız', 'görmüşsünüz', 'olmuşsunuz'],
            ['onlar (they)', 'gelmişler', 'yapmışlar', 'görmüşler', 'olmuşlar']
          ],
          caption: 'Turkish Reported Past Tense',
          footnote: 'The consonant in the suffix follows vowel harmony: -miş, -mış, -muş, -müş depending on the previous vowel.'
        }
      },
      {
        type: 'diagram',
        title: 'Uses of Reported Past Tense',
        description: 'Different situations where the reported past tense is used',
        data: {
          nodes: [
            { id: '1', label: 'Reported Past (-miş)', description: 'Central concept' },
            { id: '2', label: 'Hearsay', examples: ['Ali gelmiş (I heard Ali came)'] },
            { id: '3', label: 'Inference', examples: ['Yağmur yağmış (It must have rained - I see wet streets)'] },
            { id: '4', label: 'Surprise/Discovery', examples: ['Ne güzel olmuş! (How beautiful it has become!)'] },
            { id: '5', label: 'Stories/Tales', examples: ['Bir varmış bir yokmuş (Once upon a time)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'used for' },
            { from: '1', to: '3', label: 'used for' },
            { from: '1', to: '4', label: 'used for' },
            { from: '1', to: '5', label: 'used for' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ali dün çok çalış_____. (Based on what I heard)',
        correctAnswer: 'mış',
        alternatives: ['tı', 'acak'],
        explanation: 'When reporting information heard from others, we use the reported past tense suffix -miş/-mış/-muş/-müş.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence expresses surprise at a discovery?',
        correctAnswer: 'Kar yağmış! Her yer bembeyaz olmuş!',
        alternatives: [
          'Kar yağdı. Her yer bembeyaz oldu.',
          'Kar yağacak. Her yer bembeyaz olacak.',
          'Kar yağıyor. Her yer bembeyaz oluyor.'
        ],
        explanation: 'The reported past tense with -miş is used to express surprise at discovering something, like snow that fell while you were asleep.'
      },
      {
        type: 'translation',
        prompt: 'Translate: I heard that Ahmet got married.',
        correctAnswer: 'Ahmet evlenmiş.',
        alternatives: ['Duyduğuma göre Ahmet evlenmiş.', 'Ahmet\'in evlendiğini duydum.'],
        explanation: 'To express information that you heard from someone else, use the reported past tense with -miş.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Öğretmen geçen haftaya Ankara\'ya gitmiş."',
        correctAnswer: 'Öğretmen geçen haftaya Ankara\'ya gitmiş.',
        explanation: 'The sentence is already correct. It means "The teacher apparently went to Ankara last week." The reported past tense is used for information not directly witnessed.'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each sentence with its correct meaning:',
        correctAnswer: 'Kar yağdı.:I saw it snow.|Kar yağmış.:I heard/inferred it snowed.|Yemek yapmışsın!:I see you\'ve cooked food (surprise)!|Yemek yaptın.:I saw you cook food.',
        explanation: 'Sentences with -di/-dı/-du/-dü express directly witnessed events, while sentences with -miş/-mış/-muş/-müş express events not witnessed directly or discoveries.'
      }
    ],
    relatedPatterns: ['past-tense', 'present-perfect'],
    notes: 'The reported past tense is a distinctive feature of Turkish that shows the source of information. When combined with other tenses, it can create complex expressions of time and evidentiality.',
    exceptions: [
      'When used in the first person ("I"), it may indicate lack of awareness or control: "Uyumuşum" (I apparently fell asleep - I didn\'t realize it)',
      'In some dialects and in Ottoman Turkish, the reported past can also function as a present perfect tense'
    ]
  },
  // Noun Cases
  {
    id: 'accusative-case',
    slug: 'accusative-case',
    name: 'Accusative Case (-(y)i/ı/u/ü)',
    difficulty: 'beginner',
    category: 'noun-cases',
    summary: 'The Turkish accusative case is used to mark definite direct objects in a sentence.',
    formula: 'Noun + (-(y)i/-(y)ı/-(y)u/-(y)ü)',
    examples: [
      {
        turkish: 'Kitabı okuyorum.',
        english: 'I am reading the book.',
        breakdown: {
          segments: [
            { text: 'Kitab', type: 'noun', meaning: 'book' },
            { text: 'ı', type: 'accusative-case', meaning: 'accusative case marker (the)' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ],
          notes: 'The accusative case -ı makes the object "kitap" (book) definite, equivalent to "the book" in English.'
        }
      },
      {
        turkish: 'Arabayı gördüm.',
        english: 'I saw the car.',
        breakdown: {
          segments: [
            { text: 'Araba', type: 'noun', meaning: 'car' },
            { text: 'yı', type: 'accusative-case', meaning: 'accusative case marker (the)' },
            { text: 'gör', type: 'verb-root', meaning: 'see' },
            { text: 'dü', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      }
    ],
    explanation: 'The accusative case in Turkish marks the direct object of a verb when it\'s definite or specific. It corresponds roughly to "the" in English for direct objects. The suffix follows vowel harmony rules with four forms: -i, -ı, -u, -ü. When the noun ends in a vowel, a buffer consonant "y" is inserted.',
    usageNotes: [
      'Used with definite or specific direct objects',
      'Indefinite objects do not take the accusative case',
      'The suffix follows vowel harmony rules',
      'A buffer letter "y" is added when the noun ends in a vowel'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Accusative Case Examples',
        description: 'Examples of nouns with accusative case endings',
        data: {
          headers: ['Nominative', 'Accusative', 'English Meaning'],
          rows: [
            ['kitap', 'kitabı', 'the book'],
            ['ev', 'evi', 'the house'],
            ['araba', 'arabayı', 'the car'],
            ['köpek', 'köpeği', 'the dog'],
            ['gün', 'günü', 'the day'],
            ['kuş', 'kuşu', 'the bird']
          ],
          caption: 'Turkish Accusative Case Formation',
          footnote: 'Note that final "p" becomes "b", "t" becomes "d", and "k" becomes "ğ" before vowels (consonant softening).'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ali ________ (meyve - fruit) yedi.',
        correctAnswer: 'meyveyi',
        explanation: 'The noun "meyve" (fruit) needs the accusative case suffix "-yi" (because "e" is a front vowel and the word ends with a vowel, so we add the buffer "y"), resulting in "meyveyi".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence correctly uses the accusative case?',
        correctAnswer: 'Öğretmeni gördüm.',
        alternatives: ['Öğretmen gördüm.', 'Öğretmene gördüm.', 'Öğretmenin gördüm.'],
        explanation: 'The correct form is "Öğretmeni gördüm" (I saw the teacher), where "öğretmen" takes the accusative case suffix "-i" to mark it as a definite direct object.'
      }
    ]
  },
  // Additional grammar patterns can be added here
  // Adjectives
  {
    id: 'adjectives',
    slug: 'adjectives',
    name: 'Adjectives and Their Usage',
    difficulty: 'beginner',
    category: 'adjectives',
    summary: 'Turkish adjectives are unchangeable and always come before the noun they modify.',
    formula: 'Adjective + Noun',
    examples: [
      {
        turkish: 'Kırmızı araba',
        english: 'Red car',
        breakdown: {
          segments: [
            { text: 'Kırmızı', type: 'adjective', meaning: 'red' },
            { text: 'araba', type: 'noun', meaning: 'car' }
          ]
        }
      },
      {
        turkish: 'Güzel bir ev gördüm.',
        english: 'I saw a beautiful house.',
        breakdown: {
          segments: [
            { text: 'Güzel', type: 'adjective', meaning: 'beautiful' },
            { text: 'bir', type: 'determiner', meaning: 'a/an' },
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'gör', type: 'verb-root', meaning: 'see' },
            { text: 'dü', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Hızlı tren geldi.',
        english: 'The fast train arrived.',
        breakdown: {
          segments: [
            { text: 'Hızlı', type: 'adjective', meaning: 'fast' },
            { text: 'tren', type: 'noun', meaning: 'train' },
            { text: 'gel', type: 'verb-root', meaning: 'come/arrive' },
            { text: 'di', type: 'past-tense', meaning: 'past tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      }
    ],
    explanation: 'Adjectives in Turkish are invariable - they do not change form to agree with the noun they modify in terms of number, gender, or case. They always come before the noun they modify. The indefinite article "bir" (a/an) comes between the adjective and the noun.',
    usageNotes: [
      'Adjectives do not change form when the noun is plural',
      'Multiple adjectives can be used to describe a single noun',
      'The word order is strict: adjectives must come before the noun',
      'When "bir" (a/an) is used, it comes between the adjective and the noun'
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Complete the phrase: "_______ kitap" (interesting - book)',
        correctAnswer: 'ilginç',
        explanation: 'The adjective "ilginç" (interesting) comes before the noun "kitap" (book) to create "ilginç kitap" (interesting book).'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence has the correct word order?',
        correctAnswer: 'Büyük beyaz bir ev gördüm.',
        alternatives: ['Bir büyük beyaz ev gördüm.', 'Beyaz ev büyük gördüm.', 'Ev büyük beyaz bir gördüm.'],
        explanation: 'The correct order is adjective + adjective + bir (a/an) + noun. So "Büyük beyaz bir ev" means "a big white house".'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this phrase if needed: "Evler güzel"',
        correctAnswer: 'Güzel evler',
        explanation: 'The adjective "güzel" (beautiful) must come before the noun "evler" (houses). The correct phrase is "Güzel evler" (Beautiful houses).'
      },
      {
        type: 'match-pairs',
        prompt: 'Match the adjectives with their meanings:',
        correctAnswer: 'büyük:big|küçük:small|yeni:new|eski:old',
        explanation: 'Büyük means big, küçük means small, yeni means new, and eski means old.'
      }
    ],
    visualAids: [
      {
        type: 'diagram',
        title: 'Adjective Placement in Turkish',
        description: 'A visual representation of how adjectives are placed in Turkish sentences',
        data: {
          layout: 'flow',
          nodes: [
            {
              id: 'adj1',
              label: 'Adjective(s)',
              position: { x: 20, y: 50 },
              examples: ['büyük, kırmızı']
            },
            {
              id: 'art',
              label: 'Article (optional)',
              position: { x: 40, y: 50 },
              examples: ['bir']
            },
            {
              id: 'noun',
              label: 'Noun',
              position: { x: 60, y: 50 },
              examples: ['araba']
            },
            {
              id: 'result',
              label: 'Result',
              position: { x: 80, y: 50 },
              highlight: true,
              examples: ['büyük kırmızı bir araba']
            }
          ],
          connections: [
            { from: 'adj1', to: 'art' },
            { from: 'art', to: 'noun' },
            { from: 'noun', to: 'result' }
          ]
        }
      }
    ]
  },
  // Comparative & Superlative Forms
  {
    id: 'comparatives',
    slug: 'comparatives',
    name: 'Comparative and Superlative Forms',
    difficulty: 'beginner',
    category: 'adjectives',
    summary: 'Turkish uses "daha" for comparatives (more) and "en" for superlatives (most), placed before adjectives.',
    formula: 'Comparative: daha + Adjective | Superlative: en + Adjective',
    examples: [
      {
        turkish: 'Bu araba daha büyük.',
        english: 'This car is bigger.',
        breakdown: {
          segments: [
            { text: 'Bu', type: 'determiner', meaning: 'this' },
            { text: 'araba', type: 'noun', meaning: 'car' },
            { text: 'daha', type: 'adverb', meaning: 'more (comparative)' },
            { text: 'büyük', type: 'adjective', meaning: 'big' }
          ]
        }
      },
      {
        turkish: 'Ali Ahmet\'ten daha uzun.',
        english: 'Ali is taller than Ahmet.',
        breakdown: {
          segments: [
            { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
            { text: 'Ahmet', type: 'noun', meaning: 'Ahmet (name)' },
            { text: 'ten', type: 'ablative-case', meaning: 'from/than (ablative case marker)' },
            { text: 'daha', type: 'adverb', meaning: 'more (comparative)' },
            { text: 'uzun', type: 'adjective', meaning: 'tall' }
          ]
        }
      },
      {
        turkish: 'Bu sınıftaki en zeki öğrenci.',
        english: 'The smartest student in this class.',
        breakdown: {
          segments: [
            { text: 'Bu', type: 'determiner', meaning: 'this' },
            { text: 'sınıf', type: 'noun', meaning: 'class' },
            { text: 'ta', type: 'locative-case', meaning: 'in (locative case marker)' },
            { text: 'ki', type: 'verb-to-noun', meaning: 'that is in (relative marker)' },
            { text: 'en', type: 'adverb', meaning: 'most (superlative)' },
            { text: 'zeki', type: 'adjective', meaning: 'smart' },
            { text: 'öğrenci', type: 'noun', meaning: 'student' }
          ]
        }
      }
    ],
    explanation: 'In Turkish, comparative forms are created by placing "daha" (more) before the adjective. For superlatives, "en" (most) is placed before the adjective. Unlike English, the adjective itself doesn\'t change. The object of comparison usually takes the ablative case (-den/-dan) meaning "than".',
    usageNotes: [
      'The word "daha" comes before the adjective to form comparative',
      'The word "en" comes before the adjective to form superlative',
      'The adjective itself remains unchanged, unlike in English',
      'Use the ablative case (-den/-dan) for the object of comparison'
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Istanbul Ankara\'dan _______ kalabalık. (more crowded)',
        correctAnswer: 'daha',
        explanation: 'To express "more crowded", we use "daha" before the adjective "kalabalık" (crowded).'
      },
      {
        type: 'multiple-choice',
        prompt: 'How would you say "the most beautiful city" in Turkish?',
        correctAnswer: 'en güzel şehir',
        alternatives: ['daha güzel şehir', 'güzel en şehir', 'şehir en güzel'],
        explanation: 'For superlatives, "en" comes before the adjective, so "the most beautiful city" is "en güzel şehir".'
      },
      {
        type: 'translation',
        prompt: 'Translate to Turkish: "You (plural) are taller than me."',
        correctAnswer: 'Siz benden daha uzunsunuz.',
        alternatives: ['Siz benden daha uzun.'],
        explanation: 'The comparison uses the ablative case (-den) for "than" and "daha" before the adjective "uzun" (tall).'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Bu araba en hızlı arabadır."',
        correctAnswer: 'Bu araba en hızlı arabadır.',
        explanation: 'The sentence is already correct. It means "This car is the fastest car." The superlative is formed with "en" before the adjective "hızlı" (fast).'
      }
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Comparative and Superlative Forms',
        description: 'Examples of adjectives in their base, comparative, and superlative forms',
        data: {
          headers: ['Adjective', 'Meaning', 'Comparative', 'Superlative'],
          rows: [
            ['büyük', 'big', 'daha büyük', 'en büyük'],
            ['küçük', 'small', 'daha küçük', 'en küçük'],
            ['güzel', 'beautiful', 'daha güzel', 'en güzel'],
            ['zor', 'difficult', 'daha zor', 'en zor'],
            ['uzun', 'tall/long', 'daha uzun', 'en uzun'],
            ['pahalı', 'expensive', 'daha pahalı', 'en pahalı']
          ],
          caption: 'Formation of Comparative and Superlative in Turkish',
          footnote: 'Notice that the adjective itself doesn\'t change, only the adding of daha or en before it.'
        }
      }
    ]
  },
  // Dative Case
  {
    id: 'dative-case',
    slug: 'dative-case',
    name: 'Dative Case (-(y)e/a)',
    difficulty: 'beginner',
    category: 'noun-cases',
    summary: 'The Turkish dative case indicates motion toward, direction, or the indirect object of a verb.',
    formula: 'Noun + (-(y)e/-(y)a)',
    examples: [
      {
        turkish: 'Okula gidiyorum.',
        english: 'I am going to school.',
        breakdown: {
          segments: [
            { text: 'Okul', type: 'noun', meaning: 'school' },
            { text: 'a', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'gid', type: 'verb-root', meaning: 'go' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ],
          notes: 'The dative case -a indicates direction toward the school.'
        }
      },
      {
        turkish: 'Ali\'ye kitap verdim.',
        english: 'I gave a book to Ali.',
        breakdown: {
          segments: [
            { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
            { text: 'ye', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'kitap', type: 'noun', meaning: 'book' },
            { text: 'ver', type: 'verb-root', meaning: 'give' },
            { text: 'di', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'İstanbul\'a yarın gideceğim.',
        english: 'I will go to Istanbul tomorrow.',
        breakdown: {
          segments: [
            { text: 'İstanbul', type: 'noun', meaning: 'Istanbul (city name)' },
            { text: 'a', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'yarın', type: 'adverb', meaning: 'tomorrow' },
            { text: 'gid', type: 'verb-root', meaning: 'go' },
            { text: 'eceğ', type: 'future-tense', meaning: 'future tense marker' },
            { text: 'im', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      }
    ],
    explanation: 'The dative case in Turkish is formed with the suffix -e or -a (according to vowel harmony) and is used to indicate motion toward something, direction, or the indirect object of a verb. It often corresponds to the English prepositions "to" or "for". When a noun ends in a vowel, the buffer consonant "y" is inserted before the dative suffix.',
    usageNotes: [
      'Used to indicate direction or motion toward',
      'Marks the indirect object of verbs like "give", "say", "show"',
      'The suffix follows vowel harmony rules (-e after front vowels, -a after back vowels)',
      'A buffer letter "y" is added when the noun ends in a vowel'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Dative Case Examples',
        description: 'Examples of nouns with dative case endings',
        data: {
          headers: ['Nominative', 'Dative', 'English Meaning'],
          rows: [
            ['ev', 'eve', 'to the house'],
            ['okul', 'okula', 'to school'],
            ['İstanbul', 'İstanbul\'a', 'to Istanbul'],
            ['araba', 'arabaya', 'to the car'],
            ['köpek', 'köpeğe', 'to the dog'],
            ['anne', 'anneye', 'to mother']
          ],
          caption: 'Turkish Dative Case Formation',
          footnote: 'Note that final "k" becomes "ğ" before adding the suffix (consonant softening).'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben hastane_____ gidiyorum. (hospital)',
        correctAnswer: 'ye',
        explanation: 'The noun "hastane" ends with the vowel "e", so we need to add the buffer "y" and the dative case suffix "-e", resulting in "hastaneye".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which is the correct dative form of "arkadaş" (friend)?',
        correctAnswer: 'arkadaşa',
        alternatives: ['arkadaşe', 'arkadaşı', 'arkadaşya'],
        explanation: 'Since "arkadaş" has a back vowel "a", the dative suffix must be "-a", resulting in "arkadaşa".'
      },
      {
        type: 'translation',
        prompt: 'Translate to Turkish: "I will write a letter to my mother."',
        correctAnswer: 'Anneme bir mektup yazacağım.',
        alternatives: ['Anneme mektup yazacağım.'],
        explanation: 'The indirect object "mother" (anne) takes the dative case plus possessive: "anneme" (to my mother).'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Ben İzmir\'e gidiyorum."',
        correctAnswer: 'Ben İzmir\'e gidiyorum.',
        explanation: 'The sentence is already correct. It means "I am going to Izmir." The dative case is correctly used to indicate direction.'
      }
    ]
  },
  // Modal Verbs (Ability)
  {
    id: 'ability-possibility',
    slug: 'ability-possibility',
    name: 'Ability and Possibility (-ebil/-abil)',
    difficulty: 'intermediate',
    category: 'verb-moods',
    summary: 'The Turkish ability/possibility suffix -ebil/-abil is used to express "can", "be able to", or "may".',
    formula: 'Verb Stem + (-ebil/-abil) + Tense Marker + Personal Ending',
    examples: [
      {
        turkish: 'Türkçe konuşabiliyorum.',
        english: 'I can speak Turkish.',
        breakdown: {
          segments: [
            { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
            { text: 'konuş', type: 'verb-root', meaning: 'speak' },
            { text: 'abil', type: 'verb-stem', meaning: 'can, be able to' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ],
          notes: 'The suffix -abil indicates the ability to speak Turkish.'
        }
      },
      {
        turkish: 'Yarın gelebilir miyim?',
        english: 'Can I come tomorrow?',
        breakdown: {
          segments: [
            { text: 'Yarın', type: 'adverb', meaning: 'tomorrow' },
            { text: 'gel', type: 'verb-root', meaning: 'come' },
            { text: 'ebil', type: 'verb-stem', meaning: 'can, be able to' },
            { text: 'ir', type: 'tense-marker', meaning: 'aorist tense marker' },
            { text: 'mi', type: 'question-particle', meaning: 'question marker' },
            { text: 'yim', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Bu kitabı okuyamıyorum.',
        english: 'I cannot read this book.',
        breakdown: {
          segments: [
            { text: 'Bu', type: 'determiner', meaning: 'this' },
            { text: 'kitab', type: 'noun', meaning: 'book' },
            { text: 'ı', type: 'accusative-case', meaning: 'the (accusative case marker)' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'ya', type: 'buffer', meaning: 'buffer letter' },
            { text: 'm', type: 'negation', meaning: 'not (negative marker)' },
            { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ],
          notes: 'The negative form of ability is expressed by -ama/-eme.'
        }
      }
    ],
    explanation: 'The Turkish ability/possibility suffix -ebil/-abil is attached to verb stems to express the concepts of "can", "be able to", or "may". The choice between -ebil and -abil depends on vowel harmony rules. The negative form is -ama/-eme, which directly indicates inability (cannot, unable to).',
    usageNotes: [
      'Used to express physical or mental ability ("I can speak Turkish")',
      'Can indicate possibility ("It may rain today")',
      'Can express permission ("Can I come in?")',
      'The negative form -ama/-eme directly indicates inability ("I cannot read")'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Ability Forms in Different Tenses',
        description: 'How the ability suffix is used with different tenses',
        data: {
          headers: ['Tense', 'Affirmative Example', 'Negative Example', 'English Translation'],
          rows: [
            ['Present Continuous', 'yapabiliyorum', 'yapamıyorum', 'I can (can\'t) do'],
            ['Simple Present', 'yapabilirim', 'yapamam', 'I can (can\'t) do'],
            ['Future', 'yapabileceğim', 'yapamayacağım', 'I will (won\'t) be able to do'],
            ['Past', 'yapabildim', 'yapamadım', 'I was (wasn\'t) able to do'],
            ['Reported Past', 'yapabilmişim', 'yapamamışım', 'I could (couldn\'t) do (apparently)']
          ],
          caption: 'Ability Forms in Turkish Tenses',
          footnote: 'The ability suffix is inserted between the verb stem and the tense marker.'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Sen yüzme _______ musun? (can you swim?)',
        correctAnswer: 'bilir',
        explanation: 'To ask "can you swim?", we need "yüzebilir misin?". The blank part is "bilir", which combines the ability suffix with the aorist tense.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence means "I couldn\'t come yesterday"?',
        correctAnswer: 'Dün gelemedim.',
        alternatives: ['Dün gelmedim.', 'Dün gelebilmem.', 'Dün gelemem.'],
        explanation: 'The correct form for "I couldn\'t come" is "gelemedim", using the negative ability suffix -eme with the past tense.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Ben Türkçe konuşayabiliyorum."',
        correctAnswer: 'Ben Türkçe konuşabiliyorum.',
        explanation: 'The correct form is "konuşabiliyorum". The ability suffix -abil is attached directly to the verb stem "konuş", not "konuşa".'
      },
      {
        type: 'translation',
        prompt: 'Translate to Turkish: "She can\'t see you now."',
        correctAnswer: 'O şimdi seni göremiyor.',
        alternatives: ['Şimdi seni göremiyor.'],
        explanation: 'The negative ability form of "see" (görmek) is "göremek", which with the present continuous becomes "göremiyor" (can\'t see).'
      }
    ]
  },
  // Additional grammar patterns can be added here
  {
    id: 'basic-sentence-structure',
    slug: 'basic-sentence-structure',
    name: 'Basic Sentence Structure',
    difficulty: 'beginner',
    category: 'Syntax',
    summary: 'Turkish typically follows a Subject-Object-Verb (SOV) word order, though it can be flexible in certain contexts.',
    formulas: [
      'Subject + Object + Verb',
      'Ben + kitap + okuyorum (I am reading a book)',
      'Negation: Verb + -me/-ma (negative suffix)',
      'Question: Sentence + mi/mı/mu/mü (question particle)'
    ],
    examples: [
      {
        turkish: 'Ben okula gidiyorum.',
        english: 'I am going to school.',
        breakdown: {
          segments: [
            { text: 'Ben', type: 'noun', meaning: 'I (pronoun)' },
            { text: 'okul', type: 'noun', meaning: 'school' },
            { text: 'a', type: 'dative-case', meaning: 'to (dative case marker)' },
            { text: 'gid', type: 'verb-root', meaning: 'go' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Ali kitap okuyor.',
        english: 'Ali is reading a book.',
        breakdown: {
          segments: [
            { text: 'Ali', type: 'noun', meaning: 'Ali (name)' },
            { text: 'kitap', type: 'noun', meaning: 'book' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      },
      {
        turkish: 'Ben asla sigara içmem.',
        english: 'I never smoke.',
        breakdown: {
          segments: [
            { text: 'Ben', type: 'noun', meaning: 'I (pronoun)' },
            { text: 'asla', type: 'adverb', meaning: 'never' },
            { text: 'sigara', type: 'noun', meaning: 'cigarette' },
            { text: 'iç', type: 'verb-root', meaning: 'drink/smoke' },
            { text: 'me', type: 'negation', meaning: 'not (negative marker)' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular (negative form)' }
          ],
          notes: 'The negative form of the aorist is irregular for 1st person: -mem, -mez for others'
        }
      },
      {
        turkish: "Sen Ankara'da mı yaşıyorsun?",
        english: 'Do you live in Ankara?',
        breakdown: {
          segments: [
            { text: 'Sen', type: 'noun', meaning: 'You (pronoun)' },
            { text: 'Ankara', type: 'noun', meaning: 'Ankara (city name)' },
            { text: 'da', type: 'locative-case', meaning: 'in (locative case marker)' },
            { text: 'mı', type: 'question-particle', meaning: 'question marker' },
            { text: 'yaşı', type: 'verb-root', meaning: 'live' },
            { text: 'yor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'sun', type: 'personal-ending', meaning: '2nd person singular' }
          ]
        }
      }
    ],
    explanation: 'Turkish sentence structure typically follows a Subject-Object-Verb (SOV) pattern, unlike English which follows Subject-Verb-Object (SVO). While Turkish word order is relatively flexible due to its case system, the most neutral and common pattern is SOV. The verb generally comes at the end of the sentence. Personal pronouns (ben, sen, o, etc.) can often be omitted as the verb conjugation already indicates the subject.',
    notes: 'Though SOV is the standard order, other arrangements are possible for emphasis or in certain contexts. The verb is the most rigid element, typically appearing at the end of the sentence.',
    exceptions: [
      'In casual speech, word order can be more flexible for emphasis.',
      'Questions using the question particle mı/mi/mu/mü don\'t change the word order but simply add the particle after the word being questioned.'
    ],
    usageNotes: [
      'Turkish relies heavily on suffixes rather than word order to indicate grammatical relationships.',
      'Subject pronouns are often omitted since the verb ending indicates the person.',
      'Negation is formed by adding -me/-ma before the tense marker: yapmıyorum (I am not doing).',
      'Yes/no questions are formed by adding the question particle mi/mı/mu/mü after the element being questioned.'
    ],
    relatedPatterns: ['present-continuous-tense', 'simple-present-tense', 'negation'],
    visualAids: [
      {
        type: 'diagram',
        title: 'Turkish Sentence Structure',
        description: 'Visual representation of the basic Subject-Object-Verb order in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Subject (Kim/Ne?)', examples: ['Ben', 'Sen', 'Ali', 'Kedi'] },
            { id: '2', label: 'Object (Kimi/Neyi?)', examples: ['kitabı', 'elmayı', 'evi'] },
            { id: '3', label: 'Verb (Ne yapıyor?)', examples: ['okuyor', 'yiyor', 'görüyor'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'acts upon' },
            { from: '2', to: '3', label: 'is the action' }
          ],
          layout: 'flow'
        }
      },
      {
        type: 'table',
        title: 'Negation and Question Formation',
        description: 'How to form negative statements and questions in Turkish',
        data: {
          headers: ['Affirmative', 'Negative', 'Question'],
          rows: [
            ['Geliyorum (I am coming)', 'Gelmiyorum (I am not coming)', 'Geliyor muyum? (Am I coming?)'],
            ['Gidiyorsun (You are going)', 'Gitmiyorsun (You are not going)', 'Gidiyor musun? (Are you going?)'],
            ['Anlıyor (He/she understands)', 'Anlamıyor (He/she doesn\'t understand)', 'Anlıyor mu? (Does he/she understand?)']
          ]
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben okula _____. (gitmek - to go, 1st person singular).',
        correctAnswer: 'gidiyorum',
        alternatives: ['gidiyorsun', 'gidiyor', 'gidiyoruz'],
        explanation: 'Since this is a habitual action (every morning), we use the aorist tense. The stem is "yap" and the suffix is "-ar" plus "-ım" for 1st person singular.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence has the correct word order?',
        correctAnswer: 'Ali markete gidiyor.',
        alternatives: [
          'Ali gidiyor markete.',
          'Gidiyor Ali markete.',
          'Markete gidiyor Ali.'
        ],
        explanation: 'The standard order is Subject + Object + Verb, so "Ali markete gidiyor" is correct.'
      },
      {
        type: 'translation',
        prompt: 'Translate: I am not reading a book.',
        correctAnswer: 'Ben kitap okumuyorum.',
        alternatives: ['Ben bir kitap okumuyorum.', 'Kitap okumuyorum.'],
        explanation: 'To make a negative statement, add the suffix -ma/-me before the tense marker.'
      },
      {
        type: 'sentence-building',
        prompt: 'Build a question asking if someone lives in Istanbul.',
        correctAnswer: "İstanbul'da mı yaşıyorsun?",
        alternatives: ["İstanbul'da yaşıyor musun?", "Sen İstanbul'da mı yaşıyorsun?"],
        explanation: 'To form a yes/no question, add the question particle mi/mı/mu/mü after the word being questioned.'
      }
    ]
  },
  {
    id: 'simple-present-tense',
    slug: 'simple-present-tense',
    name: 'Simple Present (Aorist) Tense',
    difficulty: 'beginner',
    category: 'Verbs',
    summary: 'The simple present tense, also known as the aorist tense in Turkish, is used for habitual actions, general truths, and abilities.',
    formulas: [
      'Verb stem + -ir/-er/-r + personal ending',
      'One-syllable stems: Irregular (check conjugation tables)',
      'Multi-syllable stems: Last vowel a/ı → -ır, e/i → -ir, o/u → -ur, ö/ü → -ür'
    ],
    examples: [
      {
        turkish: 'Her gün koşarım.',
        english: 'I run every day.',
        breakdown: {
          segments: [
            { text: 'Her', type: 'adjective', meaning: 'every' },
            { text: 'gün', type: 'noun', meaning: 'day' },
            { text: 'koş', type: 'verb-root', meaning: 'run' },
            { text: 'ar', type: 'tense-marker', meaning: 'aorist tense marker' },
            { text: 'ım', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Türkçe konuşur musun?',
        english: 'Do you speak Turkish?',
        breakdown: {
          segments: [
            { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
            { text: 'konuş', type: 'verb-root', meaning: 'speak' },
            { text: 'ur', type: 'tense-marker', meaning: 'aorist tense marker' },
            { text: 'mu', type: 'question-particle', meaning: 'question marker' },
            { text: 'sun', type: 'personal-ending', meaning: '2nd person singular' }
          ]
        }
      },
      {
        turkish: 'Kuşlar uçar.',
        english: 'Birds fly.',
        breakdown: {
          segments: [
            { text: 'Kuş', type: 'noun', meaning: 'bird' },
            { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
            { text: 'uç', type: 'verb-root', meaning: 'fly' },
            { text: 'ar', type: 'tense-marker', meaning: 'aorist tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular/plural (no suffix)' }
          ]
        }
      },
      {
        turkish: 'Ben asla sigara içmem.',
        english: 'I never smoke.',
        breakdown: {
          segments: [
            { text: 'Ben', type: 'noun', meaning: 'I (pronoun)' },
            { text: 'asla', type: 'adverb', meaning: 'never' },
            { text: 'sigara', type: 'noun', meaning: 'cigarette' },
            { text: 'iç', type: 'verb-root', meaning: 'drink/smoke' },
            { text: 'me', type: 'negation', meaning: 'not (negative marker)' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular (negative form)' }
          ],
          notes: 'The negative form of the aorist is irregular for 1st person: -mem, -mez for others'
        }
      }
    ],
    explanation: 'The simple present tense, also known as the aorist tense in Turkish, is used to express habitual actions, general truths, abilities, and scheduled future events. Unlike the present continuous (-iyor), which indicates actions happening right now, the aorist (-ir/-er/-r) refers to actions that occur regularly or statements that are always true. The exact suffix varies based on vowel harmony and the final consonant of the verb stem.',
    notes: 'The negative form of the aorist is irregular. For the 1st person singular and plural, use -mem/-meyiz. For other persons, use -mez.',
    exceptions: [
      'Many one-syllable verbs are irregular in the aorist. For example: gelmek → gelir, almak → alır, bilmek → bilir.',
      'Some common verbs have completely irregular forms: oturmak → oturur, demek → der, görmek → görür.'
    ],
    usageNotes: [
      'Use for habitual actions: "Her sabah kahve içerim" (I drink coffee every morning).',
      'Use for general truths: "Su 100 derecede kaynar" (Water boils at 100 degrees).',
      'Use for abilities: "Yüzebilirim" (I can swim).',
      'Use for scheduled future events: "Otobüs saat beşte kalkar" (The bus leaves at five).'
    ],
    relatedPatterns: ['present-continuous-tense', 'future-tense', 'ability-possibility'],
    visualAids: [
      {
        type: 'table',
        title: 'Aorist Tense Conjugation',
        description: 'Conjugation of verbs in simple present tense',
        data: {
          headers: ['Person', 'Positive', 'Negative', 'Question'],
          rows: [
            ['Ben (I)', '-irim/-ırım/-urum/-ürüm', '-mem', '-ir miyim/-ır mıyım/-ur muyum/-ür müyüm'],
            ['Sen (You)', '-irsin/-ırsın/-ursun/-ürsün', '-mezsin', '-ir misin/-ır mısın/-ur musun/-ür müsün'],
            ['O (He/She/It)', '-ir/-ır/-ur/-ür', '-mez', '-ir mi/-ır mı/-ur mu/-ür mü'],
            ['Biz (We)', '-iriz/-ırız/-uruz/-ürüz', '-meyiz', '-ir miyiz/-ır mıyız/-ur muyuz/-ür müyüz'],
            ['Siz (You pl.)', '-irsiniz/-ırsınız/-ursunuz/-ürsünüz', '-mezsiniz', '-ir misiniz/-ır mısınız/-ur musunuz/-ür müsünüz'],
            ['Onlar (They)', '-irler/-ırlar/-urlar/-ürler', '-mezler', '-irler mi/-ırlar mı/-urlar mı/-ürler mi']
          ]
        }
      },
      {
        type: 'diagram',
        title: 'Aorist Tense Usage',
        description: 'When to use the aorist tense',
        data: {
          nodes: [
            { id: '1', label: 'Simple Present', description: 'Central concept' },
            { id: '2', label: 'Habitual Actions', examples: ['Her gün yürürüm (I walk every day)'] },
            { id: '3', label: 'General Truths', examples: ['Güneş doğudan doğar (The sun rises from the east)'] },
            { id: '4', label: 'Abilities', examples: ['İyi yüzerim (I swim well)'] },
            { id: '5', label: 'Scheduled Future', examples: ['Tren 9\'da kalkar (The train leaves at 9)'] }
          ],
          connections: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '1', to: '4' },
            { from: '1', to: '5' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben her sabah spor _____ (yapmak - to do, 1st person singular).',
        correctAnswer: 'yaparım',
        alternatives: ['yapıyorum', 'yaparken', 'yapacağım'],
        explanation: 'Since this is a habitual action (every morning), we use the aorist tense. The stem is "yap" and the suffix is "-ar" plus "-ım" for 1st person singular.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence uses the aorist tense correctly for a general truth?',
        correctAnswer: 'Dünya Güneş etrafında döner.',
        alternatives: [
          'Dünya Güneş etrafında dönüyor.',
          'Dünya Güneş etrafında döndü.',
          'Dünya Güneş etrafında dönecek.'
        ],
        explanation: 'General truths use the aorist tense. "Dünya Güneş etrafında döner" (The Earth revolves around the Sun) is a general truth.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence: "Ben hiç sigara içerim."',
        correctAnswer: 'Ben hiç sigara içmem.',
        explanation: 'The negative form of the aorist tense for the 1st person singular is irregular: -mem, not -mim.'
      },
      {
        type: 'translation',
        prompt: 'Translate: "Do you speak English?"',
        correctAnswer: 'İngilizce konuşur musun?',
        alternatives: ['İngilizce konuşabiliyor musun?', 'İngilizce biliyor musun?'],
        explanation: 'For asking about general abilities or habits, we use the aorist tense with the question particle.'
      }
    ]
  },
  {
    id: 'plurals',
    slug: 'plurals',
    name: 'Plurals (-lar/-ler)',
    difficulty: 'beginner',
    category: 'Nouns',
    summary: 'Turkish forms plurals using the suffix -lar or -ler, depending on vowel harmony.',
    formulas: [
      'Noun + -lar (if last vowel is a, ı, o, u)',
      'Noun + -ler (if last vowel is e, i, ö, ü)'
    ],
    examples: [
      {
        turkish: 'araba → arabalar',
        english: 'car → cars',
        breakdown: {
          segments: [
            { text: 'araba', type: 'noun', meaning: 'car' },
            { text: 'lar', type: 'plural-marker', meaning: 'plural marker (after back vowel)' }
          ]
        }
      },
      {
        turkish: 'ev → evler',
        english: 'house → houses',
        breakdown: {
          segments: [
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'ler', type: 'plural-marker', meaning: 'plural marker (after front vowel)' }
          ]
        }
      },
      {
        turkish: 'kitaplar masanın üstünde.',
        english: 'The books are on the table.',
        breakdown: {
          segments: [
            { text: 'kitap', type: 'noun', meaning: 'book' },
            { text: 'lar', type: 'plural-marker', meaning: 'plural marker (after back vowel)' },
            { text: 'masa', type: 'noun', meaning: 'table' },
            { text: 'nın', type: 'genitive-case', meaning: 'of the (genitive case marker)' },
            { text: 'üst', type: 'noun', meaning: 'top' },
            { text: 'ü', type: 'possessive-marker', meaning: 'its (possessive marker)' },
            { text: 'nde', type: 'locative-case', meaning: 'on/at (locative case marker)' }
          ]
        }
      },
      {
        turkish: 'Öğrenciler sınıfta çalışıyorlar.',
        english: 'The students are studying in the classroom.',
        breakdown: {
          segments: [
            { text: 'Öğrenci', type: 'noun', meaning: 'student' },
            { text: 'ler', type: 'plural-marker', meaning: 'plural marker (after front vowel)' },
            { text: 'sınıf', type: 'noun', meaning: 'classroom' },
            { text: 'ta', type: 'locative-case', meaning: 'in (locative case marker)' },
            { text: 'çalış', type: 'verb-root', meaning: 'study/work' },
            { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'lar', type: 'personal-ending', meaning: '3rd person plural' }
          ]
        }
      }
    ],
    explanation: 'Turkish forms plurals with the suffix -lar or -ler, following the rules of vowel harmony. If the last vowel in the noun is a back vowel (a, ı, o, u), the plural suffix is -lar. If the last vowel is a front vowel (e, i, ö, ü), the plural suffix is -ler. Unlike English, Turkish often omits the plural suffix when a number or quantity word precedes the noun.',
    notes: 'Unlike English, Turkish does not use the plural form after numerals or quantity words. For example, "beş kitap" (five book) not "beş kitaplar" (five books).',
    exceptions: [
      "When a number precedes the noun, the plural suffix is not used: 'üç elma' (three apple), not 'üç elmalar' (three apples).",
      "When a quantifier like 'many', 'few', 'some' precedes the noun, the plural suffix is optional: 'birçok öğrenci' or 'birçok öğrenciler' (many students).",
      "Some Turkish words are always used in the singular form even when they refer to plural concepts: 'saç' (hair), not 'saçlar' (except in special contexts)."
    ],
    usageNotes: [
      "The plural marker also affects verb agreement. When the subject is plural, the verb typically (but not always) takes the 3rd person plural ending: 'Çocuklar oyun oynuyorlar' (The children are playing a game).",
      "In formal language, when the plural subject refers to non-human entities, the verb may remain in the singular form: 'Ağaçlar büyüyor' (The trees are growing).",
      "In colloquial speech, even with human subjects, the verb often remains in the singular: 'Öğrenciler geliyor' instead of 'Öğrenciler geliyorlar' (Students are coming)."
    ],
    relatedPatterns: ['possessive-suffixes', 'locative-case', 'accusative-case'],
    visualAids: [
      {
        type: 'table',
        title: 'Plural Suffix Formation',
        description: 'How to form plurals in Turkish based on vowel harmony',
        data: {
          headers: ['Last Vowel in Noun', 'Plural Suffix', 'Examples'],
          rows: [
            ['a, ı, o, u (back vowels)', '-lar', 'araba → arabalar, kuş → kuşlar, okul → okullar'],
            ['e, i, ö, ü (front vowels)', '-ler', 'ev → evler, şehir → şehirler, göz → gözler']
          ]
        }
      },
      {
        type: 'diagram',
        title: 'Usage Rules for Plurals',
        description: 'When to use and not use plural suffixes in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Plural Usage Rules', description: 'Central concept' },
            { id: '2', label: 'With Numbers', examples: ['iki kitap (two books) - NO plural suffix'] },
            { id: '3', label: 'With Quantifiers', examples: ['birçok insan/insanlar (many people) - Optional'] },
            { id: '4', label: 'Without Quantifiers', examples: ['Arabalar pahalı (Cars are expensive) - Use plural'] },
            { id: '5', label: 'Verb Agreement', examples: ['Öğrenciler geliyor/geliyorlar (Students are coming)'] }
          ],
          connections: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '1', to: '4' },
            { from: '1', to: '5' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Bahçede beş _____ var. (ağaç - tree)',
        correctAnswer: 'ağaç',
        alternatives: ['ağaçlar'],
        explanation: 'After a number (beş - five), the noun remains in singular form in Turkish.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which plural form is correct?',
        correctAnswer: 'öğretmenler',
        alternatives: [
          'öğretmenlar',
          'öğretmener',
          'öğretmenar'
        ],
        explanation: 'Since the last vowel in "öğretmen" is "e" (a front vowel), the plural suffix should be "-ler".'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each singular noun with its correct plural form:',
        correctAnswer: 'araba:arabalar,ev:evler,kuş:kuşlar,şehir:şehirler',
        explanation: 'Match each singular noun with its correct plural form based on vowel harmony rules.'
      },
      {
        type: 'translation',
        prompt: 'Translate: The children are playing in the garden.',
        correctAnswer: 'Çocuklar bahçede oynuyorlar.',
        alternatives: ['Çocuklar bahçede oynuyor.'],
        explanation: 'In this sentence, "children" is plural, so we use the plural form "çocuklar". The verb can be either plural "oynuyorlar" (more formal) or singular "oynuyor" (more colloquial).'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Üç kitaplar masada."',
        correctAnswer: 'Üç kitap masada.',
        explanation: 'After numbers, the noun should be in singular form. The correct form is "üç kitap" (three book), not "üç kitaplar" (three books).'
      }
    ]
  },
  {
    id: 'locative-case',
    slug: 'locative-case',
    name: 'Locative Case (-de/-da)',
    difficulty: 'beginner',
    category: 'Nouns',
    summary: 'The locative case in Turkish (-de/-da/-te/-ta) indicates location or position, equivalent to "in," "on," or "at" in English.',
    formulas: [
      'Noun + -de (after voiceless consonants & if last vowel is e, i, ö, ü)',
      'Noun + -da (after voiceless consonants & if last vowel is a, ı, o, u)',
      'Noun + -te (after voiced consonants & if last vowel is e, i, ö, ü)',
      'Noun + -ta (after voiced consonants & if last vowel is a, ı, o, u)'
    ],
    examples: [
      {
        turkish: 'ev → evde',
        english: 'house → in/at the house',
        breakdown: {
          segments: [
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'de', type: 'locative-case', meaning: 'in/at (locative case marker)' }
          ]
        }
      },
      {
        turkish: 'okul → okulda',
        english: 'school → in/at the school',
        breakdown: {
          segments: [
            { text: 'okul', type: 'noun', meaning: 'school' },
            { text: 'da', type: 'locative-case', meaning: 'in/at (locative case marker)' }
          ]
        }
      },
      {
        turkish: 'ağaç → ağaçta',
        english: 'tree → on/in the tree',
        breakdown: {
          segments: [
            { text: 'ağaç', type: 'noun', meaning: 'tree' },
            { text: 'ta', type: 'locative-case', meaning: 'on/in (locative case marker after voiceless consonant)' }
          ]
        }
      },
      {
        turkish: 'Çocuklar bahçede oynuyorlar.',
        english: 'The children are playing in the garden.',
        breakdown: {
          segments: [
            { text: 'Çocuk', type: 'noun', meaning: 'child' },
            { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
            { text: 'bahçe', type: 'noun', meaning: 'garden' },
            { text: 'de', type: 'locative-case', meaning: 'in (locative case marker)' },
            { text: 'oyn', type: 'verb-root', meaning: 'play' },
            { text: 'uyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'lar', type: 'personal-ending', meaning: '3rd person plural' }
          ]
        }
      }
    ],
    explanation: 'The locative case in Turkish is used to indicate location or position, similar to the English prepositions "in," "on," or "at." The suffix follows both vowel harmony and consonant harmony rules. For vowel harmony, if the last vowel in the noun is a back vowel (a, ı, o, u), the suffix contains "a"; if it\'s a front vowel (e, i, ö, ü), the suffix contains "e". For consonant harmony, if the word ends with a voiceless consonant (p, ç, t, k, f, h, s, ş), the suffix begins with "t"; otherwise, it begins with "d".',
    notes: 'The locative case can also be used in expressions of time: "sabahta" (in the morning), "Salıda" (on Tuesday).',
    exceptions: [
      'Some nouns might undergo consonant softening when case suffixes are added: kitap (book) → kitapta (in the book)',
      'Some nouns take a buffer consonant -n- before case suffixes when they have possessive suffixes: evim (my house) → evimde (in my house)'
    ],
    usageNotes: [
      'Used to express location: "İstanbulda yaşıyorum" (I live in Istanbul)',
      'Used to express time: "Saat beşte buluşalım" (Let\'s meet at five o\'clock)',
      'Used to express state or condition: "Bu durumdayım" (I am in this condition)',
      'Can be combined with postpositions for more specific location: "Masanın üstünde" (on top of the table)'
    ],
    relatedPatterns: ['dative-case', 'ablative-case', 'genitive-case'],
    visualAids: [
      {
        type: 'table',
        title: 'Locative Case Formation',
        description: 'How to form the locative case in Turkish based on vowel and consonant harmony',
        data: {
          headers: ['Last Vowel in Noun', 'Last Consonant Type', 'Locative Suffix', 'Examples'],
          rows: [
            ['a, ı, o, u (back vowels)', 'Voiced or Vowel', '-da', 'araba → arabada, kapı → kapıda'],
            ['a, ı, o, u (back vowels)', 'Voiceless (p, ç, t, k, f, h, s, ş)', '-ta', 'ağaç → ağaçta, kitap → kitapta'],
            ['e, i, ö, ü (front vowels)', 'Voiced or Vowel', '-de', 'ev → evde, göl → gölde'],
            ['e, i, ö, ü (front vowels)', 'Voiceless (p, ç, t, k, f, h, s, ş)', '-te', 'sepet → sepette, küçük → küçükte']
          ]
        }
      },
      {
        type: 'diagram',
        title: 'Uses of the Locative Case',
        description: 'Various meanings expressed by the locative case in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Locative Case (-de/-da)', description: 'Central concept' },
            { id: '2', label: 'Location', examples: ['evde (at home)', 'okulda (at school)'] },
            { id: '3', label: 'Time', examples: ['beşte (at five)', 'Pazarteside (on Monday)'] },
            { id: '4', label: 'State/Condition', examples: ['güvende (in safety)', 'tehlikede (in danger)'] },
            { id: '5', label: 'With Postpositions', examples: ['masanın yanında (next to the table)'] }
          ],
          connections: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '1', to: '4' },
            { from: '1', to: '5' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben Ankara_____ yaşıyorum. (Ankara)',
        correctAnswer: "'da",
        alternatives: ["'de", "'ta", "'te"],
        explanation: 'Since "Ankara" ends with a vowel "a" (back vowel), and vowels are voiced, the locative suffix is "da".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which locative form is correct for "kitap" (book)?',
        correctAnswer: 'kitapta',
        alternatives: [
          'kitapda',
          'kitapte',
          'kitabda'
        ],
        explanation: 'Since "kitap" ends with a voiceless consonant "p" and its last vowel is "a" (a back vowel), the locative suffix is "ta".'
      },
      {
        type: 'translation',
        prompt: 'Translate: I am in the garden.',
        correctAnswer: 'Bahçedeyim.',
        alternatives: ['Ben bahçedeyim.'],
        explanation: '"Bahçe" (garden) gets the locative suffix "-de" because its last vowel is "e" (front vowel) and it ends with a voiced consonant. Then we add the personal ending "-yim" for "I am".'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Ben İstanbulde çalışıyorum."',
        correctAnswer: 'Ben İstanbulda çalışıyorum.',
        explanation: 'Since "İstanbul" contains the back vowel "u", the locative suffix should be "da", not "de".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Where would you use the locative case?',
        correctAnswer: 'To say where you live',
        alternatives: [
          'To express who owns something',
          'To indicate the direction you are going',
          'To show what you used to do something'
        ],
        explanation: 'The locative case (-de/-da) is used to express location, such as where you live (e.g., "İstanbulda yaşıyorum" - I live in Istanbul).'
      }
    ]
  },
  {
    id: 'ablative-case',
    slug: 'ablative-case',
    name: 'Ablative Case (-den/-dan)',
    difficulty: 'beginner',
    category: 'Nouns',
    summary: 'The Turkish ablative case indicates motion from a place or source, equivalent to "from" in English.',
    formulas: [
      'Noun + -den (after voiced consonants & if last vowel is e, i, ö, ü)',
      'Noun + -dan (after voiced consonants & if last vowel is a, ı, o, u)',
      'Noun + -ten (after voiceless consonants & if last vowel is e, i, ö, ü)',
      'Noun + -tan (after voiceless consonants & if last vowel is a, ı, o, u)'
    ],
    examples: [
      {
        turkish: 'ev → evden',
        english: 'house → from the house',
        breakdown: {
          segments: [
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'den', type: 'ablative-case', meaning: 'from (ablative case marker)' }
          ]
        }
      },
      {
        turkish: 'İstanbul → İstanbuldan',
        english: 'Istanbul → from Istanbul',
        breakdown: {
          segments: [
            { text: 'İstanbul', type: 'noun', meaning: 'Istanbul' },
            { text: 'dan', type: 'ablative-case', meaning: 'from (ablative case marker)' }
          ]
        }
      },
      {
        turkish: 'ağaç → ağaçtan',
        english: 'tree → from the tree',
        breakdown: {
          segments: [
            { text: 'ağaç', type: 'noun', meaning: 'tree' },
            { text: 'tan', type: 'ablative-case', meaning: 'from (ablative case marker after voiceless consonant)' }
          ]
        }
      },
      {
        turkish: 'Çocuklar okuldan geliyorlar.',
        english: 'The children are coming from school.',
        breakdown: {
          segments: [
            { text: 'Çocuk', type: 'noun', meaning: 'child' },
            { text: 'lar', type: 'plural-marker', meaning: 'plural marker' },
            { text: 'okul', type: 'noun', meaning: 'school' },
            { text: 'dan', type: 'ablative-case', meaning: 'from (ablative case marker)' },
            { text: 'gel', type: 'verb-root', meaning: 'come' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous marker' },
            { text: 'lar', type: 'personal-ending', meaning: '3rd person plural' }
          ]
        }
      }
    ],
    explanation: 'The ablative case in Turkish is used to indicate motion away from a place, source, or origin. It corresponds to the English preposition "from". The suffix follows both vowel harmony and consonant harmony rules. For vowel harmony, if the last vowel in the noun is a back vowel (a, ı, o, u), the suffix contains "a"; if it\'s a front vowel (e, i, ö, ü), the suffix contains "e". For consonant harmony, if the word ends with a voiceless consonant (p, ç, t, k, f, h, s, ş), the suffix begins with "t"; otherwise, it begins with "d".',
    notes: 'The ablative case can also be used to express the material something is made of: "tahtadan" (made of wood), "altından" (made of gold).',
    exceptions: [
      'Some nouns might undergo consonant softening when case suffixes are added: kitap (book) → kitaptan (from the book)',
      'Some nouns take a buffer consonant -n- before case suffixes when they have possessive suffixes: evim (my house) → evimden (from my house)'
    ],
    usageNotes: [
      'Used to express movement from a place: "İstanbuldan geliyorum" (I am coming from Istanbul)',
      'Used to express starting time: "Sabahtan beri çalışıyorum" (I have been working since morning)',
      'Used to express cause or reason: "Yorgunluktan uyuyamadım" (I couldn\'t sleep from tiredness)',
      'Used to express the material something is made of: "Bu masa tahtadan yapılmış" (This table is made of wood)',
      'Used with comparative constructions: "O benden daha uzun" (He/she is taller than me)'
    ],
    relatedPatterns: ['locative-case', 'dative-case', 'genitive-case'],
    visualAids: [
      {
        type: 'table',
        title: 'Ablative Case Formation',
        description: 'How to form the ablative case in Turkish based on vowel and consonant harmony',
        data: {
          headers: ['Last Vowel in Noun', 'Last Consonant Type', 'Ablative Suffix', 'Examples'],
          rows: [
            ['a, ı, o, u (back vowels)', 'Voiced or Vowel', '-dan', 'araba → arabadan, kapı → kapıdan'],
            ['a, ı, o, u (back vowels)', 'Voiceless (p, ç, t, k, f, h, s, ş)', '-tan', 'ağaç → ağaçtan, kitap → kitaptan'],
            ['e, i, ö, ü (front vowels)', 'Voiced or Vowel', '-den', 'ev → evden, göl → gölden'],
            ['e, i, ö, ü (front vowels)', 'Voiceless (p, ç, t, k, f, h, s, ş)', '-ten', 'sepet → sepetten, küçük → küçükten']
          ]
        }
      },
      {
        type: 'diagram',
        title: 'Uses of the Ablative Case',
        description: 'Various meanings expressed by the ablative case in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Ablative Case (-den/-dan)', description: 'Central concept' },
            { id: '2', label: 'Direction (From)', examples: ['evden (from home)', 'okuldan (from school)'] },
            { id: '3', label: 'Time (Since)', examples: ['sabahtan beri (since morning)'] },
            { id: '4', label: 'Cause/Reason', examples: ['heyecandan (from excitement)'] },
            { id: '5', label: 'Material', examples: ['tahtadan (made of wood)'] },
            { id: '6', label: 'Comparison', examples: ['benden daha büyük (bigger than me)'] }
          ],
          connections: [
            { from: '1', to: '2' },
            { from: '1', to: '3' },
            { from: '1', to: '4' },
            { from: '1', to: '5' },
            { from: '1', to: '6' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ben Ankara_____ geliyorum. (Ankara)',
        correctAnswer: "'dan",
        alternatives: ["'den", "'tan", "'ten"],
        explanation: 'Since "Ankara" ends with a vowel "a" (back vowel), and vowels are voiced, the ablative suffix is "dan".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which ablative form is correct for "kitap" (book)?',
        correctAnswer: 'kitaptan',
        alternatives: [
          'kitapdan',
          'kitapten',
          'kitabdan'
        ],
        explanation: 'Since "kitap" ends with a voiceless consonant "p" and its last vowel is "a" (a back vowel), the ablative suffix is "tan".'
      },
      {
        type: 'translation',
        prompt: 'Translate: I am coming from school.',
        correctAnswer: 'Okuldan geliyorum.',
        alternatives: ['Ben okuldan geliyorum.'],
        explanation: '"Okul" (school) gets the ablative suffix "-dan" because its last vowel is "u" (back vowel) and "l" is a voiced consonant.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Ben İstanbulden geliyorum."',
        correctAnswer: 'Ben İstanbuldan geliyorum.',
        explanation: 'Since "İstanbul" contains the back vowel "u", the ablative suffix should be "dan", not "den".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which of the following shows a correct use of the ablative case?',
        correctAnswer: 'Bu yüzük altından yapılmış. (This ring is made of gold.)',
        alternatives: [
          'Bu yüzük altında yapılmış. (This ring is made in gold.)',
          'Bu yüzük altına yapılmış. (This ring is made to gold.)',
          'Bu yüzük altını yapılmış. (This ring is made the gold.)'
        ],
        explanation: 'The ablative case is used to express the material something is made of. "Altından" means "made of gold".'
      }
    ]
  },
  // Additional grammar patterns can be added here
  // ...
  {
    id: 'necessity-obligation',
    slug: 'necessity-obligation',
    name: 'Necessity and Obligation (-meli/-malı)',
    difficulty: 'intermediate',
    category: 'Verbs',
    summary: 'Turkish expresses necessity, obligation, and "should/must" concepts using the suffix -meli/-malı or the words "lazım" and "gerek".',
    formulas: [
      'Verb stem + -meli/-malı + personal ending',
      'Verb stem + -mek/-mak + lazım/gerek',
      'Negation: Verb stem + -me/-ma + -meli/-malı + personal ending',
      'Question: Verb stem + -meli/-malı + personal ending + mi/mı/mu/mü'
    ],
    examples: [
      {
        turkish: 'Bu kitabı okumalısın.',
        english: 'You should/must read this book.',
        breakdown: {
          segments: [
            { text: 'Bu', type: 'determiner', meaning: 'this' },
            { text: 'kitab', type: 'noun', meaning: 'book' },
            { text: 'ı', type: 'accusative-case', meaning: 'the (accusative case marker)' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'malı', type: 'modal', meaning: 'must/should' },
            { text: 'sın', type: 'personal-ending', meaning: '2nd person singular' }
          ]
        }
      },
      {
        turkish: 'Erken kalkmalıyım.',
        english: 'I must/should wake up early.',
        breakdown: {
          segments: [
            { text: 'Erken', type: 'adverb', meaning: 'early' },
            { text: 'kalk', type: 'verb-root', meaning: 'get up/wake up' },
            { text: 'malı', type: 'modal', meaning: 'must/should' },
            { text: 'yım', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Evde kalmanız gerek.',
        english: 'You need to stay at home.',
        breakdown: {
          segments: [
            { text: 'Ev', type: 'noun', meaning: 'home' },
            { text: 'de', type: 'locative-case', meaning: 'at (locative case marker)' },
            { text: 'kal', type: 'verb-root', meaning: 'stay' },
            { text: 'ma', type: 'verb-to-noun', meaning: 'verbal noun marker' },
            { text: 'nız', type: 'possessive-marker', meaning: 'your (plural/formal)' },
            { text: 'gerek', type: 'necessity', meaning: 'necessary/needed' }
          ]
        }
      }
    ],
    explanation: "Turkish has several ways to express necessity and obligation. The most common is the suffix -meli/-malı, which attaches to verb stems and implies 'should', 'must', or 'have to'. Another common structure uses the verbal noun form (-mek/-mak) with 'lazım' (necessary) or 'gerek' (needed). Both methods follow vowel harmony rules and can express different degrees of obligation.",
    usageNotes: [
      'The suffix -meli/-malı is used for advice, moral obligation, or necessity',
      'Follows vowel harmony: -meli after e, i, ö, ü and -malı after a, ı, o, u',
      'When using lazım/gerek, the verb takes the infinitive form + possessive suffix',
      'Different structures can express different degrees of obligation'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Necessity/Obligation Conjugation with -meli/-malı',
        description: 'Full conjugation table showing how the necessity form changes with different pronouns',
        data: {
          headers: ['Pronoun', 'gelmek (to come)', 'yapmak (to do)', 'görmek (to see)', 'olmak (to be)'],
          rows: [
            ['ben (I)', 'gelmeliyim', 'yapmalıyım', 'görmeliyim', 'olmalıyım'],
            ['sen (you)', 'gelmelisin', 'yapmalısın', 'görmelisin', 'olmalısın'],
            ['o (he/she/it)', 'gelmeli', 'yapmalı', 'görmeli', 'olmalı'],
            ['biz (we)', 'gelmeliyiz', 'yapmalıyız', 'görmeliyiz', 'olmalıyız'],
            ['siz (you-plural)', 'gelmelisiniz', 'yapmalısınız', 'görmelisiniz', 'olmalısınız'],
            ['onlar (they)', 'gelmeliler', 'yapmalılar', 'görmeliler', 'olmalılar']
          ],
          caption: 'Turkish Necessity/Obligation Forms',
          footnote: 'The suffix follows vowel harmony: -meli after front vowels, -malı after back vowels'
        }
      },
      {
        type: 'diagram',
        title: 'Ways to Express Necessity in Turkish',
        description: 'Different structures for expressing necessity and obligation',
        data: {
          nodes: [
            { id: '1', label: 'Necessity & Obligation', description: 'Central concept' },
            { id: '2', label: '-meli/-malı', examples: ['Gitmeliyim (I should go)'] },
            { id: '3', label: 'Verb + -mek/-mak lazım', examples: ['Gitmem lazım (I need to go)'] },
            { id: '4', label: 'Verb + -mek/-mak gerek', examples: ['Gitmen gerek (You need to go)'] },
            { id: '5', label: 'Verb + -mek/-mak zorunda', examples: ['Gitmek zorundayım (I have to go)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'expressed with' },
            { from: '1', to: '3', label: 'expressed with' },
            { from: '1', to: '4', label: 'expressed with' },
            { from: '1', to: '5', label: 'expressed with' }
          ],
          layout: 'tree'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Daha çok su iç_____. (You should drink more water)',
        correctAnswer: 'melisin',
        explanation: 'To express "you should" in Turkish, add the necessity suffix -meli/-malı (following vowel harmony) to the verb stem, followed by the appropriate personal ending.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence expresses "We must leave early"?',
        correctAnswer: 'Erken çıkmalıyız.',
        alternatives: [
          'Erken çıkıyoruz.',
          'Erken çıkarız.',
          'Erken çıktık.'
        ],
        explanation: 'To express obligation ("must"), use the -meli/-malı suffix with the appropriate personal ending. For "we", use the -yiz/-yız ending.'
      },
      {
        type: 'translation',
        prompt: 'Translate: I have to finish this work.',
        correctAnswer: 'Bu işi bitirmeliyim.',
        alternatives: ['Bu işi bitirmem lazım.', 'Bu işi bitirmem gerek.'],
        explanation: 'To express necessity, you can use either the -meli/-malı suffix or the structures with lazım/gerek.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Doktora gitmek lazımsın."',
        correctAnswer: 'Doktora gitmen lazım.',
        explanation: 'When using "lazım" or "gerek", the verb should be in the verbal noun form with the appropriate possessive suffix: git + me + n + lazım.'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each necessity expression with its meaning:',
        correctAnswer: 'Gitmeliyim:I should go|Gitmem lazım:I need to go|Gitmek zorundayım:I am obliged to go|Gitmen gerek:It is necessary for me to go',
        explanation: 'Turkish has several ways to express necessity and obligation, each with slightly different nuances in meaning and formality.'
      }
    ],
    relatedPatterns: ['ability-possibility', 'future-tense'],
    notes: 'In formal contexts, the -meli/-malı form can sound commanding, so using "lazım" or "gerek" might be preferred for politeness.',
    exceptions: [
      'The verb "etmek" (to do) becomes "etmeli" not "edimeli" in the necessity form',
      'In some dialects, the third person plural form may use "malılar/meliler" or just "malı/meli"'
    ]
  },
  {
    id: 'postpositions',
    slug: 'postpositions',
    name: 'Postpositions in Turkish',
    difficulty: 'intermediate',
    category: 'Sentence Structure',
    summary: 'Turkish uses postpositions (words that come after nouns) instead of prepositions (words that come before nouns) to express relationships between words.',
    formulas: [
      'Noun + appropriate case suffix + postposition',
      'Pronoun + appropriate case suffix + postposition'
    ],
    examples: [
      {
        turkish: 'Evin önünde bir araba var.',
        english: 'There is a car in front of the house.',
        breakdown: {
          segments: [
            { text: 'Ev', type: 'noun', meaning: 'house' },
            { text: 'in', type: 'genitive-case', meaning: 'of the (genitive case marker)' },
            { text: 'önünde', type: 'postposition', meaning: 'in front of' },
            { text: 'bir', type: 'determiner', meaning: 'a' },
            { text: 'araba', type: 'noun', meaning: 'car' },
            { text: 'var', type: 'existential', meaning: 'there is' }
          ]
        }
      },
      {
        turkish: 'Onunla konuştum.',
        english: 'I talked with him/her.',
        breakdown: {
          segments: [
            { text: 'Onun', type: 'pronoun', meaning: 'him/her (in genitive case)' },
            { text: 'la', type: 'postposition', meaning: 'with' },
            { text: 'konuş', type: 'verb-root', meaning: 'talk/speak' },
            { text: 't', type: 'causative', meaning: 'causative marker' },
            { text: 'um', type: 'past-tense-personal', meaning: 'I (past tense, 1st person singular)' }
          ]
        }
      },
      {
        turkish: 'Benden sonra geldi.',
        english: 'He/she came after me.',
        breakdown: {
          segments: [
            { text: 'Ben', type: 'pronoun', meaning: 'I/me' },
            { text: 'den', type: 'ablative-case', meaning: 'from (ablative case marker)' },
            { text: 'sonra', type: 'postposition', meaning: 'after' },
            { text: 'gel', type: 'verb-root', meaning: 'come' },
            { text: 'di', type: 'past-tense', meaning: 'past tense marker' },
            { text: '', type: 'personal-ending', meaning: '3rd person singular (no suffix)' }
          ]
        }
      }
    ],
    explanation: "Unlike English which uses prepositions (words that come before nouns), Turkish uses postpositions that come after nouns. Many Turkish postpositions require the preceding noun to take a specific case suffix (such as dative, ablative, or genitive). Some postpositions have become case suffixes themselves (like 'ile' becoming the suffix '-le/-la'). Learning which case to use with which postposition is essential for forming correct sentences.",
    usageNotes: [
      'Most postpositions require a specific case for the noun they follow',
      'Some common postpositions: için (for), gibi (like), ile/-(y)le/-(y)la (with), kadar (until/as much as), göre (according to)',
      'Some postpositions take the genitive case when used with pronouns but the nominative with nouns',
      'Many postpositions are derived from nouns with possessive and case suffixes (e.g., "yanında" is a combination of "yan" (side) + ı (possessive) + nda (locative))'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Common Turkish Postpositions and Their Required Cases',
        description: 'Shows which case each postposition requires',
        data: {
          headers: ['Postposition', 'Required Case', 'Example', 'Meaning'],
          rows: [
            ['için', 'Nominative (no case)', 'senin için', 'for you'],
            ['gibi', 'Nominative (no case)', 'kuş gibi', 'like a bird'],
            ['ile / -le/-la', 'Nominative (no case)', 'arkadaşım ile / arkadaşımla', 'with my friend'],
            ['göre', 'Dative (-e/-a)', 'bana göre', 'according to me'],
            ['kadar', 'Dative (-e/-a)', 'eve kadar', 'until home'],
            ['doğru', 'Dative (-e/-a)', 'okula doğru', 'toward school'],
            ['sonra', 'Ablative (-den/-dan)', 'yemekten sonra', 'after meal'],
            ['önce', 'Ablative (-den/-dan)', 'dersten önce', 'before class'],
            ['beri', 'Ablative (-den/-dan)', 'sabahtan beri', 'since morning'],
            ['dolayı', 'Ablative (-den/-dan)', 'yağmurdan dolayı', 'because of rain']
          ],
          caption: 'Turkish Postpositions with Required Cases',
          footnote: 'Some postpositions behave differently with pronouns versus nouns'
        }
      },
      {
        type: 'diagram',
        title: 'Positional Postpositions in Turkish',
        description: 'Visualization of spatial relationships expressed by postpositions',
        data: {
          nodes: [
            { id: '1', label: 'Spatial Postpositions', description: 'Central concept' },
            { id: '2', label: 'önünde (in front of)', examples: ['evin önünde (in front of the house)'] },
            { id: '3', label: 'arkasında (behind)', examples: ['dağın arkasında (behind the mountain)'] },
            { id: '4', label: 'içinde (inside)', examples: ['çantanın içinde (inside the bag)'] },
            { id: '5', label: 'dışında (outside)', examples: ['şehrin dışında (outside the city)'] },
            { id: '6', label: 'yanında (next to)', examples: ['masanın yanında (next to the table)'] },
            { id: '7', label: 'üstünde (on top of)', examples: ['kitabın üstünde (on top of the book)'] },
            { id: '8', label: 'altında (underneath)', examples: ['yatağın altında (under the bed)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'position' },
            { from: '1', to: '3', label: 'position' },
            { from: '1', to: '4', label: 'position' },
            { from: '1', to: '5', label: 'position' },
            { from: '1', to: '6', label: 'position' },
            { from: '1', to: '7', label: 'position' },
            { from: '1', to: '8', label: 'position' }
          ],
          layout: 'linear'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Ali okul_____ sonra eve gitti. (after school)',
        correctAnswer: 'dan',
        alternatives: ['de', 'a', 'un'],
        explanation: 'The postposition "sonra" (after) requires the ablative case (-dan/-den) on the noun that precedes it.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence correctly uses the postposition "için" (for)?',
        correctAnswer: 'Bu hediye senin için.',
        alternatives: [
          'Bu hediye sana için.',
          'Bu hediye sende için.',
          'Bu hediye senden için.'
        ],
        explanation: 'The postposition "için" (for) requires no case suffix (nominative case) on the preceding noun.'
      },
      {
        type: 'translation',
        prompt: 'Translate: I\'m walking toward the park.',
        correctAnswer: 'Parka doğru yürüyorum.',
        alternatives: ['Park doğru yürüyorum.', 'Parkta doğru yürüyorum.'],
        explanation: 'The postposition "doğru" (toward) requires the dative case (-a/-e) on the preceding noun.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Akşam yemeği sonra film izledik."',
        correctAnswer: 'Akşam yemeğinden sonra film izledik.',
        explanation: 'The postposition "sonra" (after) requires the ablative case, so "yemekten" or "yemeğinden" is correct, not just "yemek".'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each postposition with its required case:',
        correctAnswer: 'için:no case (nominative)|ile:no case (nominative)|göre:dative (-e/-a)|kadar:dative (-e/-a)|sonra:ablative (-den/-dan)|önce:ablative (-den/-dan)',
        explanation: 'Different postpositions require different cases for the nouns that precede them. This is a fundamental aspect of Turkish grammar.'
      }
    ],
    relatedPatterns: ['case-markers', 'locative-case', 'ablative-case', 'dative-case'],
    notes: 'Some postpositions are actually nouns with possessive and case suffixes (e.g., "yanında" is a combination of "yan" (side) + ı (possessive) + nda (locative)). This is why many location-based postpositions require the genitive case.',
    exceptions: [
      'The postposition "ile" can be used as a suffix (-le/-la) after consonants, or as -(y)le/-(y)la after vowels',
      'Some postpositions behave differently with pronouns: they require the genitive case for pronouns (e.g., "benim için" - for me) but no case for nouns (e.g., "Ali için" - for Ali)'
    ]
  },
  {
    id: 'conjunctions-connectors',
    slug: 'conjunctions-connectors',
    name: 'Conjunctions and Connectors',
    difficulty: 'intermediate',
    category: 'Sentence Structure',
    summary: 'Turkish conjunctions and connectors allow you to join words, phrases, or clauses to create more complex and sophisticated sentences.',
    formulas: [
      'Simple conjunctions: X ve Y, X veya Y, etc.',
      'Sequential conjunctions: X ise, Y...',
      'Clause connectors: ... dığı için, ... dıktan sonra, etc.',
      'Contrastive conjunctions: ... ama ..., ... fakat ...'
    ],
    examples: [
      {
        turkish: 'Kitap ve defter aldım.',
        english: 'I bought a book and a notebook.',
        breakdown: {
          segments: [
            { text: 'Kitap', type: 'noun', meaning: 'book' },
            { text: 've', type: 'conjunctive', meaning: 'and' },
            { text: 'defter', type: 'noun', meaning: 'notebook' },
            { text: 'al', type: 'verb-root', meaning: 'buy' },
            { text: 'd', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'ım', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Yağmur yağdığı için evde kaldık.',
        english: 'We stayed at home because it rained.',
        breakdown: {
          segments: [
            { text: 'Yağmur', type: 'noun', meaning: 'rain' },
            { text: 'yağ', type: 'verb-root', meaning: 'to rain' },
            { text: 'dığı', type: 'verb-to-noun', meaning: 'verbal noun marker + possessive' },
            { text: 'için', type: 'postposition', meaning: 'because of/for' },
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'de', type: 'locative-case', meaning: 'at (locative case marker)' },
            { text: 'kal', type: 'verb-root', meaning: 'stay' },
            { text: 'd', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'ık', type: 'personal-ending', meaning: '1st person plural' }
          ]
        }
      },
      {
        turkish: 'Hem zengin hem güzel.',
        english: 'She is both rich and beautiful.',
        breakdown: {
          segments: [
            { text: 'Hem', type: 'conjunctive', meaning: 'both (part 1)' },
            { text: 'zengin', type: 'adjective', meaning: 'rich' },
            { text: 'hem', type: 'conjunctive', meaning: 'and (part 2)' },
            { text: 'güzel', type: 'adjective', meaning: 'beautiful' }
          ]
        }
      }
    ],
    explanation: "Conjunctions and connectors in Turkish allow speakers to join words, phrases, and clauses to create more complex sentences. Turkish has both simple conjunctions (like 've' for 'and') and more complex connectors formed using verbal nouns and postpositions. These constructions are essential for expressing relationships between ideas such as cause and effect, time sequence, contrast, and addition.",
    usageNotes: [
      'Simple conjunctions like "ve" (and), "veya/ya da" (or), "ama/fakat" (but) function similarly to their English counterparts',
      'Many complex conjunctions in Turkish are formed using verbal nouns with suffixes and postpositions',
      'The word order in complex sentences may differ from English',
      'Some conjunctions have special forms when used with pronouns'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Common Turkish Conjunctions and Their Uses',
        description: 'Shows common conjunctions and their meanings',
        data: {
          headers: ['Conjunction', 'Meaning', 'Example', 'English Translation'],
          rows: [
            ['ve', 'and', 'Ali ve Ayşe', 'Ali and Ayşe'],
            ['veya / ya da', 'or', 'Çay veya kahve', 'Tea or coffee'],
            ['ama / fakat', 'but', 'Zengin ama mutlu değil', 'Rich but not happy'],
            ['çünkü', 'because', 'Gelemedi çünkü hastaydı', 'He couldn\'t come because he was sick'],
            ['hem ... hem (de)', 'both ... and', 'Hem akıllı hem güzel', 'Both smart and beautiful'],
            ['ne ... ne (de)', 'neither ... nor', 'Ne zengin ne fakir', 'Neither rich nor poor'],
            ['ya ... ya (da)', 'either ... or', 'Ya gel ya git', 'Either come or go'],
            ['de / da', 'too, also, and', 'Ben de geliyorum', 'I\'m coming too'],
            ['ise', 'as for, whereas', 'Ali geldi, Ayşe ise gelmedi', 'Ali came, whereas Ayşe didn\'t']
          ],
          caption: 'Basic Turkish Conjunctions',
          footnote: 'The particle "de/da" follows vowel harmony and comes after the word it modifies'
        }
      },
      {
        type: 'diagram',
        title: 'Complex Connector Structures in Turkish',
        description: 'How verbal nouns and postpositions form connectors',
        data: {
          nodes: [
            { id: '1', label: 'Complex Connectors', description: 'Central concept' },
            { id: '2', label: 'Cause & Effect', examples: ['-dığı için (because)', '-dığından (because)', '-dığından dolayı (due to)'] },
            { id: '3', label: 'Time Sequence', examples: ['-meden önce (before)', '-dikten sonra (after)', '-dığı zaman (when)'] },
            { id: '4', label: 'Condition', examples: ['-sa/-se (if)', '-dığı takdirde (in case of)', '-dığı sürece (as long as)'] },
            { id: '5', label: 'Purpose', examples: ['-mek için (in order to)', '-mek amacıyla (with the purpose of)'] },
            { id: '6', label: 'Contrast', examples: ['-masına rağmen (despite)', '-dığı halde (although)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'type' },
            { from: '1', to: '3', label: 'type' },
            { from: '1', to: '4', label: 'type' },
            { from: '1', to: '5', label: 'type' },
            { from: '1', to: '6', label: 'type' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Okula gitmedi _____ hastaydı. (because)',
        correctAnswer: 'çünkü',
        alternatives: ['için', 'ama', 've'],
        explanation: 'To express the reason someone didn\'t go to school, use "çünkü" which means "because".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which connector expresses "both...and"?',
        correctAnswer: 'hem...hem',
        alternatives: [
          'ne...ne',
          'ya...ya',
          've...ve'
        ],
        explanation: 'The structure "hem...hem" is used to express "both...and" in Turkish. For example: "Hem zengin hem güzel" (Both rich and beautiful).'
      },
      {
        type: 'translation',
        prompt: 'Translate: I will come if I have time.',
        correctAnswer: 'Zamanım olursa geleceğim.',
        alternatives: ['Vaktim olursa geleceğim.', 'Zamanım varsa geleceğim.'],
        explanation: 'The conditional connector "-sa/-se" is used to express "if" in Turkish. It attaches to the verb and follows vowel harmony rules.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Kahve için geldim için yorgunum."',
        correctAnswer: 'Kahve içtim çünkü yorgunum.',
        explanation: 'The sentence has incorrect usage of "için". To express "because" between clauses, use "çünkü" or the suffix "-dığı için" (because I...).'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each conjunction with its meaning:',
        correctAnswer: 've:and|veya:or|ama:but|çünkü:because|de/da:also/too|ne...ne:neither...nor',
        explanation: 'These are the basic conjunctions in Turkish, each serving a specific purpose in connecting words, phrases, or clauses.'
      }
    ],
    relatedPatterns: ['postpositions', 'verb-suffixes', 'verbal-nouns'],
    notes: 'Turkish relies heavily on suffixes and verbal nouns to create connectors between clauses, which is different from the separate conjunction words common in English.',
    exceptions: [
      'The conjunction "de/da" follows vowel harmony and is always written separately from the word it follows',
      'Some conjunctions like "ki" are borrowed from Persian and do not follow typical Turkish sentence structure'
    ]
  },
  {
    id: 'conditionals',
    slug: 'conditionals',
    name: 'Conditional Forms',
    difficulty: 'advanced',
    category: 'Verbs',
    summary: 'Turkish conditionals express hypothetical situations and their possible results using the suffix -se/-sa and various tense combinations.',
    formulas: [
      'Simple condition: Verb + tense + -se/-sa + personal ending + main clause',
      'Counterfactual: Verb + -se/-sa + -(y)di + personal ending + main clause with -(y)di',
      'Hypothetical future: Verb + -se/-sa + personal ending + main clause with future or aorist'
    ],
    examples: [
      {
        turkish: 'Yağmur yağarsa, evde kalacağım.',
        english: 'If it rains, I will stay at home.',
        breakdown: {
          segments: [
            { text: 'Yağmur', type: 'noun', meaning: 'rain' },
            { text: 'yağ', type: 'verb-root', meaning: 'to rain' },
            { text: 'ar', type: 'tense-marker', meaning: 'aorist tense' },
            { text: 'sa', type: 'conditional-marker', meaning: 'if' },
            { text: 'ev', type: 'noun', meaning: 'house' },
            { text: 'de', type: 'locative-case', meaning: 'at (locative case marker)' },
            { text: 'kal', type: 'verb-root', meaning: 'stay' },
            { text: 'acağ', type: 'future-tense', meaning: 'will' },
            { text: 'ım', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Zengin olsaydım, dünyayı gezerdim.',
        english: 'If I were rich, I would travel the world.',
        breakdown: {
          segments: [
            { text: 'Zengin', type: 'adjective', meaning: 'rich' },
            { text: 'ol', type: 'verb-root', meaning: 'be/become' },
            { text: 'sa', type: 'conditional-marker', meaning: 'if' },
            { text: 'y', type: 'buffer', meaning: 'buffer consonant' },
            { text: 'dı', type: 'past-tense', meaning: 'past' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' },
            { text: 'dünya', type: 'noun', meaning: 'world' },
            { text: 'yı', type: 'accusative-case', meaning: 'direct object marker' },
            { text: 'gez', type: 'verb-root', meaning: 'travel/tour' },
            { text: 'er', type: 'tense-marker', meaning: 'aorist tense' },
            { text: 'di', type: 'past-tense', meaning: 'past' },
            { text: 'm', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Erken kalksaymışım, treni kaçırmazmışım.',
        english: 'If I had gotten up early (reportedly), I wouldn\'t have missed the train (reportedly).',
        breakdown: {
          segments: [
            { text: 'Erken', type: 'adverb', meaning: 'early' },
            { text: 'kalk', type: 'verb-root', meaning: 'get up' },
            { text: 'sa', type: 'conditional-marker', meaning: 'if' },
            { text: 'y', type: 'buffer', meaning: 'buffer consonant' },
            { text: 'mış', type: 'past-tense', meaning: 'reported past' },
            { text: 'ım', type: 'personal-ending', meaning: '1st person singular' },
            { text: 'tren', type: 'noun', meaning: 'train' },
            { text: 'i', type: 'accusative-case', meaning: 'direct object marker' },
            { text: 'kaçır', type: 'verb-root', meaning: 'miss (not catch)' },
            { text: 'ma', type: 'negation', meaning: 'not' },
            { text: 'z', type: 'tense-marker', meaning: 'aorist tense' },
            { text: 'mış', type: 'past-tense', meaning: 'reported past' },
            { text: 'ım', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      }
    ],
    explanation: "Turkish conditional forms express various hypothetical situations using the suffix -se/-sa (which follows vowel harmony). The type of condition (real, unreal, or counterfactual) is indicated by the tense markers used with the conditional suffix and in the main clause. Turkish allows for more complex conditional expressions than English by combining the conditional suffix with various tenses.",
    usageNotes: [
      'The conditional suffix -se/-sa attaches after tense markers, not directly to the verb stem',
      'For real/possible conditions in the present or future, use aorist or present tense + conditional suffix',
      'For unreal/counterfactual conditions, use conditional suffix + past marker (-di/-dı)',
      'For reported/hearsay conditionals, use conditional suffix + reported past marker (-miş/-mış)',
      'The main clause tense typically agrees with the condition type (future for real, past for unreal)'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Turkish Conditional Forms',
        description: 'Different types of conditionals in Turkish',
        data: {
          headers: ['Condition Type', 'If Clause Structure', 'Main Clause Structure', 'Example'],
          rows: [
            ['Real/Possible', 'Verb + aorist/present + -sa/-se', 'Future or imperative', 'Gelirse, konuşuruz (If he comes, we\'ll talk)'],
            ['Unreal Present', 'Verb + -sa/-se + -(y)di', 'Aorist + -(y)di', 'Burada olsaydı, görürdük (If he were here, we would see him)'],
            ['Counterfactual', 'Verb + past + -sa/-se + -(y)di', 'Aorist + -(y)di', 'Söylemiş olsaydı, yapardım (If he had told me, I would have done it)'],
            ['Reported Condition', 'Verb + -sa/-se + -(y)miş', 'Aorist + -(y)miş', 'Gelseymiş, görecekmiş (If he had come (reportedly), he would have seen)']
          ],
          caption: 'Types of Turkish Conditionals',
          footnote: 'Turkish allows for more nuanced expressions of conditionality through tense combinations.'
        }
      },
      {
        type: 'diagram',
        title: 'Structure of Turkish Conditionals',
        description: 'How conditional sentences are formed in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Conditional Sentence', description: 'Central concept' },
            { id: '2', label: 'Condition Clause', examples: ['Yağmur yağarsa (If it rains)'] },
            { id: '3', label: 'Result Clause', examples: ['evde kalacağım (I will stay at home)'] },
            { id: '4', label: 'Verb Stem', examples: ['gel-', 'gör-'] },
            { id: '5', label: 'Tense Marker', examples: ['-ir/-er/-r, -di/-dı, -miş/-mış'] },
            { id: '6', label: 'Conditional Suffix', examples: ['-se/-sa'] },
            { id: '7', label: 'Time Reference', examples: ['-di (past), -miş (reported)'] },
            { id: '8', label: 'Personal Ending', examples: ['-im/-ım, -sin/-sın, etc.'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'consists of' },
            { from: '1', to: '3', label: 'consists of' },
            { from: '2', to: '4', label: 'starts with' },
            { from: '2', to: '5', label: 'adds' },
            { from: '2', to: '6', label: 'adds' },
            { from: '2', to: '7', label: 'may add' },
            { from: '2', to: '8', label: 'ends with' },
            { from: '3', to: '4', label: 'starts with' },
            { from: '3', to: '5', label: 'adds' },
            { from: '3', to: '7', label: 'may add' },
            { from: '3', to: '8', label: 'ends with' }
          ],
          layout: 'tree'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Yağmur yağ_____, şemsiye alacağım. (If it rains)',
        correctAnswer: 'arsa',
        alternatives: ['ıyorsa', 'dıysa'],
        explanation: 'For real/possible conditions, we typically use the aorist tense (-(a)r/-(e)r) with the conditional suffix (-sa/-se) following vowel harmony.'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence expresses "If I were rich, I would buy a house"?',
        correctAnswer: 'Zengin olsaydım, bir ev alırdım.',
        alternatives: [
          'Zengin olursam, bir ev alacağım.',
          'Zengin olunca, bir ev aldım.',
          'Zengin olduğum için, bir ev aldım.'
        ],
        explanation: 'For unreal/counterfactual conditions in the present, we use the conditional suffix (-sa/-se) followed by the past tense marker (-di/-dı) in the condition clause, and the aorist with past tense in the result clause.'
      },
      {
        type: 'translation',
        prompt: 'Translate: If you study, you will pass the exam.',
        correctAnswer: 'Çalışırsan, sınavı geçeceksin.',
        alternatives: ['Ders çalışırsan, sınavdan geçeceksin.', 'Eğer çalışırsan, sınavı geçersin.'],
        explanation: 'For real/possible conditions, Turkish uses the aorist tense + conditional suffix in the condition clause, and future or aorist tense in the result clause.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Para olsa alırdım."',
        correctAnswer: 'Param olsa, alırdım.',
        explanation: 'The sentence needs the possessive suffix to indicate "if I had money" rather than "if there was money." The corrected sentence means "If I had money, I would buy it."'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each conditional sentence with its meaning:',
        correctAnswer: 'Gelirse, görüşürüz.:If he comes, we\'ll meet.|Gelseydi, görüşürdük.:If he had come, we would have met.|Gelecekse, haber ver.:If he\'s going to come, let me know.|Gelmişse, odamdadır.:If he has come, he\'s in my room.',
        explanation: 'Turkish conditionals can express various time relationships depending on the tense used with the conditional suffix.'
      }
    ],
    relatedPatterns: ['reported-past-tense', 'present-continuous', 'past-tense', 'future-tense'],
    notes: 'The position of the conditional clause can be flexible in a sentence. It can come before or after the main clause without changing the meaning.',
    exceptions: [
      'The word "eğer" (if) can be added at the beginning of conditional clauses for emphasis, but it is usually omitted',
      'In some expressions, the conditional suffix can express wishes or desires rather than conditions: "Keşke gelseydi" (I wish he had come)'
    ]
  },
  {
    id: 'relative-clauses',
    slug: 'relative-clauses',
    name: 'Relative Clauses',
    difficulty: 'advanced',
    category: 'Sentence Structure',
    summary: 'Turkish relative clauses modify nouns by turning verbs into participles that act as adjectives, using specific suffixes depending on the relationship between the relative clause and the noun.',
    formulas: [
      'Subject participle: Verb stem + -en/-an + noun',
      'Object participle: Verb stem + -diği/-dığı/-düğü/-düğü + possessive suffix + noun',
      'Time/place participle: Verb stem + -diği/-dığı/-düğü/-düğü + time/place noun'
    ],
    examples: [
      {
        turkish: 'Koşan adam doktordur.',
        english: 'The man who is running is a doctor.',
        breakdown: {
          segments: [
            { text: 'Koş', type: 'verb-root', meaning: 'run' },
            { text: 'an', type: 'subject-participle', meaning: 'who runs/running' },
            { text: 'adam', type: 'noun', meaning: 'man' },
            { text: 'doktor', type: 'noun', meaning: 'doctor' },
            { text: 'dur', type: 'existential', meaning: 'is (predicative)' }
          ]
        }
      },
      {
        turkish: 'Okuduğum kitap çok ilginçti.',
        english: 'The book that I read was very interesting.',
        breakdown: {
          segments: [
            { text: 'Oku', type: 'verb-root', meaning: 'read' },
            { text: 'duğ', type: 'object-participle', meaning: 'that is read' },
            { text: 'um', type: 'possessive-marker', meaning: 'my/by me (1st person possessive)' },
            { text: 'kitap', type: 'noun', meaning: 'book' },
            { text: 'çok', type: 'adverb', meaning: 'very' },
            { text: 'ilginç', type: 'adjective', meaning: 'interesting' },
            { text: 'ti', type: 'past-tense', meaning: 'was' }
          ]
        }
      },
      {
        turkish: 'Yaşadığımız şehir çok büyük.',
        english: 'The city (in which) we live is very big.',
        breakdown: {
          segments: [
            { text: 'Yaşa', type: 'verb-root', meaning: 'live' },
            { text: 'dığ', type: 'object-participle', meaning: 'that is lived in' },
            { text: 'ımız', type: 'possessive-marker', meaning: 'our/by us (1st person plural possessive)' },
            { text: 'şehir', type: 'noun', meaning: 'city' },
            { text: 'çok', type: 'adverb', meaning: 'very' },
            { text: 'büyük', type: 'adjective', meaning: 'big' }
          ]
        }
      }
    ],
    explanation: "Unlike English, which uses relative pronouns (who, which, that), Turkish forms relative clauses using participle suffixes added to verbs. The two main types are the subject participle (-(y)en/-(y)an), used when the modified noun is the subject of the relative clause, and the object participle (-dik/-dık/-duk/-dük + possessive), used when the modified noun is the object, location, or has another relationship to the relative clause. Turkish relative clauses always come before the noun they modify, maintaining the adjective-before-noun order.",
    usageNotes: [
      'Subject participle (-(y)en/-(y)an) is used when the modified noun is the subject of the relative clause action',
      'Object participle (-diği/-dığı + possessive) is used when the modified noun is the object or has another relationship to the action',
      'Relative clauses always precede the noun they modify',
      'A possessive suffix must be added to the object participle to indicate who performs the action',
      'Tense can be indicated by using different participle forms (-ecek/-acak for future, -miş/-mış for reported)'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Turkish Relative Clause Types',
        description: 'Different types of participles used in relative clauses',
        data: {
          headers: ['Participle Type', 'Suffix', 'Usage', 'Example', 'Translation'],
          rows: [
            ['Subject Participle', '-en/-an', 'When modified noun is the subject', 'gelen adam', 'the man who comes'],
            ['Object Participle', '-diği/-dığı + possessive', 'When modified noun is the object', 'gördüğüm adam', 'the man whom I saw'],
            ['Location Participle', '-diği/-dığı + possessive', 'When modified noun is location', 'oturduğumuz ev', 'the house where we live'],
            ['Time Participle', '-diği/-dığı + possessive', 'When modified noun is time', 'gittiğimiz gün', 'the day when we went'],
            ['Future Subject', '-ecek/-acak', 'Future actions where noun is subject', 'gelecek adam', 'the man who will come'],
            ['Future Object', '-eceği/-acağı + possessive', 'Future actions where noun is object', 'okuyacağım kitap', 'the book that I will read']
          ],
          caption: 'Types of Participles in Turkish Relative Clauses',
          footnote: 'The choice of participle depends on the relationship between the modified noun and the action in the relative clause.'
        }
      },
      {
        type: 'diagram',
        title: 'Structure of Turkish Relative Clauses',
        description: 'How relative clauses are formed and positioned in Turkish',
        data: {
          nodes: [
            { id: '1', label: 'Relative Clause Structure', description: 'Central concept' },
            { id: '2', label: 'Subject Participle', examples: ['koşan adam (the running man)'] },
            { id: '3', label: 'Object Participle', examples: ['gördüğüm adam (the man I saw)'] },
            { id: '4', label: 'Verb Stem', examples: ['gel- (come), git- (go)'] },
            { id: '5', label: 'Participle Suffix', examples: ['-en/-an, -diği/-dığı'] },
            { id: '6', label: 'Possessive Suffix', examples: ['-im/-ım, -in/-ın, etc.'] },
            { id: '7', label: 'Modified Noun', examples: ['adam (man), kitap (book)'] },
            { id: '8', label: 'Main Clause', examples: ['hastadır (is sick), güzeldir (is beautiful)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'can be' },
            { from: '1', to: '3', label: 'can be' },
            { from: '2', to: '4', label: 'starts with' },
            { from: '2', to: '5', label: 'adds' },
            { from: '3', to: '4', label: 'starts with' },
            { from: '3', to: '5', label: 'adds' },
            { from: '3', to: '6', label: 'adds' },
            { from: '2', to: '7', label: 'modifies' },
            { from: '3', to: '7', label: 'modifies' },
            { from: '7', to: '8', label: 'is part of' }
          ],
          layout: 'tree'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Park_____ çocuklar çok mutlu. (the children who are playing)',
        correctAnswer: 'oynayan',
        alternatives: ['oynayan', 'oynayacak'],
        explanation: 'Since the children are the ones doing the playing (they are the subject of the action), we use the subject participle -an/-en (following vowel harmony).'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence means "The book that I read was very good"?',
        correctAnswer: 'Okuduğum kitap çok güzeldi.',
        alternatives: [
          'Okuyan kitap çok güzeldi.',
          'Okuyacağım kitap çok güzeldi.',
          'Kitap okudum ve çok güzeldi.'
        ],
        explanation: 'When the modified noun is the object of the action (the book is what was read), we use the object participle -dığı/-diği plus a possessive suffix to indicate who performed the action.'
      },
      {
        type: 'translation',
        prompt: 'Translate: The house where we lived was small.',
        correctAnswer: 'Yaşadığımız ev küçüktü.',
        alternatives: ['Oturduğumuz ev küçüktü.', 'İçinde yaşadığımız ev küçüktü.'],
        explanation: 'When the modified noun represents a location of the action, we use the object participle form with a possessive suffix.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Gördüğüm adam kitap okuyan."',
        correctAnswer: 'Gördüğüm adam kitap okuyor.',
        explanation: 'The sentence has an incorrect use of the subject participle in the predicate position. The correct form should use a finite verb for the predicate: "...okuyor" (is reading).'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each relative clause with its English translation:',
        correctAnswer: 'koşan köpek:the dog that is running|sevdiğim film:the movie that I like|gittiğimiz şehir:the city where we went|yazacağım mektup:the letter that I will write',
        explanation: 'Turkish uses different participle forms based on the relationship between the noun and the action, and whether the action is in the past, present, or future.'
      }
    ],
    relatedPatterns: ['conjunctions-connectors', 'verb-suffixes'],
    notes: 'Relative clauses are one of the most challenging aspects of Turkish grammar for non-native speakers, as they function very differently from Indo-European languages.',
    exceptions: [
      'The participle suffix -dik/-dık changes to -diği/-dığı when followed by a possessive suffix',
      'When negating a relative clause, the negation suffix -me/-ma comes before the participle suffix: "görmedikleri" (that they didn\'t see)'
    ]
  },
  {
    id: 'verbal-nouns',
    slug: 'verbal-nouns',
    name: 'Verbal Nouns (Mastar)',
    difficulty: 'advanced',
    category: 'Verbs',
    summary: 'Turkish verbal nouns (mastar) transform verbs into nouns that can function as subjects or objects in sentences, formed primarily with the suffixes -mek/-mak, -me/-ma, and -iş/-ış/-uş/-üş.',
    formulas: [
      'Infinitive: Verb stem + -mek/-mak',
      'Action noun: Verb stem + -me/-ma',
      'Style/manner noun: Verb stem + -iş/-ış/-uş/-üş'
    ],
    examples: [
      {
        turkish: 'Türkçe öğrenmek zor değil.',
        english: 'Learning Turkish is not difficult.',
        breakdown: {
          segments: [
            { text: 'Türkçe', type: 'noun', meaning: 'Turkish (language)' },
            { text: 'öğren', type: 'verb-root', meaning: 'learn' },
            { text: 'mek', type: 'verb-to-noun', meaning: 'infinitive marker' },
            { text: 'zor', type: 'adjective', meaning: 'difficult' },
            { text: 'değil', type: 'negation', meaning: 'not' }
          ]
        }
      },
      {
        turkish: 'Kitap okumayı seviyorum.',
        english: 'I love reading books.',
        breakdown: {
          segments: [
            { text: 'Kitap', type: 'noun', meaning: 'book' },
            { text: 'oku', type: 'verb-root', meaning: 'read' },
            { text: 'ma', type: 'verb-to-noun', meaning: 'action noun marker' },
            { text: 'yı', type: 'accusative-case', meaning: 'accusative case (direct object)' },
            { text: 'sev', type: 'verb-root', meaning: 'love' },
            { text: 'iyor', type: 'present-cont-marker', meaning: 'present continuous' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      },
      {
        turkish: 'Onun gülüşü çok güzel.',
        english: 'Her/his laugh is very beautiful.',
        breakdown: {
          segments: [
            { text: 'On', type: 'pronoun', meaning: 'he/she/it' },
            { text: 'un', type: 'genitive-case', meaning: 'genitive case (possessive)' },
            { text: 'gül', type: 'verb-root', meaning: 'laugh' },
            { text: 'üş', type: 'verb-to-noun', meaning: 'manner noun marker' },
            { text: 'ü', type: 'possessive-marker', meaning: '3rd person singular possessive' },
            { text: 'çok', type: 'adverb', meaning: 'very' },
            { text: 'güzel', type: 'adjective', meaning: 'beautiful' }
          ]
        }
      }
    ],
    explanation: "Verbal nouns (mastar) are a fundamental feature of Turkish grammar that allow verbs to function as nouns, creating complex sentence structures. Turkish has three main types of verbal nouns: infinitives (-mek/-mak), which name the action in its purest form; action nouns (-me/-ma), which refer to the process or instance of the action; and manner nouns (-iş/-ış/-uş/-üş), which express the style or manner of the action. These verbal nouns can function as subjects, objects, or can take case markers, possessive suffixes, and other nominal modifiers.",
    usageNotes: [
      'The infinitive (-mek/-mak) is used for general, abstract references to actions and dictionary entries',
      'The action noun (-me/-ma) is used for specific instances of actions and can take possessive suffixes',
      'The manner noun (-iş/-ış/-uş/-üş) refers to the style, manner, or way an action is performed',
      'Verbal nouns can take case markers like normal nouns: okumayı (reading, in accusative case)',
      'They can also take possessive suffixes: gelmem (my coming), gitmesi (his/her going)'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Turkish Verbal Noun Types',
        description: 'Different types of verbal nouns in Turkish and their uses',
        data: {
          headers: ['Type', 'Suffix', 'Usage', 'Example', 'Translation'],
          rows: [
            ['Infinitive', '-mek/-mak', 'General, abstract reference', 'yazmak', 'to write'],
            ['Action Noun', '-me/-ma', 'Specific instance of action', 'yazma', 'writing (the act)'],
            ['Manner Noun', '-iş/-ış/-uş/-üş', 'Style or manner of action', 'yazış', 'way of writing, writing style'],
            ['Action Noun + Possessive', '-me/-ma + poss.', 'Someone\'s action', 'yazmam', 'my writing'],
            ['Action Noun + Case', '-me/-ma + case', 'Action in a grammatical case', 'yazmayı', 'writing (as object)'],
            ['Manner Noun + Possessive', '-iş/-ış + poss.', 'Someone\'s style of action', 'yazışın', 'your writing style']
          ],
          caption: 'Types and Uses of Turkish Verbal Nouns',
          footnote: 'All verbal noun suffixes follow vowel harmony rules.'
        }
      },
      {
        type: 'diagram',
        title: 'Function of Verbal Nouns in Sentences',
        description: 'How verbal nouns are used in Turkish sentences',
        data: {
          nodes: [
            { id: '1', label: 'Verbal Noun Functions', description: 'Central concept' },
            { id: '2', label: 'Subject', examples: ['Koşmak sağlıklıdır. (Running is healthy.)'] },
            { id: '3', label: 'Object', examples: ['Yüzmeyi seviyorum. (I like swimming.)'] },
            { id: '4', label: 'Complement', examples: ['Amacı öğrenmekti. (His goal was to learn.)'] },
            { id: '5', label: 'Modified by Adjectives', examples: ['Hızlı koşma (Fast running)'] },
            { id: '6', label: 'Modified by Possessives', examples: ['Senin gelmen (Your coming)'] },
            { id: '7', label: 'With Case Markers', examples: ['Yazmadan önce (Before writing)'] },
            { id: '8', label: 'In Compound Structures', examples: ['Yazma becerisi (Writing skill)'] }
          ],
          connections: [
            { from: '1', to: '2', label: 'can be' },
            { from: '1', to: '3', label: 'can be' },
            { from: '1', to: '4', label: 'can be' },
            { from: '1', to: '5', label: 'can be' },
            { from: '1', to: '6', label: 'can be' },
            { from: '1', to: '7', label: 'can be' },
            { from: '1', to: '8', label: 'can be' }
          ],
          layout: 'radial'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Türkçe konuş_____ çok önemlidir. (speaking Turkish - general concept)',
        correctAnswer: 'mak',
        alternatives: ['ma', 'ış'],
        explanation: 'For general concepts or abstract references to actions, we use the infinitive form with -mak/-mek (following vowel harmony).'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence means "I heard your singing yesterday"?',
        correctAnswer: 'Dün senin şarkı söylemeni duydum.',
        alternatives: [
          'Dün senin şarkı söylemek duydum.',
          'Dün senin şarkı söylemeyi duydum.',
          'Dün senin şarkı söyleyişini duydum.'
        ],
        explanation: 'For a specific instance of someone\'s action as an object, we use the action noun (-me/-ma) with appropriate possessive and case markers.'
      },
      {
        type: 'translation',
        prompt: 'Translate: His way of speaking is very clear.',
        correctAnswer: 'Onun konuşuşu çok açık.',
        alternatives: ['Konuşma şekli çok açık.', 'Konuşma tarzı çok açık.'],
        explanation: 'To express the manner or style of an action, we use the manner noun (-iş/-ış/-uş/-üş) with appropriate possessive markers.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Yüzmeği seviyorum."',
        correctAnswer: 'Yüzmeyi seviyorum.',
        explanation: 'The action noun "yüzme" (swimming) should take the accusative case suffix "-yi" (not "-ği") when it functions as the direct object of "seviyorum" (I like).'
      },
      {
        type: 'match-pairs',
        prompt: 'Match each verbal noun with its English equivalent:',
        correctAnswer: 'yemek:to eat/food|yeme:eating (the act)|yiyiş:way of eating|yazma:writing (the act)|yazmak:to write|okumak:to read',
        explanation: 'Turkish has different verbal noun forms for different aspects of an action: the general concept, specific instances, and the manner/style of performing the action.'
      }
    ],
    relatedPatterns: ['relative-clauses', 'postpositions', 'case-markers'],
    notes: 'Note that the infinitive form (-mek/-mak) can sometimes function as a noun meaning the actual thing, not just the action (e.g., "yemek" can mean both "to eat" and "food").',
    exceptions: [
      'The infinitive suffix -mek/-mak is never used with possessive suffixes or case markers; instead, the action noun -me/-ma is used',
      'Some verbal nouns have become lexicalized with specific meanings: "yemek" (food), "içecek" (beverage), "giyecek" (clothing)'
    ]
  },
  {
    id: 'voice-system',
    slug: 'voice-system',
    name: 'Voice System (Passive, Causative, Reflexive, Reciprocal)',
    difficulty: 'advanced',
    category: 'Verbs',
    summary: 'Turkish has a sophisticated voice system that can transform verbs to express passive, causative, reflexive, and reciprocal meanings through specific suffixes that can even be combined.',
    formulas: [
      'Passive: Verb stem + -(i)l/-(ı)l/-(u)l/-(ü)l or -(i)n/-(ı)n/-(u)n/-(ü)n + tense/aspect + person',
      'Causative: Verb stem + -dir/-dır/-dur/-dür or -t + tense/aspect + person',
      'Reflexive: Verb stem + -(i)n/-(ı)n/-(u)n/-(ü)n + tense/aspect + person',
      'Reciprocal: Verb stem + -(i)ş/-(ı)ş/-(u)ş/-(ü)ş + tense/aspect + person'
    ],
    examples: [
      {
        turkish: 'Kapı açıldı.',
        english: 'The door was opened.',
        breakdown: {
          segments: [
            { text: 'Kapı', type: 'noun', meaning: 'door' },
            { text: 'aç', type: 'verb-root', meaning: 'open' },
            { text: 'ıl', type: 'passive', meaning: 'passive marker' },
            { text: 'd', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'ı', type: 'personal-ending', meaning: '3rd person singular' }
          ]
        }
      },
      {
        turkish: 'Öğretmen öğrenciye mektubu yazdırdı.',
        english: 'The teacher made the student write the letter.',
        breakdown: {
          segments: [
            { text: 'Öğretmen', type: 'noun', meaning: 'teacher' },
            { text: 'öğrenci', type: 'noun', meaning: 'student' },
            { text: 'ye', type: 'dative-case', meaning: 'to (dative case)' },
            { text: 'mektub', type: 'noun', meaning: 'letter' },
            { text: 'u', type: 'accusative-case', meaning: 'direct object marker' },
            { text: 'yaz', type: 'verb-root', meaning: 'write' },
            { text: 'dır', type: 'causative', meaning: 'causative marker' },
            { text: 'd', type: 'past-tense', meaning: 'past tense marker' },
            { text: 'ı', type: 'personal-ending', meaning: '3rd person singular' }
          ]
        }
      },
      {
        turkish: 'Her sabah yıkanıyorum.',
        english: 'I wash myself every morning.',
        breakdown: {
          segments: [
            { text: 'Her', type: 'determiner', meaning: 'every' },
            { text: 'sabah', type: 'noun', meaning: 'morning' },
            { text: 'yıka', type: 'verb-root', meaning: 'wash' },
            { text: 'n', type: 'reflexive', meaning: 'reflexive marker' },
            { text: 'ıyor', type: 'present-cont-marker', meaning: 'present continuous' },
            { text: 'um', type: 'personal-ending', meaning: '1st person singular' }
          ]
        }
      }
    ],
    explanation: "The Turkish voice system modifies the relationship between the verb and its arguments. The passive voice removes the agent and promotes the object to subject. The causative voice adds an agent who causes the action to be performed. The reflexive voice indicates that the subject performs the action on themselves. The reciprocal voice shows that multiple subjects perform the action on each other.",
    usageNotes: [
      'Passive voice is formed with the suffix -(i)l/-(ı)l after consonants and -(i)n/-(ı)n after l-ending verbs',
      'Causative voice has several forms: -dir/-dır/-dur/-dür (most common), -t (after vowels), or -ir/-ır/-ur/-ür (for some verbs)',
      'Reflexive voice uses the suffix -(i)n/-(ı)n/-(u)n/-(ü)n, but only works with verbs that logically can be done to oneself',
      'Reciprocal voice uses the suffix -(i)ş/-(ı)ş/-(u)ş/-(ü)ş and requires plural subjects or a subject with collective meaning'
    ],
    visualAids: [
      {
        type: 'table',
        title: 'Turkish Voice Suffixes',
        description: 'Different voice suffixes in Turkish and their functions',
        data: {
          headers: ['Voice Type', 'Suffix', 'Function', 'Example', 'Translation'],
          rows: [
            ['Passive', '-(i)l/-(ı)l or -(i)n/-(ı)n', 'Remove agent, promote object to subject', 'Kitap okundu', 'The book was read'],
            ['Causative', '-dir/-dır/-dur/-dür, -t', 'Add causer of action', 'Mektubu yazdırdım', 'I had the letter written'],
            ['Reflexive', '-(i)n/-(ı)n/-(u)n/-(ü)n', 'Subject acts on self', 'Giyindim', 'I got dressed (myself)'],
            ['Reciprocal', '-(i)ş/-(ı)ş/-(u)ş/-(ü)ş', 'Subjects act on each other', 'Görüştüler', 'They met with each other']
          ],
          caption: 'Turkish Voice Suffixes',
          footnote: 'All voice suffixes follow vowel harmony rules.'
        }
      }
    ],
    practiceExercises: [
      {
        type: 'fill-in-blank',
        prompt: 'Elbise yıka_____. (The dress was washed.)',
        correctAnswer: 'ndı',
        alternatives: ['dı', 'ldı'],
        explanation: 'Since "yıka-" (wash) ends with a vowel, we use "-n" for the passive, followed by "-dı" for past tense, resulting in "yıkanıldı".'
      },
      {
        type: 'multiple-choice',
        prompt: 'Which sentence means "The manager had the letter written"?',
        correctAnswer: 'Müdür mektubu yazdırdı.',
        alternatives: [
          'Müdür mektubu yazdı.',
          'Müdür mektubu yazıldı.',
          'Müdür mektubu yazındı.'
        ],
        explanation: 'The causative suffix "-dır" shows that the manager caused someone else to write the letter, not that he wrote it himself.'
      },
      {
        type: 'translation',
        prompt: 'Translate: The children are hugging each other.',
        correctAnswer: 'Çocuklar kucaklaşıyorlar.',
        alternatives: ['Çocuklar sarılıyorlar.', 'Çocuklar kucaklıyorlar birbirlerini.'],
        explanation: 'The reciprocal suffix "-ş" in "kucaklaşmak" indicates that the action is performed mutually between the subjects.'
      },
      {
        type: 'error-correction',
        prompt: 'Correct this sentence if needed: "Ben her sabah giydim."',
        correctAnswer: 'Ben her sabah giyiniyorum.',
        explanation: 'The sentence should use the reflexive form "giyinmek" (to dress oneself) and the present continuous tense since it\'s a habitual action: "I dress myself every morning."'
      }
    ],
    relatedPatterns: ['verb-suffixes', 'verbal-nouns', 'conditionals'],
    notes: 'The Turkish voice system allows for very precise and economical expression through verb morphology, without requiring additional words or phrases.',
    exceptions: [
      'Not all verbs can take all voice suffixes; the meaning must be logically possible',
      'Some verbs have irregular forms with certain voice suffixes',
      'Some verbs have lexicalized with voice suffixes, creating new meanings'
    ]
  }
];

export const grammarPatterns: GrammarPattern[] = [...baseGrammarPatterns, ...additionalPatterns];

// Utility functions
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  grammarPatterns.forEach(pattern => {
    categories.add(pattern.category);
  });
  return Array.from(categories).sort();
}

export function getPatternsByCategory(category: string): GrammarPattern[] {
  return grammarPatterns.filter(pattern => pattern.category === category);
}

export function getPatternsByDifficulty(difficulty: GrammarDifficulty): GrammarPattern[] {
  return grammarPatterns.filter(pattern => pattern.difficulty === difficulty);
}

export function getPatternById(id: string): GrammarPattern | undefined {
  return grammarPatterns.find(pattern => pattern.id === id);
}
