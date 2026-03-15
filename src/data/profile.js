// ─── Single source of truth for all portfolio content ───

export const profile = {
  name: {
    first: 'MAYANK',
    last: 'NAGAR',
  },
  logo: '.MN',
  tagline: 'Software Development · Machine Learning · Mobile Development · Systems',
  heroSub: 'Computer Science student building intelligent software, machine learning projects, and developer tools.',
  email: 'mayankn645@gmail.com',
  resumePath: '/resume.pdf',
  CVPath: '/CV.pdf',
  githubUsername: 'Mayank-nag',
  social: {
    github: 'https://github.com/Mayank-nag',
    linkedin: 'www.linkedin.com/in/mayank-nag',
  },
  about: {
    heading: 'Building\npractical\nsoftware\nsystems.',
    paragraphs: [
      "I'm a Computer Science student focused on building practical software systems and intelligent applications. I enjoy working with Python, modern web technologies, and Linux environments while exploring machine learning and system-level development.",
      'My projects span full-stack web applications, machine learning models, game development, and mobile apps — always with an emphasis on clean architecture, performance, and real-world usability.',
      'I also have a strong interest in cybersecurity, Linux systems, and developer tooling, which complements my core software engineering focus.',
    ],
    stats: [
      { value: 5, label: 'Projects Built' },
      { value: 12, label: 'Technologies Used' },
      { value: 2, label: 'Years Learning' },
      { value: 50, label: 'GitHub Commits' },
    ],
  },
  education: [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Jaipur National University',
      period: '2024 — Present',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'St. Anselm Pink City Sr. Sec. School',
      period: '2022 — 2024',
    },
  ],
  projects: [
    {
      title: 'Women Safety App',
      description:
        'A responsive safety-focused web application designed to provide quick emergency access and location sharing.',
      features: [
        'Emergency alert system with one-tap SOS',
        'Location-based navigation and live sharing',
        'Mobile-first accessibility design',
      ],
      tech: ['Dart','HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mayank-nag/women_safety_app',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
      pattern: 'grid',
      caseStudy: {
        problem: 'Women in unsafe situations need a fast, reliable way to alert contacts and share location without complex app interactions.',
        approach: 'Built a simple mobile-friendly web interface with an SOS button and browser geolocation support to demonstrate how emergency alerts and location sharing could work.',
        challenges: 'Handling browser permissions for location access and designing a simple interface that works well on mobile screens.',
        outcome: 'Created a working prototype that demonstrates the basic emergency alert and location sharing workflow.',
      },
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern developer portfolio built with Vite and Anime.js featuring smooth animations, dark theme, and modular component architecture.',
      features: [
        'Component-based architecture with Vite',
        'Smooth scroll-reveal and entrance animations',
        'Dark/light theme toggle with persistence',
      ],
      tech: ['Vite', 'JavaScript', 'Anime.js', 'CSS'],
      github: 'https://github.com/Mayank-nag/mayank-portfolio',
      gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1500 50%, #5c2200 100%)',
      pattern: 'dots',
      caseStudy: {
        problem: 'Needed a personal website to present projects, skills, and contact information in a clear and professional way.',
        approach: 'Developed a portfolio using Vite and modular JavaScript, with Anime.js used for simple UI animations and scroll effects.',
        challenges: 'Structuring the site content cleanly, implementing theme switching, and ensuring the layout worked well on different screen sizes.',
        outcome: 'A fast-loading portfolio site that organizes projects and skills with a clean interface.',
      },
    },
    {
      title: 'Game Development — PyGame',
      description:
        'Interactive games built using PyGame implementing physics simulations, collision detection systems, and event-driven architecture.',
      features: [
        'Real-time physics and collision detection',
        'Event-driven game loop architecture',
        'Score tracking and difficulty progression',
      ],
      tech: ['Python', 'PyGame'],
      github: 'https://github.com/Mayank-nag/Game_development_py_games',
      gradient: 'linear-gradient(135deg, #001a0a 0%, #003320 50%, #004d30 100%)',
      pattern: 'lines',
      caseStudy: {
        problem: 'Wanted to explore how simple games are built using Python and understand concepts like game loops and collision detection.',
        approach: 'Used PyGame to create small experimental games while implementing basic movement, collision detection, and scoring systems.',
        challenges: 'Understanding event loops, handling collisions correctly, and managing object movement within the game window.',
        outcome: 'Several small playable game experiments that helped build familiarity with PyGame and game programming basics.',
      },
    },
    {
      title: 'Secure Environment Project',
      description:
        'Cybersecurity-focused Python project exploring secure execution environments, sandboxing techniques, and controlled system access.',
      features: [
        'Sandboxed code execution environment',
        'Access control and permission management',
        'Security logging and monitoring',
      ],
      tech: ['Python', 'Cybersecurity', 'Linux'],
      github: 'https://github.com/Mayank-nag/Secure_env_projec',
      gradient: 'linear-gradient(135deg, #0d0d2b 0%, #1a1a40 50%, #2d2d6b 100%)',
      pattern: 'grid',
      caseStudy: {
        problem: 'Exploring how restricted environments can be used to safely run code without affecting the main system.',
        approach: 'Developed a Python project experimenting with limited execution environments and basic monitoring of program behavior.',
        challenges: 'Understanding system permissions and identifying safe ways to restrict access to certain operations.',
        outcome: 'A learning project demonstrating basic concepts related to sandboxing and controlled execution.',
      },
    },
    {
      title: 'Mango AI Classification',
      description:
        'Deep learning system using TensorFlow and computer vision to classify mango varieties with high accuracy from images.',
      features: [
        'CNN-based image classification pipeline',
        'Data augmentation for improved accuracy',
        'Model evaluation with precision/recall metrics',
      ],
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/Mayank-nag/_Mangoid_',
      gradient: 'linear-gradient(135deg, #1a1200 0%, #332600 50%, #4d3900 100%)',
      pattern: 'dots',
      caseStudy: {
        problem: 'Identifying mango varieties from images can be difficult without prior knowledge.',
        approach: 'Trained a basic image classification model using TensorFlow with preprocessing handled using OpenCV.',
        challenges: 'Collecting a small dataset and understanding how to prepare images for training.',
        outcome: 'A working prototype model capable of classifying mango images with reasonable accuracy on the available dataset.',
      },
    },
    
  ],
  skillGroups: [
    {
      icon: '⚡',
      title: 'Programming',
      description: 'Core language proficiency in systems and application development.',
      skills: ['Python', 'C', 'C++'],
    },
    {
      icon: '◈',
      title: 'Web Development',
      description: 'Building modern, responsive interfaces and full-stack applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    },
    {
      icon: '✦',
      title: 'Machine Learning',
      description: 'Data science, deep learning, visualization, and model development.',
      skills: ['TensorFlow', 'Pandas', 'Matplotlib', 'OpenCV'],
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Building cross-platform and native mobile applications with modern frameworks.',
      skills: ['React Native', 'Flutter', 'Android', 'Mobile UI', 'API Integration'],
    },
    {
      icon: '▸',
      title: 'Systems',
      description: 'Linux administration, shell scripting, and system-level operations.',
      skills: ['Linux', 'Ubuntu', 'Bash', 'Terminal'],
    },
    {
      icon: '◎',
      title: 'Databases',
      description: 'Relational and cloud database design, queries, and integration.',
      skills: ['MySQL', 'Firebase'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Offensive & defensive security tooling, penetration testing, and network analysis.',
      skills: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark'],
    },
  ],
  blog: [
    {
      title: 'Beginner Guide to Nmap',
      summary: 'A comprehensive walkthrough of Nmap network scanning, from basic host discovery to advanced port scanning techniques.',
      tag: 'Cybersecurity',
    },
    {
      title: 'Understanding SQL Injection',
      summary: 'Deep dive into SQL injection attack vectors, prevention strategies, and secure coding practices for web applications.',
      tag: 'Security',
    },
    {
      title: 'How Wireshark Analyzes Network Packets',
      summary: 'Practical guide to packet analysis with Wireshark — capturing, filtering, and interpreting network traffic.',
      tag: 'Networking',
    },
    {
      title: 'Building a Mango Classification Model',
      summary: 'End-to-end walkthrough of training a CNN for image classification using TensorFlow and OpenCV.',
      tag: 'Machine Learning',
    },
  ],
};