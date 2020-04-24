import { subscribe } from 'mqtt-react';
import { createStore, $CombinedState} from 'redux';

 
 
const customDispatch = function(topic, message, packet) {
    store.dispatch(topic, message);
}
 
 
export default subscribe({
  topic: 'streetlamp',
  dispatch: customDispatch
})