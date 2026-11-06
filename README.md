# Echo

A clone of [RAWG](https://rawg.io), the video game database. I built it to practise a full stack app with a React front end and a Laravel API: browsing games, filtering by genre and platform, searching, and signing up with email confirmation or Google.

It's a learning project from autumn 2023. It copies the layout and idea of RAWG, not its data or branding.

## Features

- Browse games, and open a game's detail page.
- Filter by genre and by platform, with a page for each platform.
- Search by game name.
- Sign up with email confirmation, log in, or sign in with Google.
- JWT-protected API routes. The front end checks auth before showing the app.
- A loading modal and feedback modals for slow requests and errors.
- Storybook set up for the UI components.

## Stack

| Part | Tech |
|---|---|
| Front end (`rawg-front/`) | React 18, TypeScript, Vite, MUI, Tailwind, React Router, Axios, `@react-oauth/google`, Storybook |
| API (`rawg-server/`) | Laravel (PHP) with MySQL, Laravel Sail for local Docker, JWT middleware |

## How it's organised

```
rawg-front/src/
  API/            Axios setup and one module per resource (games, platforms, user)
  router/         routes
  ui/pages/       landing, login, sign up, email confirmation, home, game details,
                  platforms, platform details, search results
  ui/common/      game card, sidebar, app bar, auth forms, modals
rawg-server/
  app/Http/Controllers/   games, genres, platforms, stores, signup, login, auth check
  database/migrations/    games, platforms, genres, tags, screenshots, stores,
                          and the pivot tables that join them
```

The data model is the interesting part: a game belongs to many platforms, genres, tags, stores and screenshots, so each relation has its own pivot table.

## Running it

**Front end**

```bash
cd rawg-front
cp .env.example .env     # fill in your own values
npm install
npm run dev
```

**Back end**

```bash
cd rawg-server
cp .env.example .env     # fill in database, mail and JWT settings
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

Sail also works if you prefer Docker: `./vendor/bin/sail up -d`.

## Notes

- The game data has to be imported into your own database. The importer route is commented out in `routes/api.php`.
- Not deployed anywhere. `vercel.json` is there from an early attempt.
