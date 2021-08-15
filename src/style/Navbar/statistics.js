import styled from 'styled-components'

export const Container = styled.div`
transform: translateY(110px);
`;

export const Bodies = styled.div`
margin-top: 16px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

export const Title = styled.div`
top: 16px;
position: fixed;
left: 7%;
color: white;
`;

export const Subtitle = styled.h3`
display: block;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: white;
`;

export const Estadisticas = styled.div`
display: flex;
flex-direction: row;
position: static;
border-style: solid;
border-width: 1px;
border-radius: 8px;
width: 328px;
height: 56px;
left: 16px;
top: 100px; 
padding-left: 30px;
bottom: 40px;
margin: 5px;
padding: 5px;
justify-content: space-between;
color: white;
`;

export const Estatext = styled.h2`
position: static;
left: 32px;
top: 0px;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
color: white;
`;

export const Tiempo = styled.h2`
margin-right: 20px;
font-weight: 200;
`;

export const Total = styled.h2`
margin-right: 20px;
font-weight: 200;
`;


export const Correcto = styled.h2`
color: green;
margin-right: 20px;
font-weight: 200;
`;

export const Incorrecto = styled.h2`
color: red;
margin-right: 20px;
font-weight: 200;
`;

export const Arrow = styled.img`
margin-left: 10px;
`;
