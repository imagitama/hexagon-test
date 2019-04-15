This is the first time I have ever written a test plan so I am copying the steps from [here](https://www.guru99.com/what-everybody-ought-to-know-about-test-planing.html).

## 1. Analyze the product

A React and Redux app that takes an input of a number (that can have a decimal point with any number of decimals rounded up) and outputs the number 
in words. eg. 123.456 becomes "ONE HUNDRED AND THREE DOLLARS AND FORTY SIX CENTS".

No limit is described, nothing about handling errors or weird cases like non-number inputs, no designs or mockups.

## 2. Design the Test Strategy

The testing objectives are to ensure the React app and its components and functions (including the input/output algorithm) operate correctly.

Writing unit and regression tests to test the React components and to test the input/output algorithm should be satisfactory for this. Passing various inputs to the algorthm will demonstrate how it handles edge cases.

There are risks that specific edge cases for the algorthm won't be captured by tests. Some components will not have any/many tests as they are not valuable enough.

## 3. Define the Test Objectives

To ensure the app works as expected and it has no defects (as above).

## 4. Define Test Criteria

100% success of all unit and regression tests. High amount of code coverage using Jest's inbuilt reporter.

## 5. Resource Planning

Single developer being tested. Interviewer to assess the test.

## 6. Plan Test Environment

All tests should be executed in Jest in a Nodejs environment.

## 7. Schedule & Estimation

Approximately 2 hours to write deliverable code, 10-30 minutes to write tests.

## 8. Determine Test Deliverables

Unit and regression test code can be delivered before/after deliverable code.