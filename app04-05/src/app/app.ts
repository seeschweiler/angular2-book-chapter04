import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {LifecycleLogger} from './lifecyclelogger';
import {LifecycleEvent} from './lifecycleevent';
import {TestComponent} from './testcomponent';

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Component Lifecycle Event Tracker</div>
      <div class="panel-body">
        <div>
           <p>Input: <input [(ng-model)]="value1"></p>
           <p><strong>Value1 in MyApp Component: {{value1}}</strong></p>
        </div>
        <hr />
        <div>
          <test-component [lifecycle-events]="lifecycleEvents" [value1]="value1"></test-component>
        <div>
        <hr />
        <div>
          <button class="btn btn-sm btn-primary pull-right" (click)="clearList()">Clear List</button>
          <lifecycle-logger [lifecycle-events]="lifecycleEvents"></lifecycle-logger>
        </div>
      </div>
    </div>
    `,
    directives: [CORE_DIRECTIVES, LifecycleLogger, TestComponent]
})
class MyApp {
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

bootstrap(MyApp);