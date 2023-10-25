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

export async function getProjects() {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'VITC MUN 2023 Official Website',
      area: 'React Tailwind',
      image: 'https://raw.githubusercontent.com/VITCMUN-2023/VITCMUN23/main/VITCMUN.png?token=GHSAT0AAAAAACHIXR73L6JC54PBPUMLQCBUZJYVLSQ',
      imageAlt: 'VITC MUN 2023 Official Website by Rumman, Ojas and Shaad',
      repo: '',
      url: 'https://vitcmun23.vercel.app/',
      color: '#4D4E52',
    },
    {
      id: 1,
      name: 'De School Mate',
      area: 'HTML CSS JS',
      image:
        'https://user-images.githubusercontent.com/95229740/220142233-f9d98419-d3a0-446f-9ab0-b75ab6c48711.png',
      imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
      repo: '',
      url: 'https://github.com/SpandanM110/De-SchoolMate/',
      color: '#23393D',
    },
    {
      id: 2 ,
      name: 'Avocado Analytics',
      area: 'Flask Dash',
      image: 'https://raw.githubusercontent.com/srummanf/Avocado-Analysis/main/image/README/1698215121285.png',
      imageAlt: 'Avocado Analytics',
      repo: '',
      url: 'https://github.com/srummanf/Avocado-Analysis',
      color: '#292E36',
    },
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
