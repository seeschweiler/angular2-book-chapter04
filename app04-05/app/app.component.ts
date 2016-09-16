import {Component} from '@angular/core';

import {LifecycleEvent} from './lifecycleevent';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Component Lifecycle Event Tracker</div>
      <div class="panel-body">
        <div>
           <p>Input: <input [(ngModel)]="value1"></p>
           <p><strong>Value1 in MyApp Component: {{value1}}</strong></p>
        </div>
        <hr />
        <div>
          <test-component [lifecycleEvents]="lifecycleEvents" [value1]="value1"></test-component>
        <div>
        <hr />
        <div>
          <button class="btn btn-sm btn-primary pull-right" (click)="clearList()">Clear List</button>
          <lifecycle-logger [lifecycleEvents]="lifecycleEvents"></lifecycle-logger>
        </div>
      </div>
    </div>
    `
})
export class AppComponent {
  lifecycleEvents:Array<LifecycleEvent>;
  value1: string;
  constructor() {
    this.lifecycleEvents = [];
    this.value1 = '';
  }
  clearList() {
    this.lifecycleEvents = [];
  }
  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngOnInit"));
  }
  ngOnChanges(changeRecord) {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngOnChanges"));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngDoCheck"));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngAfterContentInit"));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngAfterContentChecked"));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngAfterViewInit"));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngAfterViewChecked"));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent("MyApp", "ngOnDestroy"));
  }
}
