// Types

type Project = {
  title: string
  description: string
  link: string
  technologies: string[]
}

// Content

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description:
      'The website you are currently visiting. Web app to showcase all the stuff I do at a professional level. Who I am, studies, career, projects... All in one place.',
    link: 'https://github.com/sergiopmdeveloper/portfolio',
    technologies: ['React', 'TypeScript'],
  },
  {
    title: 'Project 2',
    description:
      'This is the description of the second project. This block is going to be replaced by a real project soon. Meanwhile, you can check the rest of my projects.',
    link: 'https://github.com/sergiopmdeveloper?tab=repositories',
    technologies: ['Tech 1', 'Tech 2'],
  },
  {
    title: 'Project 3',
    description:
      'This is the description of the third project. This block is going to be replaced by a real project soon. Meanwhile, you can check the rest of my projects.',
    link: 'https://github.com/sergiopmdeveloper?tab=repositories',
    technologies: ['Tech 1', 'Tech 2'],
  },
  {
    title: 'Project 4',
    description:
      'This is the description of the fourth project. This block is going to be replaced by a real project soon. Meanwhile, you can check the rest of my projects.',
    link: 'https://github.com/sergiopmdeveloper?tab=repositories',
    technologies: ['Tech 1', 'Tech 2'],
  },
]
