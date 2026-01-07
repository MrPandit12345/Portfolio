import React from 'react'
import About from '../_component/About'
import Skills from '../_component/Skills'
import Projects from '../_component/Projects'
import Contact from '../_component/Contact'

const page = () => {
  return (
    <div>
       <main className="mt-24 overflow-y-auto">
      <section
        id="about"
        className="px-6 py-12 border-b border-gray-700"
      >
        <About />
      </section>

      <section
        id="skills"
        className="mt-25 px-6 py-12 border-b border-gray-700"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="mt-25 px-6 py-12 border-b border-gray-700"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="mt-30 px-6 py-12"
      >
        <Contact />
      </section>
    </main>
    </div>
  )
}

export default page
