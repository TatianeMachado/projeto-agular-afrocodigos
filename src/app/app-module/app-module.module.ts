import { UserModuleModule } from './../user-module/user-module.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { UserComponentComponent } from '../user-component/user-component.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModuleModule],
  bootstrap: [AppComponent],
  exports: [UserComponentComponent],
})
export class AppModuleModule {}
