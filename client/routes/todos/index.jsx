import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Header from '../../components/Header';




class Todo extends Component {

    render() {
        const {todos,actions} =  this.props;
        return(
            <div>
                <Header addTodo={actions.addTodo}/>
            </div>
        )
    }
}

export default Todo;
