import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ios',
  imports: [],
  templateUrl: './ios.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IosComponent {}
