# DevOps Backend Application
This is a simple Node.js backend application for the DevOps bank challenge. It provides 3 endpoints for managing user interactions.

## Getting Started
To get started with this application, you'll need to have Node.js installed on your machine. You can download and install it from the official Node.js website: https://nodejs.org/en/download/

Once you have Node.js installed, clone this repository and install the dependencies:
```
git clone -b feature-backend https://github.com/iam-phenomenal/Bank-App-Challange
cd backend
npm install
```
## Running the Application
To run the application, use the following command:
```
# Development
npm run dev

# Production
npm start
```
This will start the application and listen on port 3000. You can access the application by navigating to http://localhost:3000 in your web browser.

## Enpoints
This application provides the following endpoints:

### Customers
- GET /api/v1/customer: Returns a list of all customer accounts.
- POST /api/v1/cutomer: Accepts a JSON payload in the request body and adds it to the customers array. Returns the new customer details

### Transactions
GET /api/v1/transactions: Returns a list of all transactions.

## Contributing
If you'd like to contribute to this application, feel free to fork this repository and submit a pull request. Please follow the existing coding style and include tests for any new functionality.
