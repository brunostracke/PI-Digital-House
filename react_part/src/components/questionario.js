import React, { Component } from 'react';
import { questions } from  '../assets/questions.js';
import FormTipoI from './formTipoI.js';
import FormTipoII from './formTipoII.js';
import FormTipoIII from './formTipoIII.js';
import Report from './report.js';
import Saver from './saver.js';
import MenuQuestions from './menuquestions.js';
import Carousel from 'react-elastic-carousel';
import { Link, Prompt } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import './questionario.css';

let answers = questions.map((question) => ({
    title: question.title,
    categorical: '',
    text: '',
    classe: question.classe,
    type: question.type
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
        this.reportToQuest = this.reportToQuest.bind(this);
        this.newQuest = this.newQuest.bind(this);
        this.setNewQuest = this.setNewQuest.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.goto = this.goto.bind(this);
        this.carousel = React.createRef();
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

    setAlert() {
        return true;
    }

    reportToQuest(event) {
        this.setState({renderReport: false});
    }

    newQuest() {
        const message = "Tem certeza que deseja sair da página atual? Todos os dados do formulário atual serão perdidos. Certifique-se de salvá-los antes de sair.";
        const newQuestAlert = window.confirm(message) ? this.setNewQuest() : null;
        return newQuestAlert;                        
    }

    setNewQuest() {
        this.setState({
            datetime: '',
            renderReport: false,
            questions: questions,
            answers: answers
        });
    };

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    goto(index) {
    //   this.carousel.goTo(Number(index));
        // console.log(index);
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
                <MenuQuestions sendTitleIndex={this.goto} />
                <Carousel ref={this.carousel} >
                    {form}          
                </Carousel>                
            </div>
        );

        const report = (
            <div className="report">
                <header>Relatório</header>
                <Link to='./'>
                    <button className="report" onClick={this.setAlert}>Voltar à Página Inicial</button>
                </Link> 

                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
                <Report data={this.state.answers} date={this.state.datetime}  />
                </PDFExport>

                <div className="report inner">
                    <button className="report" onClick={this.newQuest}>Iniciar novo relatório</button>
                    <button className="report" onClick={this.exportPDFWithComponent}>Salvar relatório como PDF</button>
                </div>
            </div>
        );

        

        const toRender = this.state.renderReport ? report : questionnaire;
    
        return (
            <div>
                <Prompt when={this.setAlert.value} message="Tem certeza que deseja retornar à página inicial? Todos os dados do formulário atual serão perdidos." />
                {toRender}
            </div>
        )
    }
}
