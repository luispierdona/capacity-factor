# CapacityFactor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Technologies used:
Angular 14: https://angular.io/ <br />
Material Design: https://material.angular.io/ <br />
Lodash: https://lodash.com/ <br />
Testing: Karma/Jasmine

## The user can:
Select one or more Wind Farms and a Range of Days to calculate the Capacity Factor. <br />
Change the Work Capacity for each Wind Farm. <br />
Add new Wind Farms.​

## Notes:
The Capacity Factor Calculator has a 900px width (making sense for a 14 inch non 1080p laptop). <br />
The list are Flex cards. <br />
You can change the Work Capacity directly into each Wind Farm. <br />
Both Select dropdown and Datepicker are mandatory in order to click the Calculate button. <br />
If you add a new Wind Farm, all fields are mandatory and Active Hours goes from 0 to 23, representing Date Time in 24hrs format. <br />
After the Calculate button is pressed an overlay is displayed with a table giving the user the readings from the selected Wind Farms calculated with the Workload, Capacity, Hours and Days selected.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
