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
    name: 'vetrina',
    area: 'NextJS Tailwind Framer-Motion',
    image:
      'https://github.com/srummanf/vetrina/blob/main/public/images/opengraph-cover.png?raw=true',
    imageAlt: 'vetrina',
    link: 'https://github.com/srummanf/vetrina',
    color: '#1D1D26',
  },
   {
    id: 2,
    name: 'DevHub',
    area: 'NextJS Tailwind Framer-Motion',
    image:
      'https://github.com/srummanf/Devhub/blob/main/public/og-image.png?raw=true',
    imageAlt: 'devhub',
    link: 'https://github.com/srummanf/Devhub',
    color: '#1E1D26',
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
