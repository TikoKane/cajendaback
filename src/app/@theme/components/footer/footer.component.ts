import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Créé par <b><a href="https://limsmetik.com" target="_blank">LIMSMETIK</a></b> 2019</span>
    <div class="socials">
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-instagram"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-facebook"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-twitter"></a>
      <a href="limsmetiko.com" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
