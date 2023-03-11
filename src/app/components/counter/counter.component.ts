import { computeMsgId } from '@angular/compiler';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <h3>Counter</h3>
    <h3>Current count: {{count()}}</h3>
    <h3>Double count: {{doubleCount()}}</h3>
    <button (click)="incrementCount()" >Increment</button>
  </div> 
  `,
  standalone: true
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  private eft = effect(() => this.logCount());

  logCount() {
    console.log(`Count changed to ${this.count()}`)
  }

  incrementCount() {
    this.count.set(this.count() + 1);
  }
}
