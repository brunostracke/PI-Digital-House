import React, { Component } from 'react';
import './formTipoII.css';

export default class FormTipoII extends Component {
    render() {
        return (
                <div className="container">
                    <h1>Questionário</h1>
                    <h3>{this.props.question.title}</h3>
                    
                    {this.props.question.options.map((option) => (
                        <div key = {option}>
                            <input type="button" value = {option} />    
                        </div>
                    ))}
                </div>    
        )
    }
}
