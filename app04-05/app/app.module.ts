import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';

import {LifecycleLogger} from './lifecyclelogger';
import {TestComponent} from './testcomponent';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LifecycleLogger, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
