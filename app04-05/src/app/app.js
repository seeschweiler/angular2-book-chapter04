var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var lifecyclelogger_1 = require('./lifecyclelogger');
var lifecycleevent_1 = require('./lifecycleevent');
var testcomponent_1 = require('./testcomponent');
var MyApp = (function () {
    function MyApp() {
        this.lifecycleEvents = [];
        this.value1 = '';
    }
    MyApp.prototype.clearList = function () {
        this.lifecycleEvents = [];
    };
    MyApp.prototype.ngOnInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnInit"));
    };
    MyApp.prototype.ngOnChanges = function (changeRecord) {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnChanges"));
    };
    MyApp.prototype.ngDoCheck = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngDoCheck"));
    };
    MyApp.prototype.ngAfterContentInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterContentInit"));
    };
    MyApp.prototype.ngAfterContentChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterContentChecked"));
    };
    MyApp.prototype.ngAfterViewInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterViewInit"));
    };
    MyApp.prototype.ngAfterViewChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterViewChecked"));
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnDestroy"));
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Component Lifecycle Event Tracker</div>\n      <div class=\"panel-body\">\n        <div>\n           <p>Input: <input [(ng-model)]=\"value1\"></p>\n           <p><strong>Value1 in MyApp Component: {{value1}}</strong></p>\n        </div>\n        <hr />\n        <div>\n          <test-component [lifecycle-events]=\"lifecycleEvents\" [value1]=\"value1\"></test-component>\n        <div>\n        <hr />\n        <div>\n          <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"clearList()\">Clear List</button>\n          <lifecycle-logger [lifecycle-events]=\"lifecycleEvents\"></lifecycle-logger>\n        </div>\n      </div>\n    </div>\n    ",
            directives: [angular2_1.CORE_DIRECTIVES, lifecyclelogger_1.LifecycleLogger, testcomponent_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
})();
angular2_1.bootstrap(MyApp);
//# sourceMappingURL=app.js.map