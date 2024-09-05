# Tech Task: E-Commerce simple Backend services

We're building an E-Commerce Backend backend services.
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
npm run start
```

Application is served on http://localhost:3000 and is a
nestjs application connected to sqlite database and contain these basic APIs:

- POST request to add order/user/product
- DELETE request to remove order/user/product
- GET request to get all orders/products

Request examples could be found in file `requests.http`

## Backend task:

While this API gives us the basic abilities to create, fetch, and delete items, it's far from sufficient for our app.

We want you to carry out the following tasks:

#### 1. Uncomment address endpoints and fix build errors

- go to file `src/app/app.module.ts` and uncomment code on lines 8, 12, 19, 25
- try to fix bugs appeared in app (note: there is 3 errors, appeared next after fixing previous)

#### 2. Implement functionality to place orders only for authorized users with automatically added `userId` request body field for endpoint `POST http://localhost:3000/orders/add`

#### 3. Implement functionality to calculate `totalAmount` value automatically by fetching productIds prices and sum them up for endpoint `POST http://localhost:3000/orders/add`

#### 4. Implement functionality to fetch orders only placed by current user filtered by `userId` added automatically

**Best of luck!**
