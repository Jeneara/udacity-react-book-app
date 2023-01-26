# MyReads Project

A Book-tracking app that allows users to search, select and categorize books you have read, are currently reading, or want to read.

This project is build using a static stater React template and features an API provided by Udacity. The goal is to add interactiving to the app.

[Project Rubic](https://review.udacity.com/#!/rubrics/918/view)

## How to run the project

To run the project, download or clone the repository in your computer:

```
$ git clone https://github.com/Jeneara/udacity-react-book-app.git
```

then 

- install all project dependencies with 

   ```
   npm install
   ```
   
- start the development server with 

    ```
    npm start
    ```

Third party librarys
 - [React Router](https://reactrouter.com/en/main)
 - [Prop Types](https://www.npmjs.com/package/prop-types)

## Backend Server

To simplify the development process, udacity provided a backend server for development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I will used to perform necessary operations on the backend:

- [`getAll`](https://github.com/udacity/reactnd-project-myreads-starter#getall)
- [`update`](https://github.com/udacity/reactnd-project-myreads-starter#update)
- [`search`](https://github.com/udacity/reactnd-project-myreads-starter#search)


## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## References
- Starter code from [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)
- React documentation [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) and ['Thinking in React'](https://reactjs.org/docs/thinking-in-react.html)
- Jack Herringtons Introduction to React course [Introduction to React #5 | State and Events](https://www.youtube.com/watch?v=-urz6Sh7RE8&t=512s)
- React Router Documentation [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router)
