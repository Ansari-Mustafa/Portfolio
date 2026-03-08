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
    title: 'Junior Year Robotics Competition (GIK Institute)',
    description:
      'Developed multiple autonomous robots with maze mapping, path-finding, and wireless data transmission and control for maze mapping and maze solving challenges. 1st Place in competition. Received full funding from GIK Institute for the project.',
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
  {
    name: 'EEG Blink Detection via Machine Learning',
    description:
      'Used MATLAB ML classification tools to process and analyze EEG data. Built a custom model to identify and filter blinks in EEG datasets, improving accuracy and reliability of readings for neuroscientific and medical applications.',
    tags: ['MATLAB', 'Machine Learning', 'EEG', 'Signal Processing'],
  },
  {
    name: 'Microprocessor Design on FPGA',
    description:
      'Developed a custom 16-bit microprocessor architecture (ALU, control unit, registers) targeting efficient execution of basic instructions and low power. Optimized program memory and RAM usage; achieved seamless instruction execution on Artix-7 FPGA (Nexys 4 DDR).',
    tags: ['FPGA', 'Artix-7', 'Microprocessor', 'VHDL'],
  },
  {
    name: 'Non-Invasive Temperature Monitoring System',
    description:
      'COVID-19 precautionary solution combining an MLX-90614 infrared sensor with an Arduino-powered solenoid door lock. Monitored for elevated temperatures and enforced secure access control; deployed at university.',
    tags: ['Arduino', 'IoT', 'Infrared Sensor', 'COVID-19'],
  },
  {
    name: 'Voice Detection using Machine Learning',
    description:
      'MATLAB-based audio classification system using a Classification Learner algorithm with 20 distinctive parameters to accurately differentiate between various voices.',
    tags: ['MATLAB', 'Machine Learning', 'Audio Classification'],
  },
];
