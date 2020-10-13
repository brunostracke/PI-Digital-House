import React, { Component } from 'react';
import './formTipoI.css';

export default class FormTipoI extends Component {
    constructor(props) {
        super(props);

        this.state = {title: this.props.answer.title,
                        categorical: '',
                        text: ''
                    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value}, () => this.props.onChangeAnswer(this.state));
    }

    render() {
        return(
            <div>
                <form className="container">

                    <h5>{this.props.question.title}</h5>

                    <textarea 
                        value= {this.state.text}
                        onChange = {this.handleChange}
                        rows="3"
                        cols="40"
                        placeholder={this.props.question.placeholder}
                        required
                        >
                    </textarea>

		        </form>
            </div>
        )
    }
}