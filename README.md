SWAPIbox

Introduction

For this project, we are going to work on developing some muscle memory building out React components. At this point you’ve built at least one basic React app in the past. Now’s the time to leverage that and add some complexity.

For this project, we will be hitting The Star Wars API to tap into a “black hole” of Star Wars data. Mwahaha.

Prep Work

You will be expected to use a modular structure for this application. Before you begin coding, read this article which discusses why modular architecture is a good idea.

Using a “Modular Structure” means that all of the files associated with a given component should be nested within the same folder.

For example:

App/
  Components/
    Button/
      Button.js
      Button.scss
      Button.spec.js
    Card/
      Card.js
      Card.scss
      Card.spec.js
Project Goals & Requirements:

Get comfortable whipping together React components on your own with the additional complexity of implementing React Router.
Write squeaky clean, well refactored code using ES6 syntax.
Make informed design decisions to create a user-friendly application.
Keep state based components to a minimum and leverage more functional components.
Use a modular architecture for your application file structure.
Think deeply about React Lifecycle Methods.
Use propTypes for every component receiving props.
Important Notes

The API we are using is completely unsecured. This means we will be making all requests for this particular project directly from our browser. We will not be sending any advanced communication from a local server.
Although there are many resources out there for making API calls, you are asked to exclusively use the native fetch() API for this project. That being said, you are highly encouraged to experiment with axios and any other fun libraries you wish for comparison purposes.
The data does not need to persist. Feel free to implement Firebase or localStorage if you are so moved (it is also listed as an extension).
Specifications

Iteration 0: Landing Page

When the app starts up '/' the user should see the opening scrolling text of a random film, with the title of the film and release year listed below.
There should be buttons to browse three different categories: People, Planets, and Vehicles.
There should be a button to view favorites, with the number of current favorites indicated.
Landing Page

Iteration 1: Get People

When a user clicks on People, the page is populated with cards with data for each person.
The cards should have:
Name
Homeworld
Species
Population of Homeworld
A button to “Favorite” the person
The button should have an active class indicating it has been pressed.
People

Iteration 2: Get Planets/Vehicles

When a user clicks on any of the other buttons, the data should then represent the button pressed.

Planet Cards:
Name
Terrain
Population
Climate
Residents
A button to “Favorite” the planet
Vehicle Cards:
Name
Model
Class
Number of Passengers
Iteration 3: Favorites

There should be a button on each card to save it to Favorites.
Favorite Button

There should also be a button that when clicked, displays only the favorited cards.
Favorites Page

Users should be able to unfavorite a card.
If there are no favorites, there should be a message indicating that there are no favorites.
Extensions

Implement a More button. When clicked, the next 10 items of that category should be shown. There should be a Back button to go back to the previous page.
Use localStorage to persist data.
Implement React Router
The URL should match the category chosen. For example, clicking on the People button routes the user to '/people'and display the people cards.
When a user visits '/favorites' the favorited cards are displayed.
Rubric

Specification Adherence

4 - The application completes all 3 iterations above and implements one or more of the extensions.
3 - The application completes all 3 iterations.
2 - The application is in a usable state, but is missing some of the features outlined in the specification above.
1 - The application is missing multiple features essential to having a complete application.
Code Quality

4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
3 - Developer appears comfortable in React. There are minor opportunities to refactor.
2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
1 - Developer did not make any effort to use React effectively or refactor code.
Design

4 - Zero major changes requested by evaluator.
3 - Some changes requested by evaluator.
2 - Developer made a minimal attempt to style application.
1 - There was no attempt to style this application.
Testing

4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
3 - Almost all components are tested to a level that indicates developer has an understanding of testing
2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
1 - There was little to no attempt to test this application.
  

