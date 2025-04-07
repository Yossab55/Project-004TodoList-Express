# Todo List API Project
This is a backend-focused Todo List application built with Node.js, Express, and Mongoose. It follows the MVC (Model-View-Controller) structure for clean and maintainable code. The project includes a RESTful API for managing tasks, with support for subtasks within each task. While the Views folder exists due to the use of EJS, the primary focus is on the API functionality rather than frontend development.

## Features
* Create, read, update, and delete (CRUD) tasks.
* Support for subtasks within each task.
* RESTful API designed and tested using API Dog.
* MongoDB integration with Mongoose for data persistence.
* Environment variable management with dotenv.
* Development efficiency with nodemon for auto-restarting the server.

## Tech Stack
* Node.js: JavaScript runtime for the backend.
* Express: Web framework for building the API.
* Mongoose: ODM for MongoDB to manage database schemas.
* EJS: Templating engine (minimal focus on Views).
* Nodemon: Development tool for auto-reloading.
* Dotenv: For managing environment variables.

## Project Structure
* MVC Architecture:
  * Models: Define the schema for tasks and subtasks.
  * Views: Minimal EJS templates (not the focus).
  * Controllers: Handle API logic and request processing.

## Installation
1. Clone the repository:
```
git clone https://github.com/Yossab55/Project-004TodoList-Express.git
```
2. Navigate to the project directory:
```
cd todo-list-project
```
3. Install dependencies:
```
npm install
```
4. Create a .env file in the root directory and add the following:
```
PORT=3000
DATABASE_CONNECTION= <your-mongodb-connection-string>
```
5. Start the development server:
```
npm run dev
```

## API Endpoints
* GET /tasks: Retrieve all tasks.
* POST /tasks: Create a new task.
* GET /tasks/:id: Retrieve a specific task by ID.
* PATCH /tasks/:id: Update a specific task.
* DELETE /tasks/:id: Delete a specific task.
* GET /subtasks/:id: Retrieve a specific subtask by ID.
* PATCH /subtasks/:id: Update a specific subtask.
* DELETE /subtasks/:id: Delete a specific subtask.

## Contact
Feel free to reach out or connect with me!

[LinkedIn:] (https://www.linkedin.com/in/yossab-samouel-b71353323/)
[Email: Yossab Samouel]: (yossabsamouelwork@gmail.com)

## License
This project is licensed under the MIT License.