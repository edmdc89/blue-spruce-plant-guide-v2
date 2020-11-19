# Blue Spruce Plant Guide v2

The [original project](https://github.com/edmdc89-turing-student-projects/blue-spruce-plant-guide)
can be found under the [organization](https://github.com/edmdc89-turing-student-projects)
for my projects as a student at [Turing School of Software and Design](https://turing.io/).
I recreated this project to demonstrate the technologies and concepts explored
in the weeks following my graduation from Turing.

## Abstract

I built this learning tool to explore native plants in Colorado. As a user, you
can choose between exploring plants via a plant index or test your knowledge by
taking a configurable quiz.

### Concepts

#### SSR

##### Single Page Applications & Client Side Rendering

Single Page Applications (SPA) are the typical applications created by tools
like `create-react-app`; they render an app's main content on the browser and
project it onto a minimal HTML file given by a server, hence considered
client-side rendering. While this approach creates a rich user experience, it
also requires JavaScript (JS) files to be downloaded and then executed, resulting
in two main limitations: First, this can be a slow process if a user has a poor
internet connection. Second, it's difficult for search engines to crawl the
created content leading to suboptimal SEO results.

##### Server Side Rendering: History and Resurgence

Server-side rendering (SSR) is a technique that dates back to the early days of
the web when developers created web pages mostly in HTML with added CSS and JS
to increase their appeal. Rich user interactions were inefficient since new
content created by incoming data would trigger a new request cycle to send a
whole new file with updated content. This limitation is what initially lead to
the development of frameworks rendering content on the client-side.

Recently, SSR has seen a resurgence as frameworks mature to support it. Just
like with traditional SSR, a server can fetch required data, construct an HTML
file, and send it to the user. When used with modern frameworks, the application's
core logic determines the content of the HTML file, and the chosen framework
connects events and actions between the DOM and Virtual DOM. By combining SSR
with modern frameworks, a web page can provide the same rich experience as
traditional SPA without overloading a browser's resources.

Even though frameworks like NextJS and Gatsby support SSR natively, I took an
involved approach by setting up the project from scratch. Version 1 was an
exploration into the abstractions created by boilerplates like `create-react-app`;
Version 2 continues the trend and probes into the next level of abstraction
created by newer frameworks. Though this approach may be slower, I believe it
enhances my ability to understand and adapt to different abstraction levels
created by the wide assortment of frameworks available to the modern web developer.

#### GraphQL

GraphQL is a query language for APIs and server-side runtime to fulfill those
queries. It creates a self-documenting API by using a type system rather than
endpoints to define the structure of data and how to obtain it. It can consolidate
multiple REST APIs into one source that allows developers to make one single
request for desired data. GraphQL comes equipped with powerful developer tools
that allow for the exploration of the API's whole type system.

These combined features help front- and back-end developers create software
synchronously and talk about the API decoupled from teams' preferred languages
increasing overall development speed.

#### Typescript

Typescript is an open-sourced language that builds on JavaScript by adding static
type definitions. Lately, it has been my go-to choice for projects because it
provides improved editor tooling with which I can fully explore new technologies.
