import React, { Component } from 'react'

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
           playing: false,
           audio:null,
           playingPreviewUrl: null
        };
    }

    playAudio = (preUrl) => {
            const audio = new Audio(preUrl);

        if(!this.state.playing) {
            // beginning state of audio
            audio.play();
            this.setState({ playing: true, audio, playingPreviewUrl: preUrl });
        } else {
            //  play to pause
            this.state.audio.pause();

            // pause to play again
            if(this.state.playingPreviewUrl === preUrl) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: preUrl });
            }
        }
    }

    // player icon 
    trackIcon = (track) => {
        if(!track.preview_url) {
            return <span className="text-danger"> N/A </span>
        } 
        if(this.state.playing && this.state.playingPreviewUrl == track.preview_url) {
            return <span className="glyphicon glyphicon-pause"></span>;
        } 
        return <span className="glyphicon glyphicon-play"></span>;
    }

    render() {
        const { tracks } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 jumbotron">
                        <h3>Tracks</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        tracks.map((item,key) => {
                            const  { id,name,album,preview_url } = item;

                            return (
                                <div class="col-md-4" key={key}>
                                    <div className="panel panel-primary" onClick={() => this.playAudio(preview_url)} >
                                        <div className="panel-heading">
                                            <h3 className="panel-title"> { name } </h3>
                                        </div>
                                        <div className="panel-body">
                                            <img src={album.images[0].url} alt="" className="img-responsive img-circle"/>
                                        </div>
                                        <div className="panel-footer">
                                            <button className="btn btn-info">
                                                { this.trackIcon(item) }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
