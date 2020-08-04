import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="f-top">
                    <img id="author" src="/assets/van-pic.jpg" alt="authorFarts"/>
                    <div>
                        <h1>Vanessa Stevens</h1>
                            <p id="food">Food enthousiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                    </div>
                    <button>SHARE RECIPE</button>
                </div>
                <div>
                    <div id="layered-graphic">
                        <hr id="hr-3"></hr>
                        <img src="assets/small-logo.jpg" alt="smallfart" />
                        <hr id="hr-4"></hr>
                    </div>
                    <div id="f-bottom">
                        <p id="bottom">Delicious &copy; 2013 &middot; ALL RIGHTS Reserved</p>
                        <p id="bottom2">Proudly published with Ghost.</p>
                    </div>
                </div>
            </footer>
        )
    }
}
