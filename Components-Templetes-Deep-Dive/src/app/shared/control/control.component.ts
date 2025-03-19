import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Allows .css styles in component to become global styles. :Host in css wont work anymore. But we can add the control class to other components directly
  host: {
    //This will add the control class to all host elements instead of targeting the host elements with redundent class decorations.

    class: 'control',
    '(click)': 'onClick()', //This sets up a click event on the host and tells which function to run when the host element is clicked. 'app-control' is the host element.
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; // Can be used instead of host:{}. Not recommended.
  // @HostListener('click') onClick(){ console.log('Clicked!')}; //Alternative instead of using click in :host
  label = input.required<string>();
  // private el = inject(ElementRef); // Used for programatic access to host elements.

  onClick() {
    console.log('Clicked!');
    // console.log(this.el);
  }
}
