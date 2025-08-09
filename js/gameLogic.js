// LinguaQuest - Game Logic

// Lesson Data
const lessons = {
    spanish: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in Spanish?",
                    audio: "Hola",
                    options: ["Hola", "Adiós", "Gracias", "Por favor"],
                    correct: 0,
                    hint: "This is the most common greeting in Spanish!"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Buenos ___' (Good morning)",
                    sentence: "Buenos ___",
                    correct: "días",
                    audio: "Buenos días",
                    hint: "Think about what comes after 'good' when greeting someone in the morning"
                },
                {
                    type: "multiple-choice",
                    question: "What does '¿Cómo estás?' mean?",
                    audio: "¿Cómo estás?",
                    options: ["What's your name?", "How are you?", "Where are you from?", "How old are you?"],
                    correct: 1,
                    hint: "This is asking about someone's current state or condition"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Spanish greeting:",
                    scrambled: "SALOH",
                    correct: "HOLAS",
                    meaning: "Hello (informal)",
                    audio: "Hola",
                    hint: "This is a casual way to say hello"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Good afternoon' in Spanish?",
                    audio: "Buenas tardes",
                    options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
                    correct: 1,
                    hint: "This greeting is used from noon until evening"
                },
                {
                    type: "fill-blank",
                    question: "Complete: '¿Cómo te ___?' (What's your name?)",
                    sentence: "¿Cómo te ___?",
                    correct: "llamas",
                    audio: "¿Cómo te llamas?",
                    hint: "This verb means 'to call' in reflexive form"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Mucho gusto' mean?",
                    audio: "Mucho gusto",
                    options: ["Good morning", "Nice to meet you", "See you later", "You're welcome"],
                    correct: 1,
                    hint: "This phrase is used when meeting someone for the first time"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this polite expression:",
                    scrambled: "SAICRGA",
                    correct: "GRACIAS",
                    meaning: "Thank you",
                    audio: "Gracias",
                    hint: "This is how you show appreciation in Spanish"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in Spanish?",
                    audio: "cinco",
                    options: ["cuatro", "cinco", "seis", "siete"],
                    correct: 1,
                    hint: "This number sounds similar to 'sink' in English"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Spanish number:",
                    scrambled: "CHOO",
                    correct: "OCHO",
                    meaning: "Eight",
                    audio: "ocho",
                    hint: "This number sounds like 'oh-cho'"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'tres' in Spanish?",
                    audio: "tres",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number sounds similar to 'trace' in English"
                },
                {
                    type: "fill-blank",
                    question: "Complete the sequence: uno, dos, ___, cuatro",
                    sentence: "uno, dos, ___, cuatro",
                    correct: "tres",
                    audio: "tres",
                    hint: "What comes between two and four?"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'ten' in Spanish?",
                    audio: "diez",
                    options: ["nueve", "diez", "once", "doce"],
                    correct: 1,
                    hint: "This number sounds like 'dee-eth'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this number:",
                    scrambled: "EIST",
                    correct: "SIETE",
                    meaning: "Seven",
                    audio: "siete",
                    hint: "This number comes after six"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'cero' mean?",
                    audio: "cero",
                    options: ["Zero", "One", "Two", "Three"],
                    correct: 0,
                    hint: "This represents nothing or empty"
                }
            ]
        },
        {
            title: "Lesson 3: Colors",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'red' in Spanish?",
                    audio: "rojo",
                    options: ["azul", "verde", "rojo", "amarillo"],
                    correct: 2,
                    hint: "This color is associated with roses and fire"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'El cielo es ___' (The sky is blue)",
                    sentence: "El cielo es ___",
                    correct: "azul",
                    audio: "azul",
                    hint: "This is the color of the ocean and sky"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this color:",
                    scrambled: "DEVER",
                    correct: "VERDE",
                    meaning: "Green",
                    audio: "verde",
                    hint: "This is the color of grass and leaves"
                },
                {
                    type: "multiple-choice",
                    question: "What color is 'negro'?",
                    audio: "negro",
                    options: ["White", "Black", "Gray", "Brown"],
                    correct: 1,
                    hint: "This is the darkest color"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'yellow' in Spanish?",
                    audio: "amarillo",
                    options: ["naranja", "amarillo", "morado", "rosa"],
                    correct: 1,
                    hint: "This is the color of the sun and bananas"
                }
            ]
        }
    ],
    french: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in French?",
                    audio: "Bonjour",
                    options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                    correct: 0,
                    hint: "It literally means 'good day'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Bonne ___' (Good night)",
                    sentence: "Bonne ___",
                    correct: "nuit",
                    audio: "Bonne nuit",
                    hint: "This word sounds like 'new-ee'"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Comment allez-vous?' mean?",
                    audio: "Comment allez-vous?",
                    options: ["What's your name?", "How are you?", "Where are you?", "How old are you?"],
                    correct: 1,
                    hint: "This is a formal way to ask about someone's well-being"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this French greeting:",
                    scrambled: "TULAS",
                    correct: "SALUT",
                    meaning: "Hi (informal)",
                    audio: "Salut",
                    hint: "This is a casual greeting among friends"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Please' in French?",
                    audio: "S'il vous plaît",
                    options: ["Merci", "Pardon", "S'il vous plaît", "Excusez-moi"],
                    correct: 2,
                    hint: "This phrase literally means 'if it pleases you'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Je m'appelle ___' (My name is...)",
                    sentence: "Je m'appelle ___",
                    correct: "Marie",
                    audio: "Je m'appelle Marie",
                    hint: "Fill in with any French name"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in French?",
                    audio: "cinq",
                    options: ["quatre", "cinq", "six", "sept"],
                    correct: 1,
                    hint: "This number sounds like 'sank'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this French number:",
                    scrambled: "TUHI",
                    correct: "HUIT",
                    meaning: "Eight",
                    audio: "huit",
                    hint: "This number sounds like 'wheat'"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'trois' in French?",
                    audio: "trois",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number sounds like 'twah'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'un, deux, ___, quatre'",
                    sentence: "un, deux, ___, quatre",
                    correct: "trois",
                    audio: "trois",
                    hint: "What comes between two and four?"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'ten' in French?",
                    audio: "dix",
                    options: ["neuf", "dix", "onze", "douze"],
                    correct: 1,
                    hint: "This number sounds like 'deese'"
                }
            ]
        }
    ],
    german: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in German?",
                    audio: "Hallo",
                    options: ["Hallo", "Auf Wiedersehen", "Danke", "Bitte"],
                    correct: 0,
                    hint: "This is very similar to English!"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Guten ___' (Good morning)",
                    sentence: "Guten ___",
                    correct: "Morgen",
                    audio: "Guten Morgen",
                    hint: "This word is similar to 'morning' in English"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Wie geht es Ihnen?' mean?",
                    audio: "Wie geht es Ihnen?",
                    options: ["What's your name?", "How are you?", "Where are you from?", "How old are you?"],
                    correct: 1,
                    hint: "This is a formal way to ask about someone's condition"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this German greeting:",
                    scrambled: "SCHÜS",
                    correct: "TSCHÜS",
                    meaning: "Bye (informal)",
                    audio: "Tschüs",
                    hint: "This is a casual way to say goodbye"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Thank you' in German?",
                    audio: "Danke",
                    options: ["Bitte", "Danke", "Entschuldigung", "Gern geschehen"],
                    correct: 1,
                    hint: "This word sounds similar to 'dunk' in English"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in German?",
                    audio: "fünf",
                    options: ["vier", "fünf", "sechs", "sieben"],
                    correct: 1,
                    hint: "This number sounds like 'foonf'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this German number:",
                    scrambled: "THCA",
                    correct: "ACHT",
                    meaning: "Eight",
                    audio: "acht",
                    hint: "This number sounds like 'ahkt'"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'drei' in German?",
                    audio: "drei",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number sounds like 'dry'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'eins, zwei, ___, vier'",
                    sentence: "eins, zwei, ___, vier",
                    correct: "drei",
                    audio: "drei",
                    hint: "What comes between two and four?"
                }
            ]
        }
    ],
    italian: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in Italian?",
                    audio: "Ciao",
                    options: ["Ciao", "Arrivederci", "Grazie", "Prego"],
                    correct: 0,
                    hint: "This greeting is used worldwide!"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Buon ___' (Good morning)",
                    sentence: "Buon ___",
                    correct: "giorno",
                    audio: "Buongiorno",
                    hint: "This word means 'day' in Italian"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Come stai?' mean?",
                    audio: "Come stai?",
                    options: ["What's your name?", "How are you?", "Where are you?", "How old are you?"],
                    correct: 1,
                    hint: "This is an informal way to ask about someone's well-being"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Italian word:",
                    scrambled: "EZAGIR",
                    correct: "GRAZIE",
                    meaning: "Thank you",
                    audio: "Grazie",
                    hint: "This is how you express gratitude in Italian"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Good evening' in Italian?",
                    audio: "Buonasera",
                    options: ["Buongiorno", "Buonasera", "Buonanotte", "Ciao"],
                    correct: 1,
                    hint: "This greeting is used in the evening hours"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in Italian?",
                    audio: "cinque",
                    options: ["quattro", "cinque", "sei", "sette"],
                    correct: 1,
                    hint: "This number sounds like 'cheen-kway'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Italian number:",
                    scrambled: "OTTO",
                    correct: "OTTO",
                    meaning: "Eight",
                    audio: "otto",
                    hint: "This number is the same forwards and backwards!"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'tre' in Italian?",
                    audio: "tre",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number sounds like 'tray'"
                }
            ]
        }
    ],
    portuguese: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in Portuguese?",
                    audio: "Olá",
                    options: ["Olá", "Tchau", "Obrigado", "Por favor"],
                    correct: 0,
                    hint: "This sounds like 'oh-LAH'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Bom ___' (Good morning)",
                    sentence: "Bom ___",
                    correct: "dia",
                    audio: "Bom dia",
                    hint: "This word means 'day' in Portuguese"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Como está?' mean?",
                    audio: "Como está?",
                    options: ["What's your name?", "How are you?", "Where are you?", "How old are you?"],
                    correct: 1,
                    hint: "This is a formal way to ask about someone's condition"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Portuguese word:",
                    scrambled: "DOGABIRO",
                    correct: "OBRIGADO",
                    meaning: "Thank you (masculine)",
                    audio: "Obrigado",
                    hint: "This is how men say thank you in Portuguese"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Good night' in Portuguese?",
                    audio: "Boa noite",
                    options: ["Bom dia", "Boa tarde", "Boa noite", "Até logo"],
                    correct: 2,
                    hint: "This greeting is used when going to sleep"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in Portuguese?",
                    audio: "cinco",
                    options: ["quatro", "cinco", "seis", "sete"],
                    correct: 1,
                    hint: "This number sounds like 'seen-ko'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Portuguese number:",
                    scrambled: "TOIO",
                    correct: "OITO",
                    meaning: "Eight",
                    audio: "oito",
                    hint: "This number sounds like 'oy-to'"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'três' in Portuguese?",
                    audio: "três",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number sounds like 'trace'"
                }
            ]
        }
    ],
    japanese: [
        {
            title: "Lesson 1: Basic Greetings",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'Hello' in Japanese?",
                    audio: "Konnichiwa",
                    options: ["Konnichiwa", "Sayonara", "Arigato", "Sumimasen"],
                    correct: 0,
                    hint: "This literally means 'this day' or 'today'"
                },
                {
                    type: "fill-blank",
                    question: "Complete: 'Ohayo ___' (Good morning)",
                    sentence: "Ohayo ___",
                    correct: "gozaimasu",
                    audio: "Ohayo gozaimasu",
                    hint: "This makes the greeting more polite and formal"
                },
                {
                    type: "multiple-choice",
                    question: "What does 'Genki desu ka?' mean?",
                    audio: "Genki desu ka?",
                    options: ["What's your name?", "How are you?", "Where are you?", "How old are you?"],
                    correct: 1,
                    hint: "This asks about someone's health and energy"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Japanese word:",
                    scrambled: "TOGARIA",
                    correct: "ARIGATO",
                    meaning: "Thank you",
                    audio: "Arigato",
                    hint: "This is a casual way to say thank you"
                },
                {
                    type: "multiple-choice",
                    question: "How do you say 'Good evening' in Japanese?",
                    audio: "Konbanwa",
                    options: ["Ohayo", "Konnichiwa", "Konbanwa", "Oyasumi"],
                    correct: 2,
                    hint: "This greeting is used after 6 PM"
                }
            ]
        },
        {
            title: "Lesson 2: Numbers 1-10",
            questions: [
                {
                    type: "multiple-choice",
                    question: "How do you say 'five' in Japanese?",
                    audio: "go",
                    options: ["yon", "go", "roku", "nana"],
                    correct: 1,
                    hint: "This number sounds like the English word 'go'"
                },
                {
                    type: "word-scramble",
                    question: "Unscramble this Japanese number:",
                    scrambled: "CHAHI",
                    correct: "HACHI",
                    meaning: "Eight",
                    audio: "hachi",
                    hint: "This number sounds like 'hah-chee'"
                },
                {
                    type: "multiple-choice",
                    question: "What number is 'san' in Japanese?",
                    audio: "san",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    hint: "This number is also used as an honorific suffix"
                }
            ]
        }
    ]
};

