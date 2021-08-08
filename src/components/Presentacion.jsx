import React from 'react'
import styled from 'styled-components'
import imgLogoPre from '../assets/imgLogoPre'
import imgLogoPreAb from '../assets/imgLogoPreAb'

const GridContainer = styled.div`
    margin-top: 328px;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    grid-gap: 5px;
    grid-template-areas:
    "area1"
    "area2";

    @media (max-width:768px){
        margin-top: 200px;
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

const ImgLogPre1 = styled.img`
    padding: 0.7em;

    @media (max-width:768px){
        max-width:100%;
    }
`

const ImgPuntos = styled.img`
    padding: 0.7em;
    margin-bottom: 20px;

    
    @media (max-width:768px){
        max-width:100%;
    }
`
const ImgNombreY = styled.img`
    padding-right: 10px;    
    
    @media (max-width:768px){
        max-width:100%;
    }
`

const ImgNombreB = styled.img`
    margin-bottom: 7px;
        
    @media (max-width:768px){
        max-width:100%;
    }
`
 
function Presentacion() {
    return (
        <GridContainer>
            
            {/*Agregar el color de fondo al componente*/}
            <style>{"body { background-color: #7F5AF0; }"}</style>

            <Item1>
                <ImgLogPre1 src={imgLogoPre.img1} alt="Logo"/>
                <ImgPuntos src={imgLogoPre.img2} alt="Logo"/>
                <ImgPuntos src={imgLogoPre.img3} alt="Logo"/>
                <ImgLogPre1 src={imgLogoPre.img4} alt="Logo"/>
           
            </Item1>
            <Item2>  
                <ImgNombreB src={imgLogoPreAb.img1} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img2} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img3} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img4} alt='Nombre'/>
                <ImgNombreY src={imgLogoPreAb.img5} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img6} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img7} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img8} alt='Nombre'/>
                <ImgNombreB src={imgLogoPreAb.img9} alt='Nombre'/>
            </Item2>
            
        </GridContainer>
    )
}

export default Presentacion
