# Personal Website Specification

## Overview
This document outlines the specifications for a personal website for Rocco Sassani, designed to showcase social media accounts and creations in a professional, visually appealing manner similar to Linktree. The website will be a single-page application (SPA) built using React, styled with Tailwind CSS, and hosted via a CDN for dependencies.

## Features and Flow

### 1. Landing Page

#### Purpose
Serve as the main entry point, displaying Rocco Sassani's profile and links to social media and creations.

#### Layout

##### Header Section
- A circular profile picture centered at the top
- Below the picture, the name "Rocco Sassani" in bold, clean typography (e.g., Inter or Roboto font)
- Minimal padding to keep the design sleek

##### Links Section
- A vertically stacked list of clickable links, styled as buttons or cards
- Each link has a consistent design: rounded edges, subtle hover effects, and a professional color scheme (e.g., neutral tones with accent colors)
- The first link is labeled "X" with the official x.com logo (sourced from a CDN or static asset), redirecting to https://x.com/roccoscalps
- Additional links (to be specified later) for other social media accounts or creations

##### Footer (optional)
- Minimal footer with a subtle copyright or branding note (e.g., "© 2025 Rocco Sassani")

#### Visual Design
- Clean, modern, and minimalistic aesthetic inspired by Linktree
- Responsive design for mobile, tablet, and desktop
- Background: Solid color or subtle gradient (e.g., white or light gray)
- Smooth animations for link hover states (e.g., scale or color change)
- Consistent spacing and alignment for a polished look

### 2. Navigation

#### Single-Page Application
- No additional pages; all content is displayed on the landing page
- Links redirect to external URLs (e.g., https://x.com/roccoscalps) and open in a new tab (target="_blank")

#### Accessibility
- Keyboard navigation support for all interactive elements
- ARIA labels for screen readers (e.g., for the X logo and links)

## Technical Requirements

### Framework
- React (using JSX) with modern JavaScript (ES6+)
- Styling: Tailwind CSS via CDN for rapid, responsive design

### Dependencies
- React and ReactDOM via cdn.jsdelivr.net (e.g., https://cdn.jsdelivr.net/npm/react@18.2.0)
- Tailwind CSS via CDN (https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19)
- X logo as a static asset or sourced from a public CDN (ensure licensing compliance)

### Build
- Single index.html file with embedded React app
- No backend required; purely client-side
- Use Babel for JSX transformation (https://cdn.jsdelivr.net/npm/@babel/standalone)

### Responsiveness
- Mobile-first design with Tailwind's responsive utilities (e.g., sm:, md:, lg:)
- Profile picture scales appropriately (e.g., 100px on mobile, 150px on desktop)
- Links adjust width and spacing based on screen size

### Performance
- Minimize external dependencies
- Optimize image assets (e.g., profile picture in WebP format, <100KB)
- Lazy-load images if additional assets are added

## Components

### App
- Root component rendering the entire page
- Manages state for links (array of objects with label, url, and optional icon)

### Profile
- Displays the profile picture and name
- Props: name (string), profilePicture (URL string)

### LinkButton
- Reusable component for each link
- Props: label (string), url (string), icon (optional image URL)
- Renders a styled button with hover effects and an optional icon (e.g., X logo)

### Footer (optional)
- Simple component for copyright or branding

## User Flow

1. User visits the website
2. The landing page loads, displaying:
   - Profile picture at the top
   - "Rocco Sassani" below the picture
   - A list of links, starting with the "X" link featuring the x.com logo
3. User clicks the "X" link, which opens https://x.com/roccoscalps in a new tab
4. User can interact with additional links (to be specified) for other social media or creations
5. The design remains consistent and responsive across devices

## Future Extensibility

### Additional Links
- Easily add new links by updating the links array in the App component
- Support for icons or thumbnails for other platforms (e.g., Instagram, GitHub)

### Creations Section
- Potential for a collapsible or separate section to showcase projects (e.g., portfolio items with images or descriptions)

### Theming
- Allow customization of colors or fonts via Tailwind config or CSS variables

## Development Guidelines

### Code Structure
- Single index.html with React app mounted to a root div
- Components in separate logical blocks within the script (or separate files if using a bundler)

### Styling
- Use Tailwind classes for all styling to ensure consistency
- Example classes for links: `bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition duration-200`
- Center content with `flex flex-col items-center justify-center`

### Assets
- Profile picture: Placeholder URL or user-provided image
- X logo: Source from https://x.com/favicon.ico or a static asset

### Testing
- Test responsiveness using browser dev tools (mobile, tablet, desktop)
- Verify link redirects and hover effects
- Ensure accessibility with tools like Lighthouse or axe

### Deployment
- Deploy as a static site (e.g., GitHub Pages, Netlify)
- Ensure CDN URLs are up-to-date and reliable

## Example Mockup
```
[Profile Picture: Circular, 150px]
Rocco Sassani
[Link: X (with logo) -> https://x.com/roccoscalps]
[Link: Placeholder Social Media]
[Link: Placeholder Creation]
© 2025 Rocco Sassani
```

## Next Steps

1. Confirm profile picture URL and additional links for social media/creations
2. Finalize color scheme and typography preferences
3. Implement and test the React app based on this specification

## Database Schema

Since this is a static single-page application, no database is required for the initial implementation. However, if future features require data persistence, here's a proposed schema:

### Users Table
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    profile_picture_url TEXT,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Links Table
```sql
CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    label VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    icon_url TEXT,
    display_order INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Analytics Table (Optional)
```sql
CREATE TABLE analytics (
    id SERIAL PRIMARY KEY,
    link_id INTEGER REFERENCES links(id),
    click_count INTEGER DEFAULT 0,
    last_clicked_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure

```
personalwebsite/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       │   ├── profile-picture.webp
│       │   └── x-logo.svg
│       └── fonts/
│           └── inter/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Profile.jsx
│   │   ├── LinkButton.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   └── constants.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── CONTEXT.md
```

### Directory Structure Explanation

#### `/public`
- Contains static assets and the main `index.html` file
- Houses images, fonts, and other static resources
- `index.html` includes CDN links for React, Tailwind CSS, and Babel

#### `/src`
- Main source code directory
- `/components`: React components
  - `App.jsx`: Root component
  - `Profile.jsx`: Profile section component
  - `LinkButton.jsx`: Reusable link component
  - `Footer.jsx`: Footer component
- `/styles`: CSS and Tailwind configuration
- `/utils`: Utility functions and constants

#### Root Files
- `package.json`: Project configuration and dependencies
- `.gitignore`: Git ignore rules
- `README.md`: Project documentation
- `CONTEXT.md`: Project specifications and requirements

This structure follows React best practices and maintains a clean separation of concerns while keeping the project simple and maintainable.
