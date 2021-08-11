import React from 'react'
import { Title, Userimg, Informacion, CloseSession} from '../../../style/Navbar/profile'
import Navbar from '../Navbar';


export default function Profile() {
    return (
        <div>
            <Title>
                <h1>Perfil</h1>
            </Title>
            <Informacion>
                <Userimg src="https://i.ibb.co/9WmYnbC/Ellipse-3-2.png" alt="" />
                <h3>Francisco Javier</h3>
                <h5>francisco.javier@gmail.com</h5>
                <CloseSession>Cerrar sesión</CloseSession>
            </Informacion>
            <Navbar />
        </div>

    )
}
