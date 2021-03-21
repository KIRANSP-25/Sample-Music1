import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Music Player</Link>
                        <button className="navbar-toggle" data-target="#menu" data-toggle="collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Music</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
