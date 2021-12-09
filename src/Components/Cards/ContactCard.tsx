import React from 'react'
import { Container } from 'react-bootstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { SocialIcon } from 'react-social-icons'

export default function ContactCard() {
    return (
            <div className="d-flex align-items-center vh-100">
                <Container className="text-center ">
                    <FadeIn transitionDuration={750} delay={750}>
                        <h1 className="my-1 display-3 fw-bold">Contact Me!</h1>
                    </FadeIn>
                    <hr className="my-4" />
                    <h4>Email: hector.maganahdez@gmail.com</h4>
                    <h4>Phone: +801 822 7188</h4>

                    <Container className="d-flex justify-content-center">
                        <SocialIcon className="mx-1" url="https://docs.google.com/document/d/1hGIn6Vm02KjFbnqe0HuAvZsrBJLUpZqlkS8q5YxXr28/edit?usp=sharing" />
                        <SocialIcon className="mx-1" url="https://github.com/Hecedu" />
                    </Container>
                </Container>
            </div>
    )
}
