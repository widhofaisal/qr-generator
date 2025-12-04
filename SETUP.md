# Setup Guide

## Prerequisites

This project requires Node.js to be installed on your system.

### Installing Node.js

1. **Download Node.js**
   - Visit: https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Recommended: Node.js 18.x or higher

2. **Install Node.js**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation

3. **Verify Installation**
   Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

## Running the Application

Once Node.js is installed:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open automatically at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` folder.

## Alternative: Standalone HTML Version

If you don't want to install Node.js, use the standalone version:

1. Open `standalone/index.html` directly in your browser
2. No installation or build process required
3. All features work the same way

The standalone version is a single HTML file with all dependencies loaded from CDN.

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Restart your terminal after installing Node.js
- Reinstall Node.js and ensure "Add to PATH" is checked

### Port 3000 already in use
- Change the port in `vite.config.js`
- Or kill the process using port 3000

### Dependencies fail to install
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Try using `npm install --legacy-peer-deps`

## Browser Requirements

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Need Help?

Check the main README.md for more information about features and usage.
