import { fetchWeather } from '../actions/index';


export default function(state = null, action){
  // console.log('Action recieved:', action);
  case FETCH_WEATHER:
    return state.push(action.payload.data);
    // return [ action.payload.data ]

  return state;
}
