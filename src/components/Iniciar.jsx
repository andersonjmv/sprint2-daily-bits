import React from 'react'
import styled from 'styled-components'
import rectLog from '../assets/img/rectLog.png'
import { IoLogoGoogle } from "react-icons/io5";
import LineIniciarS from '../assets/img/LineIniciarS.png'

const GridContainerIniciar = styled.div`
    margin-top: 30px;
    text-align: center;  
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: auto;
    grid-gap: 2px;
    grid-template-areas:
    "area1"
    "area2"
    "area3"
    "area4"
    "area5"
    "area6";

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
padding-top:10px;

`

const Item6 = styled.div`
text-align: center;  
grid-area: area6;
  
`
const TituloIniciar = styled.h1`
    color: white;    
`
const ImgLogoIniciar = styled.img`
@media (max-width:768px){
    max-width:100%;
}
`
const BotonGoogle = styled.button`

text-decoration:none;
font-weight: 600;
font-size: 20px;
color:#ffffff;
width: 328px;
height: 48px;
padding-top:10px;
padding-bottom:15px;
padding-left:40px;
padding-right:40px;
background-color: #EF4565;
border-radius: 10px;


@media (max-width:768px){
    max-width:100%;
}
`

const FormIniciar = styled.form`

@media (max-width:768px){
    max-width:100%;
}
`

const FormInputIniciar = styled.input`
    &::placeholder{
        font-size: 16px;
        padding-left:15px;
       
    }
    border-radius: 10px;
    width: 328px;
    height: 48px;

@media (max-width:768px){
    max-width:100%;
}
`

const FormLabelIniciar = styled.label`
    text-align: left;  
    color: white;
    padding-left:15px;

@media (max-width:768px){
    max-width:100%;
}
`


const LabelInput = styled.div`
    text-align: center;  
    color: white;
    font-size: 16px;
    padding-bottom:15px;

@media (max-width:768px){
    max-width:100%;
    padding-left:15px;
    text-align: left; 
}
`

const ParrafoOlvContIn = styled.p `
    color: white;
    font-size: 16px;

    & > a {
        color: green;
    }

@media (max-width:768px){

}
`

const ParrafoInsIni = styled.p `
    color: white;
    font-size: 16px;

    & > a {
        color: green;
    }

@media (max-width:768px){

}
`

function Iniciar() {
    return (
       
        <GridContainerIniciar >
        {/*Agregar el color de fondo al componente*/}
        <style>{"body { background-color: black; }"}</style>
        <Item1>
            <ImgLogoIniciar src={rectLog} />
        </Item1>

        <Item2>
            <TituloIniciar>Iniciar sesión</TituloIniciar>
        </Item2>

        <Item3>

        <BotonGoogle href=""><IoLogoGoogle /> Continuar con Google</BotonGoogle>      

        </Item3>

        <Item4>
        <img src={LineIniciarS} alt="Linea"/>
        </Item4>
        
        <Item5>
        <FormIniciar>
        <LabelInput>
        <FormLabelIniciar for="correo">Correo electrónico</FormLabelIniciar>
        </LabelInput>
        <FormInputIniciar type="text" id="correo" name="correo" placeholder="Ingrese su correo electrónico"/>
        </FormIniciar>
        </Item5>
        
        <Item6>
        <ParrafoOlvContIn><a href="#">¿Se te olvidó tu contraseña?</a></ParrafoOlvContIn>
        <ParrafoInsIni>¿Aún no tienes una cuenta? <a href="#">Inscribirse</a></ParrafoInsIni>
        </Item6>
           
        </GridContainerIniciar>
       
    )
}

export default Iniciar
