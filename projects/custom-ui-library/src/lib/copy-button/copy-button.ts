import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'lib-copy-button',
  imports: [],
  templateUrl: './copy-button.html',
  styleUrl: './copy-button.css',
})
export class CopyButton implements AfterViewInit {

  @Input() text: string = '';

  tooltipText = 'Copy to clipboard';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    new bootstrap.Tooltip(this.el.nativeElement.querySelector('button'));
  }

  copy() {
    navigator.clipboard.writeText(this.text);

    this.tooltipText = 'Copied!';

    // update tooltip manually
    const btn = this.el.nativeElement.querySelector('button');
    const tooltip = bootstrap.Tooltip.getInstance(btn);

    tooltip.setContent({ '.tooltip-inner': this.tooltipText });
    tooltip.show();

    setTimeout(() => {
      this.tooltipText = 'Copy to clipboard';
      tooltip.setContent({ '.tooltip-inner': this.tooltipText });
    }, 1500);
  }
}