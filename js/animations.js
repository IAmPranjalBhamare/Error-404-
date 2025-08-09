// LinguaQuest - Animation Effects

// Particle Effects
function createParticles(x, y, color = '#ffd700', count = 10) {
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = color;
        
        // Random direction and speed
        const angle = (Math.PI * 2 * i) / count;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        particles.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particles.contains(particle)) {
                particles.removeChild(particle);
            }
        }, 3000);
    }
}

// Confetti Animation
function createConfetti(duration = 3000) {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (container.contains(confetti)) {
                    container.removeChild(confetti);
                }
            }, 3000);
        }, Math.random() * duration);
    }
}

// Lightning Effect for Streaks
function createLightning() {
    const overlay = document.getElementById('lightning-overlay');
    if (!overlay) return;
    
    overlay.style.display = 'block';
    
    // Create multiple lightning bolts
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const lightning = document.createElement('div');
            lightning.className = 'lightning';
            lightning.style.left = Math.random() * 100 + '%';
            
            overlay.appendChild(lightning);
            
            // Remove lightning after animation
            setTimeout(() => {
                if (overlay.contains(lightning)) {
                    overlay.removeChild(lightning);
                }
            }, 500);
        }, i * 100);
    }
    
    // Hide overlay after all lightning is done
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
}

