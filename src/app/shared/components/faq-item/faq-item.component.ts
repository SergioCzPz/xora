import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { FAQ } from '@shared/types/types';
import { SlideDownComponent } from '../slide-down/slide-down.component';

@Component({
  selector: 'app-faq-item',
  imports: [CommonModule, SlideDownComponent],
  templateUrl: './faq-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqItemComponent {
  public faq = input.required<FAQ>();
  public index = input.required<number>();

  protected isFaqActive = signal<boolean>(false);

  setActiveId(): void {
    this.isFaqActive.update(value => !value);
  }
}
