import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ExampleStateModel, defaults } from './example.state.model';
import { ExampleAction } from './example.action';
@State<ExampleStateModel>({
  name: 'example',
  defaults: new ExampleStateModel()
})
export class ExampleState {
  static num: Number = 0;
  @Action(ExampleAction.Add)
  private add(ctx: StateContext<ExampleStateModel>) {
    ctx.patchState({
      value: 'exampleOne'
    });
    console.log(ctx.getState(), ExampleState.num++);
  }
}
