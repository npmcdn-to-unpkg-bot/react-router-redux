import React from 'react'
import './index.scss'

export default class Aui extends React.Component {
    render(){
        return (
            <div className="_namespace">
                <h3>Hello,aui</h3>
                <p className="version">I want to tell you ,are you ok?</p>
            </div>
        )
    }
}