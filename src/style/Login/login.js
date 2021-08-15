import styled from 'styled-components'


export const Section = styled.section`
font-family: Nunito;  
display: flex;
align-items: center;
justify-content: center;

`;

export const Logo = styled.img`
width: 80px;
height: 80px;
transform: translateX(160%);
margin-top: 30px;
`;

export const Google = styled.img`
`;

export const Title = styled.h1`
text-align:center;
font-family: Inter;
font-style: normal;
font-weight:bold;
font-size: 30px;
width: 208px;
height: 39px;
line-height: 45px;
transform: translateX(30%);
margin-bottom: 40px;
color: white;
`;

export const Line = styled.h3`
position: static;
width: 340px;
height: 0px;
left: 0px;
top: 30px;
border: 0.5px solid gray;
align-self: stretch;
flex-grow: 0;
`;

export const Email = styled.h4`
font-weight: normal;
margin-left: 15px;
margin-bottom: -8px;
font-size: 16px;
line-height: 24px;
color: white;
`;

export const Input = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
width: 290px;
height: 10px;
margin: 8px 0px;
border-radius: 4px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`;

export const Recovery = styled.p`
text-align: center;
color: #2CB67D;
`;

export const Register = styled.p`
text-decoration: none;
color white;
text-align:center;
`;