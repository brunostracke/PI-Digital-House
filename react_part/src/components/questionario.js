import React, { Component } from 'react';
import { questions } from  '../assets/questions.js';
import FormTipoI from './formTipoI.js';
import FormTipoII from './formTipoII.js';
import FormTipoIII from './formTipoIII.js';
import Report from './report.js';
import Saver from './saver.js';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

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
            renderReport: false,
            questions: questions,
            answers: answers
        }

        this.renderQuestion = this.renderQuestion.bind(this);
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(event) {

        this.setState({datetime: new Date()}, () => this.setState({renderReport: true}));
    }

    handleChangeAnswer(newAnswer) {
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

        const form = this.state.questions.map((question) => this.renderQuestion(question));

        form.push(
            <div key={form.length + 1}>
                <Saver handleSave={this.handleSave} />
            </div>
        );

        const questionnaire = (
            <div>
                <header>Questionário</header>
                <Link to='./'>
                    <button>Voltar à Página Inicial</button>
                </Link>
                <Carousel>
                    {form}          
                </Carousel>
            </div>
        );

        const report = (
            <div>
                {console.log(this.state.datetime)}
                <Report data={this.state.answers} date={this.state.datetime} />
            </div>
        );

        const toRender = this.state.renderReport ? report : questionnaire;
    
        return (
            <div>
                {toRender}
            </div>
        )
    }
}
