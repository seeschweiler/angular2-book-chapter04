import {Component, View, bootstrap, OnInit, OnChanges} from 'angular2/angular2';

@Component({
  selector: 'my-cmp',
  template: `<p>myProp = {{myProp}}</p>`
})
class MyComponent implements OnChanges {
  @Input() myProp: any;
  
  onChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('onChanges - myProp = ' + changes['myProp'].currentValue);
    this.greeting += ' | onChanges';
  }
}

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <h1>Hello {{ greeting }}</h1>
    <my-cmp [my-prop]="value"></my-cmp>
    <button (click)="value = value + 1">Increment Property Value</button>
    `
})
export class MyApp implements OnInit {
  greeting: string;
  value: number;
  
  constructor() {
    this.greeting = 'world';
    this.value = 0;
  }
  
  onInit() {
    console.log("onInit()");
    this.greeting += ' | onInit';
  }
}

bootstrap(MyApp);