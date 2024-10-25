import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import {
  FaCommentDots,
  FaTools,
  FaBed,
  FaFire,
  FaBrain,
  FaClock,
  FaUserAltSlash,
  FaLightbulb,
} from 'react-icons/fa' // Updated icons

import alvinaNotFunImage from '../public/static/images/alvina-notfun.jpg'
import stephanieNotFunImage from '../public/static/images/stephanie-notfun.jpg'

const softSkills = [
  { name: 'Yapper', icon: FaCommentDots },
  { name: 'Fixing Things I Broke (Eventually)', icon: FaTools },
  { name: 'Napping (Professional)', icon: FaBed },
  { name: 'Burning Food', icon: FaFire },
  { name: 'Random bursts of inspiration at 2 AM', icon: FaLightbulb },
]

function SoftSkill({ skill }) {
  const { name, icon: Icon } = skill
  return (
    <div className="flex items-center space-x-4">
      <Icon className="h-6 w-6 text-primary-500" />
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
    </div>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hi, I'm Curtis Warcup. I'm a software engineer and a lifelong learner. I'm passionate about building great software and sharing what I learn along the way."
        />
      </Head>
      <Container className="mt-10">
        <div className="mb-10 flex justify-center gap-10">
          <Image
            src={alvinaNotFunImage}
            alt="Alvina"
            width={300}
            height={300}
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
          <Image
            src={stephanieNotFunImage}
            alt="Stephanie"
            width={300}
            height={300}
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>

        <div className="lg:text-left">
          <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi! Alvina & Stephanie Here!
          </h1>
          <div className="mt-6 space-y-7 text-left text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I would actually write out a paragraph here for our quick introduction but I'm kind of
              lazy. - Alvina
            </p>
          </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            My Soft Skills
          </h2>
          <div className="mt-6 space-y-4">
            {softSkills.map((skill) => (
              <SoftSkill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
