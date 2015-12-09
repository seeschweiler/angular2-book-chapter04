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
var lifecycleevent_1 = require('./lifecycleevent');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngOnInit"));
    };
    TestComponent.prototype.ngOnChanges = function (changeRecord) {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngOnChanges: " + JSON.stringify(changeRecord)));
    };
    TestComponent.prototype.ngDoCheck = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngDoCheck"));
    };
    TestComponent.prototype.ngAfterContentInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngAfterContentInit"));
    };
    TestComponent.prototype.ngAfterContentChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngAfterContentChecked"));
    };
    TestComponent.prototype.ngAfterViewInit = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngAfterViewInit"));
    };
    TestComponent.prototype.ngAfterViewChecked = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngAfterViewChecked"));
    };
    TestComponent.prototype.ngOnDestroy = function () {
        this.lifecycleEvents.push(new lifecycleevent_1.LifecycleEvent("TestComponent", "ngOnDestroy"));
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], TestComponent.prototype, "lifecycleEvents", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], TestComponent.prototype, "value1", void 0);
    TestComponent = __decorate([
        angular2_1.Component({
            selector: 'test-component',
            template: "\n       <div class=\"panel panel-warning\">\n         <div class=\"panel-heading\">Test Component</div>\n         <div class=\"panel-body\">\n           <p>Input: <input [(ng-model)]=\"value1\"></p>\n           <p><strong>Value1: {{value1}}</strong></p>\n         </div>\n       </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
exports.TestComponent = TestComponent;
//# sourceMappingURL=testcomponent.js.map