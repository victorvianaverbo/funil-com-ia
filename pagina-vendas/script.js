/* Interactive Logic - Funil de Vendas com IA */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. FAQ Accordion Control
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================
    // 3. Timeline Progress and Step Activation
    // ==========================================
    const timeline = document.querySelector('.timeline-container');
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const progressBar = document.querySelector('.timeline-progress-bar');

    const handleTimelineScroll = () => {
        if (!timeline) return;

        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress within timeline container
        // Start progress when container top reaches middle of viewport
        const timelineStart = rect.top - (viewportHeight / 2);
        const timelineHeight = rect.height;
        
        let progress = 0;
        if (timelineStart < 0) {
            progress = Math.min(100, Math.max(0, (-timelineStart / (timelineHeight - viewportHeight / 2)) * 100));
        }

        // Update progress bar height
        progressBar.style.height = `${progress}%`;

        // Activate steps when their center passes middle of viewport
        timelineSteps.forEach(step => {
            const stepRect = step.getBoundingClientRect();
            const stepMiddle = stepRect.top + (stepRect.height / 2);
            if (stepMiddle < viewportHeight / 2 + 100) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', handleTimelineScroll);
    window.addEventListener('resize', handleTimelineScroll);
    handleTimelineScroll(); // Initial check

    // ==========================================
    // 4. Testimonials Drag-to-Scroll Carousel
    // ==========================================
    const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
    const track = document.getElementById('testimonials-track');

    if (carouselWrapper && track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carouselWrapper.addEventListener('mousedown', (e) => {
            isDown = true;
            carouselWrapper.style.cursor = 'grabbing';
            startX = e.pageX - carouselWrapper.offsetLeft;
            scrollLeft = carouselWrapper.scrollLeft;
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            isDown = false;
            carouselWrapper.style.cursor = 'grab';
        });

        carouselWrapper.addEventListener('mouseup', () => {
            isDown = false;
            carouselWrapper.style.cursor = 'grab';
        });

        carouselWrapper.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carouselWrapper.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag speed multiplier
            carouselWrapper.scrollLeft = scrollLeft - walk;
        });

        // Touch support for mobiles
        let touchStartX = 0;
        let touchScrollLeft = 0;
        
        carouselWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - carouselWrapper.offsetLeft;
            touchScrollLeft = carouselWrapper.scrollLeft;
        }, { passive: true });

        carouselWrapper.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
            const walk = (x - touchStartX) * 1.5;
            carouselWrapper.scrollLeft = touchScrollLeft - walk;
        }, { passive: true });
    }
});
