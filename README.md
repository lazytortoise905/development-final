# Development

### Link to Deployed Website
`https://lazytortoise905.github.io/development-final`

### Goal and Value of the Application
The goal of this application is to provide Eagles fans a fun way to add their
favorite Eagles players to their `favorites` list. In this way, maybe users
could share their lists and compare with their friends. If I had more time
to develop this application I would add more features to support the social
aspect of this app.

### Usability Principles Considered
An important usability issue I considered was contrast. I made sure that the
text was readable and clear in all configurations of the app to enhance
accessbility. Additionally, I chose a visual hierarchy that is clear and
intuitive. The controls are on the left side of the screen which is a
popular structure due to the left-to-right nature of how users perceive
user interfaces. As they move over the page they are met with the players that
the controls can manipulate, and then finally their favorites list.

Both the favorites list and the grid of players display messages telling
users how to interact with them if they are empty which enhances
the ease of understanding and learnability of the application.

The player cards are structured in a grid to promote organization and clarity.
Since these are flex boxes, this also makes the page scale very well.

### Organization of Components
The main component is `app.js` which has three child components:
`aggregator.js` `cardItem.js` and `control.js`. The first of these controls is
the favorites list on the right which displays information about the players
the user has selected as well as an aggregation of their total combined
games played. The second component is a singular cardItem which takes as a prop
a player object and displays information about them (picture, number, position,
side of the football, games played, name, and an add/remove button). This makes the code
very abstract as a list of the players can be mapped into a list of card items
that is then displayed by the parent (app.js). Finally, the third component
contains the block on the left which is home to the controls
for filtering, sorting, and resetting the cards displayed by the parent.

### How Data is Passed Down Through Components
The main page is `app.js` which passes the state of the players currently being
displayed and a function that can set this state to the three components:
`aggregator.js` `cardItem.js` and `control.js`. This allows the control component
to directly manipulate the same data that is being displayed in both the aggregator
and the cardItem components with filters and sorts. Additionally, the original list of data is passed
to control so that users can revert the player list to the original order from
the child component. Adding or removing players from the list of cardItems will
update the list of players present in the list passed down to aggregator and
the value of the aggregator (games played) which are both then displayed within
this child component.

### How the User Triggers State Changes
Users trigger state changes any time they interact with a button. First and foremost
the users can trigger a state change by clicking an "add" button. This appends
that player to the state controlling the list of players passed to the
aggregator component which displays the list of favorites. In a similar fashion,
clicking a remove button will again update this list and trigger another state change.
Since the new values of the list of players is different after the button is pressed,
the change in state triggers a rerender and the new state is now displayed.

Additionally, users have the same effect on state when they click any of the control buttons
which augment the list of players present in the grid by an assortment of resets, sorts, and
filters.

This app also takes advantage of conditional rendering to offer clarity to users.
Users who (possibly inadvertently) filter all of the players out by selecting
both defense and offense are provided with a message, only present in this case,
that informs them no players match the criteria.

All of this utilizes useState and useEffect in React, and the page never has to be
reloaded.