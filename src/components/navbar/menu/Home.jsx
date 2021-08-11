import React from 'react'
import { Categoria, Categorias, Header, Img } from '../../../style/Navbar/home';
import Navbar from '../Navbar';

export const Home = () => {
    return (
        <div>
            <main>
                <Header>
                    Practica tus conocimientos en la <br />categoria que prefieras.
                </Header>
                <Categorias>
                    <Categoria href="#">
                        <div className="logo">
                            <Img id="html" src="https://i.ibb.co/pRp9fXL/container.png" alt="" />
                        </div>
                        HTML
                    </Categoria>
                </Categorias>
                <Categorias>
                    <Categoria href="#">
                        <div className="logo">
                            <Img id="css" src="https://i.ibb.co/dbVmkkM/container-1.png" alt="" />
                        </div>
                        CSS
                    </Categoria>
                    <Categoria href="#">
                        <div className="logo">
                            <Img id="js" src="https://i.ibb.co/dD9g0SW/container-2.png" alt="" />
                        </div>
                        JS
                    </Categoria>
                </Categorias>
                <Categorias>
                    <Categoria href="#">
                        <div className="logo">
                            <Img id="js" src="https://i.ibb.co/XFVWTz0/container-3.png" alt="" />
                        </div>
                        FIGMA
                    </Categoria>
                    <Categoria href="#">
                        <div className="logo">
                            <Img id="js" src="https://i.ibb.co/S6pZ8H9/container-4.png" alt="" />
                        </div>
                        UX
                    </Categoria>
                </Categorias>
                <Navbar />
            </main>
        </div>
    )
}
