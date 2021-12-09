import React from 'react'
import PresentationCard from '../Components/Cards/PresentationCard'
import ProjectsCard from '../Components/Cards/ProjectsCard'
import BlogCard from '../Components/Cards/BlogCard'
import ContactCard from '../Components/Cards/ContactCard'

export default function HomePage() {
    return (
        <div className="App">
            <div id="about" className="slide">
                <PresentationCard />
            </div>
            <div id="projects" className="slide">
                <ProjectsCard />
            </div>
            <div id="blog" className="slide">
                <BlogCard />
            </div>
            <div id="contact" className="slide">
                <ContactCard />
            </div>

        </div>
    )
}
