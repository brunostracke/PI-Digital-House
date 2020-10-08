import React, { Component } from 'react';
import './formTipoI.css';

export default class FormTipoI extends Component {
    render() {
        return(
            <div>
                <form className="container">
                    <header>Questionário</header>
                    <div className="relative1">
                       <label>{this.props.question.title}</label>
                    </div>
                    <div>
                        <textarea 
                        rows="3"
                        cols="40"
                        placeholder={this.props.question.placeholder}
                        required
                        >
                        </textarea>
                    </div>
		        </form>
            </div>
        )
    }
}