import React from "react";
import { MdCode, MdDeveloperMode, MdMovie } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaNetworkWired, FaReact } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdCode}
            title={"Frontend Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaReact}
            title={"React / React Native Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={AiFillAndroid}
            title={"Android App Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Web App Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={MdDeveloperMode}
            title={"Mobile App Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaNetworkWired}
            title={"Backend Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdMovie}
            title={"OTT App Development"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
