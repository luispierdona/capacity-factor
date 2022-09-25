# CapacityFactor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Technologies used:
Angular 14: https://angular.io/
Material Design: https://material.angular.io/
Lodash: https://lodash.com/
Testing: Karma/Jasmine

## The user can:
Select one or more Wind Farms and a Range of Days to calculate the Capacity Factor.
Change the Work Capacity for each Wind Farm.
Add new Wind Farms.​

## Notes:
The Capacity Factor Calculator has a 900px width (making sense for a 14 inch non 1080p laptop)
The list are Flex cards.
You can change the Work Capacity directly into each Wind Farm.
Both Select dropdown and Datepicker are mandatory in order to click the Calculate button.
If you add a new Wind Farm, all fields are mandatory and Active Hours goes from 0 to 23, representing Date Time in 24hrs format.
After the Calculate button is pressed an overlay is displayed with a table giving the user the readings from the selected Wind Farms calculated with the Workload, Capacity, Hours and Days selected.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
