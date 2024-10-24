import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'
import Notification from './Notification'
import Button from './Button'
import Image from 'next/image'
import Sparkle from 'react-sparkle'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props}>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="mx-auto mb-5 max-w-2xl">
      <h1 className="text-center text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        Hola, Bonjour, 你好, Hello!
      </h1>
      <p className="mt-6 mb-4 text-center text-base text-gray-600 dark:text-gray-400">
        Alvina and Stephanie here. This is our template portfolio.
      </p>
      <div className="mt-6 grid grid-cols-1 justify-center gap-y-4 lg:grid-cols-2 lg:gap-x-32">
        <div className="relative mx-auto">
          <div className="pointer-events-none absolute inset-0 z-10">
            <Sparkle
              color={['#FFC0CB', '#FFF']}
              count={10}
              minSize={7}
              maxSize={10}
              fadeOutSpeed={80}
              flickerSpeed={'slowest'}
            />
          </div>
          <Image
            src="/static/images/alvina-fun.jpg"
            alt="Alvina"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="relative mx-auto">
          <div className="pointer-events-none absolute inset-0 z-10">
            <Sparkle
              color={['#FFC0CB', '#FFF']}
              count={10}
              minSize={7}
              maxSize={10}
              fadeOutSpeed={80}
              flickerSpeed={'slowest'}
            />
          </div>
          <Image
            src="/static/images/stephanie-fun.jpg"
            alt="Stephanie"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Button href="/static/Resume.png">Download OUR Resume!!!</Button>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <SocialLink
          href="https://github.com/Cwarcup"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/curtiswarcup/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
        <CopyToClipboard
          text={{ contact: 'curtis.gwarcup@gmail.com', type: 'Email' }}
          aria-label="Send me an email"
          icon={IoMail}
        />
        <CopyToClipboard
          text={{ contact: '+1 (604) 374-4652', type: 'Phone number' }}
          aria-label="Give me a call"
          icon={IoCall}
        />
      </div>
    </div>
  )
}
