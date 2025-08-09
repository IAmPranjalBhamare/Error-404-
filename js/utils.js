// LinguaQuest - Utility Functions

// Game State Management
let gameState = {
    selectedLanguage: '',
    currentLesson: 0,
    currentQuestion: 0,
    currentGameMode: 'normal',
    xp: 0,
    level: 1,
    hearts: 5, // Updated to start with 5 hearts
    maxHearts: 5, // Maximum hearts allowed
    streak: 0,
    longestStreak: 0,
    currentStreak: 0, // Track current consecutive correct answers
    totalWords: 0,
    startTime: null,
    correctAnswers: 0,
    totalQuestions: 0,
    lessonsCompleted: 0,
    accuracyRate: 0,
    todayXP: 0,
    activeLanguages: 0,
    lastStudyDate: null,
    studyDates: [],
    hintsUsed: 0,
    settings: {
        soundEffects: true,
        voice: true,
        reminders: true,
        achievements: true,
        hardMode: false,
        autoSave: true
    },
    achievements: [],
    vocabulary: [],
    userProfile: {
        name: 'Language Learner',
        avatar: '👤',
        level: 1,
        title: 'Beginner Explorer'
    }
};

// Data Storage
function saveGameState() {
    try {
        localStorage.setItem('linguaquest-data', JSON.stringify(gameState));
    } catch (error) {
        console.error('Failed to save game state:', error);
    }
}

function loadGameState() {
    try {
        const saved = localStorage.getItem('linguaquest-data');
        if (saved) {
            const parsedState = JSON.parse(saved);
            gameState = { ...gameState, ...parsedState };
        }
    } catch (error) {
        console.error('Failed to load game state:', error);
    }
}

// Level System
function calculateLevel(xp) {
    return Math.floor(xp / 100) + 1;
}

function getXPForNextLevel(level) {
    return level * 100;
}

function checkLevelUp() {
    const newLevel = calculateLevel(gameState.xp);
    if (newLevel > gameState.level) {
        const oldLevel = gameState.level;
        gameState.level = newLevel;
        
        // Show level up notification
        showToast(`🎉 Level Up! You're now level ${newLevel}!`, 'success', 4000);
        
        // Update profile title
        updateProfileTitle();
        
        // Award bonus XP
        gameState.xp += 50;
        
        // Check for level-based achievements
        checkAchievement('level-5');
        checkAchievement('level-10');
        
        playSoundEffect('levelup');
        showBotMessage(getRandomBotMessage('levelUp'));
        updateAllStats();
        saveGameState();
    }
}

function updateProfileTitle() {
    const level = gameState.level;
    let title = 'Beginner Explorer';
    
    if (level >= 20) title = 'Polyglot Master';
    else if (level >= 15) title = 'Language Expert';
    else if (level >= 10) title = 'Advanced Scholar';
    else if (level >= 7) title = 'Intermediate Learner';
    else if (level >= 5) title = 'Rising Star';
    else if (level >= 3) title = 'Dedicated Student';
    
    gameState.userProfile.title = title;
    document.getElementById('profile-level').textContent = title;
}

// Toast Notifications
function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => container.removeChild(toast), 300);
    }, duration);
}

// Sound Effects
function playSoundEffect(type) {
    if (!gameState.settings.soundEffects) return;
    
    // Use German audio files for competition feedback
    if (type === 'correct' || type === 'incorrect') {
        try {
            const audio = new Audio(`audio/${type}_answer.wav`);
            audio.volume = 0.7;
            audio.play().catch(e => console.log('Audio play failed:', e));
            return;
        } catch (e) {
            console.log('Failed to play audio file, falling back to beep:', e);
        }
    }
    
    // Create audio context for other sound effects
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        let frequency = 440;
        let duration = 0.2;
        
        switch(type) {
            case 'correct':
                frequency = 523.25; // C5
                break;
            case 'incorrect':
                frequency = 220; // A3
                duration = 0.5;
                break;
            case 'levelup':
                frequency = 659.25; // E5
                duration = 0.8;
                break;
            case 'achievement':
                frequency = 783.99; // G5
                duration = 1.0;
                break;
            case 'streak':
                frequency = 880; // A5
                duration = 0.3;
                break;
        }
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
        console.log('Audio not supported');
    }
}

