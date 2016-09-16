"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var lifecycleevent_1 = require('./lifecycleevent');
var AppComponent = (function () {
    function AppComponent() {
        this.lifecycleEvents = [];
        this.value1 = '';
    }
    AppComponent.prototype.clearList = function () {
        this.lifecycleEvents = [];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnInit"));
    };
    AppComponent.prototype.ngOnChanges = function (changeRecord) {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnChanges"));
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngDoCheck"));
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterContentInit"));
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterContentChecked"));
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterViewInit"));
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngAfterViewChecked"));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("MyApp", "ngOnDestroy"));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Component Lifecycle Event Tracker</div>\n      <div class=\"panel-body\">\n        <div>\n           <p>Input: <input [(ngModel)]=\"value1\"></p>\n           <p><strong>Value1 in MyApp Component: {{value1}}</strong></p>\n        </div>\n        <hr />\n        <div>\n          <test-component [lifecycleEvents]=\"lifecycleEvents\" [value1]=\"value1\"></test-component>\n        <div>\n        <hr />\n        <div>\n          <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"clearList()\">Clear List</button>\n          <lifecycle-logger [lifecycleEvents]=\"lifecycleEvents\"></lifecycle-logger>\n        </div>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map