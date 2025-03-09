This project demonstrates unit testing of React components using Jest and React Testing Library. It focuses on writing tests for React components, ensuring that components function as expected. The project includes basic configurations for running tests, along with sample component tests.

Features
✅ Unit testing React components with Jest
✅ Using React Testing Library for testing component behavior
✅ Test-driven development (TDD) approach
✅ Setup for testing with setupTests.js
✅ Example tests for basic components like App.js

Technologies Used
React.js - Frontend library for building the application
Jest - JavaScript testing framework
React Testing Library - Library for testing React components
CSS - Styling for components
npm - Dependency management

Project Structure
/React-component-unit-test
│── /src
│   ├── /components/    # React components
│   ├── App.js          # Main component
│   ├── App.test.js     # Unit test for App component
│   ├── index.js        # Entry point for React app
│   ├── setupTests.js   # Setup for testing environment
│── /public             # Static files
│── .gitignore          # Git ignore settings
│── package.json        # Project dependencies and scripts
│── README.md           # Project documentation

Installation & Setup
1.Clone the repository:
git clone https://github.com/saraswathi2015/React-component-unit-test.git

2.Navigate into the project directory:
cd React-component-unit-test

3.Install dependencies:
npm install

4.To run the tests:
npm test

5.To start the development server:
npm start

The app will be available at http://localhost:3000/

Usage
App.test.js contains the unit tests for the main App.js component.
You can add more tests for additional components by creating corresponding .test.js files.
The React Testing Library is used to simulate user interactions and test component behavior.