// Text-to-Speech
function playAudio(text) {
    if (!gameState.settings.voice || !('speechSynthesis' in window)) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on selected language
    if (gameState.selectedLanguage === 'spanish') {
        utterance.lang = 'es-ES';
    } else if (gameState.selectedLanguage === 'french') {
        utterance.lang = 'fr-FR';
    } else if (gameState.selectedLanguage === 'german') {
        utterance.lang = 'de-DE';
    } else if (gameState.selectedLanguage === 'italian') {
        utterance.lang = 'it-IT';
    } else if (gameState.selectedLanguage === 'portuguese') {
        utterance.lang = 'pt-PT';
    } else if (gameState.selectedLanguage === 'japanese') {
        utterance.lang = 'ja-JP';
    }
    
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Special handling for competition section
    if (sectionId === 'competition') {
        // Ensure competition menu is created and shown
        if (!document.getElementById('competition-menu')) {
            showCompetitionMenu();
        }
        const competitionMenu = document.getElementById('competition-menu');
        if (competitionMenu) {
            competitionMenu.style.display = 'block';
        }
    }
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate corresponding nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(sectionId) || 
            (sectionId === 'dashboard' && item.textContent.toLowerCase().includes('dashboard'))) {
            item.classList.add('active');
        }
    });
    
    // Update content based on section
    switch(sectionId) {
        case 'dashboard':
            updateAllStats();
            break;
        case 'achievements':
            populateAchievements();
            break;
        case 'vocabulary':
            populateVocabulary();
            break;
        case 'leaderboard':
            populateLeaderboard();
            break;
        case 'progress':
            updateProgressSection();
            break;
    }
}

// Update all stats displays
function updateAllStats() {
    // Main stats
    const xpDisplay = document.getElementById('xp-display');
    const streakDisplay = document.getElementById('streak-display');
    const heartsDisplay = document.getElementById('hearts-display');
    const levelDisplay = document.getElementById('level-display');
    
    if (xpDisplay) xpDisplay.textContent = gameState.xp;
    if (streakDisplay) streakDisplay.textContent = gameState.streak;
    if (levelDisplay) levelDisplay.textContent = gameState.level;
    
    // Hearts display
    if (heartsDisplay) {
        let hearts = '';
        for (let i = 0; i < 3; i++) {
            hearts += i < gameState.hearts ? '❤️' : '💔';
        }
        heartsDisplay.textContent = hearts;
    }
    
    // Dashboard stats
    const todayXP = document.getElementById('today-xp');
    const currentStreak = document.getElementById('current-streak');
    const activeLanguages = document.getElementById('active-languages');
    const achievementsCount = document.getElementById('achievements-count');
    
    if (todayXP) todayXP.textContent = gameState.todayXP + ' XP';
    if (currentStreak) currentStreak.textContent = gameState.streak + ' days';
    if (activeLanguages) activeLanguages.textContent = gameState.activeLanguages;
    if (achievementsCount) {
        const unlockedCount = gameState.achievements.length;
        const totalCount = achievements.length;
        achievementsCount.textContent = `${unlockedCount}/${totalCount}`;
    }
    
    // Profile
    const profileName = document.getElementById('profile-name');
    const profileLevel = document.getElementById('profile-level');
    const profileAvatar = document.getElementById('profile-avatar');
    
    if (profileName) profileName.textContent = gameState.userProfile.name;
    if (profileLevel) profileLevel.textContent = gameState.userProfile.title;
    if (profileAvatar) profileAvatar.textContent = gameState.userProfile.avatar;
}

// Calendar System
function generateCalendar() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    grid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = '10px 5px';
        header.textContent = day;
        grid.appendChild(header);
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        const empty = document.createElement('div');
        grid.appendChild(empty);
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        const dayDate = new Date(currentYear, currentMonth, day).toDateString();
        
        // Check if this day has study activity
        if (gameState.studyDates.includes(dayDate)) {
            dayElement.classList.add('active');
        }
        
        // Mark today
        if (day === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear()) {
            dayElement.classList.add('today');
        }
        
        grid.appendChild(dayElement);
    }
}

function markStudyDay() {
    const today = new Date().toDateString();
    if (!gameState.studyDates.includes(today)) {
        gameState.studyDates.push(today);
        generateCalendar(); // Refresh calendar
    }
}

// Settings System
function toggleSetting(settingName) {
    const toggle = event.target.closest('.toggle-switch');
    if (!toggle) return;
    
    const isActive = toggle.classList.contains('active');
    
    if (isActive) {
        toggle.classList.remove('active');
        gameState.settings[settingName.replace('-', '')] = false;
    } else {
        toggle.classList.add('active');
        gameState.settings[settingName.replace('-', '')] = true;
    }
    
    saveGameState();
    showToast(`Setting ${isActive ? 'disabled' : 'enabled'}! ⚙️`);
}

