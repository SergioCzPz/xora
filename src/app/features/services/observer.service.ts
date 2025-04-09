import { Injectable, signal } from '@angular/core';

export enum Section {
  'APP-HERO',
  'APP-FEATURES',
  'APP-FAQ',
  'APP-DOWNLOAD',
}

@Injectable({
  providedIn: 'root',
})
export class ObserverService {
  private sections = new Map<string, string>([
    ['APP-HERO', '#hero'],
    ['APP-FEATURES', '#features'],
    ['APP-PRICING', '#pricing'],
    ['APP-FAQ', '#faq'],
    ['APP-DOWNLOAD', '#download'],
  ]);

  public activeSection = signal('');

  public setActiveSection(section: string): void {
    const sectionGeted = this.sections.get(section);

    if (sectionGeted === undefined) return;
    this.activeSection.set(sectionGeted);
  }
}