// Achievements System
const achievements = [
    { id: 'first-steps', name: 'First Steps', desc: 'Complete your first lesson', icon: '👶', xp: 10, unlocked: false },
    { id: 'streak-3', name: 'Getting Started', desc: '3-day learning streak', icon: '🔥', xp: 25, unlocked: false },
    { id: 'streak-7', name: 'Week Warrior', desc: '7-day learning streak', icon: '⚡', xp: 50, unlocked: false },
    { id: 'streak-30', name: 'Monthly Master', desc: '30-day learning streak', icon: '🏆', xp: 200, unlocked: false },
    { id: 'vocab-50', name: 'Word Collector', desc: 'Learn 50 vocabulary words', icon: '📚', xp: 75, unlocked: false },
    { id: 'vocab-100', name: 'Vocabulary Master', desc: 'Learn 100 vocabulary words', icon: '🎓', xp: 150, unlocked: false },
    { id: 'perfect-lesson', name: 'Perfectionist', desc: 'Complete a lesson with 100% accuracy', icon: '⭐', xp: 30, unlocked: false },
    { id: 'speed-demon', name: 'Speed Demon', desc: 'Complete 10 questions in under 2 minutes', icon: '💨', xp: 40, unlocked: false },
    { id: 'multilingual', name: 'Multilingual', desc: 'Start learning 3 different languages', icon: '🌍', xp: 100, unlocked: false },
    { id: 'night-owl', name: 'Night Owl', desc: 'Study after 10 PM', icon: '🦉', xp: 20, unlocked: false },
    { id: 'early-bird', name: 'Early Bird', desc: 'Study before 7 AM', icon: '🐦', xp: 20, unlocked: false },
    { id: 'level-5', name: 'Rising Star', desc: 'Reach level 5', icon: '🌟', xp: 100, unlocked: false },
    { id: 'level-10', name: 'Language Expert', desc: 'Reach level 10', icon: '👨‍🎓', xp: 250, unlocked: false }
];

