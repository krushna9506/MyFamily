// scripts.js
// You can add some interactive features here if needed
document.addEventListener("DOMContentLoaded", function() {
    const members = document.querySelectorAll('.member');

    members.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.backgroundColor = '#f0f0f0';
        });

        member.addEventListener('mouseleave', () => {
            member.style.backgroundColor = '#fff';
        });
    });
});
// Add background animation
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let hue = 0;

    function updateBackground() {
        hue = (hue + 0.1) % 360;
        const color = `hsl(${hue}, 70%, 97%)`; // Subtle pastel colors
        body.style.backgroundColor = color;
        requestAnimationFrame(updateBackground);
    }

    // Start the animation
    updateBackground();
});
// Add hover effect to family members
document.addEventListener('DOMContentLoaded', function() {
    const familyMembers = document.querySelectorAll('.member');

    familyMembers.forEach(member => {
        // Add hover effect
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'scale(1.1)';
            member.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            
            // Animate the image
            const img = member.querySelector('img');
            if (img) {
                img.style.animation = 'float 2s ease-in-out infinite';
                img.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
            }
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'scale(1)';
            member.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            
            // Reset image animation
            const img = member.querySelector('img');
            if (img) {
                img.style.animation = 'none';
                img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }
        });

        // Add click effect
        member.addEventListener('click', () => {
            member.style.transform = 'scale(0.95)';
            setTimeout(() => {
                member.style.transform = 'scale(1)';
            }, 200);
        });
    });
    // Add hover and click effects to video
    const videoPlayer = document.querySelector('.video-player');
    if (videoPlayer) {
        // Add transition for smooth animations
        videoPlayer.style.transition = 'all 0.3s ease-in-out';

        videoPlayer.addEventListener('mouseenter', () => {
            videoPlayer.style.transform = 'scale(1.05)';
            videoPlayer.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            videoPlayer.style.filter = 'brightness(1.1)';
        });

        videoPlayer.addEventListener('mouseleave', () => {
            videoPlayer.style.transform = 'scale(1)';
            videoPlayer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            videoPlayer.style.filter = 'brightness(1)';
        });

        videoPlayer.addEventListener('click', () => {
            videoPlayer.style.transform = 'scale(0.98)';
            videoPlayer.style.filter = 'brightness(0.95)';
            setTimeout(() => {
                videoPlayer.style.transform = 'scale(1)';
                videoPlayer.style.filter = 'brightness(1)';
            }, 150);
        });
    }
});
// Add hover effect to video text
