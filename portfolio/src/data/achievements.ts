import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'fyp',
    label: 'Final Year Project · Top Grade',
    title: 'ML-Based Industrial Sorting Platform',
    description:
      'Developed a platform capable of moving objects in omnidirectional paths using machine learning to optimize movements. Modular hexagonal panels connect magnetically, allowing reconfigurable sizing. Powered by Q-learning with an interactive GUI for real-time visualization.',
    features: ['Q-Learning', 'Modular Hardware', 'Magnetic Assembly', 'Omnidirectional', 'Interactive GUI', 'Reconfigurable'],
    isFeatured: true,
  },
  {
    id: 'robotics',
    label: 'Competition Winner',
    title: 'Junior Year Robotics Competition',
    description:
      'Won the university robotics competition by developing multiple autonomous robots for maze mapping and maze solving challenges.',
  },
  {
    id: 'academic',
    label: 'Academic',
    title: 'B.Sc. Electrical Engineering — Distinction',
    description:
      "Graduated ranked #2 out of 104 students from GIK Institute, one of Pakistan's top engineering universities. Still an active member of the ARES Lab (Accelerated Reconfigurable Embedded Systems).",
  },
];

export const universityProjects = [
  'EEG Blink Detection — ML models for cleaner neuroscientific data',
  'Microprocessor Design on FPGAs',
  'Non-Invasive Temperature Monitoring — deployed during COVID at university',
  'Machine Voice Detection using ML',
];
