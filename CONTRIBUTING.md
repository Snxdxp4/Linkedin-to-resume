# Contributing Guidelines

Thank you for your interest in contributing to this project! Your help is greatly appreciated. Please take a moment to review these guidelines before starting.

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Code of Conduct](#code-of-conduct)
3. [Reporting Issues](#reporting-issues)
4. [Pull Request Process](#pull-request-process)
5. [Coding Standards](#coding-standards)
6. [Setting Up Development Environment](#setting-up-development-environment)

---

## How to Contribute

1. **Fork the repository**: Start by forking the repository to your own GitHub account.
2. **Create a branch**: Make sure to create a feature branch (`git checkout -b feature-name`) before starting any development.
3. **Make your changes**: Implement your feature, bugfix, or documentation update in your forked repository.
4. **Write tests**: Ensure that new features or bugfixes are covered by appropriate tests.
5. **Commit your changes**: Write clear, descriptive commit messages. Follow the project's commit message format.
6. **Push your branch**: Push your feature branch to your forked repository.
7. **Create a pull request (PR)**: Open a pull request against the main branch of the original repository.

---

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful, inclusive, and collaborative when interacting with others in the project.

---

## Reporting Issues

If you encounter bugs, have feature requests, or would like to ask for help, please follow these steps:

1. **Check for existing issues**: Before submitting a new issue, please search the existing issues to see if the problem has already been reported or addressed.
2. **Create a new issue**: If no issue exists, create a new one. Provide as much information as possible, including steps to reproduce the bug (if applicable).
3. **Feature Requests**: Be clear about what you'd like to see in the project and the potential use case for others.

---

## Pull Request Process

1. **Fork the repository** and create a new branch for your changes. Ensure the branch is based off the `main` branch.
2. **Describe your changes**: When creating a pull request, provide a clear description of what the changes are and why they are necessary.
3. **Ensure tests pass**: Your pull request should pass all tests, and additional tests should be written for any new features.
4. **Review and Feedback**: Be open to suggestions and feedback from project maintainers during the review process.
5. **Final Merge**: After approval, your changes will be merged into the `main` branch.

---

## Coding Standards

- **Python (Backend)**: Follow [PEP 8](https://pep8.org/) coding standards for Python.
- **JavaScript/React (Frontend)**: Use [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) for consistency.
- **Commit Messages**: Follow these conventions for commit messages:
  - Use the imperative, present tense: "Fix bug" (not "Fixed bug" or "Fixes bug").
  - Limit the subject line to 50 characters or less.
  - Use the body to explain what changes were made and why, if necessary.

---

## Setting Up Development Environment

### Backend (Flask)

1. **Clone the repository** and navigate to the `backend` directory.
2. **Set up a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask app**:
   ```bash
   flask run
   ```

### Frontend (Next.js)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## Additional Resources

- **Documentation**: Make sure to update the documentation when applicable.
- **Testing**: All changes should include tests where appropriate.