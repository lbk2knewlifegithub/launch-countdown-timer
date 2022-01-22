import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'lbk-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flip', [
      state('start', style({ transform: '0' })),
      state('done', style({ transform: 'rotateX(-180deg)' })),
      transition('start => done', [animate(1_000)]),
      transition('done => start', [animate(0)]),
    ]),
  ],
})
export class CardComponent implements OnInit, OnChanges {
  _digit!: number;
  @Input() set digit(newDigit: number) {
    if (!!this.digit && this._digit !== newDigit) {
      this.state = 'start';
      newDigit++;
      setTimeout(() => {
        this.state = 'done';
        this.markForCheck();
      }, 0);
    }
    this._digit = newDigit;
  }

  @Input() title!: string;
  @Input() autoPlay = false;
  @Output() tick = new EventEmitter<void>();

  state = 'start';

  constructor(private readonly _cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    if (!this.autoPlay) return;
    setTimeout(() => {
      this.state = 'done';
    }, 0);
  }

  done(event: AnimationEvent) {
    // if (!this.autoPlay) return;
    // this.state = 'start';
    // if (event.toState == 'start') {
    //   this.state = 'done';
    //   this.markForCheck();
    // }
  }

  markForCheck() {
    this._cd.markForCheck();
  }

  get nextDigit() {
    return Math.max(this.digit - 1, 0);
  }

  get digit() {
    return this._digit;
  }
}
