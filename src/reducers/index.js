import { combineReducers } from 'redux';
// Reducers
const songsReducer = () => {
    return [
        {
            title: '‘Cannonball’ – The Breeders',
            duration: '04:10'
        },
        {
            title: '‘Killing Me Softly’ – The Fugees',
            duration: '03:10'
        },
        {
            title: '‘Loaded’ – Primal Scream',
            duration: '04:15'
        },
        {
            title: '‘…Baby One More Time’ – Britney Spears',
            duration: '02:10'
        },
        {
            title: '‘Torn’ – Natalie Imbruglia',
            duration: '04:55'
        }
    ]
}

const selectedSongReducer = (selectedSong=null, action)=> {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});