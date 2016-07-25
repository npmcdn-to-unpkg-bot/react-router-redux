import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilter';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};


class Footer extends Component {
    renderTodoCount(){
        const {activeCount} = this.props;
        const itemWord = activeCount === 1 ? 'item': 'items';
        return (
            <span className="todo-count">
                <strong>{activeCount || 'No'}</strong> {itemWord} left
            </span>
        )
    }
    renderClearButton(){
        const { completedCount, onClearCompleted } = this.props;
    }
    renderFilterLink(filter){

    }
    render(){
        return (
            <footer>
                {this.renderTodoCount()}
                <ul className="filters">
                    {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                        <li key={filter}>
                            {this.renderFilterLink(filter)}
                        </li>
                    )}
                </ul>
                {this.renderClearButton()}
            </footer>
        );
    }
}

export default Footer;