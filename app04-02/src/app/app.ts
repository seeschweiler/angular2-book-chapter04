import {CORE_DIRECTIVES, Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'key-up',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">Angular 2 Event Binding Demo - Start typing here:</div>
      <div class="panel-body">
        <div>
          <input (keyup)="onKey($event)">
        </div>
        <hr />
        <div>
          <h5>Resulting keyup events:<button class="btn btn-sm btn-primary pull-right" (click)="reset()">Reset</button></h5>
          <br />
            <table class="table table-condensed table-hover table-bordered">
              <thead>
                <th>#</th>
                <th>Event Type</th>
                <th>Event Timestamp</th>
                <th>Event Target</th>
                <th>Code</th>
                <th>Key</th>
                <th>Shift</th>
                <th>Ctrl</th>
                <th>Alt</th>
              </thead>
              <tbody>
                <tr *ng-for="#keyUpEvent of keyUpEvents, #i=index">
                  <td>{{i+1}}</td>
                  <td>{{keyUpEvent.type}}</td>
                  <td>{{keyUpEvent.timeStamp}}</td>
                  <td>{{keyUpEvent.target}}</td>
                  <td>{{keyUpEvent.code}}</td>
                  <td>{{keyUpEvent.key}}</td>
                  <td>{{keyUpEvent.shiftKey}}</td>
                  <td>{{keyUpEvent.ctrlKey}}</td>
                  <td>{{keyUpEvent.altKey}}</td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
    </div>
    `,
    directives: [CORE_DIRECTIVES]
})
class KeyUpComponent {
  keyUpEvents:Array<Event>;
  constructor() {
    this.keyUpEvents = [];
  }
  onKey(event:KeyboardEvent) {
    this.keyUpEvents.push(event);
  }
  reset() {
    this.keyUpEvents = [];
  }
}

bootstrap(KeyUpComponent);