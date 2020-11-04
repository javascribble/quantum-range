import { Component, template, define } from '../import.js';
import html from '../templates/range.js';

export class Range extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-range', Range);