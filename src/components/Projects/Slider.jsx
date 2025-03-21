import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1739806284/oo4adgg99k5aqzvgucmy.png",
    disc: "Politikos OTT is a news-centric OTT platform for Android TV, delivering live news, updates, and category-wise content through an intuitive interface",
    link: "https://play.google.com/store/apps/details?id=com.IMW.Politikos&hl=en_IN"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1736955039/imw_ugn1sw.png",
    disc: "Politikos is PWA designed to provide users with the latest news and empower them to create and share stories based on their location or preferred categories. The app works seamlessly across web, Android, and iOS platforms, delivering a unified user experience.",
    link: "https://m.politikos.in/news"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156366/lts_fqf3re.png",
    disc: "Mobile app is for Vehicle Owners, Drivers and Vendors working in Logistics who want to attach their mini truck, trucks to Letstransport.",
    link: "https://play.google.com/store/apps/details?id=in.letstransport.supply&hl=en&utm_source=website&utm_campaign=for_drivers_page_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156493/datastudio_yztxju.png",
    disc: "A web-based SaaS platform providing the only self-service solution for end-to-end Data + AI operations tailored for the industrial sector.",
    link: "https://3535353535.azuredeepiq.com/workflow"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1739805647/r9uft7fphmrslrymsody.png",
    disc: "The Drilling App is a specialized solution for well drilling operations, enabling users to compare two wells, analyze drilling performance, and visualize key metrics",
    link: "https://drillingappreact.3535353535.azuredeepiq.com/"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1682156806/taptap_xnu2m3.png",
    disc: "Mobile app for contactless payment system for wristband. manage cards/transaction  at your fingertips (iOS & Android)",
    link: "https://github.com/Akhiiii"
  },
  {
    img: "https://res.cloudinary.com/dnovddpqv/image/upload/v1682159548/ss_ftifeh.png",
    disc: "Android App Saving Circle based on chit fund savings scheme in India.",
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
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
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