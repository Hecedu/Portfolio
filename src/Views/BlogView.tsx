import React from 'react'
import { Container } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import ReactHtmlParser from 'react-html-parser';
import { SocialIcon } from 'react-social-icons';
import TypistLoop from '../Components/Custom/TypistLoop';
import NavBar from '../Components/NavBar/NavBar';

export default function BlogView() {
    const html = '<div><h1 className="my-1 display-1 fw-bold">Blog Post 1</h1><hr className="my-4" /><h2>Example HTML strings</h2></div>';
    return (
        <div>
            <div className="d-flex align-items-top">
                <Container className="text-left">
                    <div>{ReactHtmlParser(html)}</div>
                </Container>
            </div>
        </div>
    )
}
