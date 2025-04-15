import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-android',
  imports: [],
  templateUrl: './android.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AndroidComponent {}
