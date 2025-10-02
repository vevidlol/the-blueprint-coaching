// Website Configuration
// Update these values to customize the website

const CONFIG = {
    // Business Information
    business: {
        name: "THE BLUEPRINT",
        subtitle: "COACHING",
        fullName: "The Blueprint Coaching",
        tagline: "Transform Your Potential",
        description: "No shortcuts. No excuses. Just a proven system that unlocks your genetic potential through discipline, structure, and relentless progress."
    },

    // Contact Information
    contact: {
        email: "hello@theblueprintcoaching.com",
        calendlyUrl: "https://calendly.com/cashnunez",
        applicationFormUrl: "https://forms.gle/upFbVivnjwgBoxoR8",
        responseTime: "Response within 24 hours",
        availability: "Available via booking only"
    },

    // Statistics
    stats: {
        clientsTransformed: 100,
        yearsExperience: 3,
        successRate: 95,
        labels: {
            clients: "Clients Transformed",
            experience: "Years Experience", 
            success: "Success Rate %"
        }
    },

    // Social Media
    social: {
        instagram: "https://instagram.com/cashnunez_",
        tiktok: "https://tiktok.com/@cash.liftz"
    },

    // Services/Features
    services: [
        {
            icon: "fas fa-dumbbell",
            title: "Custom Training Programs",
            description: "Personalized workout plans designed for your specific goals, body type, and schedule."
        },
        {
            icon: "fas fa-brain",
            title: "Mindset Transformation",
            description: "Mental conditioning to build unbreakable discipline and eliminate self-limiting beliefs."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "24/7 Direct Access",
            description: "Text me anytime for motivation, guidance, or to crush through plateaus and obstacles."
        },
        {
            icon: "fas fa-chart-line",
            title: "Weekly Check-ins",
            description: "Regular progress assessments and program adjustments to ensure maximum results."
        },
        {
            icon: "fas fa-apple-alt",
            title: "Nutrition Blueprint",
            description: "Simple, sustainable meal plans that fuel your workouts and accelerate transformation."
        },
        {
            icon: "fas fa-tasks",
            title: "Accountability System",
            description: "Complete tracking system with weekly photos, measurements, and performance metrics."
        }
    ],

    // About Section
    about: {
        story: [
            "Growing up, I was always looked at differently when I played sports and was around kids my age. I was always the short, skinny kid. It felt like it was out of my control until I realized that it wasn't.",
            "From that point forward, I knew I was going to make a change in my appearance for myself—one that gave me respect and that I was happy with. It wasn't just picking up some weights and calling it done. I spent hours on research, learning about proper nutrition, how muscles work, and slowly started to change.",
            "The gym is just a room with weights, but when you have the right people around you and start seeing a difference in your physique, it feels like every area of your life starts to change.",
            "I unlocked my potential. Now let's unlock yours."
        ]
    },

    // Transformation Journey
    transformationJourney: [
        {
            phase: "Starting Point",
            title: "The Beginning",
            description: "Where it all started - making excuses and blaming genetics for every setback.",
            image: "images/IMG_6041.png"
        },
        {
            phase: "The Breakthrough",
            title: "Taking Ownership",
            description: "The moment I realized that ownership was the key to transformation. No more excuses.",
            image: "images/98CA2511-0A9C-45BB-B085-6EF0C478482E.jpg"
        }
    ],

    // Gallery Images
    gallery: [
        {
            src: "images/IMG_4693.png",
            title: "Early Transformation",
            description: "The beginning of the journey - building discipline and structure"
        },
        {
            src: "images/IMG_4834.png",
            title: "Progress Phase",
            description: "Consistent training and nutrition paying off"
        },
        {
            src: "images/IMG_4380.jpg",
            title: "Breakthrough Moment",
            description: "When everything clicked - mindset and physique aligned"
        },
        {
            src: "images/IMG_6041.png",
            title: "Continued Growth",
            description: "Pushing beyond limits and setting new standards"
        },
        {
            src: "images/98CA2511-0A9C-45BB-B085-6EF0C478482E.jpg",
            title: "Current State",
            description: "The result of 3 years of relentless progress and ownership"
        }
    ],

    // FAQ
    faq: [
        {
            question: "How is The Blueprint different from other programs?",
            answer: "The Blueprint focuses on complete transformation - not just physical, but mental. We emphasize ownership, discipline, and honest progress tracking. No false promises, just proven methods that work."
        },
        {
            question: "What's included in the coaching program?",
            answer: "You get custom training programs, nutrition blueprints, 24/7 access to your coach, weekly check-ins, mindset coaching, and a complete accountability system. Everything you need for transformation."
        },
        {
            question: "How long does it take to see results?",
            answer: "Most clients see significant changes within 4-6 weeks when they follow the blueprint consistently. Real transformation takes 12-16 weeks, but the mindset shifts happen immediately."
        },
        {
            question: "Do I need gym experience to start?",
            answer: "No experience necessary. The Blueprint is designed for all levels. We start where you are and build from there with proper progression and technique focus."
        },
        {
            question: "What's the investment for coaching?",
            answer: "Investment varies based on your goals and program length. We'll discuss pricing during your strategy call to find the best fit for your situation and commitment level."
        },
        {
            question: "Is there a guarantee?",
            answer: "I guarantee you'll get the tools, knowledge, and support needed for transformation. Your results depend on your commitment to following the blueprint consistently."
        }
    ],

    // Call to Action
    cta: {
        primary: "START YOUR TRANSFORMATION",
        secondary: "BOOK STRATEGY CALL",
        tertiary: "APPLY NOW",
        callDetails: [
            "30-minute strategy session",
            "No sales pressure",
            "Zoom call"
        ]
    },

    // Footer Links
    footer: {
        quickLinks: [
            { text: "About", href: "#about" },
            { text: "Coaching Program", href: "#coaching" },
            { text: "Success Stories", href: "#testimonials" },
            { text: "FAQ", href: "#faq" }
        ],
        legalLinks: [
            { text: "Privacy Policy", href: "#" },
            { text: "Terms of Service", href: "#" },
            { text: "Refund Policy", href: "#" }
        ],
        disclaimer: "Results not typical. Individual results may vary. Consult your physician before beginning any exercise program."
    },

    // Images
    images: {
        hero: "images/IMG_4380.jpg",
        aboutPrimary: "images/IMG_4693.png",
        aboutSecondary: "images/IMG_4834.png",
        testimonial1: "images/IMG_6041.png",
        testimonial2: "images/98CA2511-0A9C-45BB-B085-6EF0C478482E.jpg"
    },

    // Theme Colors (CSS Custom Properties)
    theme: {
        primary: "#ff6b35",
        secondary: "#f7931e",
        background: "#000",
        surface: "#111",
        surfaceLight: "#1a1a1a",
        text: "#fff",
        textSecondary: "#ccc",
        textMuted: "#888",
        border: "#333"
    },

    // Animation Settings
    animations: {
        loadingDuration: 1500,
        scrollOffset: 80,
        parallaxSpeed: 0.3,
        counterDuration: 2000
    },

    // SEO Settings
    seo: {
        title: "The Blueprint Coaching | Transform Your Potential",
        description: "Transform your physique and mindset with The Blueprint Coaching's proven system. No shortcuts. No excuses. Just results.",
        keywords: "fitness coaching, personal trainer, transformation, mindset coaching, nutrition, accountability",
        ogTitle: "The Blueprint Coaching - Transform Your Potential",
        ogDescription: "Transform your physique and mindset with proven coaching system."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally
window.CONFIG = CONFIG;