// Screen Shake Effect
function shakeScreen(duration = 500) {
    const body = document.body;
    body.style.animation = `shake ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        body.style.animation = '';
    }, duration);
}

// Pulse Effect
function pulseElement(element, duration = 1000) {
    if (!element) return;
    
    element.style.animation = `pulse ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Bounce Effect
function bounceElement(element, duration = 600) {
    if (!element) return;
    
    element.style.animation = `bounce ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Glow Effect
function glowElement(element, color = '#ffd700', duration = 2000) {
    if (!element) return;
    
    const originalBoxShadow = element.style.boxShadow;
    element.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
    element.style.transition = 'box-shadow 0.3s ease';
    
    setTimeout(() => {
        element.style.boxShadow = originalBoxShadow;
    }, duration);
}

// Floating Animation
function floatElement(element, distance = 10, duration = 2000) {
    if (!element) return;
    
    const originalTransform = element.style.transform;
    
    element.style.animation = `float ${duration}ms ease-in-out infinite`;
    element.style.setProperty('--float-distance', distance + 'px');
}

// Typewriter Effect
function typewriterEffect(element, text, speed = 50) {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Fade In Animation
function fadeIn(element, duration = 500) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.opacity = '1';
    }, 10);
}

// Fade Out Animation
function fadeOut(element, duration = 500) {
    if (!element) return;
    
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = '0';
    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

// Slide In Animation
function slideIn(element, direction = 'up', duration = 500) {
    if (!element) return;
    
    const directions = {
        up: 'translateY(50px)',
        down: 'translateY(-50px)',
        left: 'translateX(50px)',
        right: 'translateX(-50px)'
    };
    
    element.style.transform = directions[direction];
    element.style.opacity = '0';
    element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    
    setTimeout(() => {
        element.style.transform = 'translate(0)';
        element.style.opacity = '1';
    }, 10);
}

// Scale Animation
function scaleElement(element, scale = 1.1, duration = 300) {
    if (!element) return;
    
    const originalTransform = element.style.transform;
    element.style.transition = `transform ${duration}ms ease-out`;
    element.style.transform = `scale(${scale})`;
    
    setTimeout(() => {
        element.style.transform = originalTransform;
    }, duration);
}

// Ripple Effect
function createRipple(element, x, y) {
    if (!element) return;
    
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = (x - 10) + 'px';
    ripple.style.top = (y - 10) + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (element.contains(ripple)) {
            element.removeChild(ripple);
        }
    }, 600);
}

// Progress Bar Animation
function animateProgressBar(element, targetWidth, duration = 1000) {
    if (!element) return;
    
    element.style.width = '0%';
    element.style.transition = `width ${duration}ms ease-out`;
    
    setTimeout(() => {
        element.style.width = targetWidth + '%';
    }, 10);
}

// Number Counter Animation
function animateCounter(element, targetNumber, duration = 1000) {
    if (!element) return;
    
    const startNumber = parseInt(element.textContent) || 0;
    const increment = (targetNumber - startNumber) / (duration / 16);
    let currentNumber = startNumber;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if ((increment > 0 && currentNumber >= targetNumber) || 
            (increment < 0 && currentNumber <= targetNumber)) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentNumber);
    }, 16);
}

// Heart Animation for Lives
function animateHeart(element) {
    if (!element) return;
    
    element.style.animation = 'heartbeat 1.5s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
    }, 1500);
}

// Achievement Unlock Animation
function animateAchievementUnlock(element) {
    if (!element) return;
    
    // Scale up and glow
    element.style.transform = 'scale(1.1)';
    element.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
    element.style.transition = 'all 0.5s ease-out';
    
    // Create sparkle effects
    const rect = element.getBoundingClientRect();
    createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, '#ffd700', 15);
    
    setTimeout(() => {
        element.style.transform = '';
        element.style.boxShadow = '';
    }, 500);
}

// Loading Spinner
function showLoadingSpinner(element) {
    if (!element) return;
    
    const spinner = document.createElement('div');
    spinner.className = 'loading';
    spinner.style.display = 'inline-block';
    
    element.appendChild(spinner);
    return spinner;
}

function hideLoadingSpinner(spinner) {
    if (spinner && spinner.parentNode) {
        spinner.parentNode.removeChild(spinner);
    }
}

// Smooth Scroll
function smoothScrollTo(element, duration = 500) {
    if (!element) return;
    
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Dynamic Background System
let currentBackgroundTheme = 'default';

function initializeDynamicBackground() {
    // Create dynamic background element if it doesn't exist
    if (!document.getElementById('dynamic-background')) {
        const bgElement = document.createElement('div');
        bgElement.id = 'dynamic-background';
        bgElement.className = 'dynamic-background';
        document.body.insertBefore(bgElement, document.body.firstChild);
    }
    
    // Add more diverse background shapes
    const bgShapes = document.getElementById('bg-shapes');
    if (bgShapes) {
        // Clear existing shapes
        bgShapes.innerHTML = '';
        
        // Create diverse shapes
        const shapeTypes = ['circle', 'triangle', 'square', 'hexagon'];
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            shape.className = `shape ${shapeType}`;
            
            // Random positioning
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 5 + 's';
            shape.style.animationDuration = (8 + Math.random() * 4) + 's';
            
            bgShapes.appendChild(shape);
        }
    }
}

function changeBackgroundTheme(theme) {
    const bgElement = document.getElementById('dynamic-background');
    if (!bgElement) return;
    
    // Remove existing theme classes
    bgElement.className = 'dynamic-background';
    
    // Add new theme class
    if (theme && theme !== 'default') {
        bgElement.classList.add(theme + '-theme');
    }
    
    currentBackgroundTheme = theme;
    
    // Add transition effect
    bgElement.style.opacity = '0';
    setTimeout(() => {
        bgElement.style.opacity = '0.3';
    }, 100);
}

function setQuestionBackground(questionType, lessonTitle) {
    // Determine background theme based on question content
    let theme = 'learning';
    
    if (lessonTitle.toLowerCase().includes('greetings')) {
        theme = 'learning';
    } else if (lessonTitle.toLowerCase().includes('numbers')) {
        theme = 'colorful';
    } else if (lessonTitle.toLowerCase().includes('colors')) {
        theme = 'vocabulary';
    } else if (questionType === 'vocabulary' || lessonTitle.toLowerCase().includes('vocabulary')) {
        theme = 'classroom';
    }
    
    changeBackgroundTheme(theme);
}

function resetBackgroundTheme() {
    changeBackgroundTheme('default');
}

// Enhanced Confetti with Different Shapes
function createSpecialConfetti(type = 'celebration') {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const confettiTypes = ['circle', 'square', 'star'];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#ffd700'];
    
    let confettiCount = 30;
    if (type === 'heart') {
        confettiCount = 20;
        colors.splice(0, colors.length, '#ff6b6b', '#ff8e8e', '#ffd93d', '#ffdd5e');
    } else if (type === 'streak') {
        confettiCount = 50;
        colors.splice(0, colors.length, '#ffd700', '#ffff00', '#ff6b6b', '#4ecdc4');
    }
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const confettiType = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            confetti.className = `confetti ${confettiType}`;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 1 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (container.contains(confetti)) {
                    container.removeChild(confetti);
                }
            }, 4000);
        }, Math.random() * 1000);
    }
}

// Screen Flash Effect
function createScreenFlash(color = '#ffffff', duration = 200) {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = color;
    flash.style.opacity = '0.7';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = `opacity ${duration}ms ease-out`;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(flash)) {
                document.body.removeChild(flash);
            }
        }, duration);
    }, 50);
}

// Combo Effect for Streaks
function createComboEffect(comboCount) {
    const comboElement = document.createElement('div');
    comboElement.style.position = 'fixed';
    comboElement.style.top = '50%';
    comboElement.style.left = '50%';
    comboElement.style.transform = 'translate(-50%, -50%)';
    comboElement.style.fontSize = '3rem';
    comboElement.style.fontWeight = 'bold';
    comboElement.style.color = '#ffd700';
    comboElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    comboElement.style.zIndex = '1000';
    comboElement.style.pointerEvents = 'none';
    comboElement.style.animation = 'comboPopup 2s ease-out forwards';
    comboElement.textContent = `${comboCount}x COMBO!`;
    
    document.body.appendChild(comboElement);
    
    // Add CSS for combo animation if not exists
    if (!document.getElementById('combo-animation-style')) {
        const style = document.createElement('style');
        style.id = 'combo-animation-style';
        style.textContent = `
            @keyframes comboPopup {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (document.body.contains(comboElement)) {
            document.body.removeChild(comboElement);
        }
    }, 2000);
}

