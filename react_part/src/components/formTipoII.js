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
                    
                    <h5>{this.props.question.title}</h5>
                    
                    
                    {this.props.question.options.map((option) => (
                        <div className="formTipoII" key = {option}>
                            <input className="formTipoII" type="button" value = {option} onClick={this.handleAnswer} />    
                        </div>
                    ))}
                </div>    
        )
    }
}
