import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  viewChildren,
} from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ObserverService } from '../../services/observer.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly observerService = inject(ObserverService);
  private readonly viewportRuler = inject(ViewportRuler);
  private readonly scrollDispatcher = inject(ScrollDispatcher);

  private links = viewChildren<ElementRef<HTMLAnchorElement>>('link');
  protected hashActiveLink = computed(
    () =>
      this.links().find(
        el => el.nativeElement.hash === this.observerService.activeSection()
      )?.nativeElement.hash
  );

  public hasScrolled = signal(false);
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

  private scrollSubscription!: Subscription;

  ngOnInit(): void {
    if (this.viewportRuler.getViewportScrollPosition().top > 32) {
      this.hasScrolled.set(true);
    }

    this.scrollSubscription = this.scrollDispatcher.scrolled().subscribe(() => {
      const { top } = this.viewportRuler.getViewportScrollPosition();
      if (top > 32) {
        this.hasScrolled.set(true);
        return;
      }
      if (top === 0) {
        this.hasScrolled.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }

  closeMenu(): void {
    if (!this.isOpen()) return;
    this.isOpen.set(false);
  }
}
