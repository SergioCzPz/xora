import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-marker',
  imports: [],
  templateUrl: './marker.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkerComponent {
  public fill = input<string>('');
}
