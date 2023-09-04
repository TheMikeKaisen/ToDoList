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