# [GridHub](https://gridhub-qefex.mongodbstitch.com)

Scope and purpose of this web app is to demonstrate my ability to create a full stack web app with Angular, Node.js, Express and MongoDB. My audience for this project is potential employers. This app, GridHub, is intended to turn heads and get me an interview.

First thing I needed to do was learn Angular all over again. I did a couple of MEAN stack tutorials about 2 years ago, so I am basically starting over at square 1. However, I do have a much better comprehension of ES6 than I did back then.

The first video tutorial I followed was [Reusable Layout Templates Using Angular Routing and Flex-layout Flexbox](https://www.youtube.com/watch?v=U4ftsqSt81w). Many thanks to the author code-academia, I found that video easy to understand and well articulated.

Having finished the layout part, I proceeded to host my app on [MongoDB-Stitch](https://gridhub-qefex.mongodbstitch.com/), which offers free hosting, free MongoDB, and other sweet features like secure login, lambda functions, triggers, webhooks and GitHub integration.

The next video tutorial I followed was [Angular 8 Tutorial](https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ) by Codevolution. Again, many thanks to the author.

Now that I have the layout and routing set up, I need to pull in some data with a REST API. I am following along with videos 15-22 of Codevolution's tutorial, and I am facing some challenges. The first challenge I am working through is merging lessons learned from two or more different video tutorials.

Another challenge I ran into was Content Security Policy (CSP), which prevents the page from loading data after hitting the API. So I rolled back to my last known good commit and trying again, this time with CSP-aware diligence.

I was able to overcome the CSP issues with the help of this [REST API Tutorial]REST API](https://www.djamware.com/post/5d8d7fc10daa6c77eed3b2f2/angular-8-tutorial-rest-api-and-httpclient-examples#setup-angular-httpclient). I am always greatful to the many authors out there that help me out of a difficult challenge.

Add chart.js - It's easy to get started with Chart.js. All that's required is the script included in your page along with a single <canvas> node to render the chart.

---

Content below this line is default content from ng new project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
