import Axios from 'axios';
import React, { Component } from 'react';
import Artist from '../Artist';
import Track from '../Track';
const  URI = "https://spotify-api-wrapper.appspot.com";

export default class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: null,
            artistInfo: '',
            tracks: []
        };
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        this.searchArtist("A R Rehman");
    }


    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }

    searchArtist = (query) => {
         // artist info
         Axios.get(`${URI}/artist/${query}`)
         .then(result => {
             console.log(result.data);
             if(result.data.artists.items.length > 0) {
                var artistInfo = result.data.artists.items[0];
                console.log('artistInfo', artistInfo);
                this.setState({ artistInfo });

                Axios.get(`${URI}/artist/${artistInfo.id}/top-tracks`)
                    .then(result => {
                        console.log('tracks',result.data.tracks);
                        this.setState({
                            tracks: result.data.tracks
                        });
                    }).catch(err => console.log(err));
             }

         }).catch(err => console.log(err));
    }

    submitHandler(e) {
        e.preventDefault();
        console.log('data', this.state.artist);
        this.searchArtist(this.state.artist);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 jumbotron text-center">
                        <h3>Search With Music title or Artist </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well well-lg">

                        <form method="post" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="artist">Artist</label>
                                <div className="input-group">
                                    <input type="search" name="artist" id="artist" value={this.state.artist} onChange={this.onChangeArtist} className="form-control" required  />
                                    
                                    <div className="input-group-btn">
                                        <button type="submit" className="btn btn-info">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

                <Artist artist={this.state.artistInfo} />
                <Track tracks={this.state.tracks} />
            </div>
        )
    }
}
