import React from 'react'
import { Menu, Item } from '../../style/Navbar/navbar';
import {Link} from 'react-router-dom';


const Navbar = () => {


    return (
        <Menu>
            <Item >
              <Link to="/home" ><img src="https://i.ibb.co/nB3pgQ9/home.png" alt="" /></Link> 
            </Item>
            <Item>
            <Link to="/statistics"><img src="https://i.ibb.co/pKVmXpN/home-1.png" alt="" /></Link>
            </Item>
            <Item >
                <Link to="/profile"><img src="https://i.ibb.co/wBNdv93/home-2.png" alt="" /></Link>
            </Item>
        </Menu> 
    )
}

export default Navbar
