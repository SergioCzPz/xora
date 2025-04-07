import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected isOpen = signal(false);
  protected btnImgSrc = computed(() =>
    this.isOpen() ? 'assets/images/close.svg' : 'assets/images/magic.svg'
  );
  protected classesOnOpen = computed(() =>
    this.isOpen() ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none'
  );

  public toggleMenu(): void {
    this.isOpen.update(value => !value);
  }
}
