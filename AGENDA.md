# Training Agenda

## Section 1 - Setup and creating out first component

- Vue app setup and API info
- Created routes and the endpoints to hit the API
- Created a component that has a data attribute to hold a random item’s data, and created method in the component to get a random item from the API
- Created a button and used the `@click` directive to call the method that calls the API

```
Note: For the sake of time, I added the remaining API endpoints, some styling for the page layout, and a Header and Footer component.
```

## Section 2 - Creataing components for reusability

- Create a new '\*' route and a NotFound page
- Create a Card component and pass `id, title, subtitle, and image` as props
  - Explain how to dynamically set attributes on elements and `v-if` vs `v-show`
  - Also explain you can only have one root element
  - Also explain interpolation
- Create a Button component that can be either a `router-link` or `button` and pass label, link, classes, and icon as props. For Favorites (link) and Random (button)
- Create a RandomMeal component using the Card and Button component and take logic from Home. Then import RandomMeal component into Home and use it there
- Then show you can reuse that RandomMeal component on the NotFound page

## Section 3 - Creating the Search component

- Create SearchForm component
  - Form with `@submit.prevent="onSubmit"`
  - Copy the input form; Explain the `v-model="search"` on the input field and how it links to the data attribute of the same name to two-way bind this value. Demonstrate by interpolating the search value on the page and typing into the search box
  - Import the apiService and call searchByName passing this.search to it
- Create a SearchResult component to demonstrate `v-for` and the importance of `:key`. Pass the title and image as props and apply the uppercase filter to the text
- Add a "View" button that links to the `meal/:id` page

```
Now is also a good time to go over custom filters and directives:
- Create uppercase filter for formatting text and apply it to Card and Button
- Create a custom directive for custom javascript actions to autofocus the input field
```

## Section 4 - Creating the View page

- Open the Meal view and add a data property to store the meal JSON
- In created hook, call the API endpoint to pull meal by ID from props and set the meal data property to result
- Add computed properties for ingredients and tags
- Demonstrate emitting an event on the SearchResult component to the SearchForm to display a message
- Demonstrate conditional classes on SearchResult component to show a different background color for favorites
- Demonstrate slots

## Section 5 - Managing State with Vuex

- Explain Vuex - state management that keeps your important data values in one place so it can be shared and persisted across all components at once
- Go into store/index.js and explain what it looks like and then change it to the "modules" format which is better if you have multiple kinds of state (we have both "search" and "favorites" state so we want to keep them separate)
  - Note: we are importing `vuex-persistedstate` which I believe uses localstorage to persist the full state object even after brower refresh
- Starting with the search form
  - Explain the problem - when we search then click on a result to go to the View page, when we come back the search results are gone and we want the results to persist when navigating to other pages
  - SearchForm currently handles the API logic when submitting the form, but this logic can be extracted into state
- Create the store/search.js file and create the four constants and export default
  - state, getters, actions, mutations
  - export default with `namespaced: true` because we want it to be namespaced under `search`
- When the search state is fully setup, return to SearchForm and import the new state, getters, and actions and implement them
  - Explain that you can also use `import { mapState } from 'vuex'` and use mapState like this `...mapState('search', ['searchResults'])`. This is used if you're importing from more than one state, or if you just prefer manually specifying the namespace, which is "search" here.
  - Remove the API related declarations and searchResults
  - Call the action in the submit method
  - Use the getter instead of the searchResults.length declaration in the template and show a new message with the search results count

## Section 6 - Integrating state logic for keeping track of favorites

- Create store/favorites.js and add it to store/index.js
- Create const variables for state, getters, actions, and mutations
  - state: favorites: []
  - getters: favoritesCount
  - actions: getFavorites, addFavorite, removeFavorite
  - mutations: GET_FAVORITES, STORE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE
  - export default
- Go to SearchResult component and integrate the favorites logic from state
  - This will also require some minor adjustments to the SearchForm component
- Copy/paste the Favorites view to see the full Favorites page
- Add the favorites store logic to the Meal view component

  - BONUS: Create a mixin/utility function for the isFavorite computed property since it is duplicated in Meal and SearchResult

## Section 7 - Writing tests

- Show the script in the package.json to run tests and modify it so it can be run as `npm run test`
- Create the "easy" home.spec.js test. Explain the difference between `shallowMount` and `mount`
  - shallowMount will make it easier because it only loads that component and none of the child components
  - mount loads that component and all of its child components. This is preferred to test components in their entirity but sometimes it is preferable to just use shallowMount to test a component in isolation.
- Create the button test to demonstrate setting props
- Create a search-form test to show how to set a form value, trigger a form submit/button click, and checking for an emit event
  - ensure if you check for an emit event that you add the emit event to the SearchForm component
