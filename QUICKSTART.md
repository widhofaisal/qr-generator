# Quick Start Guide

## 🚀 Fastest Way to Get Started

### Option 1: Docker (Recommended for Production)

**Requires Docker installed**

```bash
# Start the application
docker-compose up -d

# Access at http://localhost:3000
```

✅ **Production-ready**  
✅ **Optimized build**  
✅ **Easy deployment**  
✅ **Isolated environment**

See [DOCKER.md](DOCKER.md) for complete documentation.

---

### Option 2: Standalone Version (No Installation Required)

**Just open and use - works immediately!**

1. Navigate to the `standalone` folder
2. Double-click `qr-generator.html`
3. It opens in your browser - ready to use!

✅ **No Node.js required**  
✅ **No installation needed**  
✅ **Works offline**  
✅ **All features included**

---

### Option 3: Full React Version (For Development)

**Requires Node.js installation**

#### Step 1: Install Node.js
- Download from: https://nodejs.org/
- Install the LTS version
- Restart your terminal/command prompt

#### Step 2: Install Dependencies
```bash
cd d:/SIDEJOB/qrcode-generator
npm install
```

#### Step 3: Run the App
```bash
npm run dev
```

The app will open at http://localhost:3000

---

## 📋 Features Checklist

Both versions include:

- ✅ Live QR code preview
- ✅ URL and text input
- ✅ Color customization (foreground & background)
- ✅ 6 different QR code styles
- ✅ Size adjustment (200-800px)
- ✅ Margin control
- ✅ Logo upload with automatic error correction
- ✅ 8 preset color themes
- ✅ Contrast warning system
- ✅ Export to PNG, JPG, SVG, PDF
- ✅ Input validation
- ✅ Responsive design

React version additionally includes:
- ✅ Dark mode toggle
- ✅ History of last 10 QR codes
- ✅ Modern component architecture
- ✅ Better performance

---

## 🎯 How to Use

1. **Enter Content**: Type or paste any URL or text
2. **Customize**: Choose colors, style, and size
3. **Add Logo** (optional): Upload an image for the center
4. **Apply Theme** (optional): Click a preset theme
5. **Download**: Click your preferred format (PNG/JPG/SVG/PDF)

---

## 💡 Tips

- **For best scanning**: Use high contrast colors (dark on light or vice versa)
- **Logo size**: Keep logos small - the app automatically adjusts error correction
- **Print quality**: Use SVG or PDF for printing, PNG for digital use
- **Size**: 300-400px is ideal for most uses
- **Margin**: 10-20px margin helps scanners read the code

---

## ❓ Troubleshooting

### Standalone Version
- **QR code not showing**: Check browser console for errors
- **Download not working**: Try a different browser (Chrome/Firefox recommended)
- **Logo not appearing**: Ensure image file is under 2MB

### React Version
- **npm not found**: Install Node.js and restart terminal
- **Port 3000 in use**: Change port in `vite.config.js`
- **Build errors**: Delete `node_modules` and run `npm install` again

---

## 📁 File Structure

```
qrcode-generator/
├── standalone/
│   └── qr-generator.html    ← Open this for instant use!
├── src/                      ← React source code
├── package.json              ← Dependencies
└── README.md                 ← Full documentation
```

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

**Need more help?** Check SETUP.md or README.md for detailed information.
