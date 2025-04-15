import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-windows',
  imports: [],
  templateUrl: './windows.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowsComponent {}
