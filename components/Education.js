import { useState, useEffect } from 'react'

function EducationCard({ degree, institution, date, description, isVisible }) {
  return (
    <div
      className={`transform transition-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } mb-8 rounded-lg bg-gray-800 p-6 text-white shadow-lg duration-1000 ease-in-out`}
    >
      <h3 className="text-xl font-semibold ">{institution}</h3>
      <p className="text-sm  text-gray-600 dark:text-gray-400">{degree}</p>
      <time className="mb-3 block text-sm text-gray-600 dark:text-gray-400">{date}</time>
      <p className=" text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default function Education() {
  const [visibleIndexes, setVisibleIndexes] = useState([])

  const education = [
    {
      degree: 'Bachelor of Doomscrolling',
      institution: 'University of Toronto',
      date: 'September 2020 - April 2026 (if I make it)',
      description: 'GPA: Bad :/',
    },
    {
      degree: 'High School Diploma',
      institution: 'Some High School',
      date: 'September 2018 - June 2022',
      description: 'Graduated somehow?',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.education-card')

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setVisibleIndexes((prevIndexes) =>
            prevIndexes.includes(index) ? prevIndexes : [...prevIndexes, index]
          )
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check to load visible cards immediately

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-zinc-100">Education</h2>
      <div className="education-cards">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <EducationCard
              degree={edu.degree}
              institution={edu.institution}
              date={edu.date}
              description={edu.description}
              isVisible={visibleIndexes.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
