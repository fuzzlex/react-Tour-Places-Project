import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
`;
const Wrapper = styled.div`
  width: 30vw;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
  margin:1rem 0;

`;
const ImageWrapper = styled.div`
  position: absolute;
  bottom: -8rem;
  width: 102%;
  height: 30.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin:1.1rem 0;
  :hover {
    opacity: 1;
    bottom: 0;
    transition: opacity 0.8s, bottom 0.5s;
  }
`;
const Content = styled.h1`
  color: white;
`;
const Desc = styled.p`
  color: white;
  font-size: 1rem;
  text-align:center;                          
`;

const Card = (props) => {
  return (
    <Container>
      {props.allData.map((e) => {
        return (
          <Wrapper>
            <Image src={e.image}></Image>
            <ImageWrapper>
              <Content> {e.title} </Content>
              <Desc> {e.desc} </Desc>
            </ImageWrapper>
          </Wrapper>
        )
      })}
    </Container>
  )
};

export default Card;
