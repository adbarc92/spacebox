const initialState = {
	song: '',
	artist: '',
	album: '',
	length: 0,
	playing: false,
	status: '',
};

export default function SongReducer(state = initialState, action) {
	/* eslint-disable indent */
	const { type, payload } = action;
	switch (type) {
		case 'UPDATE_SONG_INFO_FULFILLED': {
			return {
				...state,
				song: payload.item.name,
				artist: payload.item.album.artists.name,
				album: payload.item.album.name,
				length: payload.item.duration_ms,
				playing: false,
				status: '', // Used to test for API call
			};
		}
		case 'TOGGLE_PLAYBACK': {
			return {
				...state,
				playing: payload,
			};
		}
		case 'START_PLAYBACK_FULFILLED': {
			return {
				...state,
				playing: true,
				status: payload,
			};
		}
		case 'START_PLAYBACK_REJECTED': {
			return {
				...state,
				playing: true,
				status: payload,
			};
		}
		case 'PAUSE_PLAYBACK_FULFILLED': {
			return {
				...state,
				playing: false,
			};
		}
		default: {
			return state;
		}
	}
	/* eslint-enable indent */
}