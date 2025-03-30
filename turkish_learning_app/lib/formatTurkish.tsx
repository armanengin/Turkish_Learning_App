// Helper functions for formatting Turkish text with pronunciation

type PronunciationMap = {
  [key: string]: string;
};

// Turkish character pronunciation guide
const turkishPronunciation: PronunciationMap = {
  'ç': 'ch',
  'ş': 'sh',
  'ğ': 'silent/elongates previous vowel',
  'ı': 'uh (unrounded i)',
  'i': 'ee',
  'ö': 'eu (like in French "deux")',
  'ü': 'ue (like in German "über")',
  'â': 'aa (longer a)',
  'î': 'ee (longer i)',
  'û': 'oo (longer u)'
};

// Format Turkish text with tooltips for special characters
export const formatWithPronunciation = (turkishText: string): React.ReactNode[] => {
  if (!turkishText) return [turkishText];

  const result: React.ReactNode[] = [];
  let currentText = '';

  // Process each character
  for (let i = 0; i < turkishText.length; i++) {
    const char = turkishText[i];
    const lowerChar = char.toLowerCase();
    
    // Check if the character has special pronunciation
    if (turkishPronunciation[lowerChar]) {
      // Add accumulated text before the special character
      if (currentText) {
        result.push(currentText);
        currentText = '';
      }
      
      // Add the special character with pronunciation tooltip
      result.push(
        <span 
          key={i} 
          className="relative group cursor-help"
        >
          <span className="border-b border-dotted border-turkish-blue">{char}</span>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-turkish-blue text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Pronounced as: {turkishPronunciation[lowerChar]}
          </span>
        </span>
      );
    } else {
      // Accumulate regular characters
      currentText += char;
    }
  }
  
  // Add any remaining text
  if (currentText) {
    result.push(currentText);
  }
  
  return result;
};

// Generate phonetic transcription for Turkish text
export const getPhoneticGuide = (turkishText: string): string => {
  if (!turkishText) return '';
  
  let phonetic = '';
  
  for (let i = 0; i < turkishText.length; i++) {
    const char = turkishText[i].toLowerCase();
    
    if (turkishPronunciation[char]) {
      switch (char) {
        case 'ç':
          phonetic += 'ch';
          break;
        case 'ş':
          phonetic += 'sh';
          break;
        case 'ğ':
          // If ğ follows a vowel, elongate the vowel
          if (i > 0 && isVowel(turkishText[i-1])) {
            phonetic += '';  // ğ is typically silent, elongating previous vowel
          } else {
            phonetic += '';  // Silent in other contexts
          }
          break;
        case 'ı':
          phonetic += 'uh';
          break;
        case 'i':
          phonetic += 'ee';
          break;
        case 'ö':
          phonetic += 'eu';
          break;
        case 'ü':
          phonetic += 'ue';
          break;
        default:
          phonetic += char;
      }
    } else {
      phonetic += char;
    }
  }
  
  return phonetic;
};

// Check if a character is a Turkish vowel
const isVowel = (char: string): boolean => {
  const vowels = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  return vowels.includes(char.toLowerCase());
};
