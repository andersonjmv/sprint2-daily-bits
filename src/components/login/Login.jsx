import React from 'react'
import { Google, Section, Title, Logo, Line, Email, Input, Recovery, Register } from '../../style/Login/login';

export const Login = () => {
    return (
        <div>
            <div>
                <Section>
                    <form >
                        <Logo src="https://i.ibb.co/Y3fTmqt/Logo-1.png" alt=""></Logo>
                        <Title>Iniciar sesión</Title>
                        <Google src="https://i.ibb.co/CKLb5Nx/Buttons-1.png" />
                        <Line className="linea" />
                        <Email className="email" >Correo electrónico</Email>
                        <Input type="email"  placeholder="Ingrese su correo electrónico" required />
                        <Input type="password"  placeholder="Ingrese su contraseña" required />
                    </form>
                </Section>
                <Recovery>¿Se te olvidó tu contraseña?</Recovery>
                <Register>¿Aún no tienes una cuenta? <a href="#">Inscribirse</a></Register>
            </div>
        </div>
    )
}
