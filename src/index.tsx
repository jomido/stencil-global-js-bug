
import { Component } from '@stencil/core'
import { autoPlay, Tween, Easing } from 'es6-tween'

@Component({
    tag: 'my-component',
})
export class MyComponent {

    render() {

        console.warn([autoPlay, Tween, Easing])
        return <div></div>
    }
}