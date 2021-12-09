import React from 'react'
import { Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
interface SwiperCardProps {
    title: string;
    content: string;
    extraInfo: string;
    links: string[];
}
export default function SwiperCard({title,content,extraInfo,links}:SwiperCardProps) {
    return (
        <div className="d-flex align-items-center h-100 border border-1 shadow-sm py-4">
            <Container>
                <h2 className={'my-3'}>{title}</h2>
                <p>{content}</p>
                <p className={'fst-italic'}>{extraInfo}</p>
                {
                    links.map((link) => {
                        return (<SocialIcon className="mx-1" url={link} />)
                    })
                }
            </Container>
        </div>
    )
}
