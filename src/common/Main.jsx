import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    render(){
        return(
             <div className="container">
                 {this.props.children}
             </div>
        );
    }
}