function exportProgress() {
    const data = {
        gameState,
        vocabulary: gameState.vocabulary,
        achievements: gameState.achievements,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linguaquest-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Progress exported successfully! 📤');
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
        localStorage.removeItem('linguaquest-data');
        location.reload();
    }
}

// Utility Functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${seconds % 60}s`;
    } else {
        return `${seconds}s`;
    }
}


// Enhanced Heart Management System
function loseHeart() {
    if (gameState.hearts > 0) {
        gameState.hearts--;
        
        // Visual and audio feedback
        playEnhancedSoundEffect('heart-lost');
        createScreenFlash('#ff6b6b', 300);
        
        // Animate heart loss
        const heartElements = document.querySelectorAll('.heart');
        if (heartElements[gameState.hearts]) {
            heartElements[gameState.hearts].style.animation = 'heartBreak 0.5s ease-out';
            setTimeout(() => {
                heartElements[gameState.hearts].style.opacity = '0.3';
            }, 500);
        }
        
        // Show toast notification
        showToast(`💔 Heart lost! ${gameState.hearts} remaining`, 'error');
        
        // Check if out of hearts
        if (gameState.hearts === 0) {
            handleOutOfHearts();
        }
        
        updateAllStats();
        saveGameState();
    }
}

function gainHeart() {
    if (gameState.hearts < gameState.maxHearts) {
        gameState.hearts++;
        
        // Visual and audio feedback
        playEnhancedSoundEffect('heart-gained');
        createSpecialConfetti('heart');
        
        // Animate heart gain
        const heartElements = document.querySelectorAll('.heart');
        if (heartElements[gameState.hearts - 1]) {
            heartElements[gameState.hearts - 1].style.opacity = '1';
            heartElements[gameState.hearts - 1].style.animation = 'heartGain 0.8s ease-out';
        }
        
        showToast(`💖 Heart gained! ${gameState.hearts}/${gameState.maxHearts}`, 'success');
        
        updateAllStats();
        saveGameState();
    }
}

function handleOutOfHearts() {
    // Show out of hearts modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content out-of-hearts-modal">
            <div class="modal-header">
                <h2>💔 Out of Hearts!</h2>
            </div>
            <div class="modal-body">
                <p>You've run out of hearts! Here's how to get more:</p>
                <div class="heart-options">
                    <div class="heart-option" onclick="showCompetitionMenu(); closeModal();">
                        <div class="option-icon">🎯</div>
                        <h3>Win Competitions</h3>
                        <p>Beat opponents to earn hearts</p>
                    </div>
                    <div class="heart-option" onclick="waitForHearts();">
                        <div class="option-icon">⏰</div>
                        <h3>Wait 30 Minutes</h3>
                        <p>Hearts regenerate over time</p>
                    </div>
                    <div class="heart-option" onclick="practiceMode();">
                        <div class="option-icon">📚</div>
                        <h3>Practice Mode</h3>
                        <p>Continue learning without hearts</p>
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Prevent further gameplay
    gameState.canPlay = false;
}

function waitForHearts() {
    const waitTime = 30 * 60 * 1000; // 30 minutes in milliseconds
    const regenerateTime = Date.now() + waitTime;
    
    localStorage.setItem('linguaquest-heart-regen', regenerateTime.toString());
    
    showToast('Hearts will regenerate in 30 minutes! ⏰', 'warning', 5000);
    closeModal();
    
    // Start countdown timer
    startHeartRegenTimer(waitTime);
}

function startHeartRegenTimer(timeRemaining) {
    const timer = setInterval(() => {
        timeRemaining -= 1000;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            gameState.hearts = gameState.maxHearts;
            gameState.canPlay = true;
            updateAllStats();
            saveGameState();
            showToast('💖 Hearts regenerated! Welcome back!', 'success');
            localStorage.removeItem('linguaquest-heart-regen');
        } else {
            // Update UI with remaining time
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
            const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            const timerElement = document.getElementById('heart-regen-timer');
            if (timerElement) {
                timerElement.textContent = `Hearts in: ${timeDisplay}`;
            }
        }
    }, 1000);
}

function practiceMode() {
    gameState.practiceMode = true;
    gameState.canPlay = true;
    closeModal();
    showToast('📚 Practice mode activated! No hearts required', 'info');
}

