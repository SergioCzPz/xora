import { ChangeDetectionStrategy, Component } from '@angular/core';
import { testimonials } from '@shared/constants/constants';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  public testimonials = testimonials;
  public halfLength = Math.floor(testimonials.length / 2);
}
