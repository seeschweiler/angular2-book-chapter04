import {Component, Input} from '@angular/core';
import {LifecycleEvent} from './lifecycleevent'

@Component({
  selector: 'test-component',
  template: `
       <div class="panel panel-warning">
         <div class="panel-heading">Test Component</div>
         <div class="panel-body">
           <p>Input: <input [(ngModel)]="value1"></p>
           <p><strong>Value1: {{value1}}</strong></p>
         </div>
       </div>
    `
})
export class TestComponent {
  @Input() lifecycleEvents:Array<LifecycleEvent>;
  @Input() value1:string;

  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngOnInit"));
  }
  ngOnChanges(changeRecord) {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngOnChanges: " + JSON.stringify(changeRecord)));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngDoCheck"));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngAfterContentInit"));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngAfterContentChecked"));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngAfterViewInit"));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngAfterViewChecked"));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent("TestComponent", "ngOnDestroy"));
  }
}
