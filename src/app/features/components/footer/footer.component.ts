import { ChangeDetectionStrategy, Component } from '@angular/core';
import { socials } from '@shared/constants/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public socials = socials;
}
