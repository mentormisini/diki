import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor-label',
  standalone:true,
  templateUrl: './cursor-label.component.html',
  styleUrls: ['./cursor-label.component.css']
})
export class CursorLabelComponent {
  top: string;
  left: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.top = (event.clientY + 10) + 'px';
    this.left = (event.clientX + 10) + 'px';
  }
}
