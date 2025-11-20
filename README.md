<div align="center">
  <h1>Song Play App</h1>
  <p>A full-stack MERN music streaming playground built solo — functionality first, minimal UI polish.</p>
  <p>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000" />
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff" />
    <img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=fff" />
    <img src="https://img.shields.io/badge/Node.js-5FA04E?logo=node.js&logoColor=fff" />
    <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=fff" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff" />
    <img src="https://img.shields.io/badge/Passport.js-34E27A?logo=passport&logoColor=000" />
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=fff" />
  </p>
</div>

## Overview

Song Play App is a custom-built streaming experience that lets users discover, play, and manage songs directly in the browser. The project focuses on end-to-end functionality: uploading audio, organizing artists and albums, and keeping playback in sync with a global audio player. The interface may be simple, but everything from APIs to Redux slices was assembled by hand.

## Features

- **Authentication**: Email/password login with protected routes (`PrivateRoute` + JWT via Passport). Public routes redirect authenticated users away from `Login`.
- **Global playback**: `GlobalAudioPlayer` keeps songs playing while users move across routes; `PlayAllSongsButton`, `SongPlayBar`, and custom controls manage queue state.
- **Library & discovery**: Dedicated views for Home, Albums, Artists, Genres, Library, Likes, Notifications, Profile, and Settings, each with their own components and skeleton loaders.
- **Song & artist management**: `AddSongsPage` flow allows creating artists/albums and uploading tracks. Backend services (`songAdd.service.js`, `album.service.js`, etc.) save data to MongoDB.
- **CDN-first media**: Audio files and artwork are served through Cloudinary/CDN links (see `cloudinaryUpload.service.js`), so playback stays fast even on slow networks. Local public assets fall back to CDN URLs if needed.
- **Responsive navigation**: Custom layouts for desktop/mobile headers, sidebar nav, and a search experience with live filtering.

## Login Flow

1. Users hit the `/login` route, rendered via `pages/Login.tsx`.
2. Credentials post to the backend `auth.route.js`, which relies on Passport strategies (JWT + Google if configured).
3. On success the API returns tokens stored in Redux `userSlice` and local storage for persistence.
4. `PrivateRoute` checks auth state and only renders the target page once tokens are valid. Logging out clears Redux state and local storage, forcing a new login.

## Tech Stack

- **Frontend**: React + TypeScript + Vite, Redux Toolkit, Tailwind utilities, custom component library in `src/components`.
- **Backend**: Node.js, Express, MongoDB (Mongoose models), Passport authentication, rate limiting middleware.
- **Storage & CDN**: Cloudinary for image/audio uploads and delivery; static image/audio fallbacks are loaded via CDN `<img>`/`<audio>` tags.

## Project Structure

```
song-play-app/
├── Frontend/   # Vite + React client (pages, routes, Redux store, UI components)
└── Backend/    # Express server (routes, controllers, services, models, config)
```

Key paths to explore:

- `Frontend/src/pages` – App screens (Home, Library, Login, etc.)
- `Frontend/src/features/song` – Global audio state management
- `Backend/src/routes` – REST endpoints for auth, songs, albums, users
- `Backend/src/services` – Business logic for creating users, songs, and uploading to Cloudinary

## Getting Started

```bash
# Backend
cd Backend
npm install
npm run dev          # requires MongoDB URI + JWT secrets in environment

# Frontend
cd Frontend
npm install
npm run dev
```

Set the following environment variables (example `.env` files):

```
# Backend/.env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Frontend/.env
VITE_API_BASE_URL=http://localhost:5000/api
```

## CDN Usage Notes

- Audio and artwork uploads go to Cloudinary; stored URLs are consumed throughout the UI (`SongPlayBarSongLogoAndTital`, album cards, etc.).
- Some images/audio may also reference public CDNs directly inside JSX (simple `<img src="https://..." />` or `<audio src="https://..." />` patterns) for quick prototyping. This keeps bundle size down and avoids shipping large assets with the repo.

## Status & Next Steps

- ✅ Core features work: login, browse, play, like, add songs/artists.
- ⚠️ UI/UX is intentionally minimal; polish, accessibility, and responsive spacing can be improved.
- 🔜 Potential enhancements: playlist sharing, real-time lyrics, better notifications, drag-and-drop queue management, and visual refresh.

## Contributing

This project started as a solo build, but I’d love your help. Please fork the repo, create a feature branch, and open a pull request describing the change. Bug reports and small UX fixes are especially welcome.

---

Built solo with love for learning, shipping, and music.

