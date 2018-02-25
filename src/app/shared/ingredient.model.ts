export class IngredientModel {

  // notice that with 'public' in the constructor signature, attributes are created
  // and assigned automatically.
  //
  constructor(public name: string, public amount: number) {
  }
}
