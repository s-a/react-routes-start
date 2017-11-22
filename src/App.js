import './App.css';
import App from './components/App.jsx';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

window.API_ENDPOINT = process.env.API_ENDPOINT;



export default App;