import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">LIMSMETIK</a></b> 2019</span>
    <div class="socials">
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-github"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-facebook"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-twitter"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
