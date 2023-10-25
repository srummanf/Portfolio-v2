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
    name: 'Tsks.app',
    area: 'Design and Development',
    image:
      'https://raw.githubusercontent.com/srummanf/AI-Prompter/main/image/README/1698125627388.png?width=200&height=900',
    imageAlt: 'Tsks task manager app by Oliver Cederborg',
    link: 'https://github.com/srummanf/AI-Prompter',
    color: '#1D1D26',
  },
  {
    id: 0,
    name: 'Miinto 2.0',
    area: 'Design and Development',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png',
    imageAlt: 'Miinto 2.0 by Oliver Cederborg',
    link: '/project/miinto',
  },
  {
    id: 2,
    name: '100 days of UI',
    area: 'Design',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/15230513/media/7397c1314ebf5d5090efa3c2af032deb.png',
    imageAlt: '100 days of UI by Oliver Cederborg',
    link: '/project/100-days-of-ui',
    color: '#E3E3E3',
  },
  {
    id: 3,
    name: '100 days of UI',
    area: 'Design',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/15230513/media/7397c1314ebf5d5090efa3c2af032deb.png',
    imageAlt: '100 days of UI by Oliver Cederborg',
    link: '/project/100-days-of-ui',
    color: '#E3E3E3',
  },
]
