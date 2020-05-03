Feature: Color attribute
  In order to develop apps faster
  As an app developer
  I want the framework to supply reusable bindable color means

Scenario: Setting color value from code is reflected in the presentation
  Given I have the model with property color set to value "red"
  And I have the view with color binding
  When I set the color value to "green"
  Then I expect to see "green" background

Scenario: It sets font color with hard coded value
  Given I have the view with color binding
  When I set the color value to "green"
  Then I expect to see "green" background  

