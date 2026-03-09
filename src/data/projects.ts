export interface Project {
  id: string;
  title: string;
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
    description: 'Leading design for everything on Notepad. Experimenting with AI features like generating text from a prompt, rewriting and summarizing text based on the original content. Brought customers top user requested features such as text formatting and markdown syntax to the app.',
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
    id: 'snipping-tool-screen-recorder',
    title: 'Snipping Tool',
    description: 'Led the design effort to merge Snipping Tool and Snip & Sketch into a unified product for Windows 11. Modernized the experience with features like screen recording with built in flexibility to define your region.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'Windows 11', 'Accessibility', 'User Research'],
    assets: {
      hero: '/images/projects/snipping_tool/screen_recorder.jpg',
    }
  },
  {
    id: 'sound-recorder',
    title: 'Sound Recorder',
    description: 'Led design to improve overall intuitiveness for the sound recorder experience by rethinking the recording flow. Brought an end to end single track editing experience right to dev handoff but unfortunately org priorties shift and we lost funding for the feature. It still remains one of my favorite projects.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'Windows 11', 'Design Systems'],
    assets: {
      hero: '/images/projects/Sound_recorder/single_track_editing.jpg',
      video: '/images/projects/Sound_recorder/sound_recorder_recording_trimmed.mp4',
    }
  },
  {
    id: 'microsoft-store-ai-reviews',
    title: 'Microsoft Store',
    description: 'Kicking off at the start of the AI generation boom, an egineer and myself quickly put together a feature to create summaries of reviews in the microsoft store to reduce the time and effort required to get an idea of what people are saying about a specific app.',
    category: 'design',
    year: 2024,
    client: 'Microsoft',
    role: 'Senior Product Designer',
    technologies: ['Figma', 'Windows 11', 'AI/ML', 'Design Systems'],
    assets: {
      hero: '/images/projects/Store/AI_generated_review_summary.jpg',
    }
  },
  {
    id: 'paint-redesign',
    title: 'Paint Visual Redesign',
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