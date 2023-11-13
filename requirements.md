# Software Requirements

## Vision

The vision of the Tea Explorer website is to create a user-friendly platform that addresses the pain point of navigating the vast world of teas. The project aims to provide an interactive map where users can explore teas from different countries by clicking or hovering over continents and countries. The inclusion of contact information on a dedicated page streamlines the process for users interested in purchasing their preferred teas. We care about this product because it simplifies the tea exploration process, making it informative, engaging, and accessible to users globally.

## Scope

### IN

- Provide information to the user about the different types of teas available throughout the world.
- Display an interactive element to navigate the origin of teas on a world map.
- Provide information to the user about each tea: more detailed description, purchase information.
- Allow the user to search and filter a list of teas by different categories/properties.
- Allow the user to "favorite" different teas to be stored on a reference list on each visit to the page.
- Provide the user recommendations for teas based on their "favorite" teas list and other inputs.

### OUT

- The web app will not be optimized for non-desktop devices like tablets and phones.
- The web app will not list detailed information for every tea.

## Minimum Viable Product vs Stretch Goals

### Minimum Viable Product (MVP):

1. Interactive map for tea exploration.
2. Website information and contact details page.
3. Tea database with filter functionality.
4. "Add to Favorites" feature.
5. Basic recommendation engine.

### Stretch Goals:

1. Interactive Bar Chart for Tea Votes.
2. Additional charting types (Pie/Doughnut Charts).
3. User responses display on votes.
4. Language preference options for international users.

## Functional Requirements

### User Authentication:

- Users can store dates in the local storage.

### Tea Exploration:

- Develop an interactive map with clickable/hoverable continents and countries.
- Display brief descriptions of specialized teas when a user interacts with a country.

### Website Information and Contact Details:

- Create a second HTML page (teas.html) with information about the website.
- Include contact information for purchasing teas on the second page.

### Tea Categories:

- Implement filter functionality on "tea-database.html" to categorize teas.
- Display brief descriptions of each tea category.

### Favorite Teas List:

- Implement an "Add to Favorites" button for each tea.
- Create a page or section to view and manage favorite teas.

### Tea Recommendations:

- Implement a recommendation engine based on the user's tea exploration history.
- Display recommended teas on the homepage.

### Tea Events Calendar:

- Create a calendar section highlighting global tea events.
- Provide details and links for users to learn more or attend events.

## Data Flow

### User Registration and Login:

- Users create accounts with profile information.
- Users log in to access personalized features.

### Tea Exploration:

- Users interact with the map, triggering requests for tea information.
- The app processes requests and displays brief tea descriptions.

### Website Information and Contact Details:

- Users navigate to the "teas.html" page for general information and contact details.

### Tea Categories:

- Users access the tea-database.html page to filter teas by category.
- Filtered teas and descriptions are displayed based on user selections.

### Favorite Teas List:

- Users utilize the "Add to Favorites" button to save preferred teas.
- A dedicated page displays and manages the user's favorite teas.

### Tea Recommendations:

- The app analyzes user exploration history to generate tea recommendations.
- Recommended teas are displayed on the homepage.

### Tea Events Calendar:

- Users access the calendar section to view upcoming global tea events.
- Details and links provide additional information about each event.

This section outlines the key functionalities and data flow from user interaction to the completion of tasks within the Tea Explorer website.
