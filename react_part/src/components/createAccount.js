import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './createaccount.css'

export default class CreateAccount extends Component {
    render() {
        return (
            <div className="outterwrapper">
                
                <div className="innerwrapper">
                <header>
                    Criar Conta
                </header>
                    <label  className="createAccount" for="name">Nome:</label>
                    <input 
                        className = 'auth'
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required />
                    
                    <label  className="createAccount" for="email">E-mail:</label>
                    <input 
                        className = 'auth'
                        type="email"
                        placeholder="email@email.com"
                        name="email"
                        id="email"
                        required/>

                    <label  className="createAccount" for="uname">Nome de Usuário:</label>    
                    <input
                        className = 'auth'
                    type="text"
                    placeholder="Nome de Usuário"
                    name="uname"
                    id="uname"
                    required
                    />

                    <label  className="createAccount" for="psw">Senha:</label>
                    <input
                        className = 'auth'
                    type="password"
                    placeholder="Senha"
                    name="psw"
                    id="psw"
                    required
                    />

                    <label  className="createAccount"for="pswconfirm">Confirme a senha:</label>
                    <input
                        className = 'auth'
                    type="password"
                    placeholder="Senha"
                    name="pswconfirm"
                    id="pswconfirm"
                    required
                    />

                    <div className="termsagree">
                    <input
                        className = 'termsagree'
                        type="checkbox"
                        name="termsagree"
                        id="termsagree"
                        required
                    />
                    <label  className="createAccount termsagree" for="termsagree">Eu li e aceito os <a href="a">Termos e Condições</a>.</label>
                    </div>
                    <Link to='/auth'>
                    <button className="auth" type="submit">Criar Conta</button>
                    </Link>
                
                </div>                
            </div>
        )
    }
}
