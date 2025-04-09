import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { ObserverService } from '../services/observer.service';

@Directive({
  selector: '[appObserver]',
})
export class ObserverDirective implements AfterViewInit, OnDestroy {
  private readonly observerService = inject(ObserverService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef);
  private options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[]
        // observer: IntersectionObserver
      ) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.observerService.setActiveSection(entry.target.nodeName);
            // observer.unobserve(entry.target);
          }
        });
      },
      this.options
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer.unobserve(this.el.nativeElement);
  }
}
