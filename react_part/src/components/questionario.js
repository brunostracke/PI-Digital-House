import React, { Component } from 'react';
import { questions } from  '../assets/questions.js';
import FormTipoI from './formTipoI.js';
import FormTipoII from './formTipoII.js';
import FormTipoIII from './formTipoIII.js';
import Carousel from 'react-elastic-carousel';

export default class Questionario extends Component {
    constructor(props){
        super(props);

        this.renderQuestion = this.renderQuestion.bind(this);
    }

    renderQuestion(question) {
        switch(question.type) {
            case 1: 
                return (
                    <div key={question.title}>
                        <FormTipoI question={question} />;
                    </div>
                );
            case 2: 
                return (
                    <div key={question.title}>
                        <FormTipoII question={question} />;
                    </div>
                );
            case 3:
                return (
                    <div key={question.title}>
                        <FormTipoIII question={question} />;
                    </div>
                );
            default:
                console.log('Questão sem tipo');
        }
    }

    render() {
        return (
            <div>
                <header>Questionário</header>
                <Carousel>
                    {questions.map((question) => 
                        this.renderQuestion(question)
                        )}
                </Carousel>
            </div>
        )
    }
}
