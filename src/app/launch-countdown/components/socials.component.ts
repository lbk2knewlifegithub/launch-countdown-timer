import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-socials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class=" text-xl gap-4 flex text-stone-500 lg:gap-8">
      <li>
        <a routerLink="/">
          <span class=" fab fa-facebook-square"></span>
        </a>
      </li>

      <li>
        <a routerLink="/">
          <span class="fab fa-pinterest"></span>
        </a>
      </li>

      <li>
        <a routerLink="/">
          <span class="fab fa-instagram"></span>
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        ul {
          li {
            a {
              @apply duration-500 hover:text-primary-800;
            }
          }
        }
      }
    `,
  ],
})
export class SocialsComponent {}
