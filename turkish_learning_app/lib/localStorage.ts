// Helper functions for working with localStorage

// Save data to localStorage
export const saveToLocalStorage = <T>(key: string, data: T): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
};

// Load data from localStorage
export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
};

// Remove data from localStorage
export const removeFromLocalStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

// Clear all app data from localStorage
export const clearAppData = (): void => {
  if (typeof window !== 'undefined') {
    try {
      // Only clear items related to our app
      const appKeys = [
        'turkish_app_auth',
        'turkish_app_character',
        'turkish_app_scenario',
        'turkish_app_conversation',
        'turkish_app_flashcards',
        'turkish_app_progress'
      ];
      
      appKeys.forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing app data:', error);
    }
  }
};
