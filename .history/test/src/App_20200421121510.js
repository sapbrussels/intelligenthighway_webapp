import { Connector } from 'mqtt-react';
import App from './components/App';
 
export default () => (
  <Connector mqttProps="ws://farmer.cloudmqtt.com/">
    <App />
  </Connector>
);