import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Hero from '../assets/hero.png'
import Round from '../assets/Round.png'
import Coding from '../assets/coding.png'
import Ar from '../assets/immersive.png'
import Seo from '../assets/seo-tag.png'
import Web from '../assets/website-content.png'
import Circle from '../assets/left-circle.png'
import Circleright from '../assets/right-circle.png'

import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className='fs-1 fw-semibold '>
                                Experienced <span>mobile and web</span> applications and website builders measuring.
                            </h2>
                            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>

                            <div className='d-flex hero-button gx-5'>
                                <Link>
                                    Contact Us
                                </Link>
                                <Link>
                                    View More
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='hero-img'>
                                <div>
                                    <img src={Hero} alt="Hero" className="main-image" />
                                </div>

                                <div className='round-bg'>
                                    <img src={Round} alt="round" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="left-circle">
                    <img src={Circle} alt="left-circle" />
                </div>
                <div className="right-circle">
                    <img src={Circleright} alt="right-circle" />
                </div>
            </section>
            <section className='service'>
                <div class="container">
                    <div class="row g-4">

                        <div class="col-lg-3 col-md-6">
                            <div class="service-card">
                                <div class="icon-wrapper icon-purple">
                                    <img src={Web} alt="Web Application" />
                                </div>
                                <div className="cont">
                                    <h3 class="service-title">Web Application</h3>
                                    <p class="service-desc">Lorem ipsum is simply</p>
                                </div>

                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6">
                            <div class="service-card">
                                <div class="icon-wrapper icon-green">
                                    <img src={Seo} alt="Web Application" />
                                </div>
                                <div className="cont">
                                    <h3 class="service-title">SEO</h3>
                                    <p class="service-desc">Lorem ipsum is simply</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6">
                            <div class="service-card">
                                <div class="icon-wrapper icon-blue">
                                    <img src={Ar} alt="Web Application" />
                                </div>
                                <div className="cont">
                                    <h3 class="service-title">AR/VR Solutions</h3>
                                    <p class="service-desc">Lorem ipsum is simply</p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6">
                            <div class="service-card">
                                <div class="icon-wrapper icon-orange">
                                    <img src={Coding} alt="Web Application" />
                                </div>
                                <div className="cont">
                                    <h3 class="service-title">Mobile Applications</h3>
                                    <p class="service-desc">Lorem ipsum is simply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="head-section">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="section-title mb-4">
                                Lorem Ipsum is simply dummy text of the printing.
                            </h1>
                            <p className="section-subtitle">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                                Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
