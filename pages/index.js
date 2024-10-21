/* eslint-disable prettier/prettier */

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Skills from '@/components/Skills'
import { Analytics } from '@vercel/analytics/react'

const MAX_DISPLAY = 6

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Skills />
      <RecentProjects MAX_PROJECTS="4" />
      <Analytics />
    </>
  )
}
