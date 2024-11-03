
# Superhero full-stack application

Tesk task for JS Ninjas using ReactTS, Zustand, ExpressJS, MongoDB



## Demo

![App preview](https://s1.gifyu.com/images/SyzBL.gif?raw=true)


## What is realized

- Create, edit, delete hero
- Nice modal window using portals to create and edit a hero
- Editing is only available on the current HeroPage
- Heroes sorted by creating date
- Pagination
- See the details of one particular superhero
- Responsive design

## What is not realized

- Image for hero




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

