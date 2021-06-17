# Training Agenda

## Section 1

- Vue app setup and API info
- Created routes and the endpoints to hit the API
- Created a component that has a data attribute to hold a random item’s data, and created method in the component to get a random item from the API
- Created a button and used the `@click` directive to call the method that calls the API

```
Note: For the sake of time, I added the remaining API endpoints, some styling for the page layout, and a Header and Footer component.
```

## Section 2

- Create a new '\*' route and a NotFound page
- Create a Card component and pass `id, title, subtitle, and image` as props
  - Explain how to dynamically set attributes on elements and `v-if` vs `v-show`
  - Also explain you can only have one root element
  - Also explain interpolation
- Create a Button component that can be either a `router-link` or `button` and pass label, link, classes, and icon as props. For Favorites (link) and Random (button)
- Create a RandomMeal component using the Card and Button component and take logic from Home. Then import RandomMeal component into Home and use it there
- Then show you can reuse that RandomMeal component on the NotFound page

## Section 3

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

## Section 4

- Open the Meal view and add a data property to store the meal JSON
- In created hook, call the API endpoint to pull meal by ID from props and set the meal data property to result
- Add computed properties for ingredients and tags
- Create a MealTemplate component
  - Add a slot for the sidebar
  - Add a slot for content
