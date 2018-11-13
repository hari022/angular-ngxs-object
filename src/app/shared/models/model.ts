export class Model {
  id: number;
  owner: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);

  }

  getId() {
    return this.id;
  }

  getParent() {

  }

  getOwner() {

  }

}
