'use server'

import { Octokit } from 'octokit'


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
      id: 0,
      name: "Cloud Digital Leader Track",
      area: "Google Cloud Skills Boost",
      url: "Credential ID cpPO8YLC",
      image: "/assets/GCDLTrack.png",
      imageAlt: "Cloud Digital Leader Track",
      color: "#4D4E52",
    },
    {
      id: 1,
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      area: " Amazon Web Services Training and Certification",
      url: "https://www.credly.com/badges/a4c3045e-468f-4e63-b5e4-e2d50e1ace86/linked_in_profile",
      image: "/assets/AWSCPBadge-removebg-preview.png",
      imageAlt: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      color: "#4D4E52",
    },
    {
      id: 2,
      name: "Supervised Machine Learning: Regression and Classification",
      area: " Coursera - Standford University Online, DeepLearning.AI",
      url: "https://www.coursera.org/account/accomplishments/verify/NYNFBHJ83YG6",
      image: "/assets/ML1.png",
      imageAlt: "Supervised Machine Learning: Regression and Classification",
      color: "#4D4E52",
    },
    {
      id: 3,
      name: "Foundations of User Experience (UX) Design",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/NT5B5MZA7QMQ",
      image: "/assets/UI1.png",
      imageAlt: "Foundations of User Experience (UX) Design",
      color: "#4D4E52",
    },
    {
      id: 4,
      name: "Start the UX Design Process: Empathize, Define, and Ideate",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/XPJ45X86N3TN",
      image: "/assets/UI2.png",
      imageAlt: "Start the UX Design Process: Empathize, Define, and Ideate",
      color: "#4D4E52",
    },
    {
      id: 5,
      name: "Build Wireframes and Low-Fidelity Prototypes",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/6KXDSHEP6PB3",
      image: "/assets/UI3.png",
      imageAlt: "Build Wireframes and Low-Fidelity Prototypes",
      color: "#4D4E52",
    },
    {
      id: 6,
      name: "Introduction to Public Speaking",
      area: " Coursera - University of Washington",
      url: "https://www.coursera.org/account/accomplishments/verify/KAZYUSKQL7FL",
      image: "/assets/PS.png",
      imageAlt: "Introduction to Public Speaking",
      color: "#4D4E52",
    },
  ];
  return Certificates;
}


// export async function getProjects() {
//   const sideProjects: Sideproject[] = [
//     {
//       id: 0,
//       name: 'VITC MUN 2023 Official Website',
//       area: 'React Tailwind',
//       image: 'https://raw.githubusercontent.com/VITCMUN-2023/VITCMUN23/main/VITCMUN.png?token=GHSAT0AAAAAACHIXR73L6JC54PBPUMLQCBUZJYVLSQ',
//       imageAlt: 'VITC MUN 2023 Official Website by Rumman, Ojas and Shaad',
//       repo: '',
//       url: 'https://vitcmun23.vercel.app/',
//       color: '#4D4E52',
//     },
//     {
//       id: 1,
//       name: 'De School Mate',
//       area: 'HTML CSS JS',
//       image:
//         'https://user-images.githubusercontent.com/95229740/220142233-f9d98419-d3a0-446f-9ab0-b75ab6c48711.png',
//       imageAlt: 'Poimandres Neovim color scheme by Oliver Cederborg',
//       repo: '',
//       url: 'https://github.com/SpandanM110/De-SchoolMate/',
//       color: '#23393D',
//     },
//     {
//       id: 2,
//       name: 'Avocado Analytics',
//       area: 'Flask Dash',
//       image: 'https://raw.githubusercontent.com/srummanf/Avocado-Analysis/main/image/README/1698215121285.png',
//       imageAlt: 'Avocado Analytics',
//       repo: '',
//       url: 'https://github.com/srummanf/Avocado-Analysis',
//       color: '#292E36',
//     },
//   ]

//   const projects = await Promise.allSettled(
//     sideProjects.map(async project => {
//       if (project.repo) {
//         const octokit = new Octokit({
//           auth: process.env.GITHUB_TOKEN,
//         })

//         const {
//           data: { stargazers_count: stars },
//         } = await octokit.request('GET /repos/{owner}/{repo}', {
//           owner: project.repo.split('/')[0],
//           repo: project.repo.split('/')[1],
//           headers: {
//             'X-GitHub-Api-Version': '2022-11-28',
//           },
//         })

//         return {
//           ...project,
//           stars,
//         }
//       } else {
//         return project
//       }
//     })
//   )
//   const successfulProjects = projects.filter(
//     project => project.status === 'fulfilled'
//   ) as PromiseFulfilledResult<Sideproject>[]

//   return successfulProjects.map(project => project.value)
// }
