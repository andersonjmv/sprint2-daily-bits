import React from 'react'
import styled from 'styled-components'
import imgHomevacio from '../assets/imgHomevacio'

//import { } from "react-icons/io5";

const GridContainerHome = styled.div`
    margin-top: 30px;
    text-align: center;  
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto auto;
    grid-gap: 2px;
    grid-template-areas:
    "area1 area1"
    "area2 area2"
    "area3 area4"
    "area5 area6"
    "area7 area7";

    @media (max-width:768px){
        
    }
  
`

const Item1 = styled.div`
text-align: center;  
grid-area: area1;
  
`

const Item2 = styled.div`
text-align: center;  
grid-area: area2;
  
`

const Item3 = styled.div`
text-align: center;  
grid-area: area3;
  
`

const Item4 = styled.div`
text-align: center;  
grid-area: area4;
  
`

const Item5 = styled.div`
text-align: center; 
grid-area: area5;

`

const Item6 = styled.div`
text-align: center;  
grid-area: area6;
  
`

const Item7 = styled.div`
text-align: center;  
grid-area: area7;
  
`

const TituloParrHome = styled.p`
color: white;
font-size: 18px;
font-weight: 500;
line-height: 25px; 
vertical-align: top;
letter-spacing: 0.15%;

@media (max-width:768px){
    padding-left:22px;
    padding-right:22px;
}
  
`
const ParrafoBotHome = styled.p`
padding-bottom: -10px;
font-size: 16px;
color: white;
`

const ImgTemHomevacio  = styled.img`
text-align: center; 
width: 72px;
height: 72px;

`





 
  
function Home() {
    return (
        <GridContainerHome>
        {/*Agregar el color de fondo al componente*/}
        <style>{"body { background-color: black; }"}</style>
        <Item1>
            <TituloParrHome>Practica tus conocimientos en la categoría que prefieras.</TituloParrHome>
        </Item1>    
            
        <Item2>
           
            <ImgTemHomevacio src={imgHomevacio.img1} alt="Html5"/>
            <ParrafoBotHome>HTML</ParrafoBotHome>
        </Item2> 
        
        <Item3>
            
            <ImgTemHomevacio src={imgHomevacio.img2} alt="Css3"/>
            <ParrafoBotHome>CSS</ParrafoBotHome>
        </Item3> 

        <Item4>
            
            <ImgTemHomevacio src={imgHomevacio.img3} alt="Js"/>
            <ParrafoBotHome>JS</ParrafoBotHome>
        </Item4> 

        <Item5>
            
            <ImgTemHomevacio src={imgHomevacio.img4} alt="Figma"/>
            <ParrafoBotHome>FIGMA</ParrafoBotHome>
        </Item5> 

        <Item6>
            
            <ImgTemHomevacio src={imgHomevacio.img5} alt="Ux"/>
            <ParrafoBotHome>UX</ParrafoBotHome>
        </Item6> 

        <Item7>
     
        </Item7> 

     

        </GridContainerHome>
    )
}

export default Home


