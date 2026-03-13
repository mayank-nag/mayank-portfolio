// ─── Single source of truth for all portfolio content ───

export const profile = {
  name: {
    first: 'MAYANK',
    last: 'NAGAR',
  },
  logo: 'MN',
  tagline: 'Cybersecurity · Software Development · Machine Learning',
  heroSub: 'Crafting secure systems & intelligent software',
  email: 'mayankn645@gmail.com',
  social: {
    github: 'https://github.com/Mayank-nag',
    linkedin: 'https://linkedin.com/in/mayank-nagar',
  },
  about: {
    heading: 'Securing\nthe\ndigital\nfrontier.',
    paragraphs: [
      "I'm a Computer Science student specializing in Cyber Security, focused on building secure, scalable, and intelligent systems.",
      'My interests include backend development, machine learning, cybersecurity tooling, and modern web applications.',
      'I actively explore Linux environments, security tools, and data-driven applications while continuously strengthening my system-level and software engineering expertise.',
    ],
    stats: [
      { value: 5, label: 'Projects Built' },
      { value: 6, label: 'Skill Domains' },
      { value: 3, label: 'Tech Stacks' },
      { value: 2, label: 'Years Learning' },
    ],
  },
  education: [
    {
      degree: 'B.Tech Computer Science (Cyber Security)',
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
        'Responsive safety-focused web application providing emergency access features and reliable navigation with accessibility-first design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Mayank-nag/women_safety_app',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
      pattern: 'grid',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern developer portfolio built with Next.js and Framer Motion featuring smooth animations and responsive design.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/Mayank-nag/portfolio',
      gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1500 50%, #5c2200 100%)',
      pattern: 'dots',
    },
    {
      title: 'Game Development — PyGame',
      description:
        'Interactive games built using PyGame implementing physics, collision systems, and event-driven architecture.',
      tech: ['Python', 'PyGame'],
      github: 'https://github.com/Mayank-nag/Game_development_py_games',
      gradient: 'linear-gradient(135deg, #001a0a 0%, #003320 50%, #004d30 100%)',
      pattern: 'lines',
    },
    {
      title: 'Secure Environment Project',
      description:
        'Cybersecurity-focused Python project exploring secure execution environments and controlled system access.',
      tech: ['Python', 'Cybersecurity', 'Linux'],
      github: 'https://github.com/Mayank-nag/Secure_env_projec',
      gradient: 'linear-gradient(135deg, #0d0d2b 0%, #1a1a40 50%, #2d2d6b 100%)',
      pattern: 'grid',
    },
    {
      title: 'Mango AI Classification',
      description:
        'Deep learning system using TensorFlow and computer vision to classify mango varieties with high accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/Mayank-nag/_Mangoid_',
      gradient: 'linear-gradient(135deg, #1a1200 0%, #332600 50%, #4d3900 100%)',
      pattern: 'dots',
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
      skills: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Next.js'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Offensive & defensive security tooling, penetration testing, and network analysis.',
      skills: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark'],
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
      icon: '✦',
      title: 'Python Ecosystem',
      description: 'Data science, machine learning, visualization, and game development libraries.',
      skills: ['Pandas', 'TensorFlow', 'Matplotlib', 'Pygame'],
    },
  ],
};
