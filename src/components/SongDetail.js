import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song) {
        return <div>Select the Song</div>
    }
    return (
        <div>
            <h3>Details for.</h3>
            <p>Title: {song.title}</p>
            <b>Duration: {song.duration}</b>
        </div>
    );
}

const mapStateToProps = (state)=> {
    return {
        song: state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);