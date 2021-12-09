import React from 'react'
import { Container } from 'react-bootstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper-bundle.css"
import SwiperCard from '../Custom/SwiperCard';
import SwiperCore, { Autoplay } from 'swiper';


export default function ProjectsCard() {
    SwiperCore.use([Autoplay]);
    return (
        <div className="d-flex align-items-center home-card">
            <Container fluid className="text-center m-0 p-0">
                <FadeIn transitionDuration={1500} delay={1500}>
                    <h1 className="my-1 display-3 fw-bold">Some of my Projects:</h1>
                    <p>feel free to swipe!</p>
                </FadeIn>
                <hr className="m-3" />
                <Swiper slidesPerView={1} spaceBetween={0} loop={true} className="p-1" grabCursor={true} autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": true
                }}>
                    <SwiperSlide>
                        <SwiperCard title={'Cheat Squad'}
                            content={'Cheat Squad is a 2-player game your main objective is to throw your opponent out of the stage using your gun.'}
                            extraInfo={'Developed using Unity 2D and C#.'}
                            links={['https://b-llage.itch.io/cheat-squad', 'https://github.com/Hecedu/Cheat-Squad']}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard title={'imCARD website'}
                            content={'Created a responsive business website for imCARD the leading number portability provider in El Salvador.'}
                            extraInfo={'Developed using HTML 5 and CSS.'}
                            links={['https://imcard.com.sv/']}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard title={'Yu-Gi-Oh! Collection Manager'}
                            content={'Yu-Gi-Oh! app that allows the user to search cards from the community Yu-Gi-Oh! API and add them to their collection.'}
                            extraInfo={'Developed using React.Js, API consumption using Axios.'}
                            links={['https://hecedu.github.io/YuGiOh-Card-Manager/']}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard title={'Health Tracker App'}
                            content={'Health logger app in Xamarin.Forms. It connects to a third party API for food searches and retrieves data from my own custom identity authorizer and cloud storage API.'}
                            extraInfo={'Developed using Xamarin.Forms'}
                            links={['https://github.com/Hecedu/HealthLogger']}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard title={'Health Tracker Storage and Authentication API'}
                            content={'A secured identity and data storage API for my mobile application. used OAUTH to aunthenticate an user and then give them access to their data which is stored in a database. It was previously deployed in Azure Cloud Services.'}
                            extraInfo={'Developed using ASP.NET'}
                            links={['https://github.com/Hecedu/HealthTrackerAPI']}
                        />
                    </SwiperSlide>
                </Swiper>
            </Container>

        </div >
    )
}
