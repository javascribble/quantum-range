import html from '../templates/range.js';

const { Component, template, define } = quantum;

export class Range extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-range', Range);