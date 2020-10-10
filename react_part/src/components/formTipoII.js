import React, { Component } from 'react';
import './formTipoII.css';

export default class FormTipoII extends Component {
    constructor(props) {
        super(props);

        this.state = {title: this.props.answer.title,
                        categorical: '',
                        text: ''
                    };

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(event) {
        event.preventDefault();
        this.setState({ categorical:event.target.value }, () => this.props.onChangeAnswer(this.state))
    }


    render() {
        return (
                <div className="container">
                    <div className="relative1">
                       <label>{this.props.question.title}</label>
                    </div>
                    
                    {this.props.question.options.map((option) => (
                        <div key = {option}>
                            <input type="button" value = {option} onClick={this.handleAnswer} />    
                        </div>
                    ))}
                </div>    
        )
    }
}
