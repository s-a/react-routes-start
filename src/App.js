import './App.css';
import App from './components/App.jsx';

var language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// language would be something like es-ES or es_ES
// However we store our files with format es.json or en.json
// therefore retrieve only the first 2 digits
if (language.length > 2) {
    language = language.split("-")[0];
    language = language.split("_")[0];
}

export default App;