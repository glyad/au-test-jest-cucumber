import { defineFeature, loadFeature } from "jest-cucumber";
import {StageComponent, ComponentTester} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

const feature = loadFeature('./test/features/attributes-color.feature');
  let component: ComponentTester<any>;
  let model = {color: 'red'};

defineFeature(feature, test => {  

test('It sets font color', ({
    given,
    when,
    then
    }) => {      

    
    given('I search for cats', () => {
      
    });

    when('I am on google', () => {
      
 
      component = StageComponent
        .withResources('attributes/color')
        .inView('<p color.bind="color"></p>')
        .boundTo(model);

        component.create(bootstrap).then(() => {
        
          const view = <any>component.element;
          expect(view.style.color).toBe('green');
  
        }).catch(e => {
          fail(e);
        }).finally(() => {
          if (component) {
            component.dispose();
            component = null;
          }
        });
    });

    then('I should see cats', () => {
      //let ct = component.create(bootstrap).then(async () => {});
      console.log('huy');
      
      
    });
        
  });
});
