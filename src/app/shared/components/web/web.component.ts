import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-web',
  imports: [],
  templateUrl: './web.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent {}
