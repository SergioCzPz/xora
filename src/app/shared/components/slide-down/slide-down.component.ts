import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-slide-down',
  imports: [],
  templateUrl: './slide-down.component.html',
  styles: `
    :host {
      display: block;
    }

    .answer {
      transition: height 0.5s ease;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideDownComponent {
  public slideDown = input<boolean>(false);
  public answer = input.required<string>();
  private answerElement = viewChild<ElementRef<HTMLDivElement>>('answerEl');
  protected answerHeight = computed(() =>
    this.slideDown() ? this.answerElement()?.nativeElement.scrollHeight : '0'
  );
}
