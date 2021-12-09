import React from 'react'
import { useRef } from 'react'
import useScrollSnap from 'react-use-scroll-snap'
import NavBar from '../Components/NavBar/NavBar'
import PresentationCard from '../Components/Cards/PresentationCard'
import ProjectsCard from '../Components/Cards/ProjectsCard'
import BlogCard from '../Components/Cards/BlogCard'
import ContactCard from '../Components/Cards/ContactCard'

export default function HomePage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 60, delay: 60 });
    return (
        <div className="App" ref={scrollRef}>
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
