// LinguaQuest - Main Application

// Initialize app when page loads
function init() {
    console.log('🚀 LinguaQuest initializing...');
    
    // Load saved game state
    loadGameState();
    
    // Update all stats displays
    updateAllStats();
    
    // Show dashboard by default
    showSection('dashboard');
    
    // Show welcome message
    showBotMessage(getRandomBotMessage('welcome'));
    
    // Initialize sections
    populateAchievements();
    populateVocabulary();
    populateLeaderboard();
    generateCalendar();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check daily challenge
    checkDailyChallenge();
    
    // Auto-save every 30 seconds
    setInterval(saveGameState, 30000);
    
    console.log('✅ LinguaQuest initialized successfully!');
}

// Set up all event listeners
function setupEventListeners() {
    // Keyboard support
    document.addEventListener('keydown', handleKeyPress);
    
    // Window events
    window.addEventListener('beforeunload', saveGameState);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Navigation events
    setupNavigationEvents();
    
    // Form events
    setupFormEvents();
    
    // Touch events for mobile
    setupTouchEvents();
}

// Handle keyboard shortcuts
function handleKeyPress(e) {
    // Enter key for checking answers or advancing
    if (e.key === 'Enter') {
        const checkBtn = document.getElementById('check-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (checkBtn && checkBtn.style.display !== 'none') {
            checkAnswer();
        } else if (nextBtn && nextBtn.style.display !== 'none') {
            nextQuestion();
        }
    }
    
    // Space bar for audio
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const audioBtn = document.querySelector('.audio-btn');
        if (audioBtn) {
            audioBtn.click();
        }
    }
    
    // H key for hint
    if (e.key === 'h' || e.key === 'H') {
        const hintBtn = document.querySelector('.hint-btn');
        if (hintBtn && hintBtn.style.display !== 'none') {
            hintBtn.click();
        }
    }
    
    // Escape key to go home
    if (e.key === 'Escape') {
        goHome();
    }
    
    // Number keys for multiple choice
    if (e.key >= '1' && e.key <= '9') {
        const optionIndex = parseInt(e.key) - 1;
        const option = document.querySelector(`[data-index="${optionIndex}"]`);
        if (option) {
            selectOption(optionIndex);
        }
    }
}

// Setup navigation events
function setupNavigationEvents() {
    // Navigation menu clicks
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.toLowerCase();
            if (text.includes('dashboard')) showSection('dashboard');
            else if (text.includes('languages')) showSection('languages');
            else if (text.includes('achievements')) showSection('achievements');
            else if (text.includes('vocabulary')) showSection('vocabulary');
            else if (text.includes('leaderboard')) showSection('leaderboard');
            else if (text.includes('settings')) showSection('settings');
        });
    });
    
    // Language card clicks
    document.querySelectorAll('.language-card').forEach(card => {
        card.addEventListener('click', function() {
            const language = this.onclick.toString().match(/selectLanguage\('(\w+)'\)/);
            if (language) {
                selectLanguage(language[1]);
            }
        });
    });
}

// Setup form events
function setupFormEvents() {
    // Vocabulary search
    const vocabSearch = document.getElementById('vocab-search');
    if (vocabSearch) {
        vocabSearch.addEventListener('input', function() {
            filterVocabulary(this.value);
        });
    }
    
    // Settings toggles
    document.querySelectorAll('.toggle-switch').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const settingName = this.onclick.toString().match(/toggleSetting\('([^']+)'\)/);
            if (settingName) {
                toggleSetting(settingName[1]);
            }
        });
    });
}

// Setup touch events for mobile
function setupTouchEvents() {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could trigger some action
                console.log('Swipe up detected');
            } else {
                // Swipe down - could trigger some action
                console.log('Swipe down detected');
            }
        }
    }
}

// Handle visibility change (tab switching)
function handleVisibilityChange() {
    if (document.hidden) {
        // User switched tabs - save progress
        saveGameState();
    } else {
        // User returned - show motivational message
        if (gameState.selectedLanguage) {
            showBotMessage("Welcome back! Let's continue learning! 🚀");
        }
    }
}

// Daily Challenge System
const dailyChallenges = [
    { text: 'Complete 5 lessons in any language', xp: 50, type: 'lessons', target: 5 },
    { text: 'Achieve a 7-day learning streak', xp: 100, type: 'streak', target: 7 },
    { text: 'Learn 10 new vocabulary words', xp: 75, type: 'vocab', target: 10 },
    { text: 'Complete a lesson with 100% accuracy', xp: 60, type: 'perfect', target: 1 },
    { text: 'Practice for 30 minutes straight', xp: 80, type: 'time', target: 30 }
];

