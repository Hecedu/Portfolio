import React from 'react'
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { SocialIcon } from 'react-social-icons'

export default function BlogCard() {
    return (
        <div className="d-flex align-items-center vh-100">
            <Container className="text-center ">
                <FadeIn transitionDuration={750} delay={750}>
                    <h1 className="my-1 display-3 fw-bold">My Personal Blog</h1>
                </FadeIn>
                <hr className="my-4" />
                <p className="lead">
                    <NavLink className="btn btn-primary btn-lg" to="/blog">
                        Go to my blog
                    </NavLink>
                </p>
            </Container>

        </div>
    )
}