// Initialize dynamic background system on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDynamicBackground();
    
    // Set initial background theme
    changeBackgroundTheme('learning');
});


// Enhanced Lightning Effect for 5-in-a-row streak
function createStreakLightning() {
    const overlay = document.getElementById('lightning-overlay');
    if (!overlay) return;
    
    overlay.style.display = 'block';
    overlay.style.background = 'rgba(255, 255, 0, 0.1)';
    
    // Create multiple lightning bolts with different timings
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const lightning = document.createElement('div');
            lightning.className = 'lightning streak-lightning';
            lightning.style.left = Math.random() * 100 + '%';
            lightning.style.background = 'linear-gradient(to bottom, #ffff00, #ffffff, #ffff00, #ff6b6b)';
            lightning.style.boxShadow = '0 0 30px #ffff00, 0 0 60px #ffff00, 0 0 90px #ffff00';
            lightning.style.width = '6px';
            
            overlay.appendChild(lightning);
            
            // Remove lightning after animation
            setTimeout(() => {
                if (overlay.contains(lightning)) {
                    overlay.removeChild(lightning);
                }
            }, 800);
        }, i * 150);
    }
    
    // Screen flash effect
    document.body.style.background = '#ffff00';
    setTimeout(() => {
        document.body.style.background = '';
    }, 100);
    
    // Hide overlay after all lightning is done
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.background = '';
    }, 1500);
}

// Enhanced Particle Effects for Streaks
function createStreakParticles(x, y, streakCount) {
    const particles = document.getElementById('particles');
    if (!particles) return;
    
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
    const particleCount = Math.min(streakCount * 5, 50);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle streak-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = colors[i % colors.length];
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        // Enhanced movement for streak particles
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 80 + Math.random() * 40;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.animation = `streakParticleFloat 2s ease-out forwards`;
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        particles.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particles.contains(particle)) {
                particles.removeChild(particle);
            }
        }, 2000);
    }
}

// Enhanced Sound Effects System
function playEnhancedSoundEffect(type, intensity = 1) {
    if (!gameState.settings.soundEffects) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        switch(type) {
            case 'streak-5':
                playStreakSound(audioContext, 5);
                break;
            case 'streak-lightning':
                playLightningSound(audioContext);
                break;
            case 'competition-win':
                playVictorySound(audioContext);
                break;
            case 'competition-lose':
                playDefeatSound(audioContext);
                break;
            case 'heart-gained':
                playHeartSound(audioContext);
                break;
            case 'heart-lost':
                playHeartLostSound(audioContext);
                break;
            case 'power-up':
                playPowerUpSound(audioContext);
                break;
            default:
                playSoundEffect(type); // Fallback to original function
        }
    } catch (error) {
        console.log('Enhanced audio not supported, using fallback');
        playSoundEffect(type);
    }
}

function playStreakSound(audioContext, streakCount) {
    // Create a sequence of ascending tones
    for (let i = 0; i < streakCount; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const frequency = 440 + (i * 110); // Ascending notes
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, i * 100);
    }
}

function playLightningSound(audioContext) {
    // Create thunder-like sound effect
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.5);
    oscillator.type = 'sawtooth';
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.8);
}

