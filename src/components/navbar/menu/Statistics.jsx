import React from 'react'
import { Bodies, Container, Title, Subtitle, Estadisticas, Estatext, Tiempo, Total, Correcto, Incorrecto, Arrow } from '../../../style/Navbar/statistics';
import Navbar from '../Navbar';

export const Statistics = () => {
    return (
        <div>
            <Bodies>
            <Title>
                <h1>Estadísticas</h1>
                <Subtitle>Los últimos 7 días <Arrow src="https://i.ibb.co/crQYGHv/Vector.png" alt="" /></Subtitle>
            </Title>


            <Container>
                <style>{"background-color: #16161A;"}</style>
                <Estadisticas>
                    <Estatext><img src="https://i.ibb.co/SfnW43c/Component-2-2.png" alt="" /> Tiempo de estudio (horas) </Estatext><Tiempo>0</Tiempo>
                </Estadisticas>
                <Estadisticas>
                    <Estatext><img src="https://i.ibb.co/GJJL1bw/Component-2-3.png" alt="" /> Respuestas contastadas </Estatext><Total>0</Total>
                </Estadisticas>
                <Estadisticas>
                    <Estatext><img src="https://i.ibb.co/GJJL1bw/Component-2-3.png" alt="" /> Respuestas correctas </Estatext><Correcto>0</Correcto>
                </Estadisticas>
                <Estadisticas>
                    <Estatext><img src="https://i.ibb.co/GJJL1bw/Component-2-3.png" alt="" /> Respuestas incorrectas </Estatext><Incorrecto>0</Incorrecto>
                </Estadisticas>
            </Container>
            </Bodies>
            <Navbar />
        </div>
    )
}
