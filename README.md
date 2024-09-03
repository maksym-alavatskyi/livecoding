# Tech Task: Task Management Backend

We're building a Task Management System and require a functional backend. Our engineers have already done a basic setup, but due to conflicting work they won't be able to finalize and we need your help.

Follow the instructions below to get started with your project and then carry out the tasks asked for further down.

## Setup

1. Clone this repository:

```
git clone <repository-url>
```

2. cd to cloned repository

3. install packages by running

```
npm install
```

### VS code setup
To provide you with a simple way to test your API endpoints locally, you can use the following extension:

[REST Client for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Usage
We have provided a basic file that have the API definitions of the provided endpoints. To use it do the following:
1. Open the `requests.http` file in the root of the app.
2. Click the _Send request_ link next to each request to invoke a request to that specific endpoint.
3. View the result in the sidepanel.

You can use this simple API client to test your own endpoints, or use an alternative software (such as [Postman](https://www.postman.com/)) if you prefer.

### Backend

To run the backend application execute:
```
npm run start:backend --watch
```

Application is served on http://localhost:3000 and is a
nestjs application connected to sqlite database and contain these basic APIs for the todo-list:

- POST reqeust to add item
- DELETE request to remove item
- GET request to get all todo list items

On adding a new item, request body require parameter `name`.
Todo list item contains fields: `name`, `isDone`, `id`.
`id` assigned automatically.

## Backend task:

While this API gives us the basic abilities to create, fetch, and delete items, it's far from sufficient for our app.

IMPORTANT: Ensure that we have sufficient test coverage on the new additions added.

We want you to carry out the following tasks:

#### 1. Implement an API endpoint to toggle the `isDone` property
This should switch the items `isDone` property between `true` and `false` each time you make a successful request.

Requests example: `PATCH http://localhost:3000/todo-list/update/{id}`

#### 2. Implement an API endpoint to retrieve a single todo-item by `id`
This should return all the properties of a single todo-item.

Requests example: `GET http://localhost:3000/todo-list/get/{id}`

#### 3. Add a `deadline` field to the todo-item
This should store the date and time of when the todo-item reaches its deadline.

Make sure this is also included in the CREATE endpoint already existing.

#### 4. Implement an API endpoint to retrieve items beyond the deadline
This should retrieve all the items where the deadline is older than right now. 

Requests example: `GET http://localhost:3000/todo-list/get-expired`

#### BONUS: Add appropriate tests
If you're left with time remaining, take some time to add proper tests to the project. Sample tests have already been created for the controllers.

## How do I carry out this task?

Once you have everything set up and working, it's important that you create a separate feature branch for your task.
```
git checkout -b <name of branch>
```

It is highly advisable to commit often, as you progress in your work. This also lets us understand your thinking throughout the task.

Once completed, make sure you push all your changes and then create a Pull Request of the amended branch. 

You have two hours to complete these tasks.

**Best of luck!**