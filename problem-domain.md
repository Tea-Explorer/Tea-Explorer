# Problem Domain

## Pain Point

The Tea Explorer website addresses the consumer pain point of navigating the vast world of teas by providing a concise and informative platform featuring an interactive map. Users can click or hover over continents and countries to discover details about specialized teas. The inclusion of contact information on the second page streamlines the process for users interested in purchasing their preferred teas, offering a centralized source for information.

## User Stories

### Explore Teas Around the World

***As a user, I want to be shown an interactable map that presents all sorts of teas around the world.***

Feature Tasks:

- Users are shown a variety of locations that each feature a specific regional tea. 
- Users can either click or hover over each location to be shown more information.
- Users can click a link that sends them to either a more detailed section for the selected tea, or to a different website that hosts detailed information about the selected tea.

Acceptance Tasks:

- Ensure the map and location points load correctly.
- Ensure click/hover feature opens a new smaller window.
- Ensure references are correctly linked to the respective destination.

### Website Information and Contact Details

Feature Tasks:

- Create a second HTML page (teas.html) with information about the website.
- Include contact information for purchasing teas on the second page.
- Stretch goal: Document where on the map, when applicable, has a hover-on, showing information and contact details for purchasing tea of those countries first thing on the website.

### Tea Categories

***As a user, I want to view different tea categories and their descriptions so that I can know more about teas.***

Feature Tasks:

- Implement a filter functionality to categorize teas on “tea-database.html”.
- Display brief descriptions of each tea category.

Acceptance Tests:

- Verify that the filter allows users to select different tea categories.
- Ensure that the displayed description matches the selected category.
- Confirm that the feature is accessible and responsive.

### Favorite Teas List

***As a user, I would like to keep a list of my favorite teas so that I can reference them.***

Feature Tasks:

- Implement an "Add to Favorites" button for each tea.
- Create a page or section to view and manage favorite teas.

Acceptance Tests:

- Verify that the button allows users to save to “my favorites”.
- Ensure that the page of “my favorites” loads a list of the selected teas without errors.

### Tea Recommendations

***As a user, I would like to get recommendations on teas I might like so that I can make better decisions on which teas to drink.***

Feature Tasks:

- Implement a recommendation engine based on the user's tea exploration history and “favorite” teas.
- Display recommended teas on the homepage and/or the user’s tea list.

Acceptance Tests:

- Ensure the recommendations page displays at least one recommended tea to the user.
- Verify the recommendation algorithm considers the user’s favorites when suggesting a tea.

### Tea Events Calendar

***As a user I want to be to explore upcoming tea events so that I can keep up to date on events that I may be interested in attending.***

Feature Tasks:

- User can view a calendar that has the ability to show the next 3 months of events.
- User can use an arrow to view the next month's events.
- User is prompted with the option to add the event to their Google Calendar after clicking on the event. (Not sure if this is doable within time frame)
- User is prompted with an option to share a link to the calendar event listed.
- User is prompted after clicking event with the opportunity to be redirected to the events website.

Acceptance Tests:

- Verify that the Calendar is up to date with upcoming events (How can we do this? Is there a way to auto-populate? Maybe we could allow users to add event info?)
- Verify that the user can switch between the next three months.
- Verify that the event properly will update their Google Calendar, properly send them to Google Calendar.
- Verify user is given an accurate link when they copy the given link. 
- Verify user is properly redirected to the given event's website.
