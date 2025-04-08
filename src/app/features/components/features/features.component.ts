import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { details, features } from '@shared/constants/constants';

@Component({
  selector: 'app-features',
  imports: [ButtonComponent],
  templateUrl: './features.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  protected features = features;
  protected details = details;
}