// Leaderboard Data (simulated)
const leaderboardData = [
    { rank: 1, name: 'Maria García', level: 12, xp: 2450, avatar: '👩' },
    { rank: 2, name: 'Jean Dupont', level: 11, xp: 2380, avatar: '👨' },
    { rank: 3, name: 'Hans Mueller', level: 10, xp: 2100, avatar: '🧔' },
    { rank: 4, name: 'Sofia Rossi', level: 9, xp: 1950, avatar: '👱‍♀️' },
    { rank: 5, name: 'You', level: 1, xp: 0, avatar: '👤' },
    { rank: 6, name: 'Ahmed Hassan', level: 8, xp: 1800, avatar: '👨‍🦱' },
    { rank: 7, name: 'Yuki Tanaka', level: 7, xp: 1650, avatar: '👩‍🦳' },
    { rank: 8, name: 'Carlos Silva', level: 6, xp: 1500, avatar: '👨‍🦲' }
];

// Bot Messages
const botMessages = {
    welcome: [
        "Welcome to LinguaQuest! Ready to start your language adventure? 🚀",
        "Hello there! I'm your language learning companion! 🤖",
        "Great to see you! Let's make language learning fun! 🎉"
    ],
    correct: [
        "Excellent work! 🌟",
        "Perfect! You're getting the hang of this! 👏",
        "Outstanding! Keep it up! 🎯",
        "Brilliant! You're on fire! 🔥"
    ],
    incorrect: [
        "Don't worry, mistakes help us learn! 💪",
        "Close! Try again, you've got this! 🎯",
        "Learning is a journey, keep going! 🚀",
        "Every expert was once a beginner! 📚"
    ],
    streak: [
        "Amazing streak! You're unstoppable! 🔥",
        "Incredible consistency! 🌟",
        "You're on fire! Keep the momentum! ⚡",
        "Streak master! This is how it's done! 🏆"
    ],
    levelUp: [
        "Level up! You're becoming a language master! 🎉",
        "Congratulations on leveling up! 🏆",
        "New level unlocked! You're amazing! ⭐",
        "Level up achieved! Keep climbing! 🚀"
    ],
    achievement: [
        "Achievement unlocked! You're incredible! 🏆",
        "New badge earned! Well done! 🎖️",
        "Achievement complete! You're a star! ⭐",
        "Badge unlocked! Keep collecting! 🎯"
    ],
    encouragement: [
        "You're doing great! Keep learning! 📚",
        "Every word learned is progress! 🌟",
        "Your dedication is inspiring! 💪",
        "Learning never stops! Keep going! 🚀"
    ],
    lessonComplete: [
        "Lesson complete! Fantastic work! 🎓",
        "Well done! You've mastered this lesson! ⭐",
        "Excellent progress! On to the next! 🚀",
        "Lesson finished! You're getting stronger! 💪"
    ]
};

// Language Learning Functions
function selectLanguage(language) {
    gameState.selectedLanguage = language;
    gameState.currentLesson = 0;
    gameState.currentQuestion = 0;
    gameState.currentGameMode = 'normal';
    gameState.startTime = Date.now();
    
    // Check if this is a new language for the user
    const languageKey = `${language}_started`;
    if (!gameState[languageKey]) {
        gameState[languageKey] = true;
        gameState.activeLanguages++;
        checkAchievement('multilingual');
    }
    
    // Hide all sections and show lesson interface
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('lesson-interface').style.display = 'block';
    
    showBotMessage(`Great choice! Let's learn ${language.charAt(0).toUpperCase() + language.slice(1)}! 🎉`);
    loadLesson();
}

function loadLesson() {
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    if (!lesson) {
        showToast('No lessons available for this language yet! 🚧', 'warning');
        goHome();
        return;
    }
    
    document.getElementById('lesson-title').textContent = lesson.title;
    gameState.totalQuestions = lesson.questions.length;
    document.getElementById('game-mode-selector').style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    const question = lesson.questions[gameState.currentQuestion];
    const container = document.getElementById('question-container');
    
    // Reset container
    container.className = 'question-container';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('hint-system').style.display = 'block';
    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('check-btn').textContent = 'Check Answer';
    document.getElementById('next-btn').style.display = 'none';
    
    let html = `<div class="question-text">${question.question}`;
    if (question.audio && gameState.settings.voice) {
        html += `<button class="audio-btn" onclick="playAudio('${question.audio}')">🔊</button>`;
    }
    html += `</div>`;
    
    // Generate question content based on type
    if (question.type === 'multiple-choice') {
        html += '<div class="options-grid">';
        question.options.forEach((option, index) => {
            html += `<div class="option" onclick="selectOption(${index})" data-index="${index}">${option}</div>`;
        });
        html += '</div>';
    } else if (question.type === 'fill-blank') {
        html += `<div class="question-text">${question.sentence.replace('___', '<span class="fill-blank"><input type="text" class="blank-input" id="blank-answer" placeholder="?"></span>')}</div>`;
    } else if (question.type === 'word-scramble') {
        html += `<div class="word-scramble">`;
        html += `<div class="scrambled-word">${question.scrambled}</div>`;
        html += `<input type="text" class="word-input" id="scramble-input" placeholder="Unscramble the word..." maxlength="${question.correct.length}">`;
        html += `<div style="margin-top: 15px; color: #666;">Meaning: ${question.meaning}</div>`;
        html += `</div>`;
    }
    
    container.innerHTML = html;
    
    // Focus on input fields
    if (question.type === 'fill-blank') {
        document.getElementById('blank-answer').focus();
    } else if (question.type === 'word-scramble') {
        document.getElementById('scramble-input').focus();
    }
    
    // Update progress
    updateProgress();
}

function selectOption(index) {
    // Clear previous selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select current option
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    
    // Visual feedback
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    createParticles(selectedOption.offsetLeft + selectedOption.offsetWidth/2, selectedOption.offsetTop + selectedOption.offsetHeight/2, '#667eea');
}

function showHint() {
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    const question = lesson.questions[gameState.currentQuestion];
    
    if (!question.hint) {
        showToast('No hint available for this question! 🤔', 'warning');
        return;
    }
    
    document.getElementById('hint-text').textContent = question.hint;
    document.getElementById('hint-text').style.display = 'block';
    
    // Deduct XP for using hint
    gameState.xp = Math.max(0, gameState.xp - 5);
    gameState.hintsUsed++;
    updateAllStats();
    showToast('Hint revealed! -5 XP', 'warning');
    
    // Hide hint button
    event.target.style.display = 'none';
}

