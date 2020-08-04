
import React, { Component } from 'react'


class Img extends Component {
    render() {
        return (
            <img id="printer" src="assets/print-icon.jpg" alt="randomBS"/>
        )
    }
}

class H3 extends Component {
    render() {
        return (
           <h3 id="print"> PRINT</h3>
        )
    }
}

class PostDate extends Component {
    render() {
        return (
           <h3 id={this.props.toot}>POSTED ON 15 DEC 2013 / DESSERTS</h3>
        )
    }
}

class ArticleTitle extends Component {
    render() {
        return (
           <h1 id="article-title">Chocolate Pizza</h1>
        )
    }
}


export default class Imgheader extends Component {
    render() {
        return (
            <hgroup id="article-heading">
                <ArticleTitle />
                <div id="greyArea">
                    <PostDate toot="post-date" />
                    <div>
                        <Img />
                        <H3 />
                    </div>
                </div>
            </hgroup>
        )
    }
}
