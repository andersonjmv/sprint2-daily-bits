import React from "react";
import styled from "styled-components";
import X from "../assents/x.png";
import Barrita from "../assents/progress-bar.png";
import Hearty from "../assents/heart.png";
import AvatarMale  from "../assents/figure-male.png";
import styles from "./styles.css"

/* Header */

const Header = styled.div`
  background: #16161a;
   height: 8.75vh;
  display: grid;
  grid-template-columns: repeat(4, 16vw 66vw 8vw 8vw);
`;
const Equis = styled.img`
  color: white;
`;
const Barra = styled.img`
width: 60vw;
`;

const Heart = styled.img`
  color: red;
`;

/* End Header */




/* Avatar y preguntas */

const ContainerAvatar = styled.div`
 height: 35.15vh;
    display: grid;
    grid-template-columns: 20.83vw 75vw;
    `;

const Avatar = styled.img`
 width: 16.83vw;
    height: 24.84vh;
    margin-left: 2.5vh;
    margin-right: 2.5vh;
    margin-top: 2.5vh;
    margin-bottom: 7.81vh;
`;


const PreguntaAvatar = styled.p`
margin-left: 5.5vh;
      margin-right: 2.5vh;
      margin-top: 5.5vh;
      margin-bottom: 4.81vh;   
    font-size: 3.4vh;
    font-weight: 700;
    background: #16161a !important;   
    width: 65vw;
    color: #fff;
`;



/* End Avatar y preguntas */ 




/* Container & input options */ 

const ContainerPreguntas = styled.div`
    height: 30.75vh;
    padding: 0.625vh 0.625vh 0.625vh 0.625vh;
    background: #16161a !important;
`;


const ContainerLabel = styled.div`
  background: #232e35 !important;
`;

const label1 = styled.label`
  background: #232e35 !important;
  border-radius: solid 0.625vw white;
  margin-left: 2vh;
  margin-top: 2vh;
  padding-left: 4vw;
  align-items: center;
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: space-between;
`;

const label2 = styled.label`
  background: #232e35 !important;
  border-radius: solid 0.625vw white;
  margin-left: 2vh;
  margin-top: 2vh;
  padding-left: 4vw;
  align-items: center;
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: space-between;
`;

const label3 = styled.label`
  background: #232e35 !important;
  border-radius: solid 0.625vw white;
  margin-left: 2vh;
  margin-top: 2vh;
  padding-left: 4vw;
  align-items: center;
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: space-between;
`;


const Input = styled.input`
width: 3.7vh;
    height: 3.7vh;
    background: #232e35 !important;
    margin-right: 2vh;
    margin-top: 2vh;
   margin-bottom: 2vh;
`;

const BtnCheck = styled.button`
  padding: 2.5vh 2.5vh 2.5vh 2.5vh;
  background: #d4caf3 !important;
  border-radius: 2.5vh;
  width: 92vw;
  margin: 2.5vw 4vw 2.5vw 4vw;
  font-weight: bold !important;
`;



/* End Container & input options */ 

const Footer= styled.div`
    width: 100vw;
    height: 12.8vh;
    font-weight: bold !important;
    margin-top: 10vh;
    background-color:#232e35;
`;



 const Questions = () => {
  return (
  
    <div>
      <Header>
        <Equis src={X} />
        <Barra src={Barrita} />
        <Heart src={Hearty} />
        </Header>

        <ContainerAvatar > 
        <Avatar  src={AvatarMale} />
        <PreguntaAvatar />
        </ContainerAvatar>
        <ContainerPreguntas>
   
      <ContainerLabel > <label1> <Input /> </ label1> </ ContainerLabel>      

      <ContainerLabel > <label2> <Input /> </ label2> </ ContainerLabel>      

      <ContainerLabel > <label3> <Input /> </ label3> </ ContainerLabel>
      
      </ ContainerPreguntas>
      <Footer>
   <BtnCheck className="button" value='COMPROBAR' />
   </Footer>
      
    </div>
  )
}


export default Questions;