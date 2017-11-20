import React/* , { Component } */ from 'react';
import JsonDump from './JsonDump.jsx';


const Bus = (path) => (
    <div>
        <h2>Bus</h2>
        <JsonDump data={path.match.params.locale}></JsonDump>
        <strong>BUS</strong>
    </div>
)

export default Bus;
