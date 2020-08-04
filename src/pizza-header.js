import React, { Component } from 'react'
import Logo from './assets/logo.jpg'


// class ImgEl extends Component {
//     render() {
//         return (
//             <img src={Logo} alt="random"/>
//         )
//     }
// }

// class LogoLeft extends Component {
//     render() {
//         return (
//             <div id="nav-bar">
//                 <ImgEl src="../public/assets/logo.jpg" />
//                 <div>
//                     <h1>Delicious</h1>
//                     <p>THE BEST FOOD BLOG ON THE WEB</p>
//                 </div>
//             </div>
//         )
//     }
// }




class Img extends Component {
    render() {
        return (
            <img alt="random" src={this.props.fart}/>
        )
    }
}

export default class Header extends Component {
    render() {
        return (
            <header id="nav-bar">
                <div id="logo-left">
                    <img id="logo" src="assets/logo.jpg" alt="random" />
                    <div>
                        <h1>Delicious</h1>
                        <p>THE BEST FOOD BLOG ON THE WEB</p>
                    </div>
                </div>
                <nav id="nav-right">
                    <div id="leftIcons">
                        <Img fart="assets/fb-icon.jpg" />
                        <Img fart="assets/twit-icon.jpg" />
                        <Img fart="assets/gp-icon.jpg" />
                        <Img fart="assets/insta-icon.jpg" />
                        <Img fart="assets/flic-icon.jpg" />
                        <Img fart="assets/pint-icon (1).jpg" />
                        
                    </div>
                    <div id="rightIcons">
                        <Img fart="assets/rss-icon.jpg" />
                        <Img fart="assets/mail-icon.jpg" />
                    </div>
                </nav>
            </header>
        )
    }
}
