## added env file

## redux
- created a redux folder
- installed redux : npm i redux
- created a store.js file where all the state will be stored
- installed a google extension 'redux-devtools-extension'
- in store.js, i created a store, but as of now, multiple reducers cannot be passed into the store. So we import another function from redux called **combineReducers**
- now to sync the redux devtools extension running in browser with the app, redux-devtools-extension has to be installed : npm i redux-devtools-extension
- now , in the store, we pass reducer, composeWithDevTools() from the library installed and a middleware.
- one of the most popular middleware is redux-thunk
- installing redux-thunk: npm i redux-thunk, them import it.
- initialize middle ware as an array: const middleware = [thunk]
- we cannot just add middle ware to the composeWithDevTools() function, to do that, we have to import another funtion from redux : **applyMiddleware**
- then we pass thunk as `composeWithDevTools(applyMiddleware(...middleware))`

## wrapping index.js with Provider
NEED: In a React application that uses Redux for state management, the Provider component from the react-redux library is used to make the Redux store available to the entire application. It is an essential part of integrating Redux with React.

- in client, install react-redux: npm i react-redux
- in client/index.js, import Provider from react-redux and store from redux/store.js
- wrap the App inside Provider.