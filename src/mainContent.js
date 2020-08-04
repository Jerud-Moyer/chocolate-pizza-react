import React, { Component } from 'react'

class Img extends Component {
    render() {
        return (
            <img alt="bigImage" src={this.props.fart} />
        )
    }
}


export default class mainContent extends Component {
    render() {
        return (
            <div>
                <p id="p-1">For the fig-swirl: Melt butter over medium head in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                <p id="p-2">Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fix mixture is cooled.</p>
                <p id="p-3">Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fix jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
                <Img fart="assets/recipe.jpg" />
                <hr id="hr-2"></hr>
            </div>
        )
    }
}
