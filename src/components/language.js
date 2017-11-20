var locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// language would be something like es-ES or es_ES
// However we store our files with format es.json or en.json
// therefore retrieve only the first 2 digits
if (locale.length > 2) {
    locale = locale.replace('_', '-');
}


module.exports = {
    "id": locale,
    "url": function (lng, target) {
        // console.log(data)
        return `/${lng}/${target}`
    }
}