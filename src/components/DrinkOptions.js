import React, { Component } from 'react';
import axios from 'axios';
import './OptionsContainer.css'

let orderArray = [];

class DrinkOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkSize: "",
            house: ""
        }
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onHouseChange = this.onHouseChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onSizeChange(event) {
        this.setState({
            drinkSize: event.target.value
        });

    }
    onHouseChange(event) {
        this.setState({
            house: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();
        orderArray.push(this.state.drinkSize);
        orderArray.push(this.state.house);
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
                        <h3>What size would you like?</h3>
                        <form onSubmit={this.submit}>

                            {/* small drink */}
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="form1"
                                        value="SmallDrink"
                                        onChange={this.onSizeChange}
                                    />
                                    Small Drink
                                </label>
                            </div>
                            <br />

                            {/* med drink */}
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="form1"
                                        value="MediumDrink"
                                        onChange={this.onSizeChange}
                                    />
                                    Medium Drink
                                </label>
                            </div>
                            <br />
                            {/* large drink */}
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        name="form1"
                                        value="LargeDrink"
                                        onChange={this.onSizeChange}
                                    />
                                    Large Drink
                                </label>
                            </div>
                            <br />
                        </form>
                        <form onSubmit={this.submit}>
                            <div className='menuOption'>
                                <h3>For Here? or TO-GO?</h3>
                                <ul className='center'>
                                    {/* In-House! */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="form2"
                                                value="InHouse"
                                                onChange={this.onHouseChange}
                                            />
                                            In-House!
                                        </label>
                                    </div>
                                    <br />

                                    {/* In-House! */}
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="form2"
                                                value="togo"
                                                onChange={this.onHouseChange}
                                            />
                                            On The Road!
                                        </label>
                                    </div>
                                    <br />
                                </ul>
                            </div>
                        </form>
                    </div>
                    <button onClick={this.submit}>add to cart</button>
                    <a href='/MainMenu' className='buttonClass'>
                        <button type='submit'>Place Your Order!</button>
                    </a>
                    <a href='/MainMenu' className='buttonClass'>
                        <button type='submit'>Order More!</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default DrinkOptions;
