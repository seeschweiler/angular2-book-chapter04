import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'

@Component({
  selector: 'my-app',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Component Lifecycle Event Tracker</div>
      <div class="panel-body">
        <div>
          <h5>List of Lifecycle Events of Component:<button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button></h5>
          <br />
            <table class="table table-condensed table-hover table-bordered">
              <thead>
                <th>#</th>
                <th>Lifecycle Event</th>
              </thead>
              <tbody>
                <tr *ngFor="let lifecycleEvent of lifecycleEvents, let i=index">
                  <td>{{i+1}}</td>
                  <td>{{lifecycleEvent}}</td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
    </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export class App {
  lifecycleEvents:Array<string>;
  constructor() {
    this.lifecycleEvents = [];
  }
  reset() {
    this.lifecycleEvents = [];
  }
  ngOnInit() {
    this.lifecycleEvents.push("ngOnInit");
  }
  ngOnChange(changeRecord) {
    this.lifecycleEvents.push("onOnChange");
  }
  ngDoCheck() {
    this.lifecycleEvents.push("ngDoCheck");
  }
  ngAfterContentInit() {
    this.lifecycleEvents.push("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    this.lifecycleEvents.push("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    this.lifecycleEvents.push("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    this.lifecycleEvents.push("ngAfterViewChecked");
  }
  ngOnDestroy() {
    this.lifecycleEvents.push("ngOnDestroy");
  }
}
