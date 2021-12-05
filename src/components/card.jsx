import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  margin: 0 3px 10px 0;
  position: relative;
`;
const Image = styled.img`
  width: 80%;
  height: 20rem;
  object-fit: cover;
  border: 0.25rem solid black;
  border-radius: 10px;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  position: absolute;
  bottom: -5rem;
  width: 81%;
  height: 20.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
