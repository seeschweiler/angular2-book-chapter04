/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.onChanges = function (changes) {
        console.log('onChanges - myProp = ' + changes['myProp'].currentValue);
        this.greeting += ' | onChanges';
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "myProp");
    MyComponent = __decorate([
        angular2_1.Component({
            selector: 'my-cmp',
            template: "<p>myProp = {{myProp}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
})();
var MyApp = (function () {
    function MyApp() {
        this.greeting = 'world';
        this.value = 0;
    }
    MyApp.prototype.onInit = function () {
        console.log("onInit()");
        this.greeting += ' | onInit';
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <h1>Hello {{ greeting }}</h1>\n    <my-cmp [my-prop]=\"value\"></my-cmp>\n    <button (click)=\"value = value + 1\">Increment Property Value</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
angular2_1.bootstrap(MyApp);
