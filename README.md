# @angular/router v3.4.9 Lazy Loaded Component's Default Child Route On Page Load

This project demonstrates [this issue](https://github.com/angular/angular/issues/14692):

**Context**: A lazy-loaded component with a default child route that should 
be activated on navigation to the lazy-loaded copmonent. The default child route
will not be activated if the lazy-loaded route is the initial route loaded
on application initialization.

## Reproduction Steps

1. run the development server
  ```
  npm install
  npm run serve
  ```

2. Open a new web browser page to the root URL (http://localhost:8080/) and 
verify whether the @angular/router redirects to the expected default route 
(`/lazy/default-child`);
3. Open a new web browser page to the lazy loaded component's url 
(http://localhost:8080/lazy) and verify whether the router redirects to the
expected default route.

### Expected Behavior

Steps 2 and 3 above should behave identically

### Actual Behavior

Step 2 redirects to the lazy component without activating the default route,
while step 3 redirects as expected to the lazy component and the lazy component's
default route.