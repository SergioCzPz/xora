import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ObserverDirective } from '../../directives/observer.directive';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { DownloadComponent } from '../../components/download/download.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ObserverDirective,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    DownloadComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
