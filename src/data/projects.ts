export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'design' | 'development' | 'research';
  year: number;
  client?: string;
  role: string;
  technologies?: string[];
  assets: {
    hero: string;
    gallery?: string[];
    video?: string;
    poster?: string;
    documents?: string[];
  };
  links?: {
    live?: string;
    caseStudy?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'notepad-ai',
    title: 'Microsoft Notepad',
    subtitle: 'Windows 11 AI Integration',
    description: 'Leading design for everything on Notepad. Experimenting with AI features like generating text from a prompt, rewriting and summarizing text based on the original content and bringing text formatting and markdown syntax to the app.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'Windows 11', 'AI/ML', 'Design Systems'],
    assets: {
      hero: '/images/projects/Notepad_AI/Notepad_write_1.jpg',
      gallery: [
        '/images/projects/Notepad_AI/Notepad_rewrite_2.jpg',
        '/images/projects/Notepad_AI/Notepad_formatting_3.jpg',
      ],
    }
  },
  {
    id: 'paint-redesign',
    title: 'Paint Visual Redesign',
    subtitle: 'Windows 11 Inbox Apps',
    description: 'Complete visual redesign of Microsoft Paint for Windows 11, modernizing the interface while maintaining the familiar user experience. Focused on improving accessibility and touch interaction.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'Windows 11', 'Accessibility', 'Touch Design'],
    assets: {
      hero: '/images/projects/paint-redesign/hero.jpg'
    }
  },
  {
    id: 'snipping-tool',
    title: 'Snipping Tool Enhancement',
    subtitle: 'Windows 11 Productivity',
    description: 'Enhanced Snipping Tool with new AI-powered features and improved user interface. Added smart capture suggestions and streamlined the annotation workflow for better productivity.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'AI/ML', 'Windows 11', 'User Research'],
    assets: {
      hero: '/images/projects/snipping-tool/hero.jpg'
    }
  },
  {
    id: 'mydawgs',
    title: 'And here is a generated image of my dogs',
    subtitle: 'Personal Project',
    description: '',
    category: 'development',
    year: 2024,
    role: 'Designer & Developer',
    technologies: ['React', 'TypeScript', 'Figma', 'CSS'],
    assets: {
      hero: '/images/projects/My_dawgs/my_dawgs.jpg'
    }
  }
]; 