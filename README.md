<!-- README template Credit: https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4 -->

## Project Name & Pitch

<h3>Task Management App</h3>

An Jira alike application demo used to manage tasks, built with React, TypeScript, and [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

[**Live Demo**](https://jwhan77.github.io/task-app-react-beautiful-dnd/)


## Project Status

This project is currently in development.


## Project Screen Shot(s)

![screenshot](/images/screenshot.gif)


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Start Server:

`npm run dev`  


## Reflection
  This is an experiment project to learn `react-beautiful-dnd` library. There are many ways to implement drag and drop in React application, but `react-beautiful-dnd` is one of the best libraries to build a task management application.

  I started a project with `Vite` boilerplate for efficiency and faster dev tool. I followed [an official tutorial of react-beautiful-dnd](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd), but eventually changed a lot of code since the tutorial code is built with CRA boilerplate, React v16, JavaScript and Styled Components. Unlike the tutorial code, **this project is built with Vite, React v18, TypeScript and CSS modules**.

  There's an issue to find draggable with id in the current latest version of `react-beautiful-dnd` (v13.1.1). It turns out to be an issue caused by not supporting React v18 Strict Mode. This can be resolved by two solutions: disabling React strict mode or using custom Droppable. I prefer to enable strict mode to find potential problem, so I used the second solution.

  If you are looking for an example code of drag and drop using `react-beautiful-dnd` with React 18 and TypeScript, this repository can be helpful to find a solution for some issues you might encounter.