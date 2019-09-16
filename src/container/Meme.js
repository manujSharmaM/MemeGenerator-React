import React, { Component } from 'react'

export default class Meme extends Component {
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg: "",
            
        }
    }
    render() {
        return (
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
            <input 
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
            /> 
            <input 
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
            /> 
        
            <button>Gen</button>
        </form>
            </div>
        )
    }
}
