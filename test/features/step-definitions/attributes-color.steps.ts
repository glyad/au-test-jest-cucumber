import { defineFeature, loadFeature } from "jest-cucumber";
import {StageComponent, ComponentTester} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

const feature = loadFeature('./test/features/attributes-color.feature');

defineFeature(feature, test => {  
  let component: ComponentTester<any>;
  let model = {color: 'green'};

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

test('It sets font color', ({
    given,
    when,
    then
    }) => {      

    
    given('I search for cats', async () => {
      //
    });

    when('I am on google', async () => {
      component = StageComponent
        .withResources('attributes/color')
        .inView(`<p color.bind="color"></p>`)
        .boundTo(model);      
    });

    then('I should see cats', async ()=> {
           
        await component.create(bootstrap).then(() => {
        
            const view = <any>component.element;
            expect(view.style.color).toBe('green');
    
          }).catch((e: any) => {
            fail(e);
          });
    });
        
  });
});
