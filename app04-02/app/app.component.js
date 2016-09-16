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
var KeyUpComponent = (function () {
    function KeyUpComponent() {
        this.keyUpEvents = [];
    }
    KeyUpComponent.prototype.onKey = function (event) {
        this.keyUpEvents.push(event);
    };
    KeyUpComponent.prototype.reset = function () {
        this.keyUpEvents = [];
    };
    KeyUpComponent = __decorate([
        core_1.Component({
            selector: 'key-up',
            template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Angular 2 Event Binding Demo - Start typing here:</div>\n      <div class=\"panel-body\">\n        <div>\n          <input (keyup)=\"onKey($event)\">\n        </div>\n        <hr />\n        <div>\n          <h5>Resulting keyup events:<button class=\"btn btn-sm btn-primary pull-right\" (click)=\"reset()\">Reset</button></h5>\n          <br />\n            <table class=\"table table-condensed table-hover table-bordered\">\n              <thead>\n                <th>#</th>\n                <th>Event Type</th>\n                <th>Event Timestamp</th>\n                <th>Event Target</th>\n                <th>Code</th>\n                <th>Key</th>\n                <th>Shift</th>\n                <th>Ctrl</th>\n                <th>Alt</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let keyUpEvent of keyUpEvents, let i=index\">\n                  <td>{{i+1}}</td>\n                  <td>{{keyUpEvent.type}}</td>\n                  <td>{{keyUpEvent.timeStamp}}</td>\n                  <td>{{keyUpEvent.target}}</td>\n                  <td>{{keyUpEvent.code}}</td>\n                  <td>{{keyUpEvent.key}}</td>\n                  <td>{{keyUpEvent.shiftKey}}</td>\n                  <td>{{keyUpEvent.ctrlKey}}</td>\n                  <td>{{keyUpEvent.altKey}}</td>\n                </tr>\n              </tbody>\n            </table>\n\n        </div>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponent);
    return KeyUpComponent;
}());
exports.KeyUpComponent = KeyUpComponent;
//# sourceMappingURL=app.component.js.map