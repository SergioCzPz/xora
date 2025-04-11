import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { faq } from '@shared/constants/constants';
import { FaqItemComponent } from '@shared/components/faq-item/faq-item.component';

@Component({
  selector: 'app-faq',
  imports: [FaqItemComponent],
  templateUrl: './faq.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  protected faqs = faq;
  protected halfLength = signal(this.faqs.length / 2);
}
