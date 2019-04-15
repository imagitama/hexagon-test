# Hexagon Mining Test

This is my test app for Hexagon Mining.

![](./screenshot.png)

## Usage

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

I chose to store the text input in Redux and format the output in a React component because it is purely formatting.

## Testing

Run this command to run all unit and regression (snapshot) tests:

    npm test

It is especially important for the input/output algorithm (under `src/components/output-message/formatter.test.ts`).

I have used Jest's coverage reporting to help identify what tests should be written (plus my own judgment). The report is generated when you run the test command (look at `/coverage/index.html`).

## Answers to questions

> The reasons why you have selected your approach and why you rejected other possible
solutions.

I chose to write my own algorithm because I believed part of this test was to challenge myself and to assess my techical ability.
There are packages and code snippets out there to achieve the same result however I avoided them for the above reason.

I chose to style using Emotion because it is a very good modern way to style a React app. I chose TypeScript because I think type safety is very important. I chose Enzyme as it has a great API for mounting and asserting React components in Jest.

> A test plan.

Written [here](./TEST-STRATEGY.md).

> An interface to allow the application to be tested interactively. This can take the form of
command line input or a graphical user interface. The application should accept input as
a string.

This app.

> Supporting files for testing, such as a documentation, working executable, source files,
test harnesses, and solution or project files.

All tests are written alongside the deliverable code. Code is self-documenting where possible however some documentation is written eg. this README.