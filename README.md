React & Laravel Passport Authentication

Overview

This project implements user authentication using React.js for the frontend and Laravel Passport for the backend. It includes features like user registration, login, logout, and token-based authentication using Laravel Passport.

Features

User Registration & Login

Secure Authentication with Laravel Passport

Protected Routes in React

Token-based Authorization

Persistent Login State with Local Storage

Logout Functionality

Tech Stack

Frontend

React.js

React Router for navigation

Axios for API requests

Bootstrap for UI styling

Backend

Laravel 10

Laravel Passport for API authentication

MySQL as the database

Composer for dependency management

Installation & Setup

Backend (Laravel)

Clone the repository & navigate to the backend folder

git clone https://github.com/yourusername/authentication-project.git
cd authentication-project/backend

Install dependencies

composer install

Set up the environment file

cp .env.example .env

Configure your database settings in .env:

DB_DATABASE=passport1
DB_USERNAME=root
DB_PASSWORD=''

Run database migrations

php artisan migrate

Install Passport & generate keys

php artisan passport:install

Run the Laravel development server

php artisan serve

Frontend (React.js)

Navigate to the frontend folder

cd ../frontend

Install dependencies

npm install

Start the React development server

npm start

API Endpoints

Authentication Routes

Method

Endpoint

Description

POST

/api/register

Register a new user

POST

/api/login

Authenticate user

POST

/api/logout

Logout user

GET

/api/user

Get authenticated user

Usage

Open http://localhost:3000 for the React app.

The Laravel API runs on http://localhost:8000.

After login, the JWT token is stored in localStorage and used for authenticated requests.

Project Structure

 authentication-project/
 ├── backend/ (Laravel API)
 │   ├── app/
 │   ├── database/
 │   ├── routes/
 │   ├── .env
 │   └── composer.json
 ├── frontend/ (React App)
 │   ├── src/
 │   ├── public/
 │   ├── package.json
 │   └── .env
 ├── README.md

Contributing

Feel free to fork this project and submit pull requests.

Author

Aryan Kumar