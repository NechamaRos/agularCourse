import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDirection]"
})
export class DirectionDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('change', ['$event.target.checked'])
    onToggle(checked: boolean) {
      const direction = checked ? 'rtl' : 'ltr';
      this.renderer.setAttribute(document.body, 'dir', direction);
    }
}