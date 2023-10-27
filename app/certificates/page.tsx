import { SideProjectItem } from '@components/side-project-item'
import { getCertificates } from './actions'


export default async function Page() {
  const certificates = await getCertificates()

  return certificates.map(certificate => <SideProjectItem key={certificate.id} project={certificate} />)
}

export const revalidate = 3600
