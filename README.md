# Revalate Terms of Service

This repository contains the Terms of Service, Privacy Policy, and related legal pages for Revalate.

## Installation

### Prerequisites

1. **Install Node.js and npm** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use winget: `winget install OpenJS.NodeJS`
   - Or use Chocolatey: `choco install nodejs`

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:3000`

## Available Scripts

- `npm start` - Start development server with live reload
- `npm run dev` - Same as start
- `npm run serve` - Start server without opening browser
- `npm run build` - No build required (static site)

## Project Structure

- `index.html` - Terms of Service
- `privacy-policy/` - Privacy Policy page
- `understand-usage/` - Usage guidelines
- `support-schedule/` - Support information
- `style.css` - Global styles

## Development

This is a static HTML site that can be served from any web server. The npm setup provides:
- Live reload for development
- Local development server
- Hot reloading for CSS changes