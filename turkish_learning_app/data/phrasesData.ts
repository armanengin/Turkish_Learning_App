// Turkish phrases data organized by categories
export interface TurkishPhrase {
  turkish: string;
  english: string;
  notes: string;
  audio?: string; // Path to audio file (for future implementation)
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface PhraseCategory {
  category: string;
  description: string;
  icon: string; // Material icon name
  phrases: TurkishPhrase[];
  situational?: boolean; // For filtering situational vs. general phrases
}

const phrasesData: PhraseCategory[] = [
  {
    category: "Greetings & Basics",
    description: "Essential expressions for everyday interactions",
    icon: "waving_hand",
    phrases: [
      { turkish: "Merhaba", english: "Hello", notes: "Standard greeting" },
      { turkish: "Günaydın", english: "Good morning", notes: "Used until around noon" },
      { turkish: "İyi günler", english: "Good day", notes: "Can be used as hello or goodbye" },
      { turkish: "İyi akşamlar", english: "Good evening", notes: "Used after sunset" },
      { turkish: "Hoşça kal", english: "Goodbye (to person staying)", notes: "Said by the person leaving" },
      { turkish: "Güle güle", english: "Goodbye (to person leaving)", notes: "Said by the person staying" },
      { turkish: "Teşekkür ederim", english: "Thank you", notes: "Formal, polite" },
      { turkish: "Sağ ol", english: "Thanks", notes: "Informal, casual" },
      { turkish: "Rica ederim", english: "You're welcome", notes: "Response to thanks" },
      { turkish: "Lütfen", english: "Please", notes: "Used when making requests" },
      { turkish: "Özür dilerim", english: "I'm sorry", notes: "For apologies" },
      { turkish: "Affedersiniz", english: "Excuse me", notes: "To get attention or apologize" },
      { turkish: "Evet", english: "Yes", notes: "Affirmation" },
      { turkish: "Hayır", english: "No", notes: "Negation" },
      { turkish: "Tamam", english: "Okay", notes: "Agreement or understanding" },
      { turkish: "İyi geceler", english: "Good night", notes: "Used before sleeping" },
      { turkish: "İyi yolculuklar", english: "Have a good trip", notes: "Said to someone departing" },
      { turkish: "Görüşürüz", english: "See you later", notes: "Informal farewell" },
      { turkish: "Tekrar görüşmek üzere", english: "Until we meet again", notes: "Formal goodbye" },
      { turkish: "Kolay gelsin", english: "May it come easy", notes: "Said to someone working" },
      { turkish: "Selamlar", english: "Greetings", notes: "Casual greeting, often in messages" },
      { turkish: "İyi şanslar", english: "Good luck", notes: "For wishing someone luck" }
    ]
  },
  {
    category: "Introductions",
    description: "Phrases for meeting people and basic conversation",
    icon: "person",
    phrases: [
      { turkish: "Benim adım [name]", english: "My name is [name]", notes: "Formal introduction" },
      { turkish: "Ben [name]", english: "I'm [name]", notes: "Casual introduction" },
      { turkish: "Memnun oldum", english: "Nice to meet you", notes: "Literally: 'I became pleased'" },
      { turkish: "Ben de memnun oldum", english: "Nice to meet you too", notes: "Response to 'memnun oldum'" },
      { turkish: "Nasılsınız?", english: "How are you? (formal)", notes: "Used when addressing someone formally" },
      { turkish: "Nasılsın?", english: "How are you? (informal)", notes: "Used with friends and family" },
      { turkish: "İyiyim, teşekkürler", english: "I'm fine, thank you", notes: "Common response" },
      { turkish: "Nerelisiniz?", english: "Where are you from? (formal)", notes: "Asking about origin" },
      { turkish: "Nerelisin?", english: "Where are you from? (informal)", notes: "Asking about origin casually" },
      { turkish: "Ben Amerikalıyım", english: "I am American", notes: "Replace with your nationality" },
      { turkish: "Ne iş yapıyorsunuz?", english: "What do you do for work? (formal)", notes: "Asking about profession" },
      { turkish: "Ne iş yapıyorsun?", english: "What do you do for work? (informal)", notes: "Asking about profession" },
      { turkish: "Kaç yaşındasın?", english: "How old are you? (informal)", notes: "Asking about age" },
      { turkish: "Ne zamandır buradasın?", english: "How long have you been here?", notes: "Asking about time spent" },
      { turkish: "Aileniz var mı?", english: "Do you have family? (formal)", notes: "Asking about family" },
      { turkish: "Türkçe öğreniyorum", english: "I'm learning Turkish", notes: "Useful phrase when learning" }
    ]
  },
  {
    category: "Cafe & Restaurant",
    description: "Useful phrases for ordering and dining out",
    icon: "restaurant",
    situational: true,
    phrases: [
      { turkish: "Menü alabilir miyim?", english: "Can I have a menu?", notes: "When seated at a restaurant" },
      { turkish: "Ne önerirsiniz?", english: "What do you recommend?", notes: "Asking for suggestions" },
      { turkish: "Bir [item] lütfen", english: "One [item] please", notes: "Basic ordering format" },
      { turkish: "Hesap alabilir miyim?", english: "Can I have the bill?", notes: "Asking for the check" },
      { turkish: "Bir kahve lütfen", english: "One coffee please", notes: "Ordering coffee" },
      { turkish: "Şekerli/Şekersiz", english: "With sugar/Without sugar", notes: "Coffee preference" },
      { turkish: "Afiyet olsun", english: "Enjoy your meal", notes: "Said before eating" },
      { turkish: "Çok lezzetli", english: "Very delicious", notes: "Complimenting the food" },
      { turkish: "Suyu var mı?", english: "Is there water?", notes: "Asking for water" },
      { turkish: "Bir şişe su lütfen", english: "A bottle of water please", notes: "Ordering water" },
      { turkish: "Acılı mı?", english: "Is it spicy?", notes: "Asking about spiciness" },
      { turkish: "Vejetaryen yemekleriniz var mı?", english: "Do you have vegetarian dishes?", notes: "Dietary restriction" },
      { turkish: "Alerjim var", english: "I have an allergy", notes: "Important medical information" },
      { turkish: "Bahşiş dahil mi?", english: "Is the tip included?", notes: "Asking about gratuity" },
      { turkish: "Süt/şeker/buz olmadan", english: "Without milk/sugar/ice", notes: "Customizing order" },
      { turkish: "Biraz daha ekmek alabilir miyiz?", english: "Can we have some more bread?", notes: "Requesting extra" },
      { turkish: "Bu ne ile yapılır?", english: "What is this made with?", notes: "Asking about ingredients" },
      { turkish: "Yerel bir spesiyalite önerir misiniz?", english: "Can you recommend a local specialty?", notes: "Seeking local food" },
      { turkish: "Masa ayırtmak istiyorum", english: "I would like to reserve a table", notes: "Making reservation" },
      { turkish: "İki kişilik bir masa lütfen", english: "A table for two please", notes: "Specifying party size" },
      { turkish: "İçmek için ne önerirsiniz?", english: "What do you recommend to drink?", notes: "Asking about beverages" },
      { turkish: "Tatlı menüsü alabilir miyim?", english: "Can I have the dessert menu?", notes: "Asking for desserts" }
    ]
  },
  {
    category: "Shopping & Bargaining",
    description: "Phrases for markets, stores and negotiating prices",
    icon: "shopping_bag",
    situational: true,
    phrases: [
      { turkish: "Ne kadar?", english: "How much?", notes: "Asking for price" },
      { turkish: "Çok pahalı", english: "Very expensive", notes: "When bargaining" },
      { turkish: "İndirim yapabilir misiniz?", english: "Can you give a discount?", notes: "Negotiating" },
      { turkish: "Bunu deneyebilir miyim?", english: "Can I try this on?", notes: "For clothing" },
      { turkish: "Başka rengi var mı?", english: "Do you have another color?", notes: "Shopping for alternatives" },
      { turkish: "Kredi kartı kabul ediyor musunuz?", english: "Do you accept credit cards?", notes: "Payment inquiry" },
      { turkish: "Sadece bakıyorum", english: "I'm just looking", notes: "When browsing" },
      { turkish: "Bunu alacağım", english: "I'll take this", notes: "Making a purchase decision" },
      { turkish: "Fiş alabilir miyim?", english: "Can I have a receipt?", notes: "Asking for receipt" },
      { turkish: "Teşekkürler, iyi günler", english: "Thank you, have a good day", notes: "Leaving a shop" },
      { turkish: "Daha ucuz bir şey var mı?", english: "Do you have anything cheaper?", notes: "Looking for alternatives" },
      { turkish: "Son fiyatınız nedir?", english: "What is your final price?", notes: "Finalizing negotiation" },
      { turkish: "Bu kaça?", english: "How much is this?", notes: "Alternate way to ask price" },
      { turkish: "Beden/numara kaç?", english: "What size?", notes: "Asking about clothing/shoe size" },
      { turkish: "Burada yabancı ürünler var mı?", english: "Do you have imported products here?", notes: "Looking for imports" },
      { turkish: "Garanti belgesi var mı?", english: "Is there a warranty?", notes: "Asking about warranty" },
      { turkish: "Burada vergi iadesi alabilir miyim?", english: "Can I get tax refund here?", notes: "For tourists" },
      { turkish: "Bana yardımcı olabilir misiniz?", english: "Can you help me?", notes: "Asking for assistance" },
      { turkish: "Hediye paketi yapabilir misiniz?", english: "Can you gift wrap it?", notes: "For presents" },
      { turkish: "Yüzde kaç indirim?", english: "What percent discount?", notes: "During sales" }
    ]
  },
  {
    category: "Directions & Transport",
    description: "Finding your way and using transportation",
    icon: "directions",
    situational: true,
    phrases: [
      { turkish: "Nerede?", english: "Where is?", notes: "Basic location question" },
      { turkish: "[Place] nerede?", english: "Where is [place]?", notes: "Asking for directions" },
      { turkish: "Sağda/Solda", english: "On the right/On the left", notes: "Directional" },
      { turkish: "Düz devam edin", english: "Go straight ahead", notes: "Direction instruction" },
      { turkish: "Yakın mı?", english: "Is it close?", notes: "Asking about distance" },
      { turkish: "Bir taksi lütfen", english: "A taxi please", notes: "Requesting transport" },
      { turkish: "Buraya gidebilir miyiz?", english: "Can we go here?", notes: "Showing an address" },
      { turkish: "Otobüs durağı nerede?", english: "Where is the bus stop?", notes: "Public transportation" },
      { turkish: "Ne zaman varırız?", english: "When will we arrive?", notes: "Asking about ETA" },
      { turkish: "Burada durabilir misiniz?", english: "Can you stop here?", notes: "Requesting to stop" },
      { turkish: "Ne kadar sürer?", english: "How long will it take?", notes: "Asking about duration" },
      { turkish: "Taksimetre açık mı?", english: "Is the meter on?", notes: "In taxi" },
      { turkish: "Kaç durak?", english: "How many stops?", notes: "On public transport" },
      { turkish: "Hangi otobüs Taksim'e gider?", english: "Which bus goes to Taksim?", notes: "Bus route inquiry" },
      { turkish: "Haritaya bakabilir miyim?", english: "Can I look at the map?", notes: "Asking for map" },
      { turkish: "Kısa yoldan gidelim", english: "Let's take the short way", notes: "Requesting direct route" },
      { turkish: "Havalimanı/Tren istasyonu/Otogar nerede?", english: "Where is the airport/train station/bus terminal?", notes: "Finding transport hubs" },
      { turkish: "Buradan geçiyor mu?", english: "Does it pass through here?", notes: "Asking about route" },
      { turkish: "Bilet nereden alabilirim?", english: "Where can I buy a ticket?", notes: "For public transport" },
      { turkish: "İstanbul Kart var mı?", english: "Do you have an Istanbul Card?", notes: "Transport card in Istanbul" },
      { turkish: "Bu gidiş-dönüş mü?", english: "Is this round trip?", notes: "Asking about ticket type" },
      { turkish: "Bir sonraki durak ne?", english: "What is the next stop?", notes: "On public transport" }
    ]
  },
  {
    category: "Emergency & Health",
    description: "Critical phrases for urgent situations and medical needs",
    icon: "medical_services",
    situational: true,
    phrases: [
      { turkish: "Yardım!", english: "Help!", notes: "Emergency call" },
      { turkish: "Polis çağırır mısınız?", english: "Can you call the police?", notes: "Requesting police" },
      { turkish: "Ambulans lütfen", english: "Ambulance please", notes: "Medical emergency" },
      { turkish: "Hastanede", english: "At the hospital", notes: "Location" },
      { turkish: "Doktor lazım", english: "I need a doctor", notes: "Medical need" },
      { turkish: "Hasta hissediyorum", english: "I feel sick", notes: "Expressing illness" },
      { turkish: "Ağrım var", english: "I have pain", notes: "General pain" },
      { turkish: "Baş ağrısı", english: "Headache", notes: "Specific pain" },
      { turkish: "İlaç", english: "Medicine", notes: "Requesting medication" },
      { turkish: "Alerjim var", english: "I have an allergy", notes: "Medical information" },
      { turkish: "Acil durum", english: "Emergency", notes: "Urgent situation" },
      { turkish: "Kayboldum", english: "I am lost", notes: "When disoriented" },
      { turkish: "Pasaportumu kaybettim", english: "I lost my passport", notes: "Travel emergency" },
      { turkish: "Sigortalıyım", english: "I have insurance", notes: "Health coverage info" }
    ]
  },
  {
    category: "Waterfront & Activities",
    description: "Phrases for beaches, boats and water activities",
    icon: "beach_access",
    situational: true,
    phrases: [
      { turkish: "Plaj nerede?", english: "Where is the beach?", notes: "Finding the beach" },
      { turkish: "Deniz güzel mi?", english: "Is the sea nice?", notes: "Asking about sea conditions" },
      { turkish: "Yüzmek güvenli mi?", english: "Is it safe to swim?", notes: "Safety inquiry" },
      { turkish: "Şemsiye kiralayabilir miyim?", english: "Can I rent an umbrella?", notes: "Beach equipment rental" },
      { turkish: "Tekne turu var mı?", english: "Is there a boat tour?", notes: "Looking for boat tours" },
      { turkish: "Tekne kiralamak istiyorum", english: "I want to rent a boat", notes: "Boat rental" },
      { turkish: "Balık tutmak için iyi bir yer var mı?", english: "Is there a good place for fishing?", notes: "Fishing inquiry" },
      { turkish: "Dalış yapabilir miyim?", english: "Can I dive?", notes: "Diving question" },
      { turkish: "Dalgalar güçlü mü?", english: "Are the waves strong?", notes: "Wave conditions" },
      { turkish: "Su sporları nerede?", english: "Where are the water sports?", notes: "Finding activities" },
      { turkish: "Şezlong kiralayabilir miyim?", english: "Can I rent a sun lounger?", notes: "Beach comfort" },
      { turkish: "Suyun sıcaklığı kaç derece?", english: "What is the water temperature?", notes: "Water conditions" },
      { turkish: "Cankurtaran var mı?", english: "Is there a lifeguard?", notes: "Safety question" },
      { turkish: "Deniz bisikleti kiralayabilir miyim?", english: "Can I rent a pedal boat?", notes: "Water activity" },
      { turkish: "Bu gölde yüzebilir miyim?", english: "Can I swim in this lake?", notes: "Lake swimming" }
    ]
  },
  {
    category: "Cultural Expressions",
    description: "Turkish-specific phrases and cultural sayings",
    icon: "public",
    phrases: [
      { turkish: "Ellerine sağlık", english: "Health to your hands", notes: "Compliment for food/crafts" },
      { turkish: "Maşallah", english: "God has willed it", notes: "Expresses admiration/protection from evil eye" },
      { turkish: "İnşallah", english: "God willing", notes: "Used when discussing future plans" },
      { turkish: "Çok yaşa", english: "Live long", notes: "Said after someone sneezes" },
      { turkish: "Sen de gör", english: "May you see it too", notes: "Reply to 'çok yaşa'" },
      { turkish: "Kolay gelsin", english: "May it come easy", notes: "Said to someone working" },
      { turkish: "Geçmiş olsun", english: "May it be past", notes: "Get well soon/condolence" },
      { turkish: "Afiyet olsun", english: "May it be healthy", notes: "Enjoy your meal" },
      { turkish: "Güle güle kullan", english: "Use it with joy", notes: "Said when someone gets something new" },
      { turkish: "Yolun açık olsun", english: "May your path be open", notes: "Wishing a good journey" },
      { turkish: "Allah korusun", english: "May God protect", notes: "Protection from bad events" },
      { turkish: "Hayırlı olsun", english: "May it be fortunate", notes: "For new acquisitions/events" },
      { turkish: "Darısı başına", english: "May it happen to you next", notes: "For marriages, good news" },
      { turkish: "Eline sağlık", english: "Health to your hand", notes: "Compliment for cooking/crafts" },
      { turkish: "Gözün aydın", english: "May your eye be bright", notes: "Congratulations for good news" },
      { turkish: "Başın sağ olsun", english: "May your head be healthy", notes: "Condolence expression" },
      { turkish: "Allah razı olsun", english: "May God be pleased with you", notes: "Expressing gratitude" },
      { turkish: "Helal olsun", english: "May it be rightfully yours", notes: "Expressing admiration" }
    ]
  },
  {
    category: "Food & Fruits",
    description: "Names and phrases related to Turkish cuisine",
    icon: "restaurant_menu",
    phrases: [
      { turkish: "Kebap", english: "Kebab", notes: "Grilled meat dish" },
      { turkish: "Köfte", english: "Meatballs", notes: "Turkish style meatballs" },
      { turkish: "Baklava", english: "Baklava", notes: "Sweet pastry dessert" },
      { turkish: "Çay", english: "Tea", notes: "Turkish black tea" },
      { turkish: "Türk kahvesi", english: "Turkish coffee", notes: "Traditional coffee" },
      { turkish: "Ayran", english: "Ayran", notes: "Yogurt drink" },
      { turkish: "Elma", english: "Apple", notes: "Fruit" },
      { turkish: "Portakal", english: "Orange", notes: "Fruit" },
      { turkish: "Çilek", english: "Strawberry", notes: "Fruit" },
      { turkish: "Karpuz", english: "Watermelon", notes: "Popular summer fruit" },
      { turkish: "Kavun", english: "Melon", notes: "Sweet fruit" },
      { turkish: "Biber", english: "Pepper", notes: "Vegetable" },
      { turkish: "Domates", english: "Tomato", notes: "Vegetable" },
      { turkish: "Zeytin", english: "Olive", notes: "Important in Turkish cuisine" },
      { turkish: "Peynir", english: "Cheese", notes: "Many varieties in Turkey" },
      { turkish: "Ekmek", english: "Bread", notes: "Staple food" },
      { turkish: "Döner", english: "Döner", notes: "Rotisserie meat" },
      { turkish: "Pide", english: "Pide", notes: "Turkish flatbread" },
      { turkish: "Lahmacun", english: "Lahmacun", notes: "Thin dough with minced meat" },
      { turkish: "Lokum", english: "Turkish delight", notes: "Sweet confection" }
    ]
  },
  {
    category: "Social Situations",
    description: "Phrases for social gatherings and interactions",
    icon: "groups",
    situational: true,
    phrases: [
      { turkish: "Doğum günün kutlu olsun", english: "Happy birthday", notes: "Birthday greeting" },
      { turkish: "Tebrikler", english: "Congratulations", notes: "For achievements" },
      { turkish: "Bir içki alır mısın?", english: "Would you like a drink?", notes: "Offering a beverage" },
      { turkish: "Kaç yaşına girdin?", english: "How old are you turning?", notes: "Birthday question" },
      { turkish: "Evli misin?", english: "Are you married?", notes: "Common social question" },
      { turkish: "Çocuğun var mı?", english: "Do you have children?", notes: "Family question" },
      { turkish: "Nerede oturuyorsun?", english: "Where do you live?", notes: "Asking about residence" },
      { turkish: "Görüşmek ister misin?", english: "Would you like to meet up?", notes: "Social invitation" },
      { turkish: "İyi eğlenceler", english: "Have fun", notes: "Well wishes for enjoyment" },
      { turkish: "Sağlığına", english: "To your health", notes: "Toast" },
      { turkish: "Hoş geldin", english: "Welcome", notes: "Greeting to guests" },
      { turkish: "Hoş bulduk", english: "Glad to be here", notes: "Response to hoş geldin" }
    ]
  },
  {
    category: "Daily Activities",
    description: "Phrases for everyday tasks and routines",
    icon: "today",
    phrases: [
      { turkish: "Kahvaltı", english: "Breakfast", notes: "Morning meal" },
      { turkish: "Öğle yemeği", english: "Lunch", notes: "Midday meal" },
      { turkish: "Akşam yemeği", english: "Dinner", notes: "Evening meal" },
      { turkish: "Uyumak", english: "To sleep", notes: "Resting" },
      { turkish: "Kalkmak", english: "To get up", notes: "Waking up" },
      { turkish: "Alışveriş yapmak", english: "To shop", notes: "Shopping activity" },
      { turkish: "Temizlik yapmak", english: "To clean", notes: "Cleaning activity" },
      { turkish: "Yemek pişirmek", english: "To cook", notes: "Food preparation" },
      { turkish: "Çalışmak", english: "To work", notes: "Working activity" },
      { turkish: "Dinlenmek", english: "To rest", notes: "Relaxation" },
      { turkish: "Duş almak", english: "To take a shower", notes: "Hygiene" },
      { turkish: "Giyinmek", english: "To get dressed", notes: "Dressing" }
    ]
  }
];

export default phrasesData;
