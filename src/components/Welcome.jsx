import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Image from "../assets/welcome.png";




const ContainerW =styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin:0;
`;

const Img = styled.img`
  width: 20vw!important;
  height: 20vw!important;
  @media (max-width:360px){
   width: 35vw!important;
  height: 350vh!important;
  }
  `;

const BgWelcome = { backgroundColor: "#873DEC" };





export const Welcome = () => {

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/home");
        }, 2000);
    }, []);
  return (
   
      <ContainerW style={BgWelcome} >
        <Img src={Image} />
      </ContainerW>
    
  );
};