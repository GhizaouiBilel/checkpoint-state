import React, { Component } from 'react'
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"> Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#Trophies">Trophies</a> 
                <a href="#contact">Contact</a>
            </nav>
        )
    }
}

export default Navbar