import React from 'react';
import { Notes } from 'spectacle';
import { SectionSlide } from '../template/baseSlide';

export const ConvertingExisting: React.FunctionComponent = () => {
  return <SectionSlide sectionName={'Converting an Existing React App'} subHeading={'Adopting Gradually'}>
    <Notes>
      However, what happens if you have an existing application? Full disclosure, I'm going to be presenting this
      as if the typescript transpiler is already being used.  If you are not using that already there will be some additional
      work to do.  That is going to depend on your bundling tool.  No matter which you are using it is normally pretty painless.
      If you created a react app without typescript there are instructions on how to switch that.  I'll add them at the end of the slide
      deck.  
      So we have a simple ToDo app here.  
      **Show working example**
      This is how it should look.  Its a field that allows you to type a name and create a todo.  We can then
      complete that using the button included in the card.

      **Show not working example**
      Here is the same app.  It has not been converted yet, but we can see it renders, but it isn't working.  We don't even
      get any console information about what is happening either.  All we know is we aren't getting any todos.  Lets jump into 
      the code and try seeing if we can solve this without debugging and just using typescript.
      Let's give a quick overview.  App is our application root.  It sets some state and calls child components.  We can
      see it is in charge of maintaining the todo state.  It needs to hand down some functions to children to maintain its state.
      We have a TodoInput which is a simple form that has a text box with a button that adds a todo to state using the given function.
      Back up, we have our TodoCardGrid, this renders all of our todos.  We can see that it takes the given todos, breaks them up
      into groups using given props, or defaults to 3.  We then render something called Todo for each todo.
      Todo is a card that renders the todo.  Lastly, is CompleteButton.  This is a button that will mark the todo as complete.
      Now that we've had the tour, lets start by converting these to typescript files.  We can do that by changing the file extensions from
      jsx to tsx.
      We can see right away that a fair amount of our files have red squiglies in them.  Lets start at the bottom and work our way up.
      completeButton - todo - todoCardGrid - todoInput - App - todoCardGrid

      1. Using the wrong prop for completeTodo for TodoCardGrid in App.jsx.              
      2. App.jsx sends the wrong function for addTodo                                    
      3. App.jsx compares name todo.name to todoName, not todo.title      
      4. TodoCardGrid returns an array of elements, not a single                

      After we can see that the app is working as expected!  No run time debugging needed! The compiler did all of the work for us.           
    </Notes>
  </SectionSlide>;
}