# Blue Spruce Plant Guide v2

[Version 1](https://github.com/edmdc89-turing-student-projects/blue-spruce-plant-guide)
of this project exist under my organization for my [projets](https://github.com/edmdc89-turing-student-projects)
as a student at [Turing School of Software and Design](https://turing.io/). With
the recreation of this project, I wish to demonstrate the technologies and
concepts I have explored in the weeks following my graduation from Turing.

## Abstract

A learning tool to explore Colorado's native plants. A user can choose to explore
plants via the Plant Index page or test their knowledge by navigating to the Quiz
page. The quiz can be configured to test the user by a plant's image or scientific
name.

### Concepts

#### SSR

#### Single Page Applications & Client Side Rendering

Tools like `create-react-app` default to creating Single Page Applications (SPA).
This means the main content is created by the user's browser and projected onto
a bare bone HTML file given by a server. This is also considered client side rendering.
While this approach creates a rich user experience, it also requires JavaScript (JS)
files to first be downloaded and then executed which has two main limitations:
First, this can be a slow process if a user has a poor internet connection.
Second, it's difficult for search engines to crawl the created content leading
to poor SEO results.

#### Server Side Rendering: History and Resurgence

Server side rendering (SSR) is a technique that dates back to the early days of
the web, when developers created web pages mostly in HTML with some added CSS
and JS to increase their appeal. This made a rich user experience difficult
since new content/data would trigger a new request cycle to send a new file with
updated content. This limitation is what initially lead to the development of
frameworks that rendered content on the client-side.

Recently, SSR has seen a resurgence as these frameworks mature to support it.
Just like with traditional SSR, a server would can fetch required data, construct
an HTML file and send it to the user. When used with these frameworks, the content
of the HTML file is determined by the applications core logic, and the chosen
framework connects events and actions between the DOM and Virtual DOM. This means
a web page can remain as responsive as traditional SPA without overloading the
user's browser resources.
