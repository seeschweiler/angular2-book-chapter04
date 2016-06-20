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
var common_1 = require('@angular/common');
var App = (function () {
    function App() {
        this.lifecycleEvents = [];
    }
    App.prototype.reset = function () {
        this.lifecycleEvents = [];
    };
    App.prototype.ngOnInit = function () {
        this.lifecycleEvents.push("ngOnInit");
    };
    App.prototype.ngOnChange = function (changeRecord) {
        this.lifecycleEvents.push("onOnChange");
    };
    App.prototype.ngDoCheck = function () {
        this.lifecycleEvents.push("ngDoCheck");
    };
    App.prototype.ngAfterContentInit = function () {
        this.lifecycleEvents.push("ngAfterContentInit");
    };
    App.prototype.ngAfterContentChecked = function () {
        this.lifecycleEvents.push("ngAfterContentChecked");
    };
    App.prototype.ngAfterViewInit = function () {
        this.lifecycleEvents.push("ngAfterViewInit");
    };
    App.prototype.ngAfterViewChecked = function () {
        this.lifecycleEvents.push("ngAfterViewChecked");
    };
    App.prototype.ngOnDestroy = function () {
        this.lifecycleEvents.push("ngOnDestroy");
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Component Lifecycle Event Tracker</div>\n      <div class=\"panel-body\">\n        <div>\n          <h5>List of Lifecycle Events of Component:<button class=\"btn btn-sm btn-primary pull-right\" (click)=\"reset()\">Reset</button></h5>\n          <br />\n            <table class=\"table table-condensed table-hover table-bordered\">\n              <thead>\n                <th>#</th>\n                <th>Lifecycle Event</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let lifecycleEvent of lifecycleEvents, let i=index\">\n                  <td>{{i+1}}</td>\n                  <td>{{lifecycleEvent}}</td>\n                </tr>\n              </tbody>\n            </table>\n\n        </div>\n      </div>\n    </div>\n    ",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map