function playVictorySound(audioContext) {
    // Victory fanfare
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
    
    notes.forEach((frequency, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = 'triangle';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }, index * 200);
    });
}

function playDefeatSound(audioContext) {
    // Descending sad tones
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(220, audioContext.currentTime + 1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}

function playHeartSound(audioContext) {
    // Heart beat sound
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }, i * 150);
    }
}

function playHeartLostSound(audioContext) {
    // Breaking/cracking sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3);
    oscillator.type = 'square';
    
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(400, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playPowerUpSound(audioContext) {
    // Rising power-up sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.5);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Screen Effects
function createScreenFlash(color = '#ffffff', duration = 200) {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100vw';
    flash.style.height = '100vh';
    flash.style.background = color;
    flash.style.opacity = '0.8';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = `opacity ${duration}ms ease-out`;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(flash)) {
                document.body.removeChild(flash);
            }
        }, duration);
    }, 50);
}

// Enhanced Confetti for Special Events
function createSpecialConfetti(type = 'victory') {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    let colors, shapes, count;
    
    switch(type) {
        case 'victory':
            colors = ['#ffd700', '#ffb300', '#ff8f00', '#ff6f00'];
            shapes = ['🏆', '⭐', '🎉', '🎊'];
            count = 100;
            break;
        case 'streak':
            colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
            shapes = ['⚡', '🔥', '💫', '✨'];
            count = 75;
            break;
        case 'heart':
            colors = ['#ff6b6b', '#ff8a80', '#ffab91', '#ffcc80'];
            shapes = ['❤️', '💖', '💕', '💗'];
            count = 50;
            break;
        default:
            colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
            shapes = ['🎉'];
            count = 50;
    }
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti special-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (container.contains(confetti)) {
                    container.removeChild(confetti);
                }
            }, 5000);
        }, Math.random() * 1000);
    }
}

// Combo Effect for Multiple Correct Answers
function createComboEffect(comboCount) {
    const comboElement = document.createElement('div');
    comboElement.className = 'combo-display';
    comboElement.style.position = 'fixed';
    comboElement.style.top = '50%';
    comboElement.style.left = '50%';
    comboElement.style.transform = 'translate(-50%, -50%)';
    comboElement.style.fontSize = '3rem';
    comboElement.style.fontWeight = 'bold';
    comboElement.style.color = '#ffd700';
    comboElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    comboElement.style.zIndex = '9999';
    comboElement.style.pointerEvents = 'none';
    comboElement.style.animation = 'comboAnimation 2s ease-out forwards';
    comboElement.textContent = `${comboCount}x COMBO!`;
    
    document.body.appendChild(comboElement);
    
    // Create particles around combo text
    const rect = comboElement.getBoundingClientRect();
    createStreakParticles(rect.left + rect.width/2, rect.top + rect.height/2, comboCount);
    
    setTimeout(() => {
        if (document.body.contains(comboElement)) {
            document.body.removeChild(comboElement);
        }
    }, 2000);
}

// Add CSS for new animations
const additionalCSS = `
@keyframes streakParticleFloat {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(var(--vx), var(--vy)) scale(0.5);
    }
}

@keyframes comboAnimation {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
    }
    20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
    }
    80% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
}

.streak-lightning {
    animation: streakLightningStrike 0.8s ease-in-out;
}

@keyframes streakLightningStrike {
    0% { 
        opacity: 0; 
        transform: scaleY(0); 
    }
    10% { 
        opacity: 1; 
        transform: scaleY(1); 
    }
    20% { 
        opacity: 0.9; 
    }
    30% { 
        opacity: 1; 
    }
    40% { 
        opacity: 0.8; 
    }
    50% { 
        opacity: 1; 
    }
    60% { 
        opacity: 0.7; 
    }
    70% { 
        opacity: 1; 
    }
    100% { 
        opacity: 0; 
        transform: scaleY(1); 
    }
}

.special-confetti {
    animation: specialConfettiFall 4s linear forwards;
}

@keyframes specialConfettiFall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(1080deg);
        opacity: 0;
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Export new functions for global use
window.createStreakLightning = createStreakLightning;
window.createStreakParticles = createStreakParticles;
window.playEnhancedSoundEffect = playEnhancedSoundEffect;
window.createScreenFlash = createScreenFlash;
window.createSpecialConfetti = createSpecialConfetti;
window.createComboEffect = createComboEffect;

