// LinguaQuest - Game Logic (FIXED VERSION)

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
                    correct: "HOLA",
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
        }
    ]
};

// Competition State - FIXED
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
    botDifficulty: 'medium'
};

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

// FIXED: Start competition function
function startCompetition(mode = 'bot') {
    if (!gameState.selectedLanguage) {
        showToast('Please select a language first! 🌍', 'warning');
        return;
    }

    console.log('Starting competition with mode:', mode, 'language:', gameState.selectedLanguage);

    // Reset competition state
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

// Rest of the functions remain the same...
function loadCompetitionQuestion(question) {
    const container = document.getElementById('competition-question');
    if (!container) {
        console.error('Competition question container not found!');
        return;
    }
    
    let html = `<div class="question-text">${question.question}`;
    if (question.audio && gameState.settings && gameState.settings.voice) {
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
        if (question.meaning) {
            html += `<div style="margin-top: 15px; color: #666;">Meaning: ${question.meaning}</div>`;
        }
        html += `</div>`;
    }
    
    container.innerHTML = html;
    
    // Show submit button
    const submitButton = document.getElementById('competition-submit');
    if (submitButton) {
        submitButton.style.display = 'inline-block';
    }
    
    // Update round display
    const currentRoundElement = document.getElementById('current-round');
    if (currentRoundElement) {
        currentRoundElement.textContent = competitionState.currentRound + 1;
    }
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

function selectCompetitionOption(index) {
    // Clear previous selections
    document.querySelectorAll('.competition-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select current option
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

function showRoundResult(isCorrect, playerAnswer, question) {
    const resultContainer = document.getElementById('round-result');
    if (!resultContainer) return;
    
    const resultHTML = `
        <div class="round-result ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="result-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="result-text">
                <div class="result-status">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
                <div class="result-answer">Your answer: ${playerAnswer}</div>
                ${!isCorrect ? `<div class="correct-answer">Correct answer: ${question.options ? question.options[question.correct] : question.correct}</div>` : ''}
            </div>
        </div>
    `;
    
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
    
    // Hide after delay
    setTimeout(() => {
        resultContainer.style.display = 'none';
    }, 1800);
}

function endCompetition() {
    console.log('Ending competition');
    
    competitionState.isActive = false;
    clearInterval(competitionState.timer);
    
    // Calculate results
    const playerWon = competitionState.playerScore > competitionState.opponentScore;
    const accuracy = Math.round((competitionState.playerScore / competitionState.totalRounds) * 100);
    
    // Show results
    showCompetitionResults(playerWon, accuracy);
    
    // Update game state if player won
    if (playerWon) {
        gameState.hearts = Math.min(gameState.hearts + 1, 5);
        gameState.competitionWins = (gameState.competitionWins || 0) + 1;
        showToast('🏆 Competition won! +1 Heart earned!', 'success');
    } else {
        gameState.competitionLosses = (gameState.competitionLosses || 0) + 1;
        showToast('😔 Better luck next time!', 'warning');
    }
    
    saveGameState();
}

function showCompetitionResults(playerWon, accuracy) {
    const resultsHTML = `
        <div class="competition-results">
            <div class="results-header">
                <h2>${playerWon ? '🏆 Victory!' : '😔 Defeat'}</h2>
                <div class="final-score">
                    <span class="player-final">You: ${competitionState.playerScore}</span>
                    <span class="vs">vs</span>
                    <span class="opponent-final">${competitionState.mode === 'bot' ? 'Bot' : 'Opponent'}: ${competitionState.opponentScore}</span>
                </div>
            </div>
            
            <div class="results-stats">
                <div class="stat-item">
                    <span class="stat-label">Accuracy</span>
                    <span class="stat-value">${accuracy}%</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Questions</span>
                    <span class="stat-value">${competitionState.totalRounds}</span>
                </div>
            </div>
            
            <div class="results-actions">
                <button class="btn btn-primary" onclick="showCompetitionMenu()">Play Again</button>
                <button class="btn btn-secondary" onclick="goHome()">Home</button>
            </div>
        </div>
    `;
    
    const competitionInterface = document.getElementById('competition-interface');
    if (competitionInterface) {
        competitionInterface.innerHTML = resultsHTML;
    }
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
                <div class="timer-bar">
                    <div class="timer-fill" id="timer-fill"></div>
                </div>
                <div class="timer-text">
                    <span id="timer-display">${competitionState.timeLimit}</span>s
                </div>
            </div>
            
            <div class="competition-question-container">
                <div id="competition-question"></div>
                <div id="round-result" style="display: none;"></div>
            </div>
            
            <div class="competition-actions">
                <button id="competition-submit" class="btn btn-primary" onclick="submitCompetitionAnswer()" style="display: none;">Submit Answer</button>
                <button class="btn btn-secondary" onclick="exitCompetition()">Exit Competition</button>
            </div>
            
            <div id="competition-status"></div>
        </div>
    `;
    
    // Add to main content if not exists
    const mainContent = document.querySelector('.main-content');
    if (!document.getElementById('competition-interface')) {
        mainContent.insertAdjacentHTML('beforeend', competitionHTML);
    } else {
        document.getElementById('competition-interface').outerHTML = competitionHTML;
    }
}

function exitCompetition() {
    competitionState.isActive = false;
    clearInterval(competitionState.timer);
    goHome();
}

function scheduleBotAnswer() {
    // Simulate bot thinking time
    const responseTime = Math.random() * 3000 + 2000; // 2-5 seconds
    
    setTimeout(() => {
        if (!competitionState.isActive) return;
        
        const question = competitionState.questions[competitionState.currentRound];
        const botCorrectRate = 0.7; // Bot gets 70% correct
        const isCorrect = Math.random() < botCorrectRate;
        
        // Record bot answer
        competitionState.opponentAnswers.push({
            question: question.question,
            correct: isCorrect,
            timeUsed: responseTime / 1000
        });
        
        // Update bot score
        if (isCorrect) {
            competitionState.opponentScore++;
            const opponentScoreElement = document.getElementById('opponent-score');
            if (opponentScoreElement) {
                opponentScoreElement.textContent = competitionState.opponentScore;
            }
        }
        
        // Show bot status
        const status = document.getElementById('competition-status');
        if (status) {
            status.innerHTML = `<div class="bot-status ${isCorrect ? 'correct' : 'incorrect'}">
                🤖 Bot answered ${isCorrect ? 'correctly' : 'incorrectly'}!
            </div>`;
            
            setTimeout(() => {
                status.innerHTML = '';
            }, 1500);
        }
    }, responseTime);
}

// Export functions to global scope
window.startCompetition = startCompetition;
window.submitCompetitionAnswer = submitCompetitionAnswer;
window.selectCompetitionOption = selectCompetitionOption;
window.exitCompetition = exitCompetition;

console.log('Fixed gameLogic.js loaded successfully!');

