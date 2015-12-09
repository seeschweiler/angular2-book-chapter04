import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';
import {LifecycleEvent} from './lifecycleevent'

@Component({
  selector: 'lifecycle-logger',
  template: `
        <div>
          <h5>List of Lifecycle Events of Component:</h5>
          <br />
            <table class="table table-condensed table-hover table-bordered">
              <thead>
                <th>#</th>
                <th>Component Name</th>
                <th>Event Name</th>
              </thead>
              <tbody>
                <tr *ng-for="#lifecycleEvent of lifecycleEvents, #i=index">
                  <td>{{i+1}}</td>
                  <td>{{lifecycleEvent.componentName}}</td>
                  <td>{{lifecycleEvent.eventName}}</td>
                </tr>
              </tbody>
            </table>
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export class LifecycleLogger {
  @Input() lifecycleEvents:Array<LifecycleEvent>;
  ngOnInit() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngOnInit"));
  }
  ngOnChanges(changeRecord) {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngOnChanges"));
  }
  ngDoCheck() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngDoCheck"));
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngAfterContentInit"));
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngAfterContentChecked"));
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngAfterViewInit"));
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngAfterViewChecked"));
  }
  ngOnDestroy() {
    this.lifecycleEvents.push(new LifecycleEvent("LifecycleLogger", "ngOnDestroy"));
  }
}
