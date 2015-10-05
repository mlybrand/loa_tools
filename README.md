# loa_tools

Okay, I like John Papa's directory structure as a start.  I will try to follow that as my src folder setup.

I will have my build go to a dist folder (I will ignore it for now, but I may let that go to the git repo)

Basically, we will set up the following:

- tasks
  - options
- src
  - client
    - app
    - content
    - test
  - server
    - data
    - app
      - routes
    - test

We will run everything from this src directory in dev, but then have stuff build to dist:

- dist
  - public
    - js
    - css
    - fonts
    - html
    - img
  - views
  - routes
  
It is this structure that I will point to for heroku (and which I will promote to prod when I move off heroku)

That is the plan at least

  