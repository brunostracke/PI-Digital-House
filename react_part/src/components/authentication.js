import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './authentication.css';
import logo from '../assets/imgs/logo1.png';

export default class Authentication extends Component {
    render() {
        return (
            <div className='wrapper'>
                <img
                    src={logo}
                    alt="Avatar"
                    className="avatar"
                />

                <form>
                        <input
                            type="text"
                            placeholder="Nome de Usuário"
                            name="uname"
                            required
                        />

                        <input
                        type="password"
                        placeholder="Senha"
                        name="psw"
                        required
                        />
                    
                    <Link to="/quest">
                        <button type="submit">Entrar</button>
                    </Link>
                    
                    <Link to='/createAccount'>
                        <button type="button" className="createaccount">Criar conta</button>
                    </Link>

                    
                    <span className="psw">Esqueceu sua <a href="www.çlskjdaf.com">senha?</a></span>
                    

                </form>
                
            </div>
        )
    }
}
