import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let sandwichOrderArray = []

class SandwichOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fries: "",
            soup: "",
            size: "",
        }
        this.onFriesChange = this.onFriesChange.bind(this);
        this.onSoupChange = this.onSoupChange.bind(this);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onFriesChange(event) {
        // callback means that the thingy is asyc function and wont happen immediatly
        this.setState({
            fries: event.target.value,
        });
    }

    onSoupChange(event) {
        this.setState({
            soup: event.target.value,
        });
    }
    onSizeChange(event) {
        this.setState({
            size: event.target.value,
        });
        
    }

    formSubmit(event) {
        event.preventDefault();
        sandwichOrderArray.push(this.state.fries);
        sandwichOrderArray.push(this.state.soup);
        sandwichOrderArray.push(this.state.size);
    }



    render() {
        return (
            <div className='optionsBody'>
                <span className='sideBarRight'></span>
                <span className='sideBarLeft'></span>
                <div className='NavBar'>
                    <h1 className='chosenItem'> Menu Item Chosen </h1>
                </div>
                <div className='optionsContainer'>
                        <div className='menuOption'>
                            {/* friees */}
                            <h3>Side of Fries?</h3>
                            <form onSubmit={this.formSubmit}>
                                <ul className='center'>
                                    {/* small */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="SmallFries"
                                                onChange={this.onFriesChange}
                                            />
                                            Small Fries
                                        </label>
                                    </div>
                                    <br />
                                    {/* med */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="MediumFries"
                                                onChange={this.onFriesChange}
                                            />
                                            Medium Fries
                                        </label>
                                    </div>
                                    <br />
                                    {/* large */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="LargeFries"
                                                onChange={this.onFriesChange}
                                            />
                                            Large Fries
                                        </label>
                                    </div>
                                    <br />
                                    {/* small chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="SmallChilliCheeseFry"
                                                onChange={this.onFriesChange}
                                            />
                                            Small Chilli Cheese Fry
                                        </label>
                                    </div>
                                    <br />
                                    {/* Med Chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="MediumChilliCheeseFry"
                                                onChange={this.onFriesChange}
                                            />
                                            Medium Chilli Cheese Fry
                                        </label>
                                    </div>
                                    <br />
                                    {/* Large chilli */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name='form1'
                                                value="LargeChilliCheeseFry"
                                                onChange={this.onFriesChange}
                                            />
                                            Large Chilli Cheese Fry
                                        </label>
                                    </div>
                                    <br />
                                </ul>
                            </form>

                            {/* soup */}
                            <div className='menuOption'>
                                <h3>Side Soup</h3>
                                <form onSubmit={this.formSubmit}>
                                    <ul className='center'>

                                        {/* tomato */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name='form2'
                                                    value="TomatoeSoup"
                                                    onChange={this.onSoupChange}
                                                />
                                                Tomatoe Soup
                                            </label>
                                        </div>
                                        <br />

                                        {/* Chicken Gnochi */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name='form2'
                                                    value="ChickenGnochi"
                                                    onChange={this.onSoupChange}
                                                />
                                                Chicken Gnochi
                                            </label>
                                        </div>
                                        <br />

                                        {/* Beef Stew */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name='form2'
                                                    value="BeefStew"
                                                    onChange={this.onValueChange}
                                                />
                                                Beef Stew
                                            </label>
                                        </div>
                                        <br />

                                        {/* SotD */}
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name='form2'
                                                    value="SoupOftheDay"
                                                    onChange={this.onSoupChange}
                                                />
                                                Soup Of the Day
                                            </label>
                                        </div>
                                        <br />
                                    </ul>
                                </form>

                                <div className='menuOption'>
                                    <h3>Soup Size</h3>
                                    <form onSubmit={this.formSubmit}>
                                        <ul className='center'>
                                            {/* SotD */}
                                            <div className="radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name='form3'
                                                        value="HalfBowl"
                                                        onChange={this.onSizeChange}
                                                    />
                                                    Half Bowl
                                                </label>
                                            </div>
                                            <br />
                                            {/* SotD */}
                                            <div className="radio">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name='form3'
                                                        value="FullBowl"
                                                        onChange={this.onSizeChange}
                                                    />
                                                    Full Bowl
                                                </label>
                                            </div>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                     
                        <button onClick={this.formSubmit}>add to cart</button>
                        <a href='/MainMenu' className='buttonClass'>
                            <button type='submit'>Order More!</button>
                        </a>
                </div>
            </div>
        )
    }
}
export default SandwichOptions;
function placeOrder() {

}
