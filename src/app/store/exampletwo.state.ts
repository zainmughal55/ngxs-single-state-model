import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ExampleStateModel, defaults } from './example.state.model';
import { ExampleTwoAction } from './example.action';
import { ExampleState } from './example.state';
@State<ExampleStateModel>({
  name: 'exampletwo',
})
export class ExampletwoState extends ExampleState{
  @Action(ExampleTwoAction.AddTwo)
  private addTwo(ctx: StateContext<ExampleStateModel>) {
    console.log(ctx.getState().value)
  }
}