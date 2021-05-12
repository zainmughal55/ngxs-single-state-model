import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxsModule } from '@ngxs/store';
import { ExampleState } from './store/example.state'
import { ExampletwoState } from './store/exampletwo.state'

@NgModule({
  imports: [BrowserModule, FormsModule,
    NgxsModule.forRoot([
      ExampletwoState,
    ])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
