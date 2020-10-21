import React from 'react'
import './range.css'

export class Range extends React.Component {
    constructor() {
        super()
        this.state = { value: 1 }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        className="range"
                        id="typeinp"
                        type="range"
                        min="1" max="10"
                        value={this.state.value}
                        onChange={this.handleChange}
                        step="1"
                    />
                    {this.state.value}
                </label>
            </div>
        );
    }
}

