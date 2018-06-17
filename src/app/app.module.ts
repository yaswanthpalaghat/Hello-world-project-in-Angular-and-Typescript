import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example.component';
import { ExampleTestComponent } from './components/example/example-test/example-test.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleTestComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
