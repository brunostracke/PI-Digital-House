import React, { Component } from 'react';
import { questions } from  '../assets/questions.js';
import FormTipoI from './formTipoI.js';
import FormTipoII from './formTipoII.js';
import FormTipoIII from './formTipoIII.js';
// import Saver from './saver.js';
import Carousel from 'react-elastic-carousel';

let answers = questions.map((question) => ({
    title: question.title,
    categorical: '',
    text: ''
}))

export default class Questionario extends Component {
    constructor(props){
        super(props);

        this.state = {
            datetime: '',
            questions: questions,
            answers: answers
        }

        this.renderQuestion = this.renderQuestion.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(event) {
        this.setState({datetime: new Date()});        
    }

    handleChangeAnswer(newAnswer) {
        console.log(newAnswer);
        const updatedAnswers = this.state.answers.map((answer) => ((answer.title === newAnswer.title) ? newAnswer : answer));

        this.setState({answers: updatedAnswers});
    }

    renderQuestion(question) {
        const answer = this.state.answers.find((answer) => answer.title === question.title);

        switch(question.type) {
            case 1: 
                return (
                    <div key={question.title}>
                        <FormTipoI question={question} answer={answer} onChangeAnswer={this.handleChangeAnswer} />;
                    </div>
                );
            case 2: 
                return (
                    <div key={question.title}>
                        <FormTipoII question={question} answer={answer} onChangeAnswer={this.handleChangeAnswer} />;
                    </div>
                );
            case 3:
                return (
                    <div key={question.title}>
                        <FormTipoIII question={question} answer={answer} onChangeAnswer={this.handleChangeAnswer} />;
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
                    {this.state.questions.map((question) => 
                        this.renderQuestion(question)
                        )}                  
                </Carousel>
            </div>
        )
    }
}
