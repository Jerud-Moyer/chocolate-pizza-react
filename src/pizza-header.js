import React, { Component } from 'react'


class ImgEl extends Component {
    render() {
        return (
            <img alt="random"/>
        )
    }
}

class LogoLeft extends Component {
    render() {
        return (
            <div id="nav-bar">
                <ImgEl src="../public/assets/logo.jpg" />
                <div>
                    <h1>Delicious</h1>
                    <p>THE BEST FOOD BLOG ON THE WEB</p>
                </div>
            </div>
        )
    }
}

export default class Header extends Component {
    render() {
        return (
            <header>
                <LogoLeft />
            </header>
        )
    }
}