// Enhanced Streak Management
function handleCorrectAnswer() {
    gameState.currentStreak++;
    gameState.correctAnswers++;
    
    // Check for special streak milestones
    if (gameState.currentStreak === 5) {
        // Lightning effect for 5-in-a-row
        createStreakLightning();
        playEnhancedSoundEffect('streak-lightning');
        createSpecialConfetti('streak');
        showToast('⚡ LIGHTNING STREAK! 5 in a row!', 'success', 4000);
        
        // Bonus XP for lightning streak
        gameState.xp += 25;
        gameState.todayXP += 25;
    } else if (gameState.currentStreak > 5 && gameState.currentStreak % 5 === 0) {
        // Continue lightning effects for every 5 streak
        createStreakLightning();
        playEnhancedSoundEffect('streak-lightning');
        showToast(`⚡ ${gameState.currentStreak} STREAK! Unstoppable!`, 'success', 3000);
        
        // Increasing bonus XP
        const bonusXP = Math.floor(gameState.currentStreak / 5) * 10;
        gameState.xp += bonusXP;
        gameState.todayXP += bonusXP;
    } else if (gameState.currentStreak >= 3) {
        // Regular streak effects
        createComboEffect(gameState.currentStreak);
        playEnhancedSoundEffect('streak-5', gameState.currentStreak);
        showToast(`🔥 ${gameState.currentStreak} streak!`, 'success');
    }
    
    // Update longest streak
    if (gameState.currentStreak > gameState.longestStreak) {
        gameState.longestStreak = gameState.currentStreak;
    }
    
    // Regular XP gain
    gameState.xp += 10;
    gameState.todayXP += 10;
    
    updateAllStats();
}

function handleIncorrectAnswer() {
    // Reset current streak
    gameState.currentStreak = 0;
    
    // Lose heart if not in practice mode
    if (!gameState.practiceMode) {
        loseHeart();
    }
    
    // Show encouraging message
    const encouragingMessages = [
        "Don't give up! Every mistake is a learning opportunity! 💪",
        "Close! You're getting better with each try! 🎯",
        "Learning is a journey, keep going! 🚀",
        "Every expert was once a beginner! 📚"
    ];
    
    const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    showBotMessage(randomMessage);
}

// Heart Display Update
function updateHeartsDisplay() {
    const heartsContainer = document.getElementById('hearts-display');
    if (!heartsContainer) return;
    
    let heartsHTML = '';
    for (let i = 0; i < gameState.maxHearts; i++) {
        const isActive = i < gameState.hearts;
        const heartClass = isActive ? 'heart active' : 'heart inactive';
        heartsHTML += `<span class="${heartClass}" data-heart="${i}">❤️</span>`;
    }
    
    heartsContainer.innerHTML = heartsHTML;
    
    // Add heart regeneration timer if applicable
    const regenTime = localStorage.getItem('linguaquest-heart-regen');
    if (regenTime && gameState.hearts === 0) {
        const timeRemaining = parseInt(regenTime) - Date.now();
        if (timeRemaining > 0) {
            startHeartRegenTimer(timeRemaining);
        } else {
            // Hearts should have regenerated
            gameState.hearts = gameState.maxHearts;
            gameState.canPlay = true;
            localStorage.removeItem('linguaquest-heart-regen');
        }
    }
}

// Heart Display Update (alias for compatibility)
function updateHeartDisplay() {
    updateHeartsDisplay();
}

// Modal Management
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Check if player can play (has hearts or in practice mode)
function canPlay() {
    return gameState.hearts > 0 || gameState.practiceMode;
}

// Initialize heart system on page load
function initializeHeartSystem() {
    // Check for heart regeneration
    const regenTime = localStorage.getItem('linguaquest-heart-regen');
    if (regenTime) {
        const timeRemaining = parseInt(regenTime) - Date.now();
        if (timeRemaining > 0 && gameState.hearts === 0) {
            startHeartRegenTimer(timeRemaining);
            gameState.canPlay = false;
        } else if (timeRemaining <= 0) {
            gameState.hearts = gameState.maxHearts;
            gameState.canPlay = true;
            localStorage.removeItem('linguaquest-heart-regen');
        }
    }
    
    // Ensure canPlay is set
    if (gameState.canPlay === undefined) {
        gameState.canPlay = gameState.hearts > 0;
    }
    
    updateHeartDisplay();
}

