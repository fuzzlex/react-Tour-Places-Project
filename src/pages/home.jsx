import Allcards from "../components/allcards";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Container = styled.div`
min-height: 100vh;
width:98vw;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-Color:rgba(55,99,77,0.3)
`
const Content = styled.h1`
color:red;
font-family: 'Corinthia', cursive;
font-weight:900;
`


const Home = () =>{
    return(
        <Container>
        <Navbar />
        <Content>POPULAR   TOUR   PLACES</Content>
        <Allcards />
        </Container>
    )
    }

export default Home;