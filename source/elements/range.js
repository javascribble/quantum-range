import { Component, template } from '../../references/quantum.js';
import html from '../templates/range.js';

export class Range extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-range', Range);