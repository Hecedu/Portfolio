import React from 'react'
import { Container } from 'react-bootstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'
import TypistLoop from '../Custom/TypistLoop'
import { SocialIcon } from 'react-social-icons'

export default function PresentationCard() {
    return (
        <div className="d-flex align-items-center home-card">
            <Container className="text-center ">
                <FadeIn transitionDuration={750} delay={750}>
                    <h1 className="my-1 display-1 fw-bold">Héctor Magaña</h1>
                    <TypistLoop strings={[
                        'React Dev',
                        'Unity 3D Dev',
                        'ASP.NET Dev',
                        'Xamarin.Forms Dev',
                        'Artist',
                        'Game Designer',
                        'Learner',
                        'Problem Solver',
                        'Algorithm Lover',
                        'Math Nerd']} />
                    <p className="my-1 fs-5">Welcome to my portfolio.</p>
                </FadeIn>
                <hr className="my-4" />
                <Container className="d-flex justify-content-center">
                    <SocialIcon className="mx-1" url="https://www.linkedin.com/in/h%C3%A9ctor-maga%C3%B1a/" />
                    <SocialIcon className="mx-1" url="https://github.com/Hecedu" />
                </Container>
            </Container>

        </div>
    )
}
