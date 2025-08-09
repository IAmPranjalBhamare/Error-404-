// Celebration and Firecracker Animation System

// Celebration Modal Functions
function showCelebration(lessonData = {}) {
    const modal = document.getElementById('celebration-modal');
    const message = document.getElementById('celebration-message');
    const scoreElement = document.getElementById('lesson-score');
    const xpElement = document.getElementById('xp-earned');
    const streakElement = document.getElementById('streak-count');
    
    // Update celebration content
    const accuracy = lessonData.accuracy || Math.floor(Math.random() * 20) + 80; // 80-100%
    const xpEarned = lessonData.xp || Math.floor(Math.random() * 30) + 20; // 20-50 XP
    const currentStreak = lessonData.streak || gameState.currentStreak || Math.floor(Math.random() * 10) + 1;
    
    message.textContent = lessonData.message || "Excellent work! You've mastered this lesson!";
    scoreElement.textContent = `${accuracy}%`;
    xpElement.textContent = `+${xpEarned}`;
    streakElement.textContent = currentStreak;
    
    // Show modal
    modal.classList.add('active');
    
    // Play congratulations sound
    playCelebrationSound();
    
    // Start firecracker animations
    startFirecrackerShow();
    
    // Add confetti
    createConfetti();
    
    // Add star rain
    createStarRain();
    
    // Auto-close after 8 seconds if user doesn't interact
    setTimeout(() => {
        if (modal.classList.contains('active')) {
            closeCelebration();
        }
    }, 8000);
}

function closeCelebration() {
    const modal = document.getElementById('celebration-modal');
    modal.classList.remove('active');
    
    // Clear all animations
    clearCelebrationAnimations();
    
    // Update game state
    updateGameStateAfterCelebration();
}

function playCelebrationSound() {
    try {
        const audio = new Audio('assets/congratulations.wav');
        audio.volume = 0.7;
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    } catch (error) {
        console.log('Audio creation failed:', error);
    }
}

// Firecracker Animation System
function startFirecrackerShow() {
    const container = document.getElementById('firecracker-container');
    
    // Create multiple firecracker bursts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirecrackerBurst(container);
        }, i * 300);
    }
}

function createFirecrackerBurst(container) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const centerX = Math.random() * container.offsetWidth;
    const centerY = Math.random() * container.offsetHeight;
    
    // Create burst center
    const burst = document.createElement('div');
    burst.className = 'burst';
    burst.style.left = centerX + 'px';
    burst.style.top = centerY + 'px';
    burst.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(burst);
    
    // Create radiating particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'firecracker';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        const angle = (i * 30) * Math.PI / 180;
        const distance = 50 + Math.random() * 100;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        container.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { transform: `translate(0, 0) scale(1)`, opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'ease-out'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    }
    
    // Remove burst element
    setTimeout(() => {
        if (burst.parentNode) {
            burst.parentNode.removeChild(burst);
        }
    }, 800);
}

// Confetti System
function createConfetti() {
    const container = document.body;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 50);
    }
}

// Star Rain System
function createStarRain() {
    const container = document.body;
    const stars = ['⭐', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star-rain';
            star.textContent = stars[Math.floor(Math.random() * stars.length)];
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.animationDelay = Math.random() * 1 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(star);
            
            // Remove after animation
            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 4000);
        }, i * 100);
    }
}

// Sparkle Effects
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
}

// Clear all celebration animations
function clearCelebrationAnimations() {
    // Remove all celebration elements
    const elementsToRemove = [
        '.firecracker',
        '.confetti',
        '.star-rain',
        '.sparkle',
        '.burst',
        '.firework'
    ];
    
    elementsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    });
    
    // Clear firecracker container
    const container = document.getElementById('firecracker-container');
    if (container) {
        container.innerHTML = '';
    }
}

// Update game state after celebration
function updateGameStateAfterCelebration() {
    // Update XP and level
    const xpGained = parseInt(document.getElementById('xp-earned').textContent.replace('+', ''));
    gameState.xp += xpGained;
    gameState.todayXP += xpGained;
    
    // Check for level up
    const newLevel = Math.floor(gameState.xp / 100) + 1;
    if (newLevel > gameState.level) {
        gameState.level = newLevel;
        showToast(`🎉 Level Up! You're now level ${newLevel}!`, 'success');
    }
    
    // Update lessons completed
    gameState.lessonsCompleted++;
    
    // Save progress
    saveGameState();
    
    // Update UI
    updateAllStats();
}

// Trigger celebration for lesson completion
function triggerLessonCompletion(lessonData = {}) {
    // Add some delay for dramatic effect
    setTimeout(() => {
        showCelebration(lessonData);
    }, 500);
}

// Trigger celebration for achievement unlock
function triggerAchievementUnlock(achievementName) {
    const achievementData = {
        message: `🏆 Achievement Unlocked: ${achievementName}!`,
        accuracy: 100,
        xp: 100,
        streak: gameState.currentStreak
    };
    
    showCelebration(achievementData);
}

// Export functions to global scope
window.showCelebration = showCelebration;
window.closeCelebration = closeCelebration;
window.triggerLessonCompletion = triggerLessonCompletion;
window.triggerAchievementUnlock = triggerAchievementUnlock;
window.createSparkles = createSparkles;

