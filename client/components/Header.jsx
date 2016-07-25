import React, { PropTypes, Component } from 'react';

import TodoTextInput from '../components/TodoTextInput';

class Header extends Component {

    handleSave(text) {
        if(text.length !== 0) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput newTodo
                               onSave={this.handleSave.bind(this)}
                               placeholder="请输入要做的"/>
            </header>
        )
    }
}
Header.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export  default Header;