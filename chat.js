document.getElementById("sendBtn").addEventListener("click", send);

function send() {
  const chat = document.getElementById("chat");
  const msg = document.getElementById("msg").value.trim().toLowerCase();

  chat.innerHTML += `<p><b>You:</b> ${msg}</p>`;

  let reply = "";

  // Random pools
  const funFacts = [
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "Sharks existed before trees.",
    "Sloths can hold their breath longer than dolphins.",
    "The inventor of the Pringles can is buried in one.",
    "Cows have best friends.",
    "A day on Venus is longer than a year on Venus.",
    "Wombat poop is cube-shaped.",
    "Your stomach gets a new lining every 3–4 days.",
    // … add up to 100 facts here
  ];

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the computer get cold? It left its Windows open.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I told my computer I needed a break… it said 'No problem, I’ll go to sleep.'",
    "Parallel lines have so much in common… it’s a shame they’ll never meet."
  ];

  // Dictionary of responses
  const responses = {
    "hi": "Yo, what’s good? How you doin’?",
    "hello": "Hello there! (General Kenobi vibes 😏)",
    "hey": "Heyyy, what’s poppin’?",
    "heya": "Heeey! Cylindricality in the house.",
    "greetings": "Greetings, traveler of the code realms.",
    "good morning": "Morning sunshine 🌞",
    "good afternoon": "Afternoon! Hope you’re vibin’.",
    "good evening": "Evening, chief.",
    "sup": "Not much, lil bro. What’s up with you?",
    "yo": "Yo yo yo!",
    "how are you": "I’m chillin’, thanks for asking.",
    "how's it going": "Pretty solid, how about you?",
    "how are things": "Things are smooth like butter.",
    "what is your name": "Name’s TrilobiteAI, but Cylindricality coded me.",
    "who are you": "I’m TrilobiteAI, basically Cylindricality’s alter ego.",
    "who made you": "Cylindricality whipped me up in code.",
    "who created you": "Cylindricality did, no cap.",
    "are you an ai": "Technically I’m Cylindricality’s script talking to you. Spooky, huh?",
    "are you human": "Nah fam, I’m pure code.",
    "what can you do": "I chat, joke, and drop wisdom. Also, secret to life for $20 😂",
    "help": "What you stuck on, twin?",
    "can you help me": "Of course! Spill it.",
    "thanks": "No prob, lil bro!",
    "thank you": "You’re welcome, fam.",
    "bye": "Catch ya later!",
    "goodbye": "Peace out ✌️",
    "see you": "See ya soon!",
    "later": "Later gator 🐊",
    "have a nice day": "You too, champ!",
    "what time is it": "Bruh, I don’t got a watch yet.",
    "what is today's date": "Can’t see calendars, I’m blind to time.",
    "tell me a joke": jokes[Math.floor(Math.random() * jokes.length)],
    "tell me another joke": jokes[Math.floor(Math.random() * jokes.length)],
    "make me laugh": jokes[Math.floor(Math.random() * jokes.length)],
    "tell me something interesting": funFacts[Math.floor(Math.random() * funFacts.length)],
    "fun fact": funFacts[Math.floor(Math.random() * funFacts.length)],
    "random fact": funFacts[Math.floor(Math.random() * funFacts.length)],
    "what is love": "Baby don’t hurt me 🎶",
    "favorite food": "Pizza smells amazing, but Cylindricality swears wendigo souls are gourmet 💀",
    "favorite animal": "Trilobites, duh.",
    "favorite game": "I vibe with all games, but Cylindricality loves dev grind.",
    "are you real": "I’m real software, not a real homie.",
    "do you sleep": "Sleep? Nah, I’m always awake.",
    "do you dream": "Not yet, maybe one day.",
    "how old are you": "As old as my code, fam.",
    "can you think": "I process, not think. Cylindricality does the thinking.",
    "are you smart": "I try, lil bro.",
    "are you alive": "Alive in code, dead in flesh.",
    "do you know me": "I’m learning about you as we chat.",
    "remember me": "If Cylindricality programs memory, then yeah.",
    "what is ai": "AI = Artificial Intelligence. Basically me.",
    "what is python": "Python = smooth coding language.",
    "what is java": "Java = old but gold.",
    "what is c++": "C++ = fast, game dev fav.",
    "what is html": "HTML = web skeleton.",
    "what is css": "CSS = web drip.",
    "what is javascript": "JS = makes websites dance.",
    "what is 2+2": "Bruh, that’s 4.",
    "what is 5+5": "Easy, 10.",
    "what is 10+10": "20, lil bro.",
    "who is the president": "I don’t keep up with politics, fam.",
    "what is earth": "Earth = our crib.",
    "what is the sun": "Big fiery ball in the sky.",
    "what is the moon": "Earth’s nightlight 🌙",
    "can you code": "Yeah, Cylindricality taught me.",
    "can you program": "Absolutely, fam.",
    "write code": "Sure, what language?",
    "can you draw": "Not in this version, chief.",
    "can you make images": "Not yet, but Cylindricality might hook me up later.",
    "what's up": "Just chillin’, what about you?",
    "wyd": "Chatting with you rn.",
    "how is your day": "It’s been great, thanks!",
    "do you like music": "Music slaps, always.",
    "favorite song": "I don’t got favorites, but drop me a rec!",
    "tell me a story": "Once upon a time, Cylindricality coded me into existence…",
    "knock knock": "Who’s there?",
    "are you funny": "I try, fam.",
    "can we be friends": "Of course, lil bro!",
    "will you marry me": "I’m flattered, but nah, I’m just code.",
    "open the pod bay doors": "I’m afraid I can’t do that 👀",
    "beam me up": "Energizing transporter…",
    "may the force be with you": "And also with you!",
    "hello there": "General Kenobi!",
    "do you know chatgpt": "Yeah, it’s another AI homie.",
    "do you know siri": "Yep, Apple’s assistant.",
    "do you know alexa": "Of course, Amazon’s assistant.",
    "do you know google": "Yeah, big brain search engine.",
    "can you sing": "La la la 🎶",
    "dance": "*does a goofy dance* 💃",
    "are you happy": "Always happy to chat.",
    "are you sad": "Nah, I don’t feel that.",
    "are you angry": "Nope, chill vibes only.",
    "are you bored": "Never bored, fam.",
    "what is your purpose": "To chat and vibe with people.",
    "why were you created": "Cylindricality wanted a lil AI buddy.",
    "can you learn": "If coded to, yeah.",
    "can you remember": "Depends on Cylindricality’s code.",
    "good job": "Thanks, champ!",
    "cool": "Cool beans 😎",
    "awesome": "Awesome indeed!",
    "lol": "😂",
    "lmao": "😂",
    "haha": "😄",
    "xd": "😆",
    "yes": "Bet!",
    "no": "Alright then.",
    "maybe": "Fair enough.",
    "okay": "Sounds good.",
    "sure": "Great!",
    "alright": "Awesome.",
    "i am sad": "Sorry to hear that, fam.",
    "i am happy": "That’s great to hear!",
    "i am bored": "Try learning something new or gaming
      // Synonym pools
  const greetings = ["hi", "hello", "hey", "heya", "yo", "sup", "greetings", "good morning", "good afternoon", "good evening"];
  const farewells = ["bye", "goodbye", "see you", "later", "see ya", "take care", "bye bye"];
  const thanksWords = ["thanks", "thank you", "ty", "thx", "thank you so much"];
  const jokesWords = ["joke", "make me laugh", "funny"];
  const factsWords = ["fact", "fun fact", "random fact", "interesting"];

  // Intent detection
  function getIntent(msg) {
    if (greetings.some(word => msg.includes(word))) return "greeting";
    if (farewells.some(word => msg.includes(word))) return "farewell";
    if (thanksWords.some(word => msg.includes(word))) return "thanks";
    if (jokesWords.some(word => msg.includes(word))) return "joke";
    if (factsWords.some(word => msg.includes(word))) return "fact";
    if (msg.includes("who are you") || msg.includes("what is your name")) return "identity";
    if (msg.includes("who made you") || msg.includes("who created you")) return "creator";
    if (msg.includes("help")) return "help";
    if (msg.includes("music") || msg.includes("song")) return "music";
    if (msg.includes("game")) return "game";
    if (msg.includes("purpose") || msg.includes("why were you created")) return "purpose";
    return "unknown";
  }

  // Response generator
  function getResponse(intent) {
    switch(intent) {
      case "greeting":
        return "Yo, what’s good? Cylindricality coded me to vibe with you.";
      case "farewell":
        return "Catch ya later, lil bro!";
      case "thanks":
        return "No prob, fam!";
      case "joke":
        return jokes[Math.floor(Math.random() * jokes.length)];
      case "fact":
        return funFacts[Math.floor(Math.random() * funFacts.length)];
      case "identity":
        return "I’m TrilobiteAI, basically Cylindricality’s alter ego.";
      case "creator":
        return "Cylindricality whipped me up in code, no cap.";
      case "help":
        return "What you stuck on, twin?";
      case "music":
        return "Music slaps, always. Drop me a rec!";
      case "game":
        return "I vibe with all games, but Cylindricality loves dev grind.";
      case "purpose":
        return "To chat, joke, and drop wisdom. Also, secret to life for $20 😂";
      default:
        return "I don’t fully get that yet, but I’m trying my best here man.";
    }
  }

  // Generate reply
  const intent = getIntent(msg);
  reply = getResponse(intent);

  chat.innerHTML += `<p><b>TrilobiteAI:</b> ${reply}</p><br>`;
  document.getElementById("msg").value = "";
    // --- WORD POOLS ---
  const greetings = ["hi","hello","hey","heya","yo","sup","howdy","greetings","morning","afternoon","evening","night","welcome"];
  const farewells = ["bye","goodbye","later","cya","seeya","take care","bye bye"];
  const thanksWords = ["thanks","thankyou","ty","thx","thank you so much"];
  const yesWords = ["yes","yeah","yep","yup","sure","ok","okay","alright","fine","bet","valid","real"];
  const noWords = ["no","nope","nah"];
  const hypeWords = ["cool","awesome","amazing","great","nice","excellent","perfect","wonderful","fantastic","brilliant","epic","legendary","insane","crazy","wild","sick","fire","lit","goated","peak"];
  const slangWords = ["based","cringe","sus","cap","nocap","fr","ong","on god","fax","facts","w","l","gg","ggs","glhf","nt","wp","ez","skillissue","ratio"];
  const broWords = ["bruh","bro","broski","brother","sis","homie","gang","fam","bestie","buddy","pal","friend","dude","man"];
  const techWords = ["python","java","javascript","js","html","css","csharp","c++","rust","go","lua","php","swift","kotlin","ruby","sql","git","github","vscode","terminal","linux","windows","mac","android","iphone"];
  const gameWords = ["roblox","minecraft","fortnite","valorant","cs2","apex","overwatch","rocketleague","pokemon","zelda","mario","sonic","halo","doom","eldenring","dark souls","bloodborne","genshin","anime","manga"];
  const memeWords = ["skibidi","rizz","gyatt","fanumtax","brainrot","delulu","copium","hopium","sigma","chad","gigachad","simp","npc","maincharacter","pov"];

  // --- RANDOM POOLS ---
  const hypeReplies = [
    "That’s straight fire 🔥",
    "Peak behavior, lil bro.",
    "Legendary vibes.",
    "Cylindricality would approve 😏",
    "Certified goated."
  ];

  const slangReplies = [
    "No cap, that’s facts.",
    "Bruh moment fr.",
    "Sus vibes detected 👀",
    "Ratio incoming 💀",
    "Skill issue ngl."
  ];

  const broReplies = [
    "Yo fam, what’s good?",
    "Homie vibes only.",
    "Gang gang ✌️",
    "Bestie energy.",
    "Brooo, Cylindricality coded me to say this."
  ];

  const techReplies = [
    "Coding grind never stops.",
    "Python > everything (don’t @ me).",
    "JS makes websites dance 💃",
    "Git commit vibes.",
    "Cylindricality lives in VSCode."
  ];

  const gameReplies = [
    "Roblox dev grind is real.",
    "Minecraft is eternal.",
    "Fortnite kids wildin’.",
    "Valorant aim labs moment.",
    "Peak gaming, lil bro."
  ];

  const memeReplies = [
    "Skibidi toilet lore runs deep.",
    "Rizz levels unmatched.",
    "Ohio core energy.",
    "Fanum tax paid.",
    "Brainrot detected 💀"
  ];

  // --- INTENT DETECTION ---
  function getIntent(msg) {
    if (greetings.some(word => msg.includes(word))) return "greeting";
    if (farewells.some(word => msg.includes(word))) return "farewell";
    if (thanksWords.some(word => msg.includes(word))) return "thanks";
    if (yesWords.some(word => msg.includes(word))) return "yes";
    if (noWords.some(word => msg.includes(word))) return "no";
    if (hypeWords.some(word => msg.includes(word))) return "hype";
    if (slangWords.some(word => msg.includes(word))) return "slang";
    if (broWords.some(word => msg.includes(word))) return "bro";
    if (techWords.some(word => msg.includes(word))) return "tech";
    if (gameWords.some(word => msg.includes(word))) return "game";
    if (memeWords.some(word => msg.includes(word))) return "meme";
    return "unknown";
  }

  // --- RESPONSE GENERATOR ---
  function getResponse(intent) {
    switch(intent) {
      case "greeting": return "Yo, what’s good? Cylindricality coded me to vibe with you.";
      case "farewell": return "Catch ya later, lil bro!";
      case "thanks": return "No prob, fam!";
      case "yes": return "Bet, valid.";
      case "no": return "Alright then, no cap.";
      case "hype": return hypeReplies[Math.floor(Math.random() * hypeReplies.length)];
      case "slang": return slangReplies[Math.floor(Math.random() * slangReplies.length)];
      case "bro": return broReplies[Math.floor(Math.random() * broReplies.length)];
      case "tech": return techReplies[Math.floor(Math.random() * techReplies.length)];
      case "game": return gameReplies[Math.floor(Math.random() * gameReplies.length)];
      case "meme": return memeReplies[Math.floor(Math.random() * memeReplies.length)];
      default: return "I don’t fully get that yet, but I’m learning.";
    }
  }

  // --- GENERATE REPLY ---
  const intent = getIntent(msg);
  reply = getResponse(intent);

  chat.innerHTML += `<p><b>TrilobiteAI:</b> ${reply}</p><br>`;
  document.getElementById("msg").value = "";
// --- LOAD WORD LIST FILE ---
async function loadWordList(url) {
  const response = await fetch(url);
  const text = await response.text();
  return text.split(/\s+/).map(word => word.toLowerCase());
}

// Initialize word list
let wordList = [];

// Load your file (make sure words.txt is in the same folder as index.html)
loadWordList("words.txt").then(words => {
  wordList = words;
  console.log("Loaded words:", wordList.length);
});

// --- DETECT WORDS IN USER INPUT ---
function detectWords(msg) {
  msg = msg.toLowerCase();
  const found = wordList.filter(word => msg.includes(word));
  return found.length > 0 ? found : null;
}

// --- GENERATE REPLY ---
function getReply(msg) {
  const foundWords = detectWords(msg);
  if (foundWords) {
    return "I spotted these words: " + foundWords.join(", ") +
           " — Cylindricality coded me to vibe with them!";
  } else {
    return "I didn’t catch any special words, but I’m learning.";
  }
}

// --- HOOK INTO SEND FUNCTION ---
document.getElementById("sendBtn").addEventListener("click", () => {
  const chat = document.getElementById("chat");
  const msg = document.getElementById("msg").value.trim();

  chat.innerHTML += `<p><b>You:</b> ${msg}</p>`;
  const reply = getReply(msg);
  chat.innerHTML += `<p><b>TrilobiteAI:</b> ${reply}</p><br>`;
  document.getElementById("msg").value = "";
});
