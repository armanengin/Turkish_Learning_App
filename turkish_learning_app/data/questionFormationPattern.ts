import { GrammarPattern } from '../types/grammar';

export const questionFormationPattern: GrammarPattern = {
  id: 'question-formation',
  slug: 'question-formation',
  name: 'Question Formation',
  difficulty: 'beginner',
  category: 'Syntax',
  summary: 'Turkish forms questions primarily using the question particle "mi" (with variants mı/mu/mü according to vowel harmony) or question words placed before the verb.',
  formulas: [
    'Yes/No Questions: Statement + mi/mı/mu/mü + personal ending',
    'Information Questions: Question word + statement (verb final)',
    'Tag Questions: Statement + değil mi?'
  ],
  examples: [
    {
      turkish: 'Türkçe konuşuyor musun?',
      english: 'Do you speak Turkish?',
      breakdown: {
        segments: [
          { text: 'Türkçe', type: 'noun', meaning: 'Turkish language' },
          { text: 'konuşuyor', type: 'verb-root', meaning: 'speak (present continuous)' },
          { text: 'mu', type: 'question-particle', meaning: 'question particle' },
          { text: 'sun', type: 'person-marker', meaning: '2nd person singular' }
        ]
      }
    },
    {
      turkish: 'Nerede oturuyorsun?',
      english: 'Where do you live?',
      breakdown: {
        segments: [
          { text: 'Nerede', type: 'question-word', meaning: 'where' },
          { text: 'oturuyor', type: 'verb-root', meaning: 'live/reside (present continuous)' },
          { text: 'sun', type: 'person-marker', meaning: '2nd person singular' }
        ]
      }
    },
    {
      turkish: 'Kitabı okudun mu?',
      english: 'Did you read the book?',
      breakdown: {
        segments: [
          { text: 'Kitab', type: 'noun', meaning: 'book' },
          { text: 'ı', type: 'accusative-case', meaning: 'accusative case marker' },
          { text: 'oku', type: 'verb-root', meaning: 'read' },
          { text: 'dun', type: 'past-tense', meaning: 'past tense + 2nd person singular' },
          { text: 'mu', type: 'question-particle', meaning: 'question particle' }
        ]
      }
    },
    {
      turkish: 'Güzel bir film, değil mi?',
      english: 'It\'s a nice movie, isn\'t it?',
      breakdown: {
        segments: [
          { text: 'Güzel', type: 'adjective', meaning: 'nice/beautiful' },
          { text: 'bir', type: 'determiner', meaning: 'a/one' },
          { text: 'film', type: 'noun', meaning: 'movie' },
          { text: 'değil', type: 'negation', meaning: 'not' },
          { text: 'mi', type: 'question-particle', meaning: 'question particle' }
        ]
      }
    }
  ],
  explanation: "Turkish forms questions in several ways. Yes/no questions are formed by adding the question particle 'mi' (with variants mı/mu/mü according to vowel harmony) after the element being questioned, usually the verb. Information questions use question words like 'ne' (what), 'kim' (who), 'nerede' (where), etc., typically placed at the beginning of the sentence or immediately before the verb. The word order generally remains Subject-Object-Verb, with the question word replacing the unknown element.",
  usageNotes: [
    'The question particle mi/mı/mu/mü follows vowel harmony rules based on the last vowel of the preceding word',
    'In yes/no questions, the question particle comes after the verb but before the personal ending',
    'Question words generally come at the beginning of the sentence or immediately before the verb',
    'Tag questions are formed with "değil mi?" (isn\'t it?/right?)',
    'The intonation rises at the end of questions, similar to English'
  ],
  visualAids: [
    {
      type: 'table',
      title: 'Question Particle Forms',
      description: 'Shows how the question particle changes according to vowel harmony',
      data: {
        headers: ['Last Vowel in Preceding Word', 'Question Particle Form', 'Example'],
        rows: [
          ['e, i (front, unrounded)', 'mi', 'geldi mi? (did he/she come?)'],
          ['a, ı (back, unrounded)', 'mı', 'aldı mı? (did he/she buy?)'],
          ['ö, ü (front, rounded)', 'mü', 'gördü mü? (did he/she see?)'],
          ['o, u (back, rounded)', 'mu', 'oldu mu? (did it happen?)']
        ],
        caption: 'The question particle follows four-way vowel harmony',
        footnote: 'The question particle is always written separately from the word it follows.'
      }
    },
    {
      type: 'table',
      title: 'Common Question Words',
      description: 'List of frequently used question words in Turkish',
      data: {
        headers: ['Turkish', 'English', 'Example'],
        rows: [
          ['ne', 'what', 'Ne istiyorsun? (What do you want?)'],
          ['kim', 'who', 'Kim geldi? (Who came?)'],
          ['nerede/nerde', 'where', 'Nerede oturuyorsun? (Where do you live?)'],
          ['ne zaman', 'when', 'Ne zaman geleceksin? (When will you come?)'],
          ['nasıl', 'how', 'Nasıl gidiyorsun? (How are you going?)'],
          ['neden/niçin/niye', 'why', 'Neden ağlıyorsun? (Why are you crying?)'],
          ['kaç', 'how many', 'Kaç kişi var? (How many people are there?)'],
          ['hangi', 'which', 'Hangi kitabı okudun? (Which book did you read?)']
        ],
        caption: 'Common question words in Turkish and their usage',
        footnote: 'Question words typically come at the beginning of the sentence or immediately before the verb.'
      }
    }
  ],
  practiceExercises: [
    {
      type: 'fill-in-blank',
      prompt: 'Ankara\'ya gittiniz ___? (Did you go to Ankara?)',
      correctAnswer: 'mi',
      alternatives: ['mı', 'mu', 'mü'],
      explanation: 'Since "gittiniz" ends with the vowel "i", we use "mi" according to vowel harmony.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the correct way to ask "Are you a student?"',
      correctAnswer: 'Öğrenci misin?',
      alternatives: [
        'Öğrenci misiniz?',
        'Öğrenci mısın?',
        'Öğrenci müsün?'
      ],
      explanation: 'Since "öğrenci" ends with "i", we use "mi" + "sin" (2nd person singular). "Öğrenci misin?" is correct.'
    },
    {
      type: 'reordering',
      prompt: 'Arrange the words to form a correct question: "nerede / yaşıyor / baban"',
      correctAnswer: 'Baban nerede yaşıyor?',
      alternatives: [
        'Nerede baban yaşıyor?',
        'Baban yaşıyor nerede?'
      ],
      explanation: 'The most natural word order is "Baban nerede yaşıyor?" (Where does your father live?), with the question word before the verb.'
    },
    {
      type: 'translation',
      prompt: 'Translate: Do you like coffee?',
      correctAnswer: 'Kahveyi seviyor musun?',
      alternatives: [
        'Kahve sever misin?',
        'Kahveyi sever misin?'
      ],
      explanation: 'The correct translation uses the present continuous tense "seviyor" + question particle "mu" + person marker "sun".'
    }
  ],
  relatedPatterns: ['vowel-harmony', 'negation', 'verb-conjugation'],
  notes: 'Question formation in Turkish is relatively straightforward once you understand the placement of the question particle and question words.',
  exceptions: [
    'In colloquial speech, the question particle might be emphasized or stressed differently to convey different meanings',
    'In some dialects, the question particle might be attached to the verb in speech, though it\'s always written separately',
    'In rhetorical questions, the question particle might be omitted and only intonation is used',
    'When the question particle follows a word ending in a vowel, a buffer consonant "y" is sometimes inserted in speech (though not in writing)'
  ]
};
