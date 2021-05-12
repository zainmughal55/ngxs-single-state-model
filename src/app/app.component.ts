import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ExampleAction, ExampleTwoAction } from './store/example.action';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Ngxs Single State Model';
  constructor(private store: Store) {}
  clicked() {
    this.store.dispatch(new ExampleAction.Add());
  }
  clicked1() {
    this.store.dispatch(new ExampleTwoAction.AddTwo());
  }
}