function checkAnswer() {
    // Check if player can play
    if (!canPlay()) {
        showToast('You need hearts to continue! 💔', 'error');
        return;
    }
    
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    const question = lesson.questions[gameState.currentQuestion];
    let isCorrect = false;
    let userAnswer = '';
    
    if (question.type === 'multiple-choice') {
        const selectedOption = document.querySelector('.option.selected');
        if (selectedOption) {
            const selectedIndex = parseInt(selectedOption.dataset.index);
            isCorrect = selectedIndex === question.correct;
            userAnswer = question.options[selectedIndex];
            
            // Show correct/incorrect styling
            document.querySelectorAll('.option').forEach((opt, index) => {
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (opt.classList.contains('selected') && index !== question.correct) {
                    opt.classList.add('incorrect');
                }
            });
        }
    } else if (question.type === 'fill-blank') {
        userAnswer = document.getElementById('blank-answer').value.trim();
        isCorrect = userAnswer.toLowerCase() === question.correct.toLowerCase();
    } else if (question.type === 'word-scramble') {
        userAnswer = document.getElementById('scramble-input').value.trim();
        isCorrect = userAnswer.toUpperCase() === question.correct.toUpperCase();
    }
    
    // Add to vocabulary if correct
    if (isCorrect && userAnswer) {
        addToVocabulary(userAnswer, question.meaning || 'Learned word', gameState.selectedLanguage);
    }
    
    // Update game state and show feedback using new system
    if (isCorrect) {
        handleCorrectAnswer();
        showFeedback(true, getRandomPositiveFeedback());
        document.getElementById('question-container').classList.add('correct');
        showBotMessage(getRandomBotMessage('correct'));
        
        // Create success particles
        createParticles(window.innerWidth/2, window.innerHeight/2, '#4ecdc4');
        
        // Check time-based achievements
        checkAchievement('night-owl');
        checkAchievement('early-bird');
    } else {
        handleIncorrectAnswer();
        showFeedback(false, getCorrectAnswer(question));
        document.getElementById('question-container').classList.add('incorrect');
    }
    
    updateAllStats();
    checkLevelUp();
    
    // Show next button
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('hint-system').style.display = 'none';
    
    // Mark study day
    markStudyDay();
    
    // Check if game over
    if (gameState.hearts === 0) {
        setTimeout(() => {
            showToast('Game Over! You\'ve run out of hearts. Try again! 💔', 'error');
            showBotMessage("Don't give up! Every expert was once a beginner! 💪");
            setTimeout(() => goHome(), 2000);
        }, 1000);
    }
    
    saveGameState();
}

function getCorrectAnswer(question) {
    if (question.type === 'multiple-choice') {
        return `Correct answer: ${question.options[question.correct]}`;
    } else if (question.type === 'fill-blank') {
        return `Correct answer: ${question.correct}`;
    } else if (question.type === 'word-scramble') {
        return `Correct answer: ${question.correct}`;
    }
    return 'Try again!';
}

function getRandomPositiveFeedback() {
    const feedback = [
        "¡Excelente! 🎉", "Perfect! 🌟", "Outstanding! 🚀", "Brilliant! ✨",
        "Amazing work! 🎊", "You're on fire! 🔥", "Fantastic! 🎈", "Incredible! 🏆",
        "Superb! 🎯", "Magnificent! 🎭", "Awesome! ⭐", "Phenomenal! 🌈"
    ];
    return feedback[Math.floor(Math.random() * feedback.length)];
}

function showFeedback(isCorrect, message) {
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = message;
    feedback.style.display = 'block';
}

function nextQuestion() {
    gameState.currentQuestion++;
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    
    if (gameState.currentQuestion >= lesson.questions.length) {
        // Lesson complete
        completeLesson();
    } else {
        loadQuestion();
    }
}

function completeLesson() {
    gameState.lessonsCompleted++;
    
    // Calculate accuracy
    gameState.accuracyRate = (gameState.correctAnswers / gameState.totalQuestions) * 100;
    
    // Check achievements
    checkAchievement('first-steps');
    if (gameState.accuracyRate === 100) {
        checkAchievement('perfect-lesson');
    }
    
    playSoundEffect('levelup');
    showBotMessage(getRandomBotMessage('lessonComplete'));
    
    // Trigger celebration with firecracker animation and sound
    const lessonData = {
        message: "Excellent work! You've mastered this lesson!",
        accuracy: Math.round(gameState.accuracyRate),
        xp: Math.floor(gameState.accuracyRate / 2) + 20, // 20-70 XP based on accuracy
        streak: gameState.currentStreak
    };
    
    triggerLessonCompletion(lessonData);
    
    setTimeout(() => {
        goHome();
    }, 2000);
}

function updateProgress() {
    const lesson = lessons[gameState.selectedLanguage][gameState.currentLesson];
    const progress = ((gameState.currentQuestion + 1) / lesson.questions.length) * 100;
    const progressLabel = `Question ${gameState.currentQuestion + 1} of ${lesson.questions.length}`;
    
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-label').textContent = progressLabel;
}

