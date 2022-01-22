import { Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: `
    <footer class="hidden lg:block lg:bottom-0 lg:left-0 lg:fixed lg:w-full">
      <p class="text-white text-center text-[10px]">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          class="text-sky-600 decoration-wavy"
          href="https://github.com/lbk2knewlifegithub"
          >lbk2</a
        >.
      </p>
    </footer>
  `,
})
export class FooterComponent {}
