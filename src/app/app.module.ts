import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [AppComponent, DynamicComponent, PlaceholderDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent],
})
export class AppModule {}