// Export functions for global use
window.loseHeart = loseHeart;
window.gainHeart = gainHeart;
window.handleCorrectAnswer = handleCorrectAnswer;
window.handleIncorrectAnswer = handleIncorrectAnswer;
window.updateHeartDisplay = updateHeartDisplay;
window.closeModal = closeModal;
window.canPlay = canPlay;
window.initializeHeartSystem = initializeHeartSystem;
window.waitForHearts = waitForHearts;
window.practiceMode = practiceMode;


// Enhanced UI Update Functions
function updateAllStatsEnhanced() {
    // Update basic stats
    updateAllStats();
    
    // Update heart display
    updateHeartDisplay();
    
    // Update practice mode indicator
    const practiceModeElement = document.getElementById('practice-mode-stat');
    if (practiceModeElement) {
        practiceModeElement.style.display = gameState.practiceMode ? 'block' : 'none';
    }
    
    // Update streak display with enhanced styling
    const streakElement = document.getElementById('streak-display');
    if (streakElement && gameState.currentStreak >= 5) {
        streakElement.parentElement.classList.add('lightning-streak');
    } else if (streakElement) {
        streakElement.parentElement.classList.remove('lightning-streak');
    }
    
    // Update dashboard cards with enhanced information
    updateDashboardEnhanced();
}

function updateDashboardEnhanced() {
    // Update today's progress with more details
    const todayXPElement = document.getElementById('today-xp');
    if (todayXPElement) {
        let progressText = `${gameState.todayXP} XP`;
        if (gameState.currentStreak >= 5) {
            progressText += ` ⚡ ${gameState.currentStreak} streak!`;
        }
        todayXPElement.textContent = progressText;
    }
    
    // Update current streak with visual indicators
    const currentStreakElement = document.getElementById('current-streak');
    if (currentStreakElement) {
        let streakText = `${gameState.streak} days`;
        if (gameState.currentStreak >= 5) {
            streakText += ` 🔥`;
        }
        currentStreakElement.textContent = streakText;
    }
    
    // Update achievements count
    const achievementsElement = document.getElementById('achievements-count');
    if (achievementsElement) {
        const unlockedCount = gameState.achievements.filter(a => a.unlocked).length;
        achievementsElement.textContent = `${unlockedCount}/${achievements.length}`;
    }
}

