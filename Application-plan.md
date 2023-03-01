# phase-3-project-pet-finder

## Application Behaviour(BDD)
This is an application that allows users to add pets and be able to see all 
the pets they have added. The user should also be able to:
- view **all the available pets**
- search for a pet through the **name** or **breed**
- update details for a pet that they have added 
- a user should be able to remove details of pets they added
- a user should **NOT** be able to update or delete pets they have not added
- a user must be logged in order to use the application

## Pseudo Code

### Install dependancies. The application dependancies are:
 1. zustand
 2. react-router-dom
 3. axios
 4. tailwind

 ### Business logic

 1.Login and Registration
 - The landing page will welcome a user to the website and allow them to register and/or login
 - After they login they will be taken to the pets of that user 

2.Searching for a pet
 - The user can search for a pet either through the name or the breed
 - This functionality will be available in two pages:
    My pets page 
    All pets page

 2.User pets
 -This page allows a user to see all the pets that they have added
 -It also allows a user to add a new pet
 -It allows a user to edit an existing pet
 -It allows a user to remove an existing pet
 -It allows a user to navigate to a page that displays all the pets available

 4.All pets
 - displays all the pets that have been added to the application

 ### React Components
   1. Home
  -This is the first page of the application ie. "/"
  -It displays a welcome message
  -It displays the register form by default
  -It displays the login form conditionally

  2. Register 
  - Takes  user input of name and password and adds it to the database **if that user does not exist**
  **usernames have to be unique**
  -queries the database for  a user with that name:
  -if the user exists it prompts the app user to enter a unique username
  -if they dont it does a post request and adds them to the database
  -it then displays the login form to allow the user to login to the application

  3. Login
  - Checks whether a user has already been added to the database:
  -If they have it redirects them to a page with all their pets
  -If they are not it prompts them to register first:

  4. Search
  -Takes a user input of a pet name or breed and automatically  returns any pets that match the input 
  -It searches from the database and changes the state of the store to reflect the search results 

  5. Delete
  -Removes a pet from the database

  6. Edit
  -Allows a user to edit a specific pets details

  7. My pets
  -Displays the search component
  -Displays a list of all the pets the user has added 
  -Displays the delete component alongside each pet and passes it that pets id
  -Displays the update component alongside each pet and passes it that pets id

  8. All pets 
  -Displays the search components
  -Dislays all the pets in the database by rendering pet card with the pets details
  -for each pet 

  9. Zustand pets store
  -Fetches pets data from the api and adds the to the store
 
 10. Pet card
 - Renders a card that displays a pets name,breed and image 
### Styling and UI 
- Set up tailwind and use tailwind classes to style the page





