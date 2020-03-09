import { combineReducers } from 'redux';
import SearchReducer from './components/Search/SearchReducer';
import DQueueReducer from './components/DefaultQueue/DQueueReducer';
import SQueueReducer from './components/SongQueue/SQueueReducers';
import SongReducer from './components/CurrentSong/SongReducer';
import LoginReducer from './components/Login/LoginReducer';

const rootReducer = combineReducers({
	Search: SearchReducer,
	DQueue: DQueueReducer,
	SQueue: SQueueReducer,
	Song: SongReducer,
	Login: LoginReducer,
});

export default rootReducer;