// Enhanced notification system
function showEnhancedToast(message, type = 'info', duration = 3000, options = {}) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} enhanced-toast`;
    
    // Add icon based on type
    let icon = '';
    switch(type) {
        case 'success': icon = '✅'; break;
        case 'error': icon = '❌'; break;
        case 'warning': icon = '⚠️'; break;
        case 'info': icon = 'ℹ️'; break;
        case 'streak': icon = '🔥'; break;
        case 'lightning': icon = '⚡'; break;
        case 'heart': icon = '💖'; break;
        default: icon = 'ℹ️';
    }
    
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        </div>
        ${options.showProgress ? '<div class="toast-progress"></div>' : ''}
    `;
    
    // Position toast
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '10001';
    toast.style.maxWidth = '400px';
    toast.style.animation = 'toastSlideIn 0.3s ease-out';
    
    document.body.appendChild(toast);
    
    // Auto remove
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, duration);
    
    // Add click to dismiss
    toast.addEventListener('click', () => {
        toast.style.animation = 'toastSlideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    });
}

// Enhanced bot message system
function showEnhancedBotMessage(message, emotion = 'neutral') {
    const botSpeech = document.getElementById('bot-speech');
    const botAvatar = document.getElementById('bot-avatar');
    
    if (!botSpeech || !botAvatar) return;
    
    // Update bot avatar based on emotion
    const emotions = {
        happy: '😊',
        excited: '🤩',
        encouraging: '💪',
        celebrating: '🎉',
        thinking: '🤔',
        neutral: '🤖'
    };
    
    botAvatar.textContent = emotions[emotion] || emotions.neutral;
    
    // Add typing animation
    botSpeech.innerHTML = '<div class="typing-indicator">...</div>';
    botSpeech.classList.add('show');
    
    // Show actual message after typing delay
    setTimeout(() => {
        botSpeech.innerHTML = message;
        
        // Auto-hide after delay
        setTimeout(() => {
            botSpeech.classList.remove('show');
        }, 4000);
    }, 1000);
}

// Game mode selector enhancement
function showEnhancedGameModes() {
    const gameModeSelector = document.getElementById('game-mode-selector');
    if (!gameModeSelector) return;
    
    gameModeSelector.innerHTML = `
        <div class="game-modes-header">
            <h3>🎮 Choose Your Challenge</h3>
            <p>Select how you want to learn today!</p>
        </div>
        <div class="game-modes-grid">
            <div class="game-mode-card" onclick="startGameMode('normal')">
                <div class="mode-icon">📚</div>
                <h4>Normal Mode</h4>
                <p>Standard learning experience</p>
                <div class="mode-features">
                    <span>✓ Hearts system</span>
                    <span>✓ XP rewards</span>
                </div>
            </div>
            <div class="game-mode-card" onclick="startGameMode('speed')">
                <div class="mode-icon">⚡</div>
                <h4>Speed Round</h4>
                <p>Quick-fire questions</p>
                <div class="mode-features">
                    <span>✓ Time pressure</span>
                    <span>✓ Bonus XP</span>
                </div>
            </div>
            <div class="game-mode-card" onclick="startGameMode('practice')">
                <div class="mode-icon">🎯</div>
                <h4>Practice Mode</h4>
                <p>No hearts required</p>
                <div class="mode-features">
                    <span>✓ Unlimited tries</span>
                    <span>✓ Focus on learning</span>
                </div>
            </div>
            <div class="game-mode-card competition-mode" onclick="showCompetitionMenu()">
                <div class="mode-icon">🏆</div>
                <h4>Competition</h4>
                <p>Challenge others</p>
                <div class="mode-features">
                    <span>✓ Win hearts</span>
                    <span>✓ Leaderboard</span>
                </div>
            </div>
        </div>
    `;
    
    gameModeSelector.style.display = 'block';
}

// Progress visualization
function createProgressVisualization() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-visualization';
    
    // XP Progress Bar
    const xpProgress = document.createElement('div');
    xpProgress.className = 'xp-progress';
    xpProgress.innerHTML = `
        <div class="progress-label">Level ${gameState.level} Progress</div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${(gameState.xp % 100)}%"></div>
        </div>
        <div class="progress-text">${gameState.xp % 100}/100 XP</div>
    `;
    
    // Streak Visualization
    const streakViz = document.createElement('div');
    streakViz.className = 'streak-visualization';
    let streakIcons = '';
    for (let i = 0; i < Math.min(gameState.currentStreak, 10); i++) {
        streakIcons += i >= 5 ? '⚡' : '🔥';
    }
    streakViz.innerHTML = `
        <div class="progress-label">Current Streak</div>
        <div class="streak-icons">${streakIcons}</div>
        <div class="progress-text">${gameState.currentStreak} correct in a row</div>
    `;
    
    progressContainer.appendChild(xpProgress);
    progressContainer.appendChild(streakViz);
    
    return progressContainer;
}

// Initialize enhanced UI
function initializeEnhancedUI() {
    // Initialize heart system
    initializeHeartSystem();
    
    // Add enhanced CSS classes
    document.body.classList.add('enhanced-ui');
    
    // Update all stats with enhanced version
    updateAllStatsEnhanced();
    
    // Add keyboard shortcuts info
    const shortcutsInfo = document.createElement('div');
    shortcutsInfo.className = 'shortcuts-info';
    shortcutsInfo.innerHTML = `
        <div class="shortcuts-toggle" onclick="toggleShortcuts()">⌨️</div>
        <div class="shortcuts-panel" id="shortcuts-panel" style="display: none;">
            <h4>Keyboard Shortcuts</h4>
            <div class="shortcut"><kbd>Enter</kbd> - Check answer / Next question</div>
            <div class="shortcut"><kbd>Space</kbd> - Play audio</div>
            <div class="shortcut"><kbd>H</kbd> - Show hint</div>
            <div class="shortcut"><kbd>Esc</kbd> - Go home</div>
            <div class="shortcut"><kbd>1-9</kbd> - Select option</div>
        </div>
    `;
    
    document.body.appendChild(shortcutsInfo);
}

function toggleShortcuts() {
    const panel = document.getElementById('shortcuts-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

// Export enhanced functions
window.updateAllStatsEnhanced = updateAllStatsEnhanced;
window.showEnhancedToast = showEnhancedToast;
window.showEnhancedBotMessage = showEnhancedBotMessage;
window.showEnhancedGameModes = showEnhancedGameModes;
window.initializeEnhancedUI = initializeEnhancedUI;
window.toggleShortcuts = toggleShortcuts;

