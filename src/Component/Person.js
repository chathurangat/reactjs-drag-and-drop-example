import React, {Component} from 'react';
import '../App.css';

export default class Person extends Component {

    render() {
        return (
            <div className="persons-list-container" >
                <p>
                    Person Details
                </p>
                <p onClick={this.props.onClickHandler}>
                    {this.props.name}
                </p>

                <input
                    type="text"
                    onChange={this.props.onChangedHandler}

                />
            </div>
        );
    }
}