import React, { useState, useEffect } from 'react'
import { Container, Header, Close, CloseImg, Bar, Porcent, Icon, IconImg, Vidas, VidasNumber, PreguntaH2, Option, Check, Radio, OpcionPregunta, DivImg, DivPre, ContainerRes, Footer, Button } from '../../style/Questions/preguntas1';
import axios from 'axios';

const Preguntas1 = () => {

    const [pregunta, setPregunta] = useState([]);


    const getQuestions = async () => {
        const url = 'https://fake-api-daily.herokuapp.com/preguntas';
        const res = await axios.get(url);
        const data = res.data;
        setPregunta(data);
    }

    useEffect(() => {
        getQuestions();
    }, [])

    //const preguntasAleatorias = () => {
    //    return Math.floor(Math.random() * 4);
    //  }

    //randomQuestions= quotes[Math.floor(Math.random()*quotes.length)];


    return (
        <Container>
            <Header>
                <Close>
                    <CloseImg src="https://i.ibb.co/t84qBTy/Component-2-4.png" alt="" />
                </Close>
                <Bar>
                    <Porcent />
                </Bar>
                <Icon>
                    <IconImg src="https://i.ibb.co/hs3xGtg/Component-1-3.png" alt="" />
                </Icon>
                <Vidas>
                    <VidasNumber>4</VidasNumber>
                </Vidas>
            </Header>
            <div>
                <DivImg>
                    <img src="https://i.ibb.co/d4FvM39/caracters-1.png" />
                </DivImg>
                <DivPre>
                    <PreguntaH2>¿Qué etiqueta es semánticamente correcta para el contenido principal?</PreguntaH2>
                </DivPre>
            </div>
            <ContainerRes>
                <OpcionPregunta>
                    <Option>
                        <Radio>{pregunta.option1}
                        <Check type="radio" name="radio" />
                        </Radio>
                    </Option>
                </OpcionPregunta>
                <OpcionPregunta>
                    <Option>
                    <Radio>
                        <Check type="radio" name="radio" />
                    </Radio>
                    </Option>
                </OpcionPregunta>
                <OpcionPregunta>
                    <Option>
                        <Check type="radio" name="radio" />
                    </Option>
                </OpcionPregunta>
            </ContainerRes>
            <Footer>
                <button type="submit" disabled="disabled">COMPROBAR</button>
            </Footer>
        </Container>
    )
}

export default Preguntas1
