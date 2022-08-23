import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  destroy() {
    this.close.emit();
  }
}
