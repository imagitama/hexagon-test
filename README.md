# Hexagon Mining Test

This is my test app for Hexagon Mining.

## Setup

Written for Nodejs 10.x

    npm i
    npm start

It will launch your browser pointed at the local React app.

## How it's made

Uses create-react-app (v2) plus:

- Redux - state management
- TypeScript - type safety
- Emotion - styling
- Jest/Enzyme - unit and regression testing

All Redux actions and reducers are grouped under `src/ducks` which is an
idea for bundling common reducers and actions together (documented [here](https://github.com/erikras/ducks-modular-redux)). 

I have used Jest's coverage reporting to help identify what tests should be written (plus my own judgment). Run this command for tests and coverage (go to `/coverage/index.html`):

    npm test

## Answers to questions

> The reasons why you have selected your approach and why you rejected other possible
solutions.

I chose to write my own algorithm because I believed part of this test was to challenge myself.
There are packages and code snippets out there to achieve the same result.

> A test plan.

Written [here](./TEST-STRATEGY.md).

> An interface to allow the application to be tested interactively. This can take the form of
command line input or a graphical user interface. The application should accept input as
a string.

This app.

> Supporting files for testing, such as a documentation, working executable, source files,
test harnesses, and solution or project files.

All tests are written alongside the deliverable code. Code is self-documenting where possible however some documentation is written eg. this README.