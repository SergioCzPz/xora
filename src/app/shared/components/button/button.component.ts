import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkerComponent } from '../marker/marker.component';

@Component({
  selector: 'app-button',
  imports: [MarkerComponent],
  templateUrl: './button.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public icon = input<string>();
  public href = input<string>();
  public classes = input<string>('');
  public onClick = input<() => void>(() => console.log('Provide a callback'));
  public markerFill = input<string>('#2EF2FF');
}
