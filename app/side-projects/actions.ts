'use server'

import { Octokit } from 'octokit'

export type Sideproject = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
  repo?: string
  stars?: number
}

export type Certificate = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
}

export async function getCertificates() {
  const Certificates: Certificate[] = [
    {
      id:0,
      name: "Certificates",
      area: "Certificates",
      url: "https://drive.google.com/drive/folders/1M6tPZJ9Qf9t4V8jz4qzXk5Z1WQ5QqQ8R?usp=sharing",
      image: "https://raw.githubusercontent.com/srummanf/Portfolio/main/public/certificate.png",
      imageAlt: "Certificates",
      color: "#4D4E52",
    }]
}


export async function getProjects() {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'VITC MUN 2023 Official Website',
      area: 'React Tailwind',
      image: '/assets/PS.png',
      imageAlt: 'VITC MUN 2023 Official Website by Rumman, Ojas and Shaad',
      repo: '',
      url: 'https://vitcmun23.vercel.app/',
      color: '#4D4E52',
    },
    // Uncomment the following lines to add more projects

    // {
    //   id: 1,
    //   name: 'De School Mate',
    //   area: 'HTML CSS JS',
    //   image:
    //     '/assets/PS.png',
    //   imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
    //   repo: '',
    //   url: 'https://github.com/SpandanM110/De-SchoolMate/',
    //   color: '#23393D',
    // },
    
  ]

  const projects = await Promise.allSettled(
    sideProjects.map(async project => {
      if (project.repo) {
        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        })

        const {
          data: { stargazers_count: stars },
        } = await octokit.request('GET /repos/{owner}/{repo}', {
          owner: project.repo.split('/')[0],
          repo: project.repo.split('/')[1],
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })

        return {
          ...project,
          stars,
        }
      } else {
        return project
      }
    })
  )
  const successfulProjects = projects.filter(
    project => project.status === 'fulfilled'
  ) as PromiseFulfilledResult<Sideproject>[]

  return successfulProjects.map(project => project.value)
}
