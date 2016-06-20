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
var lifecycleevent_1 = require('./lifecycleevent');
var LifecycleLogger = (function () {
    function LifecycleLogger() {
    }
    LifecycleLogger.prototype.ngOnInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngOnInit"));
    };
    LifecycleLogger.prototype.ngOnChanges = function (changeRecord) {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngOnChanges"));
    };
    LifecycleLogger.prototype.ngDoCheck = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngDoCheck"));
    };
    LifecycleLogger.prototype.ngAfterContentInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngAfterContentInit"));
    };
    LifecycleLogger.prototype.ngAfterContentChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngAfterContentChecked"));
    };
    LifecycleLogger.prototype.ngAfterViewInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngAfterViewInit"));
    };
    LifecycleLogger.prototype.ngAfterViewChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngAfterViewChecked"));
    };
    LifecycleLogger.prototype.ngOnDestroy = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("LifecycleLogger", "ngOnDestroy"));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LifecycleLogger.prototype, "lifecycleEvents", void 0);
    LifecycleLogger = __decorate([
        core_1.Component({
            selector: 'lifecycle-logger',
            template: "\n        <div>\n          <h5>List of Lifecycle Events of Component:</h5>\n          <br />\n            <table class=\"table table-condensed table-hover table-bordered\">\n              <thead>\n                <th>#</th>\n                <th>Component Name</th>\n                <th>Event Name</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let lifecycleEvent of lifecycleEvents, let i=index\">\n                  <td>{{i+1}}</td>\n                  <td>{{lifecycleEvent.componentName}}</td>\n                  <td>{{lifecycleEvent.eventName}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n    ",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], LifecycleLogger);
    return LifecycleLogger;
}());
exports.LifecycleLogger = LifecycleLogger;
//# sourceMappingURL=lifecyclelogger.js.map