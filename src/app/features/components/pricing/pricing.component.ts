import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { plans } from '@shared/constants/constants';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './pricing.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  protected plans = plans;
  protected isMonthly = signal(true);

  toggleMonthly(value: boolean): void {
    if (value === this.isMonthly()) return;
    this.isMonthly.set(value);
  }
}
