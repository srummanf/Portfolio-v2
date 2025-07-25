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
      name: 'Interactive Candle Blow Birthday Cake',
      area: 'HTML CSS JS',
      image: 'https://private-user-images.githubusercontent.com/95201340/470363586-cb3da6e6-593c-4877-9666-77ecdcd14123.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0NDU4MDEsIm5iZiI6MTc1MzQ0NTUwMSwicGF0aCI6Ii85NTIwMTM0MC80NzAzNjM1ODYtY2IzZGE2ZTYtNTkzYy00ODc3LTk2NjYtNzdlY2RjZDE0MTIzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDEyMTE0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYzNWM1ZGU2MzI0N2NiZDIzOGZhYzlhOTUwNmM2MDAzZTY4YjBmOTdlNDYzMDcyMWJkNDM3MTQ0MWNlMWU3YmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.tA0Xd6NSRuICXvACscSVDYoOdsHQB_HP8v03guGniyw',
      imageAlt: '',
      repo: '',
      url: 'https://srummanf.github.io/Interactive-Candle-Blow-Birthday-Cake/',
      color: '#4D4E52',
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
