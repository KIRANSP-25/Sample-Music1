import React, { Component } from 'react';
import "./artist.css";

export default function Artist({ artist }){
        if(!artist) return null;
        const {id, name, popularity, images,genres, followers}  = artist;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 well well-lg">
                        <h3 className="text-center">{ name  } </h3>
                            <img src={images[1].url} alt="profile" className="img-responsive img-thumbnail"/>
                        <ul className="list-group">
                            <li className="list-group-item">
                            popularity: <span className="pull-right"> { popularity } </span> 
                            </li>
                            <li className="list-group-item">
                            Followers: <span className="pull-right"> { followers.total } </span> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

