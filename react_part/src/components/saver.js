import React, { Component } from 'react'

export default class Saver extends Component {
    render() {
        return (
            <div>
                <input type="button" value="Salvar relatório" onClick={this.props.handleSave} />
            </div>
        )
    }
}
