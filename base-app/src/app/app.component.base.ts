import { Component } from '@angular/core';

@Component({
  selector: 'baseappprefix-root',
  template: `
    <main-layout>
      <router-outlet></router-outlet>
    </main-layout>
  `,
  styleUrls: []
})
export class AppComponent {
  public useRouter = true;
}
