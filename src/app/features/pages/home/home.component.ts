import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ObserverDirective } from '../../directives/observer.directive';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ObserverDirective,
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
