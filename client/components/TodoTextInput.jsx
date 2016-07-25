import React, {PropTypes} from 'react';
import classnames from 'classnames';

class TodoTextInput extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            text: this.props.text || '',
        };
    }
    handleBlur(event) {
        if(!this.props.newTodo){
            this.props.onSave(event.target.value);
        }
    }
    handleChange(event) {
        this.setState({text:event.target.value});
    }
    handleSubmit(event) {
        var text = event.target.value.trim();
        if(event.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text: ''});
            }
        }
    }

    render() {
        return (
            <input type="text"
                   className={
                   classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                   })
                   }
                   placeholder={this.props.placeholder}
                   auFocus="true"
                   value={this.state.text}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   onKeyDown={this.handleSubmit.bind(this)}/>
        );
    }
}

TodoTextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
};

export default TodoTextInput;