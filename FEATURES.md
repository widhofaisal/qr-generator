# Feature Documentation

## Complete Feature List

### 1. Content Input
**What it does**: Allows users to enter any URL or text to encode in the QR code

**Features**:
- Large text area for easy input
- Supports URLs, plain text, phone numbers, email addresses
- Real-time validation
- Error messages for empty input
- Placeholder text for guidance

**Example Uses**:
- Website URLs: `https://example.com`
- Email: `mailto:user@example.com`
- Phone: `tel:+1234567890`
- WiFi: `WIFI:T:WPA;S:NetworkName;P:Password;;`
- Plain text: Any message you want

---

### 2. Live Preview
**What it does**: Shows QR code in real-time as you make changes

**Features**:
- Instant updates (no delay)
- Visual feedback
- Centered display
- Responsive sizing
- Works with all customizations

**Benefits**:
- See changes immediately
- No need to download to preview
- Test different styles quickly

---

### 3. Color Customization

#### Foreground Color
**What it does**: Changes the color of the QR code dots/squares

**Features**:
- Color picker (visual selection)
- Hex code input (precise control)
- Synced inputs (change one, both update)
- Supports all hex colors (#000000 to #FFFFFF)

#### Background Color
**What it does**: Changes the background color behind the QR code

**Features**:
- Same controls as foreground
- Independent from foreground
- Contrast validation

**Tips**:
- High contrast = better scanning
- Dark on light or light on dark works best
- Avoid similar colors

---

### 4. QR Code Styles

#### Available Styles:
1. **Rounded** - Smooth rounded corners (default)
2. **Dots** - Circular dots instead of squares
3. **Classy** - Elegant rounded style
4. **Classy Rounded** - Extra elegant with more rounding
5. **Square** - Classic sharp corners
6. **Extra Rounded** - Maximum rounding

**How to use**:
- Click any style button
- Preview updates instantly
- Active style is highlighted

**Best for**:
- Rounded: General use, modern look
- Dots: Artistic, unique appearance
- Square: Traditional, professional
- Classy: Elegant, sophisticated

---

### 5. Size Control

**Range**: 200px to 800px
**Default**: 300px
**Step**: 50px increments

**What it affects**:
- QR code dimensions (width × height)
- Export resolution
- File size

**Recommendations**:
- **200-300px**: Social media, web use
- **400-500px**: Print materials, posters
- **600-800px**: Large format, banners

---

### 6. Margin Control

**Range**: 0px to 50px
**Default**: 10px
**Step**: 5px increments

**What it does**: Adds white space around the QR code

**Why it matters**:
- Scanners need margin to detect QR code
- Improves readability
- Prevents edge clipping

**Recommendations**:
- **0-5px**: Tight spaces, minimal design
- **10-20px**: Standard, recommended
- **25-50px**: Extra safety, large prints

---

### 7. Logo Upload

**What it does**: Adds a custom image in the center of the QR code

**Features**:
- Supports all common image formats (PNG, JPG, GIF, SVG)
- Automatic centering
- Automatic error correction increase
- Size optimization (40% of QR code)
- Remove logo option
- File size limit: 2MB

**How it works**:
1. Click "Upload Logo"
2. Select image file
3. Logo appears in center
4. Error correction auto-increases to High (30%)
5. QR code remains scannable

**Best practices**:
- Use simple logos (not too detailed)
- Square or circular logos work best
- Transparent backgrounds recommended
- Keep logo size reasonable

---

### 8. Preset Themes

**8 Beautiful Themes**:

1. **Classic** - Black on White
   - Foreground: #000000
   - Background: #FFFFFF
   - Use: Traditional, professional

2. **Ocean** - Blue tones
   - Foreground: #0077be
   - Background: #e6f3ff
   - Use: Tech, water, calm

3. **Forest** - Green tones
   - Foreground: #2d5016
   - Background: #e8f5e9
   - Use: Nature, eco, organic

4. **Sunset** - Orange tones
   - Foreground: #d84315
   - Background: #fff3e0
   - Use: Energy, warmth, food

5. **Purple** - Purple tones
   - Foreground: #6a1b9a
   - Background: #f3e5f5
   - Use: Luxury, creative, royal

6. **Dark** - White on Black
   - Foreground: #ffffff
   - Background: #1a1a1a
   - Use: Modern, sleek, dark mode

7. **Neon** - Green on Black
   - Foreground: #00ff00
   - Background: #000000
   - Use: Tech, gaming, cyberpunk

8. **Rose** - Pink tones
   - Foreground: #c2185b
   - Background: #fce4ec
   - Use: Beauty, feminine, soft

**How to use**:
- Click any theme button
- Colors apply instantly
- Can customize further after applying

---

### 9. Export Formats

#### PNG Export
**Best for**: Digital use, web, social media
**Features**:
- Lossless compression
- Transparent background support
- High quality
- Moderate file size

#### JPG Export
**Best for**: Email, smaller file size
**Features**:
- Lossy compression
- Smaller file size
- Solid background
- Good quality

#### SVG Export
**Best for**: Printing, scaling, professional use
**Features**:
- Vector format (infinite scaling)
- No quality loss when resized
- Smallest file size
- Editable in design software

#### PDF Export
**Best for**: Printing, documents, sharing
**Features**:
- Print-ready format
- Centered on page
- High quality
- Universal compatibility

**File Size Comparison** (300px QR code):
- SVG: ~2-5 KB
- PNG: ~10-30 KB
- JPG: ~5-15 KB
- PDF: ~20-50 KB

---

### 10. Validation & Warnings

#### Input Validation
**Checks**:
- Empty input (prevents generation)
- Shows error message
- Disables download buttons

#### Contrast Warning
**What it checks**: Color contrast ratio between foreground and background

**Algorithm**: WCAG contrast calculation
**Threshold**: 3:1 minimum ratio
**Warning**: Shows if contrast too low

**Why it matters**:
- Low contrast = hard to scan
- Prevents unusable QR codes
- Ensures reliability

**Example**:
- ✅ Good: Black (#000000) on White (#FFFFFF) = 21:1
- ⚠️ Warning: Gray (#888888) on Light Gray (#CCCCCC) = 2.5:1
- ❌ Bad: Yellow (#FFFF00) on White (#FFFFFF) = 1.1:1

---

### 11. History Feature (React Version Only)

**What it does**: Saves your last 10 generated QR codes

**Features**:
- Automatic saving
- Timestamp tracking
- Logo indicator
- Quick reload
- Clear all option
- Stored in browser (localStorage)

**Information saved**:
- Text/URL content
- All customization settings
- Timestamp
- Logo status

**How to use**:
1. Generate QR codes normally
2. Click "Show History"
3. Click any entry to reload it
4. Settings restore automatically

**Privacy**: All data stored locally on your device

---

### 12. Dark Mode (React Version Only)

**What it does**: Switches entire app to dark theme

**Features**:
- Toggle button (top right)
- Smooth transitions
- Remembers preference
- System preference detection
- All components adapt

**Benefits**:
- Easier on eyes in low light
- Modern appearance
- Saves battery (OLED screens)
- Professional look

---

### 13. Responsive Design

**Breakpoints**:
- **Desktop** (1024px+): Two-column layout
- **Tablet** (768px-1023px): Stacked layout
- **Mobile** (<768px): Single column, optimized controls

**Adaptations**:
- Touch-friendly buttons
- Larger tap targets
- Optimized spacing
- Readable text sizes
- Scrollable sections

**Works on**:
- Desktop computers
- Laptops
- Tablets (iPad, Android)
- Smartphones (iPhone, Android)

---

### 14. Error Correction Levels

**What it is**: QR codes can recover from damage/obstruction

**Levels**:
- **L (Low)**: 7% recovery
- **M (Medium)**: 15% recovery - Default
- **Q (Quartile)**: 25% recovery
- **H (High)**: 30% recovery - Used with logo

**Automatic adjustment**:
- No logo: Medium (M) - 15%
- With logo: High (H) - 30%

**Why it matters**:
- Higher level = more redundancy
- Can scan even if partially covered
- Logo in center is compensated

---

### 15. Offline Support

**What it means**: Works without internet connection

**How it works**:
- All processing in browser
- No server calls
- Libraries loaded once
- Cached for offline use

**Benefits**:
- Privacy (no data sent out)
- Speed (no network delay)
- Reliability (no server downtime)
- Works anywhere

**Requirements**:
- Initial load needs internet (to load libraries)
- After that, fully offline
- Standalone version: Can save and use offline

---

## Advanced Usage Tips

### For Best Scanning Results:
1. Use high contrast colors
2. Keep size at least 300px
3. Add 10-20px margin
4. Test on multiple devices
5. Avoid very complex logos

### For Printing:
1. Use SVG or PDF format
2. Set size to 400px+
3. Use classic colors (black/white)
4. Test print at actual size
5. Ensure printer quality is high

### For Web Use:
1. PNG format recommended
2. 300-400px size
3. Optimize for mobile scanning
4. Test on actual phones
5. Consider dark mode users

### For Branding:
1. Use brand colors (check contrast)
2. Add logo (keep simple)
3. Match brand style
4. Test readability
5. Maintain consistency

---

## Keyboard Shortcuts (React Version)

- **Tab**: Navigate between fields
- **Enter**: In text field updates QR
- **Esc**: Close history panel
- **Ctrl/Cmd + S**: Quick save (browser default)

---

## Browser Features Used

- **Canvas API**: QR code rendering
- **File API**: Logo upload
- **LocalStorage**: History and preferences
- **Download API**: File exports
- **Color Picker**: Native color selection
- **Responsive Design**: CSS Grid and Flexbox

---

## Performance Optimizations

- Debounced updates
- Efficient re-renders
- Lazy loading
- Optimized images
- Minimal dependencies
- Code splitting (React version)

---

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast (UI)
- Screen reader friendly
- Touch-friendly controls

---

## Security Features

- Client-side only (no server)
- No data collection
- No tracking
- No cookies (except localStorage)
- No external API calls
- Safe file handling
- Input sanitization

---

This documentation covers all features in detail. For quick start, see QUICKSTART.md.