function checkDailyChallenge() {
    const today = new Date().toDateString();
    if (!gameState.lastChallengeDate || gameState.lastChallengeDate !== today) {
        // Generate new daily challenge
        const challenge = dailyChallenges[Math.floor(Math.random() * dailyChallenges.length)];
        gameState.dailyChallenge = challenge;
        gameState.lastChallengeDate = today;
        gameState.challengeProgress = 0;
        
        const challengeText = document.getElementById('daily-challenge-text');
        if (challengeText) {
            challengeText.textContent = challenge.text;
        }
        
        saveGameState();
    }
}

function startDailyChallenge() {
    showToast('Daily challenge accepted! Good luck! 🎯');
    showSection('languages');
}

// Progress tracking
function updateProgressSection() {
    generateCalendar();
    updateAllStats();
}

// Motivational messages system
function startMotivationalMessages() {
    setInterval(() => {
        if (gameState.selectedLanguage && Math.random() > 0.8) {
            const motivationalMessages = [
                "Keep going! You're doing great! 💪",
                "Learning never stops! 📚",
                "Every word learned is progress! 🌟",
                "You're building amazing skills! 🚀",
                "Consistency is key! 🔑",
                "Your brain is growing! 🧠"
            ];
            
            const botSpeech = document.getElementById('bot-speech');
            if (botSpeech && !botSpeech.classList.contains('show')) {
                showBotMessage(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);
            }
        }
    }, 45000); // Every 45 seconds
}

// Performance monitoring
function trackPerformance() {
    // Track lesson completion time
    if (gameState.startTime && gameState.selectedLanguage) {
        const sessionTime = Date.now() - gameState.startTime;
        
        // Check for speed achievements
        if (sessionTime < 120000 && gameState.correctAnswers >= 10) { // 2 minutes
            checkAchievement('speed-demon');
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('LinguaQuest Error:', e.error);
    showToast('Oops! Something went wrong. Please refresh the page. 🔄', 'error');
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    showToast('Connection issue detected. Please check your internet. 🌐', 'warning');
});

// Service Worker registration (for offline support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Utility functions for main app
function showUserProfile() {
    showToast('Profile customization coming soon! 👤', 'warning');
}

function exportVocabulary() {
    const data = JSON.stringify(gameState.vocabulary, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linguaquest-vocabulary.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Vocabulary exported successfully! 📤');
}

function practiceVocabulary() {
    if (gameState.vocabulary.length === 0) {
        showToast('Learn some words first! 📚', 'warning');
        return;
    }
    
    // Start a vocabulary practice session
    showToast('Vocabulary practice coming soon! 🎯', 'warning');
}

// Analytics and tracking (privacy-friendly)
function trackEvent(eventName, properties = {}) {
    // Simple local analytics - no external tracking
    const event = {
        name: eventName,
        properties,
        timestamp: new Date().toISOString(),
        session: gameState.startTime
    };
    
    // Store in local storage for debugging
    const events = JSON.parse(localStorage.getItem('linguaquest-events') || '[]');
    events.push(event);
    
    // Keep only last 100 events
    if (events.length > 100) {
        events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('linguaquest-events', JSON.stringify(events));
}

// App lifecycle management
function pauseApp() {
    // Pause timers, save state
    saveGameState();
    trackEvent('app_paused');
}

function resumeApp() {
    // Resume timers, update displays
    updateAllStats();
    trackEvent('app_resumed');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    init();
    initializeEnhancedUI();
    startMotivationalMessages();
});

// Initialize when window loads (fallback)
window.addEventListener('load', function() {
    if (!document.querySelector('.main-content')) {
        setTimeout(() => {
            init();
            initializeEnhancedUI();
        }, 100);
    }
});

// Expose global functions for HTML onclick handlers
window.selectLanguage = selectLanguage;
window.showSection = showSection;
window.selectOption = selectOption;
window.showHint = showHint;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
window.showGameModes = showGameModes;
window.startGameMode = startGameMode;
window.goHome = goHome;
window.toggleBot = toggleBot;
window.showUserProfile = showUserProfile;
window.toggleSetting = toggleSetting;
window.exportProgress = exportProgress;
window.resetProgress = resetProgress;
window.startDailyChallenge = startDailyChallenge;
window.exportVocabulary = exportVocabulary;
window.practiceVocabulary = practiceVocabulary;
window.filterVocabulary = filterVocabulary;
window.playAudio = playAudio;

console.log('🎮 LinguaQuest loaded and ready!');

