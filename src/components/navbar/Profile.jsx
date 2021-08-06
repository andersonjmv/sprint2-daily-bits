import React from 'react'
import {Title , Perfil, UserImg, Name} from '../../style/Navbar/profile.js'

export default function Profile() {
    return (
        <div>
            <main>
                <Title>Perfil</Title>
                <Perfil>
                    <UserImg src="images/profile.png" className="user-img" alt="profile-img"/>
                    <br /><br />
                    <Name>Anderson Manosalva</Name>
                    <p className="email">anderson.manosalva@gmail.com</p>
                    <br /><br />
                    <h5>Cerrar sesión</h5>
                </Perfil>
            </main>
        </div>
    )
}
