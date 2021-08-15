import styled from 'styled-components';

export const Container = styled.div`
align-items: center;
display: flex;
flex-direction: column;
position: relative;
background-color: rgba(22, 22, 26, 1);
`;

export const Header = styled.div`
height: 56px;
position: relative;
display: flex;
padding: 0 16px;
align-items: center
border-radius: 7px;
min-width: 360px;
`;

export const Close = styled.div`
float: left;
width: 10%;
 margin-top: 14px;
`;

export const CloseImg = styled.img`
margin-right: 4px;
`;

export const Bar = styled.div`
float: left;
height: 12px;
width: 75%;
margin-top: 20px;
border-radius: 7px;
background-color: white;
position: relative;
`;

export const Porcent = styled.div`
position: absolute;
height: 100%;
background-color: #0F915B;
border-radius: 7px;
animation: progress-animation 5s forwards
`;

export const Icon = styled.div`
position: relative;
display:flex;
alig-items: flex-start;
height: 24px;
padding-top: 14px;
`;

export const Vidas = styled.div`
padding-right: 8px;
text-align: center;
color: white;
`;


export const IconImg = styled.img`
margin-left: 10px;
`;


export const VidasNumber = styled.p`
margin-left: 5px;
padding-top: 2px;
font-weight: 500;
`;

export const Option = styled.label`
color: #fffffe;;
font-size: 16px; 
left: 16px;
letter-spacing: 0.08px;
line-height: 24px;
opacity: 1;
position: absolute;
top:16px;
white-space: nowrap;
widht:262px;
`;

export const OpcionPregunta = styled.div`
background-color: #232E35;
border: 2px solid #FFFFFE;
border-radius: 4px;
cursor: pointer;
height: 56px;
opacity: 1;
position: relative;
width: 328px;
margin: 10px;
`;

export const ImgAvatar = styled.div`
width: 112px;
height: 240px;
`;

export const PreguntaH2 = styled.h2`
color: white;
margin-left: 70px;
text-align: left;
`;

export const DivImg = styled.div`
float:left;
margin-left: 10px;
height: 160px;
`;

export const DivPre = styled.div`
float;left;
margin-left: 25px;
`;

export const ContainerRes = styled.div`
display:flex;
align-items:center;
flex-direction: column;
padding: 50px 0;
position: relative;
`;

export const Footer = styled.footer`
display:flex;
align-items: center;
text-align: center;
height: 42px;
width: 190px;
color: white;
background: #D4CAF3;
border-radius: 16px;
margin-left: 25px;
&:hover {
    background-color: #6b47dc!important;
    font-weight: bold;
}
`;


export const Check = styled.input`
background-color: transparent;
height:24px;
left:270px;
mix-blend-mode: normal;
opacity: 1;
overflow: hidden;
position: absolute;
top: 16;
width: 24px;
&:checked {
    background-image: url('../../assets/checked.png');
    background-size: 15px;
    border: 0px;
    image-rendering: inherit;
    background-repeat: round;
}
`;

export const Radio = styled.div`
background-color: transparent;
height: 22px;
left: 1px;
opacity: 1;
position: absolute;
top:1px;
widht:22px;
`;

