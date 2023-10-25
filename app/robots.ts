import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const URL ='https://srummanf.vercel.app/'

  return {
    rules: {
      userAgent: ['Googlebot', '*'],
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
