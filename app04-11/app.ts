import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ greeting }}</h1>'
})
class MyApp {
  constructor() {
    this.greeting = 'world';
  }
}

bootstrap(MyApp)