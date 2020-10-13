import React, { Component } from 'react';
import './formTipoIII.css';

export default class FormTipoIII extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id : this.props.answer.title,
            answer: '',
            obs: ''            
        }

        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value}, () => this.props.onChangeAnswer(this.state));
    }

    handleAnswer(event) {
        event.preventDefault();
        this.setState({ categorical:event.target.value }, () => this.props.onChangeAnswer(this.state))
    }


    render() {
        return (
                <div className="container formTipoIII">

                   <h5>{this.props.question.title}</h5>
                    
                    {this.props.question.options.map((option) => (
                        <div key = {option} className="formTipoIII">
                            <input className='formTipoIII' type="button" value = {option} onClick={this.handleAnswer} />    
                        </div>
                    ))}

                    <textarea 
                        className="formTipoIII"
                        value= {this.state.text}
                        onChange = {this.handleChange}
                        rows="3"
                        cols="40"
                        placeholder={this.props.question.placeholder}
                        >
                    </textarea>
                </div>    
        )
    }
}
