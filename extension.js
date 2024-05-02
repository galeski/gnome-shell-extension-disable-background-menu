import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as backgroundMenu from 'resource:///org/gnome/shell/ui/backgroundMenu.js'


export default class DING extends Extension {
        constructor(metadata) {
                super(metadata);
                this.originalOpen = backgroundMenu.BackgroundMenu.prototype.open;
                this.modifiedOpen;
        }

        enable () {
                backgroundMenu.BackgroundMenu.prototype.open = this.modifiedOpen;
        }

        disable () {
                backgroundMenu.BackgroundMenu.prototype.open = this.originalOpen;
                this.originalOpen = null;
        }
}
