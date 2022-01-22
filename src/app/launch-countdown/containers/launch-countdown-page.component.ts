import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountDown } from 'src/app/models';

@Component({
  selector: 'lbk-launch-countdown-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="max-w-[1440px] mx-auto lg:overflow-hidden">
      <div class="container mt-[142px] grid place-items-center lg:mt-[132px]">
        <h1 class="text-white text-center">WE'RE LAUNCHING SOON</h1>

        <lbk-countdown
          [countDown]="countDown"
          class="mt-[54px] lg:mt-[104px]"
        ></lbk-countdown>
      </div>

      <div class="relative mt-[180px] lg:mt-">
        <img
          class="min-h-[168px] lg:min-h-[266px]"
          src="assets/images/pattern-hills.svg"
          alt="Hill"
        />

        <lbk-socials
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></lbk-socials>
      </div>
    </main>
  `,
})
export class LaunchCountdownPageComponent implements OnInit {
  countDown!: CountDown;

  ngOnInit(): void {
    this.countDown = {
      days: 8,
      hours: 23,
      minutes: 55,
      seconds: 41,
    };
  }
}
