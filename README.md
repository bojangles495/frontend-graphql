# Wellframe Frontend Challenge

Welcome to the Wellframe frontend coding challenge. We are excited for you to show us what you got! We take you and your (but also our) time very seriously. There are few considerations that went into the creation of this challenge:

- We would like to get great insight into how you would perform at frontend engineering at Wellframe. For that, the challenge should be as close as possible to what we would ask from you at Wellframe.
- We understand that everyone comes from different backgrounds, experiences and tech stacks. We want to be cognizant of that, while allowing applicants to explore and learn. Interviews should be mutually beneficial.

### What's the challenge?
We would like to ask you to take this existing real-world example forked from the [Redux](https://github.com/reactjs/redux/tree/master/examples/real-world) repo, and refactor it to use an alternative application state management approach. We are especially interested in a comparison write-up of the strengths and weaknesses of the various approaches. We have some recommendations for which other tools you might want to try, but ultimately it is up to you. We want to see you evaluating a tool that is novel to you.

- GraphQL/Relay
- MobX
- RxJS
- Cycle.js

### What are the deliverables?

Code does not exist in isolation. We value candidates that have experienced how important it is to be able to communicate their analysis and decisions. We would like to know what tool you chose and why, what their pros and cons are (including other tools that you have experience with prior). Clone this repo locally and upon completion, push your code to a private repo. Please add your writeup either to this README or separate file and annotate it with any instructions required for running the code, tests etc. If you have any questions, please let us know.

Below is some more contextual information about the challenge that might be useful:

### Why refactor?
Most challenges ask the applicant to produce a greenfield application. In our opinion, it does not really allow us to properly assess a candidate's engineering skills, as most of our work is not to produce greenfield applications. Instead, we are focused on delivering and iterating on our product/technology at a high speed while keeping technical debt minimal.

The frontend/javascript ecosystem is notorious for the rapid turnover in tooling and frameworks. While that allows the community to continuously innovate, it is paramount to not jump on the hype train and refactor for the sake of using the newest, shiniest toy. That being said, it is useful to understand the problems these tools attempt to solve, identify the tradeoffs they are choosing and ultimately weigh concerns such as application requirements, community momentum, maintainability etc. to make a decision when the right time comes.

### Why application state management?
In any non-trivial single page application, being able to manage application state becomes one of the most important to be able stay on top of. Users expect a performant, consistent, desktop-app like experience. What used to be solved by every team separately in-house, has been receiving a lot of attention by the community. Much of that conversation became mainstream since Facebook's release of Flux with React, and the current momentum is held by [Redux](http://stateofjs.com/2016/statemanagement/)

That being said, plenty of people do not fully understand the tradeoffs necessary for choosing a tool like Redux ([as pointed out by its creator Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)). At Wellframe we started with storing our application state (especially data models) in Backbone and most UI state in React. Over time we noticed that modifying and keeping that state consistent across different parts of the UI became wieldy and difficult. Data around a patient is very contextual and since we support many different use cases, the data requirements are diverse. We are currently moving towards Redux.

As a critical member of the frontend team, you will be responsible for dissecting problems like these and ensuring a solid foundation for future growth.

### Miscellaneous
This example is a relatively simple application, it allows you to lookup users or repos from Github, for users it shows their starred repos, for repos, it shows users that have starred the repo. There is simple navigation built in. The example is using [Create React App](https://github.com/facebookincubator/create-react-app), with ES6, React-Router and Redux. It also shows the Redux Devtools on the right hand side. Under the hood it uses Webpack and Babel. If you would like to access that configuration you can run `npm eject`.

If you choose to do GraphQL/Relay, we have provided a `graphql` branch that provides some config/boilerplate so that you don't have to waste your time doing that. You just have to get your access token with the right scopes from [your settings](https://github.com/settings/tokens) and insert them in [index.js](https://github.com/WellframeInc/frontend-challenge/blob/graphql/src/index.js#L12). You'll have to sign up for Github's Early Access program to get access to their [GraphQL API](https://developer.github.com/early-access/graphql/). You should definitely check out the [GraphQL API explorer](https://developer.github.com/early-access/graphql/explorer) as well. The branch should show you a [simple demo of a search query](https://github.com/WellframeInc/frontend-challenge/blob/graphql/src/components/RelayDemo.js#L17), you should try to display the users' bio and see how easy that is with GraphQL/Relay.

There are two gotchas to watch out for:

- The GraphQL API currently does not easily support lookup users by their username. Instead, you'll have to lookup `repositoryOwner` by the user name. On repository owners, you can't query their starred repos, so instead, you should just list their own repos.
- Relay currently does not support root queries with more than one parameter, so you'd have to use the `relay` root query and have your actual query under it. Also see [https://github.com/facebook/relay/issues/112](https://github.com/facebook/relay/issues/112)

===============================================================
(Original Readme)


# Redux Real World Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
