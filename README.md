# Superhero full-stack application

Tesk task for JS Ninjas using ReactTS, Zustand, ExpressJS, MongoDB
Upd: I got an invitation for tech interview :)

## Demo

**Screenshot**
![App preview](https://i.ibb.co/rvGC278/image.png)
**Video**
![App preview](https://s1.gifyu.com/images/SyzBL.gif?raw=true)

## What is realized

-   Create, edit, delete hero
-   Avatar for hero
-   Nice modal window using portals to create and edit a hero
-   Editing is only available on the current HeroPage
-   Heroes sorted by creating date
-   Pagination
-   See the details of one particular superhero
-   Responsive design

## What is not realized

-   Unit tests

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file in the main folder

`MONGO_URI=mongodb+srv://user:user@cluster0.i0lx2.mongodb.net/js_ninjas_db?retryWrites=true&w=majority&appName=Cluster0`

## Run Locally

Clone the project

```bash
  git clone https://github.com/prmakk/jsninjas_test_task
```

Go to the project directory

```bash
  cd jsninjas_test_task
```

Install dependencies for the backend

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Install dependencies for the frontend

```bash
  cd ./frontend
  npm install
```

Start the app

```bash
  npm run dev
```

## Tech Stack

**Client:** React, Typescript, Zustand, React Toaster

**Server:** Node, Express, MongoDB
