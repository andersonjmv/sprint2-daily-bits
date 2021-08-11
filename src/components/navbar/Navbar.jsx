import React from 'react'
import { Menu, Item } from '../../style/Navbar/navbar';


const Navbar = () => {


    return (
        <Menu>
            <Item  href="home.html">
                <img src="https://i.ibb.co/nB3pgQ9/home.png" alt="" />
            </Item>
            <Item  href="estadisticas.html">
                <img src="https://i.ibb.co/pKVmXpN/home-1.png" alt="" />
            </Item>
            <Item  href="perfil.html">
                <img src="https://i.ibb.co/wBNdv93/home-2.png" alt="" />
            </Item>
        </Menu>
    )
}

export default Navbar
