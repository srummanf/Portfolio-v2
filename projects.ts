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
  {
    id: 0,
    name: 'Mumin',
    area: 'HTML CSS JS',
    image:
      'https://raw.githubusercontent.com/srummanf/Mumin---HTML-CSS-JS/main/image/README/1698211960127.png',
    imageAlt: 'Mumin: Project of Remembrance',
    link: 'https://github.com/srummanf/Mumin---HTML-CSS-JS',
  },
  {
    id: 2,
    name: 'Blog Website',
    area: 'Express MongoDB',
    image:
      'https://raw.githubusercontent.com/srummanf/Blog---MEN-Stack/main/image/README/1698214295013.png',
    imageAlt: 'Blog Website',
    link: 'https://github.com/srummanf/Blog---MEN-Stack',
    color: '#E3E3E3',
  },
  {
    id: 3,
    name: 'ROS AI',
    area: 'NextJS Flowbite',
    image:
      'https://raw.githubusercontent.com/srummanf/ROS-AI/main/image/README/1698216588496.png',
    imageAlt: 'Revolution of Speaking : ROS AI',
    link: 'https://github.com/srummanf/ROS-AI',
    color: '#E3E3E3',
  },
  {
    id: 4,
    name: 'Personal Portfolio v1',
    area: 'HTML SASS',
    image:
      'https://raw.githubusercontent.com/srummanf/portweb/main/image/README/1698217274619.png',
    imageAlt: 'Personal Portfolio v1',
    link: 'https://github.com/srummanf/portweb',
    color: '#E3E3E3',
  },
]
