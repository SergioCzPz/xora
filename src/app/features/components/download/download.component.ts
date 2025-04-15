import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AndroidComponent } from '@shared/components/android/android.component';
import { IosComponent } from '@shared/components/ios/ios.component';
import { MarkerComponent } from '@shared/components/marker/marker.component';
import { WebComponent } from '@shared/components/web/web.component';
import { WindowsComponent } from '@shared/components/windows/windows.component';
import { links, logos } from '@shared/constants/constants';

@Component({
  selector: 'app-download',
  imports: [
    MarkerComponent,
    IosComponent,
    AndroidComponent,
    WindowsComponent,
    WebComponent,
  ],
  templateUrl: './download.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadComponent {
  public links = links;
  public logos = logos;
}
