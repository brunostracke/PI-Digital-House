import React, { Component } from 'react';
import './formTipoII.css';

export default class FormTipoIII extends Component {
    render() {
        return (
                <div className="container">
                    <div className="relative1">
                       <label>{this.props.question.title}</label>
                    </div>
                    
                    {this.props.question.options.map((option) => (
                        <div key = {option}>
                            <input type="button" value = {option} />    
                        </div>
                    ))}

                    <textarea 
                        rows="3"
                        cols="40"
                        placeholder={this.props.question.placeholder}
                        >
                    </textarea>
                </div>    
        )
    }
}
