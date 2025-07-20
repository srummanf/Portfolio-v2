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
      name: "Advanced Learning Algorithms",
      area: " Coursera - Standford University Online, DeepLearning.AI",
      url: "https://www.coursera.org/account/accomplishments/verify/MJ8KQSUA5556",
      image: "/assets/ML2.png",
      imageAlt: "Supervised Machine Learning: Regression and Classification",
      color: "#4D4E52",
    },
    {
      id: 4,
      name: "Foundations of User Experience (UX) Design",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/NT5B5MZA7QMQ",
      image: "/assets/UI1.png",
      imageAlt: "Foundations of User Experience (UX) Design",
      color: "#4D4E52",
    },
    {
      id: 5,
      name: "Start the UX Design Process: Empathize, Define, and Ideate",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/XPJ45X86N3TN",
      image: "/assets/UI2.png",
      imageAlt: "Start the UX Design Process: Empathize, Define, and Ideate",
      color: "#4D4E52",
    },
    {
      id: 6,
      name: "Build Wireframes and Low-Fidelity Prototypes",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/6KXDSHEP6PB3",
      image: "/assets/UI3.png",
      imageAlt: "Build Wireframes and Low-Fidelity Prototypes",
      color: "#4D4E52",
    },
    {
      id: 7,
      name: "Conduct UX Research and Test Early Concepts",
      area: " Coursera - Google",
      url: "https://www.coursera.org/account/accomplishments/verify/34PM4Z4PB3V4",
      image: "/assets/UI4.png",
      imageAlt: "Build Wireframes and Low-Fidelity Prototypes",
      color: "#4D4E52",
    },
    {
      id: 8,
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
