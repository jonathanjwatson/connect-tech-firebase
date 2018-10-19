import React, { Component, Fragment } from 'react';
import Header from '../components/header';

class about extends Component {
    render() {
        return (
            <Fragment>
            <Header headerText={"About Me"}/>
                <h1>Something goes here</h1>
            </Fragment>
        );
    }
}

export default about;