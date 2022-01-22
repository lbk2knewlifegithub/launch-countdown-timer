import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'lbk-digit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 class="text-2xl text-primary-800 md:text-3xl">
      {{ digit | number: '2.0-0' }}
    </h2>
  `,
})
export class DigitComponent {
  @Input() digit!: number;
}
