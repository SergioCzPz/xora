import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
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
export class SlideDownComponent implements AfterViewChecked {
  private readonly platformId = inject(PLATFORM_ID);

  public slideDown = input<boolean>(false);
  public answer = input.required<string>();
  private answerElement = viewChild<ElementRef<HTMLDivElement>>('answerEl');
  protected answerHeight = computed(() =>
    this.slideDown() ? this.answerElement()?.nativeElement.scrollHeight : '0'
  );

  ngAfterViewChecked(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    console.log(this.answerHeight());
  }
}
