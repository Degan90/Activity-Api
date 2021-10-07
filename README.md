# 🍜 Restaurants Express JSON API

This is starter code for the Express API Relationships lesson. The basic server code, database connection, and Restaurant Model and Controller files have been set up for you.

## ✅ Requirements

- Node, Nodemon and NPM installed globally

## 🛠 Setup & Installation

1. Fork and clone this directory.
1. Run `npm install` to download required dependencies (Express, Mongoose, CORS, and dotenv).
1. Go to your MongoDB Atlas cluster in the cloud and copy the connection string. Be sure your user password is interpolated, and change the name of the database to "restaurants".
1. Create a `.env` file in the root of this repository. In the `.env` file, create a variable called `DATABASE_URL=` and paste the connection string like so:

> `DATABASE_URL=mongodb+srv://db-user:aLasdfqpA3zAdLeXe@cluster0.yshuq.mongodb.net/restaurants?retryWrites=true&w=majority`

To run your server, use the `npm run dev` command. In the browser, if you go to `localhost:8080`, you should see text that says: 'Welcome to the Restaurants API'.

Happy coding! 🤓

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
