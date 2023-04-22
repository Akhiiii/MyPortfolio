import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/dnovddpqv/image/upload/v1682145126/imw_ugn1sw.png",
        disc : "Progressive web application that allows users to check the latest news and create a local news based on their current location/category.",
        link: "https://politikos-mob-dev.highgear.io/"
    },
    {
        img : "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156366/lts_fqf3re.png",
        disc : "Mobile app is for Vehicle Owners, Drivers and Vendors working in Logistics who want to attach their mini truck, trucks to Letstransport.",
        link: "https://play.google.com/store/apps/details?id=in.letstransport.supply&hl=en&utm_source=website&utm_campaign=for_drivers_page_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    },
    {
        img : "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156493/datastudio_yztxju.png",
        disc : "Web based saas platform offer the only self-service application for end to end {Data + AI} OPs for the industrial world",
        link: "https://github.com/Akhiiii"
    },
    {
        img : "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156806/taptap_xnu2m3.png",
        disc : "Mobile app for contactless payment system for wristband. manage cards/transaction  at your fingertips (iOS & Android)",
        link: "https://github.com/Akhiiii"
    },
    {
        img : "https://res.cloudinary.com/dnovddpqv/image/upload/v1682159548/ss_ftifeh.png",
        disc : "Android App Saving Circle based on chit fund savings scheme in India.",
        link: "https://github.com/Akhiiii"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`