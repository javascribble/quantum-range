import html from '../templates/range.js';

export class Range extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-range', Range);