function showGameModes() {
    const selector = document.getElementById('game-mode-selector');
    const questionContainer = document.getElementById('question-container');
    
    if (selector.style.display === 'none') {
        selector.style.display = 'grid';
        questionContainer.style.display = 'none';
        document.getElementById('check-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('game-mode-btn').textContent = '📚 Back to Lesson';
        showBotMessage("Choose your learning style! 🎮");
    } else {
        selector.style.display = 'none';
        questionContainer.style.display = 'block';
        document.getElementById('check-btn').style.display = 'inline-block';
        document.getElementById('game-mode-btn').textContent = '🎮 Game Mode';
        loadQuestion();
    }
}

function startGameMode(mode) {
    showToast(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode coming soon! 🚀`, 'warning');
    showGameModes(); // Go back to lesson
}

function goHome() {
    // Keep progress but reset lesson state
    gameState.selectedLanguage = '';
    gameState.currentLesson = 0;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.totalQuestions = 0;
    gameState.hearts = 3;
    
    document.getElementById('lesson-interface').style.display = 'none';
    showSection('dashboard');
    updateAllStats();
    showBotMessage("Welcome back! Ready for another adventure? 🚀");
}

// Achievements System
function checkAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement || achievement.unlocked) return;
    
    let shouldUnlock = false;
    
    switch(achievementId) {
        case 'first-steps':
            shouldUnlock = gameState.lessonsCompleted >= 1;
            break;
        case 'streak-3':
            shouldUnlock = gameState.streak >= 3;
            break;
        case 'streak-7':
            shouldUnlock = gameState.streak >= 7;
            break;
        case 'streak-30':
            shouldUnlock = gameState.streak >= 30;
            break;
        case 'vocab-50':
            shouldUnlock = gameState.totalWords >= 50;
            break;
        case 'vocab-100':
            shouldUnlock = gameState.totalWords >= 100;
            break;
        case 'perfect-lesson':
            shouldUnlock = gameState.accuracyRate === 100;
            break;
        case 'multilingual':
            shouldUnlock = gameState.activeLanguages >= 3;
            break;
        case 'level-5':
            shouldUnlock = gameState.level >= 5;
            break;
        case 'level-10':
            shouldUnlock = gameState.level >= 10;
            break;
        case 'night-owl':
            const hour = new Date().getHours();
            shouldUnlock = hour >= 22 || hour <= 2;
            break;
        case 'early-bird':
            const earlyHour = new Date().getHours();
            shouldUnlock = earlyHour >= 5 && earlyHour <= 7;
            break;
    }
    
    if (shouldUnlock) {
        unlockAchievement(achievement);
    }
}

function unlockAchievement(achievement) {
    achievement.unlocked = true;
    gameState.xp += achievement.xp;
    gameState.achievements.push(achievement.id);
    
    showToast(`🏆 Achievement Unlocked: ${achievement.name}! +${achievement.xp} XP`, 'success', 4000);
    showBotMessage(getRandomBotMessage('achievement'));
    playSoundEffect('achievement');
    
    populateAchievements();
    updateAllStats();
    checkLevelUp();
    saveGameState();
}

function populateAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = `achievement ${achievement.unlocked ? 'unlocked' : ''}`;
        
        let progressHtml = '';
        if (!achievement.unlocked) {
            let progress = 0;
            let max = 1;
            
            switch(achievement.id) {
                case 'streak-3':
                    progress = Math.min(gameState.streak, 3);
                    max = 3;
                    break;
                case 'streak-7':
                    progress = Math.min(gameState.streak, 7);
                    max = 7;
                    break;
                case 'vocab-50':
                    progress = Math.min(gameState.totalWords, 50);
                    max = 50;
                    break;
                case 'vocab-100':
                    progress = Math.min(gameState.totalWords, 100);
                    max = 100;
                    break;
                case 'level-5':
                    progress = Math.min(gameState.level, 5);
                    max = 5;
                    break;
                case 'level-10':
                    progress = Math.min(gameState.level, 10);
                    max = 10;
                    break;
                case 'multilingual':
                    progress = Math.min(gameState.activeLanguages, 3);
                    max = 3;
                    break;
            }
            
            if (max > 1) {
                progressHtml = `
                    <div class="achievement-progress">
                        <div class="achievement-progress-fill" style="width: ${(progress/max)*100}%"></div>
                    </div>
                    <div style="font-size: 0.8rem; margin-top: 5px;">${progress}/${max}</div>
                `;
            }
        }
        
        div.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            <div style="font-weight: bold; color: #ffd700; margin-top: 5px;">+${achievement.xp} XP</div>
            ${progressHtml}
        `;
        
        grid.appendChild(div);
    });
}

// Vocabulary System
function addToVocabulary(word, meaning, language) {
    const existing = gameState.vocabulary.find(v => v.word === word && v.language === language);
    if (!existing) {
        gameState.vocabulary.push({
            word,
            meaning,
            language,
            dateAdded: new Date().toISOString(),
            practiceCount: 0
        });
        gameState.totalWords++;
        checkAchievement('vocab-50');
        checkAchievement('vocab-100');
    }
}

function populateVocabulary() {
    const list = document.getElementById('vocab-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (gameState.vocabulary.length === 0) {
        list.innerHTML = '<div style="text-align: center; color: #666; grid-column: 1/-1;">Start learning to build your vocabulary! 📚</div>';
        return;
    }
    
    gameState.vocabulary.forEach(vocab => {
        const div = document.createElement('div');
        div.className = 'vocab-item';
        div.onclick = () => practiceWord(vocab);
        div.innerHTML = `
            <div class="vocab-word">${vocab.word}</div>
            <div class="vocab-meaning">${vocab.meaning}</div>
            <div style="font-size: 0.8rem; color: #999;">${vocab.language.charAt(0).toUpperCase() + vocab.language.slice(1)}</div>
        `;
        list.appendChild(div);
    });
}

