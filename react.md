# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true/false) true

- React will only render on the server using Node.js (true/false) false
  we run yarn start and it automatically renders itself in the browser

- React is a full stack framework for modern web applications (true/false) true

- React is a flexible library that plays the role of V in an MVC framework (true/false) true
  MVC is model-view-controller and includes the MODEL (data), the VIEW (user interface), and the CONTROLLER (processes that handle input)
 based on this, react plays the role of V because it creates a user interface. I also think it somewhat plays the role of C because we are using event listeners and creating functionality of buttons.. Not sure if this is accurate

- You should always update a component's state directly using this.state (true/false) false
  You can update this.state using this.setState(and pass in an object here)
  Components should only have state if it will need to be updated; state is reserved for data that changes in the component AND is visible inthe UI

- React is made up of encapsulated components that manage their own state (true/false) 
  false
  the smart components can manage their own state but React is also comprised of components that cannot manage or update themselves and simply pass or are passed info. 
  React is made up of many encapsulated components though, but they don't act completely independently and pass info to eachother and can cause state changes in other components

- React components render HTML (true/false) false
  react components render to the Virtual DOM (and update the entire content) which eventually, after going through the diffing process, updates the React DOM with relevant changes, and then that renders HTML


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Smart components host the state attributes and constructor and super and render info to the virtual DOM but dumb components only hold other data that can be passed to smart components
  Dumb components dont independently carry out changes they just host information that contributes to making changes
  If you deleted the smart compoent but left a dumb one, nothing would happen
  

  Researched answer: Smart components take care of functionality. They can manipulate date, capture changes, pass down application data. They can also call complex things such as Redux, APIs, Libraries, and more. Smart components are also managing state  and rerendering components at the right times.
  
  Dumb components are used to focus on styling and UI. Allows code to be more organized by seperating functionality from styling 
  


3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: not sure; yarn add is causing yarn to do something for react I believe

  Researched answer: installs a package and any packages that it depends on. A package in general, is a folder with code and a package.json file that describes the contents. You need to add another package to your dependencies if you want to use it



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: changes in both props and state cause a triggering of the  re-rendering process. Props can only be changed externally 

  Researched answer: State can only be changed internally ; a component can trigger the changes in its own state
  A component cannot change it's own props, they need to be changed externally (ie the parent component is changing the values that it passes down to the child that hosts the props)



5. How would you explain state to a friend who doesn't know code?

  Your answer: state, simply put: is a pretty descriptive title; it is the current state.
  With simple data (value) saved under a title (key), the piece of data is the curent state. This value can be changed by some action such as a click. This updated value is now the current state. 
  An analogy using lights : initial state when you come home is lights: Off. You can update this state by flipping a switch. The new state is lights: On
  
  
