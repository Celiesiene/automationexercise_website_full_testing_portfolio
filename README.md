✅ Key Features:

🔐 User authentication: Signup, Login, Logout

📋 Form validations & error handling

🔄 Navigation and UI interactions

🔌 API response validation

🛍 Product browsing & cart operations

⚙️ Installation & Setup

Prerequisites:

Ensure you have the following installed:

Node.js

Cypress

🚀 Quick Setup:

Clone the repository:

git clone <https://github.com/Celiesiene/automationexercise_website_full_testing_portfolio>
cd <automationexercise_website_full_testing_portfolio>

Install dependencies:

npm install

▶️ Running the Tests

Open Cypress UI:

npx cypress open

Select 20TestCases.cy.js in the Cypress Test Runner.

Run Tests in Headless Mode:

npx cypress run --spec cypress/e2e/20TestCases.cy.js

🏗️ Folder Structure

cypress/
├── e2e/
│   ├── 20TestCases.cy.js   # Main test suite file
│   ├── 14ApiTesting.cy.js      # Api test cases
├── fixtures/               # Test data
├── support/                # Custom commands and utilities
├── cypress.config.js       # Cypress configuration


