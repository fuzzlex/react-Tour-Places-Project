import styled from "styled-components";



const Container = styled.div`
width:100vw;
height:20vh;
display:flex;
align-items:center;
justify-content:center;
`;
const Ul = styled.ul`
width:80vw;
height:10vh;
background-Color:rgba(9,9,99,0.5);
border-radius:1rem 1rem 0 0;
border:2px solid black;
display:flex;
justify-content:center;
align-items:center;

`

const Li = styled.li`
margin:2rem;
list-style-type:none;
letter-spacing:2px;
color:white;
cursor:pointer;
width:7rem;
height:4rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:900;
:hover{
    Color: black;
    background-Color:white;
    transition:0.8s;


}`;




const Navbar = () =>{
    return(
        <Container>
        <Ul>
        <Li>ABOUT US</Li>
        <Li>FOR YOU</Li>
        <Li>SERVICES</Li>
        <Li>BLOG</Li>
        <Li>VLOG</Li>


        </Ul>


        </Container>
    )
}

export default Navbar;