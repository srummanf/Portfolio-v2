export type Project = {
  id: number
  name: string
  area: string
  link: string
  image: string
  imageAlt: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Prompt Portal',
    area: 'NextJS Tailwind',
    image:
      'https://raw.githubusercontent.com/srummanf/AI-Prompter/main/image/README/1698125627388.png?width=200&height=900',
    imageAlt: 'Prompt Portal',
    link: 'https://github.com/srummanf/AI-Prompter',
    color: '#1D1D26',
  },

  // Uncomment the following lines to add more projects
  
  // {
  //   id: 1,
  //   name: 'Prompt Portal',
  //   area: 'NextJS Tailwind',
  //   image:
  //     'https://raw.githubusercontent.com/srummanf/AI-Prompter/main/image/README/1698125627388.png?width=200&height=900',
  //   imageAlt: 'Prompt Portal',
  //   link: 'https://github.com/srummanf/AI-Prompter',
  //   color: '#1D1D26',
  // },
  
]
