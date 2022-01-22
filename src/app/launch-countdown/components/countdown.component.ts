import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { CountDown } from 'src/app/models';

@Component({
  selector: 'lbk-countdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- days -->
    <lbk-card title="days" [digit]="countDown.days"></lbk-card>
    <!-- end days -->

    <!-- hours -->
    <lbk-card title="hours" [digit]="countDown.hours"></lbk-card>
    <!-- end hours -->

    <!-- minutes -->
    <lbk-card title="minutes" [digit]="countDown.minutes"></lbk-card>
    <!-- end minutes -->

    <!-- seconds -->
    <lbk-card title="seconds" [digit]="countDown.seconds"></lbk-card>
    <!-- end seconds -->
  `,

  styles: [
    `
      :host {
        @apply block flex gap-4 md:gap-6 lg:gap-8;
      }
    `,
  ],
})
export class CountdownComponent implements OnInit {
  @Input()
  countDown!: CountDown;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.tick();
  }

  tick() {
    const interval = setInterval(() => {
      const { seconds, minutes, hours, days } = this.countDown;

      console.log(this.countDown);

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(interval);
        return;
      }

      if (seconds <= 0) {
        this.countDown.minutes = Math.max(minutes - 1, 0);
        this.countDown.seconds = 60;
      }

      if (this.countDown.minutes <= 0 && hours !== 0) {
        this.countDown.hours = Math.max(hours - 1, 0);
        this.countDown.minutes = 60;
      }

      if (this.countDown.hours <= 0 && days !== 0) {
        this.countDown.days = Math.max(days - 1, 0);
        this.countDown.hours = 23;
      }

      this.countDown.seconds--;
      this.markForCheck();
    }, 1000);
  }

  markForCheck() {
    this._cd.markForCheck();
  }
}
