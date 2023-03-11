import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'counter-object',
  template: `
  <div>
    <h3>Counter</h3>
    <h3>Current count: {{count().value}}</h3>
    <h3>Double count: {{doubleCount()}}</h3>
    <button (click)="incrementCount()" >Increment</button>
  </div> 
  `,
  standalone: true
})
export class CounterObjectComponent implements OnInit {
  ngOnInit(): void {
    effect(() => console.log(`Count changed to ${this.count().value}`))
  }

  count = signal({ value: 0 });

  doubleCount = computed(() => this.count().value * 2);

  incrementCount() {
    // this.count.set({
    //   value: this.count().value + 1
    // })

    this.count.update(state => {
      state.value = state.value + 1;
      return state;
    });
  }

}
