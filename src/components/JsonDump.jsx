import React/* , { Component } */ from 'react';

let cache = []
const JsonDump = (props) => <pre>{
    JSON.stringify(props.data, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    })
}</pre>;


export default JsonDump;