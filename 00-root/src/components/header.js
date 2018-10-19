import React, {Component, Fragment} from 'react';

class header extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <p>
                        <a href="/">Home</a>
                        &nbsp;|&nbsp;
                        <a href="/about">About</a>
                    </p>
                </div>
                <h1>{this.props.headerText}</h1>
            </Fragment>

        );
    }
}

export default header;