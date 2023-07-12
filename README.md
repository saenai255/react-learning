# React Learning
This is a project to learn React.

## Requirements
The following are required to run this project:

- Node.js 18.x or later

## Setup
In order to run this project, you must first install the dependencies:

```sh
npm install
```

## Development
To run the project in development mode, run the following command:

```sh
npm run dev
```

## Project Structure
Below is a description of the project structure:

- `public/`: Contains static files, except for `index.html`
- `src/`: Source code
  - `modules/`: Contains components and logic for each page. Each page is considered a module. Most components should go in here, in its own module directory. If a component is used in multiple modules, it should go in `shared/`. All modules should be lazy loaded to reduce initial load time.
    - `[module_name]/`: Contains components and logic for a module.
      - `components/`: Contains components that are only used in this module.
      - `state/`: Contains logic for state management that is only used in this module.
      - `services/`: Contains services that are only used in this module.
      - `[module_name]Page.tsx`: Contains the page component for this module.
  - `shared/`: A module that is shared across multiple modules. This should contain logic and components that are used in multiple modules.
    - `components/`: Contains components that are used in multiple modules.
    - `state/`: Contains logic for global state management.
    - `services/`: Contains services that are used to fetch data from the backend. Each service should be in its own file.
  - `App.tsx`: React application
  - `main.tsx`: Entry point
  - `router.tsx`: Contains routes for the application


## Exercises
This section contains exercises to help you learn React.

- [ ] [1. User Login](#exercise-1-user-login)

### How to work on an exercise
This subsection contains instructions on how to work on an exercise.

- Create a new branch for the exercise following the naming convention `feature/exercise-[exercise_number]`
- The commits should be atomic and have a descriptive commit message. Follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- All the code should be pushed to the branch above
- Once the exercise is complete, create a pull request to merge the branch into `main`
- Wait for the pull request to be reviewed and update the code based on the review
- Once the pull request is approved, merge the branch into `main`

### Exercise 1: User Login

#### Description
Currently, the application has a login page, but it is empty. Your task is to add a login form to the page, perform validation, make a request to the backend to login, and show a success or error message.

#### Requirements
As an unauthenticated user
- when I visit the login page
  - I should see a login form that contains
    - an email field
    - a password field
    - a login button
  - when I enter an invalid email address
    - I should see an error message
  - when I enter an invalid password (e.g. too short)
    - I should see an error message
  - when I click the login button
    - (Optional) I should see a loading indicator
    - I should see a success message if the login request is successful
    - I should see an error message if the login request fails

#### Definition of Done
The following must be completed for this exercise to be considered complete.

- [ ] Add a login form to the login page
- [ ] Add validation to the login form
  - [ ] Email must be a valid email address
  - [ ] Password must be at least 8 characters long
- [ ] Make a request to the backend to login
- [ ] Show a success or error message when the login request is complete
- [ ] Running `npm run lint` should not show any errors or warnings
- [ ] (Optional) Add a loading indicator while the login request is in progress

#### Test Data
The API comes pre-configured with an existing user `john.doe@example.com`, password `JohnDoe123!`.

### Exercise 2: User Login Continued

> To be added later.
> To be added later.
> To be added later.
