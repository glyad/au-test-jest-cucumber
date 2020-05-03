import {bootstrap} from 'aurelia-bootstrapper';

export class ColorSteps {
  static async AssertComponentColor(color: any, component: any) {
    await component.create(bootstrap).then(() => {
      const view = <any>component.element;
      expect(view.style.color).toBe(color);
    })
  }
}
