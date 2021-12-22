import React from "react";
import ReactDOM from "react-dom";

const tasks = ['open google', 'search stack over flow', 'paste the query'];

const element = <div><div>
    <h1> tasks list </h1>
    <ol> {
        tasks.map((tasks, index) => < li key={index} > {tasks} </li>)}
    </ol>
</div>
    <div>
    <h1> tasks list </h1>
    <ol> {
        tasks.map((tasks, index) => < li key={index} > {tasks} </li>)}
    </ol>
</div></div>

    /* React.createElement('ol', null,
                    tasks.map((tasks, index) => React.createElement('li', { key: index }, tasks))
                ); */

// ReactDOM.render(element, document.getElementById('root'));