function filterVocabulary(searchTerm) {
    const items = document.querySelectorAll('.vocab-item');
    const search = searchTerm.toLowerCase();
    
    items.forEach(item => {
        const word = item.querySelector('.vocab-word').textContent.toLowerCase();
        const meaning = item.querySelector('.vocab-meaning').textContent.toLowerCase();
        
        if (word.includes(search) || meaning.includes(search)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function practiceWord(vocab) {
    if (gameState.settings.voice) {
        playAudio(vocab.word);
    }
    vocab.practiceCount++;
    saveGameState();
}

// Leaderboard System
function populateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    // Update user's position in leaderboard
    const userIndex = leaderboardData.findIndex(user => user.name === 'You');
    if (userIndex !== -1) {
        leaderboardData[userIndex].level = gameState.level;
        leaderboardData[userIndex].xp = gameState.xp;
        leaderboardData[userIndex].avatar = gameState.userProfile.avatar;
    }
    
    // Sort by XP (descending)
    leaderboardData.sort((a, b) => b.xp - a.xp);
    
    // Update ranks
    leaderboardData.forEach((user, index) => {
        user.rank = index + 1;
    });
    
    leaderboardData.forEach(user => {
        const div = document.createElement('div');
        div.className = 'leaderboard-item';
        
        if (user.name === 'You') {
            div.style.background = 'rgba(102, 126, 234, 0.1)';
            div.style.border = '2px solid #667eea';
        }
        
        let rankIcon = user.rank.toString();
        if (user.rank === 1) rankIcon = '🥇';
        else if (user.rank === 2) rankIcon = '🥈';
        else if (user.rank === 3) rankIcon = '🥉';
        
        div.innerHTML = `
            <div class="leaderboard-rank">${rankIcon}</div>
            <div class="leaderboard-avatar">${user.avatar}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${user.name}</div>
                <div class="leaderboard-level">Level ${user.level}</div>
            </div>
            <div class="leaderboard-xp">${user.xp} XP</div>
        `;
        
        list.appendChild(div);
    });
}

// Bot System
function getRandomBotMessage(type) {
    const messages = botMessages[type] || botMessages.encouragement;
    return messages[Math.floor(Math.random() * messages.length)];
}

function showBotMessage(message) {
    const botMessage = document.getElementById('bot-message');
    const botSpeech = document.getElementById('bot-speech');
    
    if (botMessage && botSpeech) {
        botMessage.textContent = message;
        botSpeech.classList.add('show');
        
        // Hide after 4 seconds
        setTimeout(() => {
            botSpeech.classList.remove('show');
        }, 4000);
    }
}

function toggleBot() {
    const botSpeech = document.getElementById('bot-speech');
    if (botSpeech) {
        if (botSpeech.classList.contains('show')) {
            botSpeech.classList.remove('show');
        } else {
            showBotMessage(getRandomBotMessage('encouragement'));
        }
    }
}

function showUserProfile() {
    showToast('Profile customization coming soon! 👤', 'warning');
}



// 1v1 Competition System
const competitionState = {
    isActive: false,
    mode: null, // 'bot' or 'user'
    currentRound: 0,
    totalRounds: 5,
    playerScore: 0,
    opponentScore: 0,
    playerAnswers: [],
    opponentAnswers: [],
    questions: [],
    timeLimit: 15, // seconds per question
    timeRemaining: 15,
    timer: null,
    botDifficulty: 'medium' // easy, medium, hard
};

// Bot AI for competition
const botAI = {
    easy: {
        correctRate: 0.6,
        responseTime: { min: 8, max: 12 }
    },
    medium: {
        correctRate: 0.75,
        responseTime: { min: 5, max: 10 }
    },
    hard: {
        correctRate: 0.9,
        responseTime: { min: 2, max: 6 }
    }
};

function startCompetition(mode = 'bot') {
    // Force German language for competition
    gameState.selectedLanguage = 'german';
    
    competitionState.isActive = true;
    competitionState.mode = mode;
    competitionState.currentRound = 0;
    competitionState.playerScore = 0;
    competitionState.opponentScore = 0;
    competitionState.playerAnswers = [];
    competitionState.opponentAnswers = [];
    
    // Generate competition questions from all lessons
    generateCompetitionQuestions();
    
    // Show competition interface
    showCompetitionInterface();
    
    // Start first round
    startCompetitionRound();
    
    showToast(`🎯 ${mode === 'bot' ? 'Bot' : 'Player'} competition started!`, 'success');
    showBotMessage(`Ready for a challenge? Let's compete! 🔥`);
}

// FIXED: Generate competition questions from existing lesson data
function generateCompetitionQuestions() {
    const allQuestions = [];
    const languageLessons = lessons[gameState.selectedLanguage];
    
    console.log('Generating competition questions for:', gameState.selectedLanguage);
    console.log('Available lessons:', languageLessons);
    
    // Use existing lesson questions directly
    if (languageLessons && languageLessons.length > 0) {
        languageLessons.forEach(lesson => {
            if (lesson.questions && lesson.questions.length > 0) {
                lesson.questions.forEach(question => {
                    // Add lesson questions to competition pool
                    allQuestions.push({
                        ...question,
                        lesson: lesson.title
                    });
                });
            }
        });
    }
    
    console.log('Total questions generated:', allQuestions.length);
    
    // Fallback questions if no lessons found
    if (allQuestions.length === 0) {
        console.log('No lesson questions found, using fallback questions');
        const fallbackQuestions = [
            {
                type: 'multiple-choice',
                question: `How do you say 'Hello' in ${gameState.selectedLanguage}?`,
                options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
                correct: 0,
                lesson: 'Basic Greetings'
            },
            {
                type: 'multiple-choice',
                question: `How do you say 'Thank you' in ${gameState.selectedLanguage}?`,
                options: ['Gracias', 'Hola', 'Adiós', 'Por favor'],
                correct: 0,
                lesson: 'Basic Greetings'
            },
            {
                type: 'multiple-choice',
                question: `How do you say 'Goodbye' in ${gameState.selectedLanguage}?`,
                options: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
                correct: 0,
                lesson: 'Basic Greetings'
            },
            {
                type: 'multiple-choice',
                question: `How do you say 'Please' in ${gameState.selectedLanguage}?`,
                options: ['Por favor', 'Hola', 'Adiós', 'Gracias'],
                correct: 0,
                lesson: 'Basic Greetings'
            },
            {
                type: 'multiple-choice',
                question: `How do you say 'Good morning' in ${gameState.selectedLanguage}?`,
                options: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'],
                correct: 0,
                lesson: 'Basic Greetings'
            }
        ];
        allQuestions.push(...fallbackQuestions);
    }
    
    // Shuffle and select questions for competition
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    competitionState.questions = shuffled.slice(0, competitionState.totalRounds);
    
    console.log('Selected competition questions:', competitionState.questions);
}

function showCompetitionInterface() {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    
    // Show competition interface
    let competitionHTML = `
        <div class="section" id="competition-interface" style="display: block;">
            <div class="competition-header">
                <h2>🎯 1v1 Competition</h2>
                <div class="competition-mode">${competitionState.mode === 'bot' ? '🤖 vs 👤' : '👤 vs 👤'}</div>
                <div class="competition-score">
                    <div class="player-score">
                        <span class="score-label">You</span>
                        <span class="score-value" id="player-score">${competitionState.playerScore}</span>
                    </div>
                    <div class="vs-divider">VS</div>
                    <div class="opponent-score">
                        <span class="score-label">${competitionState.mode === 'bot' ? 'Bot' : 'Opponent'}</span>
                        <span class="score-value" id="opponent-score">${competitionState.opponentScore}</span>
                    </div>
                </div>
                <div class="round-info">
                    <span>Round <span id="current-round">${competitionState.currentRound + 1}</span> of ${competitionState.totalRounds}</span>
                </div>
            </div>
            
            <div class="competition-timer">
                <div class="timer-circle">
                    <span id="timer-display">${competitionState.timeLimit}</span>
                </div>
                <div class="timer-bar">
                    <div class="timer-fill" id="timer-fill"></div>
                </div>
            </div>
            
            <div class="competition-question" id="competition-question">
                <!-- Question content will be loaded here -->
            </div>
            
            <div class="competition-actions">
                <button class="btn btn-secondary" onclick="exitCompetition()">Exit Competition</button>
                <button class="btn btn-primary" id="competition-submit" onclick="submitCompetitionAnswer()" style="display: none;">Submit Answer</button>
            </div>
            
            <div class="competition-status" id="competition-status">
                <!-- Status updates will appear here -->
            </div>
        </div>
    `;
    
    // Add to main content if not exists
    const mainContent = document.querySelector('.main-content');
    if (!document.getElementById('competition-interface')) {
        mainContent.insertAdjacentHTML('beforeend', competitionHTML);
    } else {
        document.getElementById('competition-interface').style.display = 'block';
    }
}

// FIXED: Start competition round function
function startCompetitionRound() {
    console.log('Starting round:', competitionState.currentRound + 1, 'of', competitionState.totalRounds);
    
    if (competitionState.currentRound >= competitionState.totalRounds) {
        console.log('Competition finished!');
        endCompetition();
        return;
    }
    
    // Check if we have questions available
    if (!competitionState.questions || competitionState.questions.length === 0) {
        console.error('No competition questions available!');
        showToast('Error: No questions available for competition!', 'error');
        return;
    }
    
    if (competitionState.currentRound >= competitionState.questions.length) {
        console.error('Current round exceeds available questions!');
        endCompetition();
        return;
    }
    
    const question = competitionState.questions[competitionState.currentRound];
    console.log('Loading question for round:', competitionState.currentRound, question);
    
    loadCompetitionQuestion(question);
    startCompetitionTimer();
    
    // Bot makes its move if in bot mode
    if (competitionState.mode === 'bot') {
        scheduleBotAnswer();
    }
}

function loadCompetitionQuestion(question) {
    const container = document.getElementById('competition-question');
    
    let html = `<div class="question-text">${question.question}`;
    if (question.audio && gameState.settings.voice) {
        html += `<button class="audio-btn" onclick="playAudio('${question.audio}')">🔊</button>`;
    }
    html += `</div>`;
    
    // Generate question content based on type
    if (question.type === 'multiple-choice') {
        html += '<div class="options-grid">';
        question.options.forEach((option, index) => {
            html += `<div class="option competition-option" onclick="selectCompetitionOption(${index})" data-index="${index}">${option}</div>`;
        });
        html += '</div>';
    } else if (question.type === 'fill-blank') {
        html += `<div class="question-text">${question.sentence.replace('___', '<span class="fill-blank"><input type="text" class="blank-input" id="competition-blank" placeholder="?"></span>')}</div>`;
    } else if (question.type === 'word-scramble') {
        html += `<div class="word-scramble">`;
        html += `<div class="scrambled-word">${question.scrambled}</div>`;
        html += `<input type="text" class="word-input" id="competition-scramble" placeholder="Unscramble the word..." maxlength="${question.correct.length}">`;
        html += `<div style="margin-top: 15px; color: #666;">Meaning: ${question.meaning}</div>`;
        html += `</div>`;
    }
    
    container.innerHTML = html;
    
    // Show submit button
    document.getElementById('competition-submit').style.display = 'inline-block';
    
    // Update round display
    document.getElementById('current-round').textContent = competitionState.currentRound + 1;
}

function selectCompetitionOption(index) {
    // Clear previous selections
    document.querySelectorAll('.competition-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select current option
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    
    // Visual feedback
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    createParticles(selectedOption.offsetLeft + selectedOption.offsetWidth/2, selectedOption.offsetTop + selectedOption.offsetHeight/2, '#667eea');
}

function startCompetitionTimer() {
    competitionState.timeRemaining = competitionState.timeLimit;
    updateTimerDisplay();
    
    competitionState.timer = setInterval(() => {
        competitionState.timeRemaining--;
        updateTimerDisplay();
        
        if (competitionState.timeRemaining <= 0) {
            clearInterval(competitionState.timer);
            submitCompetitionAnswer(); // Auto-submit when time runs out
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
    const timerFill = document.getElementById('timer-fill');
    
    if (timerDisplay) {
        timerDisplay.textContent = competitionState.timeRemaining;
    }
    
    if (timerFill) {
        const percentage = (competitionState.timeRemaining / competitionState.timeLimit) * 100;
        timerFill.style.width = percentage + '%';
        
        // Change color based on time remaining
        if (percentage > 50) {
            timerFill.style.background = '#4caf50';
        } else if (percentage > 25) {
            timerFill.style.background = '#ff9800';
        } else {
            timerFill.style.background = '#f44336';
        }
    }
}

// FIXED: Submit competition answer function
function submitCompetitionAnswer() {
    console.log('Submitting answer for round:', competitionState.currentRound);
    
    clearInterval(competitionState.timer);
    
    // Check if we have a valid question
    if (!competitionState.questions || competitionState.currentRound >= competitionState.questions.length) {
        console.error('Invalid question state in submitCompetitionAnswer');
        return;
    }
    
    const question = competitionState.questions[competitionState.currentRound];
    let playerAnswer = '';
    let isCorrect = false;
    
    // Get player answer based on question type
    if (question.type === 'multiple-choice') {
        const selectedOption = document.querySelector('.competition-option.selected');
        if (selectedOption) {
            const selectedIndex = parseInt(selectedOption.dataset.index);
            playerAnswer = question.options[selectedIndex];
            isCorrect = selectedIndex === question.correct;
        }
    } else if (question.type === 'fill-blank') {
        playerAnswer = document.getElementById('competition-blank')?.value.trim() || '';
        isCorrect = playerAnswer.toLowerCase() === question.correct.toLowerCase();
    } else if (question.type === 'word-scramble') {
        playerAnswer = document.getElementById('competition-scramble')?.value.trim() || '';
        isCorrect = playerAnswer.toUpperCase() === question.correct.toUpperCase();
    }
    
    console.log('Player answer:', playerAnswer, 'Correct:', isCorrect);
    
    // Record player answer
    competitionState.playerAnswers.push({
        question: question.question,
        answer: playerAnswer,
        correct: isCorrect,
        timeUsed: competitionState.timeLimit - competitionState.timeRemaining
    });
    
    // Update player score
    if (isCorrect) {
        competitionState.playerScore++;
        const playerScoreElement = document.getElementById('player-score');
        if (playerScoreElement) {
            playerScoreElement.textContent = competitionState.playerScore;
        }
    }
    
    // Show round result
    showRoundResult(isCorrect, playerAnswer, question);
    
    // FIXED: Move to next round after delay with proper error handling
    setTimeout(() => {
        console.log('Moving to next round. Current:', competitionState.currentRound, 'Total:', competitionState.totalRounds);
        
        competitionState.currentRound++;
        
        // Check if competition should end
        if (competitionState.currentRound >= competitionState.totalRounds) {
            console.log('Competition completed, ending...');
            endCompetition();
        } else {
            console.log('Starting next round:', competitionState.currentRound + 1);
            startCompetitionRound();
        }
    }, 2000);
}

function scheduleBotAnswer() {
    const difficulty = botAI[competitionState.botDifficulty];
    const responseTime = Math.random() * (difficulty.responseTime.max - difficulty.responseTime.min) + difficulty.responseTime.min;
    
    setTimeout(() => {
        const question = competitionState.questions[competitionState.currentRound];
        const isCorrect = Math.random() < difficulty.correctRate;
        
        // Record bot answer
        competitionState.opponentAnswers.push({
            question: question.question,
            correct: isCorrect,
            timeUsed: responseTime
        });
        
        // Update bot score
        if (isCorrect) {
            competitionState.opponentScore++;
            document.getElementById('opponent-score').textContent = competitionState.opponentScore;
        }
        
        // Show bot status
        const status = document.getElementById('competition-status');
        if (status) {
            status.innerHTML = `<div class="bot-status ${isCorrect ? 'correct' : 'incorrect'}">
                🤖 Bot answered ${isCorrect ? 'correctly' : 'incorrectly'}!
            </div>`;
        }
    }, responseTime * 1000);
}

function showRoundResult(isCorrect, playerAnswer, question) {
    const status = document.getElementById('competition-status');
    if (!status) return;
    
    const correctAnswer = question.type === 'multiple-choice' ? 
        question.options[question.correct] : question.correct;
    
    status.innerHTML = `
        <div class="round-result ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="result-text">
                <div>Your answer: <strong>${playerAnswer || 'No answer'}</strong></div>
                <div>Correct answer: <strong>${correctAnswer}</strong></div>
            </div>
        </div>
    `;
    
    // Play sound effect
    playSoundEffect(isCorrect ? 'correct' : 'incorrect');
    
    // Visual feedback
    if (isCorrect) {
        createParticles(window.innerWidth/2, window.innerHeight/2, '#4caf50');
    }
}

function endCompetition() {
    clearInterval(competitionState.timer);
    
    const playerWon = competitionState.playerScore > competitionState.opponentScore;
    const isDraw = competitionState.playerScore === competitionState.opponentScore;
    
    // Award hearts for winning
    if (playerWon) {
        gameState.hearts = Math.min(5, gameState.hearts + 1);
        showToast('🏆 You won! +1 Heart earned!', 'success', 4000);
        
        // Play German victory audio
        try {
            const victoryAudio = new Audio('audio/victory.wav');
            victoryAudio.volume = 0.8;
            victoryAudio.play().catch(e => {
                console.log('Victory audio failed, falling back to sound effect:', e);
                playSoundEffect('achievement');
            });
        } catch (e) {
            playSoundEffect('achievement');
        }
        
        createConfetti();
        
        // Update hearts display immediately
        updateHeartsDisplay();
        
        // Show bot congratulations message
        showBotMessage("Congratulations! You've earned a heart! 💖 Keep up the great work!");
    } else if (isDraw) {
        showToast('🤝 It\'s a draw! Good effort!', 'warning', 3000);
        showBotMessage("A draw! You're getting better! Try again for the win! 🔥");
    } else {
        showToast('😔 You lost! Better luck next time!', 'error', 3000);
        
        // Play German defeat audio
        try {
            const defeatAudio = new Audio('audio/defeat.wav');
            defeatAudio.volume = 0.8;
            defeatAudio.play().catch(e => {
                console.log('Defeat audio failed:', e);
            });
        } catch (e) {
            console.log('Failed to play defeat audio:', e);
        }
        
        showBotMessage("Don't give up! Every challenge makes you stronger! 💪");
    }
    
    // Show final results
    showCompetitionResults();
    
    // Update stats
    updateAllStats();
    saveGameState();
    
    // Reset competition state
    setTimeout(() => {
        competitionState.isActive = false;
        document.getElementById('competition-interface').style.display = 'none';
        showSection('dashboard');
    }, 5000);
}

function showCompetitionResults() {
    const container = document.getElementById('competition-question');
    const playerWon = competitionState.playerScore > competitionState.opponentScore;
    const isDraw = competitionState.playerScore === competitionState.opponentScore;
    
    let resultHTML = `
        <div class="competition-results">
            <div class="result-header">
                <h3>${playerWon ? '🏆 Victory!' : isDraw ? '🤝 Draw!' : '😔 Defeat!'}</h3>
            </div>
            <div class="final-score">
                <div class="score-breakdown">
                    <div class="player-final">
                        <span>You: ${competitionState.playerScore}</span>
                    </div>
                    <div class="opponent-final">
                        <span>${competitionState.mode === 'bot' ? 'Bot' : 'Opponent'}: ${competitionState.opponentScore}</span>
                    </div>
                </div>
            </div>
            <div class="performance-stats">
                <h4>Your Performance:</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">Accuracy:</span>
                        <span class="stat-value">${Math.round((competitionState.playerScore / competitionState.totalRounds) * 100)}%</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Avg Time:</span>
                        <span class="stat-value">${calculateAverageTime()}s</span>
                    </div>
                </div>
            </div>
            ${playerWon ? '<div class="reward-info">🎁 Reward: +1 Heart!</div>' : ''}
        </div>
    `;
    
    container.innerHTML = resultHTML;
    
    // Hide submit button
    document.getElementById('competition-submit').style.display = 'none';
}

function calculateAverageTime() {
    if (competitionState.playerAnswers.length === 0) return 0;
    
    const totalTime = competitionState.playerAnswers.reduce((sum, answer) => sum + answer.timeUsed, 0);
    return Math.round(totalTime / competitionState.playerAnswers.length);
}

function exitCompetition() {
    if (confirm('Are you sure you want to exit the competition? Progress will be lost.')) {
        clearInterval(competitionState.timer);
        competitionState.isActive = false;
        document.getElementById('competition-interface').style.display = 'none';
        showSection('dashboard');
        showToast('Competition exited! 👋', 'warning');
    }
}

// Add competition menu to main interface
function showCompetitionMenu() {
    const competitionHTML = `
        <div class="section" id="competition-menu" style="display: none;">
            <div class="section-header">
                <h2>🎯 1v1 Competition</h2>
                <p>Challenge yourself against AI or other players!</p>
            </div>
            
            <div class="language-selection-competition" style="margin-bottom: 20px;">
                <h3>🌍 Select Your Language</h3>
                <div class="language-grid-competition">
                    <div class="language-card-small" onclick="selectCompetitionLanguage('spanish')">
                        <div class="flag">🇪🇸</div>
                        <span>Spanish</span>
                    </div>
                    <div class="language-card-small" onclick="selectCompetitionLanguage('french')">
                        <div class="flag">🇫🇷</div>
                        <span>French</span>
                    </div>
                    <div class="language-card-small" onclick="selectCompetitionLanguage('german')">
                        <div class="flag">🇩🇪</div>
                        <span>German</span>
                    </div>
                </div>
                <div class="selected-language-display" id="selected-language-display" style="display: none;">
                    <span>Selected: <strong id="selected-language-name">None</strong></span>
                </div>
            </div>
            
            <div class="competition-modes">
                <div class="competition-mode-card" onclick="startCompetition('bot')">
                    <div class="mode-icon">🤖</div>
                    <h3>vs Bot</h3>
                    <p>Challenge our AI opponent</p>
                    <div class="mode-difficulty">
                        <span>Difficulty: Medium</span>
                    </div>
                    <div class="mode-reward">
                        <span>🏆 Win = +1 Heart</span>
                    </div>
                </div>
                
                <div class="competition-mode-card disabled" onclick="showToast('Player vs Player coming soon! 🚀', 'warning')">
                    <div class="mode-icon">👥</div>
                    <h3>vs Player</h3>
                    <p>Challenge other learners</p>
                    <div class="mode-status">
                        <span>Coming Soon!</span>
                    </div>
                </div>
            </div>
            
            <div class="competition-info-grid">
                <div class="competition-rules">
                    <h3>📋 Rules</h3>
                    <ul>
                        <li>5 questions per competition</li>
                        <li>15 seconds per question</li>
                        <li>Win to earn +1 Heart</li>
                        <li>Questions from your selected language</li>
                    </ul>
                </div>
                
                <div class="competition-stats">
                    <h3>📊 Your Competition Stats</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">0</span>
                            <span class="stat-label">Wins</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">0</span>
                            <span class="stat-label">Losses</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">0%</span>
                            <span class="stat-label">Win Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add to main content if not exists
    const mainContent = document.querySelector('.main-content');
    if (!document.getElementById('competition-menu')) {
        mainContent.insertAdjacentHTML('beforeend', competitionHTML);
    }
    
    showSection('competition-menu');
}

// Add to global functions
window.startCompetition = startCompetition;
window.showCompetitionMenu = showCompetitionMenu;
window.selectCompetitionOption = selectCompetitionOption;
window.submitCompetitionAnswer = submitCompetitionAnswer;
window.exitCompetition = exitCompetition;



// Function to handle language selection in competition
function selectCompetitionLanguage(language) {
    // Force German language for competition
    if (language !== 'german') {
        showToast('Competition is only available in German! 🇩🇪', 'warning');
        return;
    }
    
    gameState.selectedLanguage = language;
    
    // Update display
    const display = document.getElementById('selected-language-display');
    const nameElement = document.getElementById('selected-language-name');
    
    if (display && nameElement) {
        display.style.display = 'block';
        nameElement.textContent = 'German';
    }
    
    // Visual feedback
    document.querySelectorAll('.language-card-small').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select German card
    const germanCard = document.querySelector('.language-card-small');
    if (germanCard) {
        germanCard.classList.add('selected');
    }
    
    showToast('🌍 German selected for competition!', 'success');
    showBotMessage('Excellent! Ready to compete in German? 🚀');
}

// Export the function to global scope
window.selectCompetitionLanguage = selectCompetitionLanguage;






