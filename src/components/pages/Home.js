import React from 'react'
import img1 from '../images/image1.png'
import img2 from '../images/image2.png'
import img3 from '../images/image3.png'
import './Home.css'
import CardArray1 from './CardArray1'
import CardArray2 from './CardArray2'
import CardArray3 from './CardArray3'
import CardArray4 from './CardArray4'
import CardArray5 from './CardArray5'
import CardArray6 from './CardArray6'
import Card from './Card'
import SmallCard from './SmallCard'
import Button from '../Button'
import CardArray7 from './CardArray7'
import CardArray8 from './CardArray8'
import CardArray9 from './CardArray9'
import CardArray11 from './CardArray11'
import SCard from './SCard'
import Table from './Table'
import CardSlider from './CardSlider'
function Home() {
    return (
        <div className='Container'>
            <div className='main-page'>
                <div className='main-page-left'>
                    <h1 className='main-section-heading'>
                        Secure IT Solutions
                    </h1>
                    <p className='main-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='main-section-btn'><Button /></div>
                </div>
                <div className='main-page-right'>
                    <img className='main-section-image' src={img1} />
                </div>
            </div>
            <div className='second-section'>
                <div className='second-section-upper'>
                    <h1 className='second-section-heading'>
                        We are different from others.You should choose us.
                    </h1>
                    <p className='second-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='second-section-cards'>
                    {CardArray1.map((item, index) => {
                        return (
                            <Card title={item.title} para={item.para} src={item.src} />
                        )
                    })}
                </div>
            </div>
            <div className='third-section'>
                <div className='third-section-left'>
                    <img className='main-section-image' src={img3} />
                </div>
                <div className='third-section-right'>
                    <h1 className='third-section-heading'>
                        Cloud hosting Services
                    </h1>
                    <p className='third-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='third-section-lists'>
                        <div className='third-section-list1'>
                            {CardArray2.map((item, index) => {
                                return (
                                    <SmallCard title={item.title} />
                                )

                            })}
                        </div>
                        <div className='third-section-list2'>
                            {CardArray3.map((item, index) => {
                                return (
                                    <SmallCard title={item.title} />
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='third-section'>
                <div className='third-section-left'>
                    <h1 className='third-section-heading'>
                        Design and Development
                    </h1>
                    <p className='third-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='third-section-lists'>
                        <div className='third-section-list1'>
                            {CardArray4.map((item, index) => {
                                return (
                                    <SmallCard title={item.title} />
                                )

                            })}
                        </div>
                        <div className='third-section-list2'>
                            {CardArray5.map((item, index) => {
                                return (
                                    <SmallCard title={item.title} />
                                )

                            })}
                        </div>
                    </div>
                </div>
                <div className='third-section-right'>
                    <img className='main-section-image' src={img2} />
                </div>
            </div>
            <div className='second-section'>
                <div className='second-section-upper'>
                    <h1 className='second-section-heading'>
                        We are here to help.
                    </h1>
                    <p className='second-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='second-section-cards'>
                    {CardArray6.map((item, index) => {
                        return (
                            <Card title={item.title} para={item.para} src={item.src} />
                        )
                    })}
                </div>
                <div className='second-section-cards'>
                    {CardArray7.map((item, index) => {
                        return (
                            <Card title={item.title} para={item.para} src={item.src} />
                        )
                    })}
                </div>
            </div>
            <div className='fourth-section'>
                <div className='fourth-section-upper'>
                    <h1 className='fourth-section-heading'>
                        Check Some Of our Recent Projects
                    </h1>
                    <p className='fourth-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='fourth-section-cards'>
                    {CardArray8.map((item, index) => {
                        return (
                            <SCard title={item.title} label={item.label} src={item.src} />
                        )
                    })}
                </div>
                <div className='fourth-section-cards'>
                    {CardArray9.map((item, index) => {
                        return (
                            <SCard title={item.title} label={item.label} src={item.src} />
                        )
                    })}
                </div>
            </div>
            <div className='fifth-section'>
                <div className='fifth-section-upper'>
                    <h1 className='fifth-section-heading'>
                        Pricing Plans
                    </h1>
                    <p className='fifth-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='fifth-section-lower'>
                    <Table />
                </div>
                <div className='fifth-section-btn-container'>
                    <button className='fifth-section-btn'>Get it Now</button>
                    <button className='fifth-section-btn'>Get it Now</button>
                    <button className='fifth-section-btn'>Get it Now</button>
                </div>
            </div>
            <div className='sixth-section'>
                <div className='sixth-section-upper'>
                    <h1 className='sixth-section-heading'>
                        What our Clients are Saying?
                    </h1>
                    <p className='sixth-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='sixth-section-lower'>
                    <CardSlider />
                </div>
                <button className='sixth-section-btn'>Check out all views</button>
            </div>
            <div className='seventh-section'>
                <div className='seventh-section-upper'>
                    <h1 className='seventh-section-heading'>
                        Latest Valuable Insights
                    </h1>
                    <p className='seventh-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className='seventh-section-cards'>
                    {CardArray11.map((item, index) => {
                        return (
                            <Card title={item.title} para={item.para} src={item.src} />
                        )
                    })}
                </div>
            </div>
            <div className='eighth-section'>
                <div className='eighth-section-left'>
                    <img className='eighth-section-image' src={img2} />
                </div>
                <div className='eighth-section-right'>
                    <h1 className='eighth-section-heading'>
                        We would like to start your Project with us.
                    </h1>
                    <p className='eighth-section-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='eighth-section-btn'><Button /></div>
                </div>
            </div>
            <div className='footer-section'>
                <div className='footer-section-description'>
                    <h1 className='footer-section-description-heading'>Rewy</h1>
                    <p className='footer-section-description-para'>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                    </p>
                    <div className='footer-section-description-btns'>
                        <button className='footer-section-description-btn'><i className="fab fa-facebook-f"></i></button>
                        <button className='footer-section-description-btn'><i class="fab fa-instagram"></i></button>
                        <button className='footer-section-description-btn'><i class="fab fa-twitter"></i></button>
                        <button className='footer-section-description-btn'><i class="fab fa-linkedin"></i></button>
                    </div>
                </div>
                <div className='footer-section-social'>
                    <div className='footer-section-social-list'>
                        <h1 className='footer-section-social-list-heading'>Explore</h1>
                        <p className='footer-section-social-list-item'>Home</p>
                        <p className='footer-section-social-list-item'>About</p>
                        <p className='footer-section-social-list-item'>Case Studies</p>
                        <p className='footer-section-social-list-item'>Our blog</p>
                        <p className='footer-section-social-list-item'>Contact</p>
                    </div>
                    <div className='footer-section-social-list'>
                        <h1 className='footer-section-social-list-heading'>Resources</h1>
                        <p className='footer-section-social-list-item'>Our Scientists</p>
                        <p className='footer-section-social-list-item'>Testimonials</p>
                        <p className='footer-section-social-list-item'>Saas Solutions</p>
                        <p className='footer-section-social-list-item'>Case Studies</p>
                    </div>
                    <div className='footer-section-social-list'>
                        <h1 className='footer-section-social-list-heading'>Address</h1>
                        <p className='footer-section-social-list-item'><i className="fas fa-map-marker-alt"></i> 175 5th Ave, New York, NY 10010,
United States</p>
                        <p className='footer-section-social-list-item'><i className="fas fa-phone"></i> +1 (123) 456 7890</p>
                        <p className='footer-section-social-list-item'><i class="fas fa-envelope"></i> hello@rewy.com</p>
                        <p className='footer-section-social-list-item'><i class="fas fa-envelope-open"></i>  +55 785 4578964</p>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <p className='bottom-section-para'>
                    Copyright @2021 Rewy All rights reserved EnvyTheme
                </p>
                <p className='bottom-section-para'>
                    Privacy Policy | Terms & Conditions
                </p>
            </div>
        </div>
    )
}

export default Home
