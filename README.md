# Task Management Application

## Description

This project is a task management application built using React. It allows users to create, view, edit, and delete tasks, along with sorting, filtering, and search functionalities. Tasks are persisted using browser storage for seamless user experience across sessions.

## Table of Contents

- Features
- Project Structure
- External Dependencies
- Setup Instructions
- Usage

## Features

**Task Operations**:

- Add new tasks with title, description, due date, and priority.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Sorting and Filtering:
  Sort tasks based on priority, due date, and completion status.
- Filter tasks by completion status.
- Search Functionality: Search tasks by title or description.

## Project Structure

The project is organized as follows:

```
ultimate-task-manager/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Button.js       # Button component
│   │   ├── Header.js       # Header component
│   │   ├── Input.js        # Input component
│   │   ├── Label.js        # Label component
│   │   ├── Layout.js       # Layout component
│   │   ├── Modal.js        # Modal component
│   │   ├── Select.js       # Select component
│   │   ├── Tag.js          # Tag component
│   │   ├── TaskItem.js     # TaskItem component
│   │   └── TextArea.js     # TextArea component
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page (TaskList)
│   │   ├── AddTask.js      # TaskForm page
│   │   └── NotFound.js     # NotFound page
│   ├── store/              # Redux store and slices
│   │   ├── index.js        # Store setup
│   │   ├── taskSlice.js    # Task slice for Redux
│   └── utils/              # Utility functions
│       ├── utils.js        # App constant values
│   │   ├── localstorage.js # localstoage functions
│   ├── App.css             # Global CSS
│   ├── App.js              # Main App component
│   ├── index.css           # Entry point for Tailwind CSS
│   ├── main.js             # Entry point for React application
│   └── ...
├── index.html              # Main HTML file
├── .gitignore              # Git ignore file
├── package-lock.json       # NPM lock file
├── postcss.config.js       # Tailwind config file
├── tailwind.config.js      # Tailwind config file

├── package.json            # Project metadata and dependencies
└── README.md               # Project README file
```

## External Dependencies

- **Redux**: A state management library for managing the application state.
- **React Redux**: Official React bindings for Redux.
- **React Router**: A library for routing in React applications.
- **React Hot Toast**: A library for showing toast notifications.
- **React DatePicker**: A date picker component for React.
- **Heroicons**: A set of free, MIT-licensed high-quality SVG icons for UI development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/your-username/ultimate-task-manager.git
cd task-manager
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

## Usage

Navigate to [home](http://localhost:3000) in your browser after starting the application.

- Add, edit, delete tasks using the provided functionalities.
- Use sorting, filtering, and search options to manage tasks effectively.
