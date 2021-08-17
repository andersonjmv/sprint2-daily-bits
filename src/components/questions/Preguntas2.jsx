import React, { useState, useEffect } from 'react'
import { Container, Header, Close, CloseImg, Bar, Porcent, Icon, IconImg, Vidas, VidasNumber, PreguntaH2, Option, Check, Radio, OpcionPregunta, DivImg, DivPre, ContainerRes, Footer} from '../../style/Questions/preguntas1';
import axios from 'axios';

const Preguntas2 = () => {

    const [pregunta, setPregunta] = useState([]);


    const getQuestions = async () => {
        const url = 'https://fake-api-daily.herokuapp.com/css';
        const res = await axios.get(url);
        const data = res.data;
        const random = data[Math.floor(Math.random() * data.length)];
        const { question, option1, option2, option3 } = random;

        setPregunta({
            question,
            option1, 
            option2, 
            option3
        })
    }

    useEffect(() => {
        getQuestions();
    }, [])


    return (
        <Container>
            <Header>
                <Close>
                    <CloseImg src="https://i.ibb.co/t84qBTy/Component-2-4.png" alt="close" />
                </Close>
                <Bar>
                    <Porcent />
                </Bar>
                <Icon>
                    <IconImg src="https://i.ibb.co/hs3xGtg/Component-1-3.png" alt="icon" />
                </Icon>
                <Vidas>
                    <VidasNumber>4</VidasNumber>
                </Vidas>
            </Header>
            <div>
                <DivImg>
                    <img src="https://i.ibb.co/d4FvM39/caracters-1.png" alt="avatar"/>
                </DivImg>
                <DivPre>
                    <PreguntaH2>{pregunta.question}</PreguntaH2>
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
                    <Radio>{pregunta.option2}
                        <Check type="radio" name="radio" />
                    </Radio>
                    </Option>
                </OpcionPregunta>
                <OpcionPregunta>
                    <Option>{pregunta.option3}
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

export default Preguntas2
