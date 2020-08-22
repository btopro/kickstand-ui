import { Component, h, Prop, Host, Element, ComponentInterface, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-switch',
    styleUrl: 'switch.scss'
})
export class Switch implements ComponentInterface {
    switchId = `switch_${switchIds++}`;
    @Element() $el: HTMLElement;

    @Prop() label: string;
    @Prop() name: string;
    @Prop() disable: boolean = false;
    @Prop({ mutable: true }) checked: boolean = false;

    @Event() updated!: EventEmitter;

    private handleClick() {
        this.checked = !this.checked;

        this.updated.emit({
            name: this.getName(),
            value: this.checked
        });
    }

    private getName() {
        return this.name || this.label ? this.label.toLowerCase().replace(/ /g, '-') : '';
    }

    render() {
        let classes = {
            'ks-switch': true,
            'disabled': this.disable
        };

        return (
            <Host class={classes}>
                <label htmlFor={this.switchId} class="switch-label">{this.label}</label>
                <button id={this.switchId} class="switch-control" role="switch" aria-checked={`${this.checked}`} onClick={() => this.handleClick()} disabled={this.disable}>
                    <span class="track"></span>
                    <span class="toggle"></span>
                </button>
            </Host>
        );
    }
}

let switchIds = 0;