import { getAge } from '@utils/get-age'
import { Metadata } from 'next'
import { SideProjectsShell } from './side-project-shell'

export const metadata: Metadata = {
  title: 'Side Projects',
  description: `I'm a ${getAge()} year old self-taught designer & full stack developer, focused on user experience, accessibility and modern web technologies. Currently entering in the realm of Web3 and Machine Learning.`,
}

export default function SideProjectLayout({ children }: { children: React.ReactNode }) {
  return <SideProjectsShell>{children}</SideProjectsShell>
}
