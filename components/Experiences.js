import { useState, useEffect } from 'react'
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa'

function ExperienceItem({ title, company, description, date, icon: Icon, isVisible }) {
  return (
    <div
      className={`mb-8 flex items-start space-x-4 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-zinc-100">{title}</h3>
        <p className="text-sm font-medium text-gray-400 dark:text-gray-300">{company}</p>
        <time className="block text-sm text-gray-600 dark:text-gray-400">{date}</time>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function Experiences() {
  const [visibleIndexes, setVisibleIndexes] = useState([])

  const experiences = [
    {
      title: 'React Developer',
      company: 'Freelance',
      description:
        'Turning Figma mockups to somehow functioning websites with questionable load times',
      date: 'September 2020 - May 2023',
      icon: FaGraduationCap,
    },
    {
      title: 'Professional Yapper',
      company: 'Various Companies',
      description:
        'Master of meetings, champion of icebreakers, the ultimate expert in saying a lot without saying much.',
      date: 'January 2023',
      icon: FaStar,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline')
      const timelineItems = document.querySelectorAll('.timeline-item')

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setVisibleIndexes((prevIndexes) =>
            prevIndexes.includes(index) ? prevIndexes : [...prevIndexes, index]
          )
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount in case some items are already in view

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-zinc-100">My Experiences</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <ExperienceItem
              title={exp.title}
              company={exp.company}
              description={exp.description}
              date={exp.date}
              icon={exp.icon}
              isVisible={visibleIndexes.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
