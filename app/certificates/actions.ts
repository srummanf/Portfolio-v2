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
      id: 1,
      name: "Introduction to Public Speaking",
      area: " Coursera - University of Washington",
      url: "https://www.coursera.org/account/accomplishments/verify/KAZYUSKQL7FL",
      image: "/assets/PS.png",
      imageAlt: "Introduction to Public Speaking",
      color: "#4D4E52",
    },
    // Uncomment the following lines to add more certificates
    // {
    //   id: 8,
    //   name: "Introduction to Public Speaking",
    //   area: " Coursera - University of Washington",
    //   url: "https://www.coursera.org/account/accomplishments/verify/KAZYUSKQL7FL",
    //   image: "/assets/PS.png",
    //   imageAlt: "Introduction to Public Speaking",
    //   color: "#4D4E52",
    // },

  ];
  return Certificates;
}
