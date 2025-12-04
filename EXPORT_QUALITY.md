# Export Quality Guide

## High-Resolution Exports

All QR code exports are now generated at **2048x2048 pixels** for maximum quality, regardless of the preview size you see on screen.

---

## Export Formats & Quality

### PNG (Recommended for Digital Use)
- **Resolution**: 2048x2048 pixels
- **Quality**: 100% (lossless)
- **File Size**: ~50-150 KB
- **Best For**: 
  - Web use
  - Social media
  - Digital displays
  - Transparent backgrounds
  - Maximum quality

### JPG (Smaller File Size)
- **Resolution**: 2048x2048 pixels
- **Quality**: 95% compression
- **File Size**: ~30-80 KB
- **Best For**:
  - Email attachments
  - When file size matters
  - Solid backgrounds only

### SVG (Vector - Infinite Scaling)
- **Type**: Vector graphics
- **Quality**: Infinite (scalable)
- **File Size**: ~2-10 KB
- **Best For**:
  - Professional printing
  - Large format (posters, banners)
  - Editing in design software
  - Perfect scaling at any size
  - Smallest file size

### PDF (Print-Ready)
- **Resolution**: 2048x2048 pixels embedded
- **Quality**: 100%
- **Format**: A4 page, centered
- **File Size**: ~50-200 KB
- **Best For**:
  - Printing
  - Documents
  - Professional presentations
  - Archival

---

## Quality Comparison

### Screen Preview vs Export

**What you see on screen:**
- Preview: 300-800px (adjustable)
- Purpose: Fast rendering and editing

**What you download:**
- Export: 2048x2048px (fixed high quality)
- Purpose: Print and professional use

### Why 2048px?

✅ **Print Quality**: 300 DPI at 6.8 inches (17.3 cm)  
✅ **Zoom Safe**: Can zoom 6-7x without pixelation  
✅ **Professional**: Suitable for business cards, posters, banners  
✅ **Future Proof**: High enough for most professional uses  
✅ **Scannable**: Maintains perfect scannability even when scaled

---

## Print Size Guide

At 300 DPI (print quality), 2048px QR code can be printed at:

| Size | Dimensions | Use Case |
|------|------------|----------|
| Small | 6.8 x 6.8 cm (2.7 x 2.7 in) | Business cards |
| Medium | 10 x 10 cm (4 x 4 in) | Flyers, brochures |
| Large | 17 x 17 cm (6.8 x 6.8 in) | Posters |
| Extra Large | 25 x 25 cm (10 x 10 in) | Banners (with upscaling) |

**Note**: SVG format can be printed at ANY size without quality loss.

---

## Testing Your QR Code

### Before Printing

1. **Download** the QR code in your preferred format
2. **Open** the file and zoom in 200-300%
3. **Check** that edges are sharp and clear
4. **Test Scan** with your phone camera
5. **Print Test** on regular paper first

### Recommended Test Apps

- **iPhone**: Built-in Camera app
- **Android**: Google Lens or built-in camera
- **Universal**: QR Code Reader apps

### What to Check

✅ Sharp edges (not blurry)  
✅ High contrast (dark vs light)  
✅ Clear patterns (no pixelation)  
✅ Scans quickly (within 1-2 seconds)  
✅ Correct content (test the link/text)

---

## Format Recommendations by Use Case

### Business Cards
- **Format**: PNG or SVG
- **Size**: 2-3 cm printed
- **Colors**: High contrast (black/white recommended)
- **Logo**: Small, simple logo

### Posters & Flyers
- **Format**: SVG or PDF
- **Size**: 5-10 cm printed
- **Colors**: Match brand colors (check contrast)
- **Logo**: Optional, keep simple

### Banners & Large Format
- **Format**: SVG (required for scaling)
- **Size**: 15-30 cm printed
- **Colors**: High contrast essential
- **Logo**: Avoid or keep very simple

### Digital Displays
- **Format**: PNG
- **Size**: Full resolution (2048px)
- **Colors**: Any (test on actual display)
- **Logo**: Can be detailed

### Social Media
- **Format**: PNG
- **Size**: 2048px (platforms will resize)
- **Colors**: Brand colors
- **Logo**: Recommended for branding

### Email Signatures
- **Format**: PNG
- **Size**: 2048px (email client will resize)
- **Colors**: Match email theme
- **Logo**: Small, simple

---

## Quality Settings Explained

### PNG Export
```javascript
Resolution: 2048x2048px
Quality: 100% (lossless)
Compression: None
Color Depth: 24-bit RGB + Alpha
```

### JPG Export
```javascript
Resolution: 2048x2048px
Quality: 95% (slight compression)
Compression: JPEG
Color Depth: 24-bit RGB
```

### SVG Export
```javascript
Type: Vector (XML-based)
Scalability: Infinite
Quality: Perfect at any size
Editability: Full (in design software)
```

### PDF Export
```javascript
Page Size: A4 (210 x 297 mm)
Image Resolution: 2048x2048px
Position: Centered
Quality: 100%
```

---

## Troubleshooting Quality Issues

### QR Code Looks Blurry When Zoomed
- ✅ **Solution**: Use SVG format for infinite scaling
- ✅ **Alternative**: Download PNG at 2048px (already default)

### File Size Too Large
- ✅ **Solution**: Use JPG format (smaller file size)
- ✅ **Alternative**: Use SVG (smallest, vector format)

### QR Code Won't Scan After Printing
- ⚠️ **Check**: Contrast ratio (use contrast warning)
- ⚠️ **Check**: Print quality (use 300 DPI or higher)
- ⚠️ **Check**: Size (minimum 2cm for reliable scanning)
- ⚠️ **Check**: Logo size (not too large)

### Colors Look Different When Printed
- ⚠️ **Issue**: Screen RGB vs Print CMYK
- ✅ **Solution**: Test print first
- ✅ **Solution**: Use standard colors (black/white safest)

### Logo Makes QR Code Unscannable
- ⚠️ **Issue**: Logo too large or complex
- ✅ **Solution**: Use simpler logo
- ✅ **Solution**: Reduce logo size
- ✅ **Note**: App auto-increases error correction to 30%

---

## Advanced: Custom Export Sizes

The app exports at 2048px by default. If you need different sizes:

### For Developers

Edit the export size in the code:

**React Version** (`src/components/QRCodeGenerator.jsx`):
```javascript
const exportSize = 2048  // Change this value
```

**Standalone Version** (`standalone/qr-generator.html`):
```javascript
const exportSize = 2048  // Change this value
```

### Recommended Sizes

- **Web Only**: 1024px
- **Standard Print**: 2048px (default)
- **Large Format**: 4096px
- **Maximum**: 8192px (very large file)

---

## Best Practices Summary

✅ **Always use high contrast** (dark on light or vice versa)  
✅ **Test scan before mass printing**  
✅ **Use SVG for professional printing**  
✅ **Use PNG for digital/web**  
✅ **Keep logos simple and small**  
✅ **Print test on actual material first**  
✅ **Maintain minimum 2cm size for scanning**  
✅ **Check contrast warning before exporting**

---

## File Size Reference

Typical file sizes for 2048x2048px QR code:

| Format | Without Logo | With Logo |
|--------|--------------|-----------|
| PNG | 50-80 KB | 80-150 KB |
| JPG | 30-50 KB | 50-80 KB |
| SVG | 2-5 KB | 5-10 KB |
| PDF | 50-100 KB | 100-200 KB |

---

## Need Even Higher Quality?

For extreme high-quality needs:

1. **Use SVG format** - Infinite scaling, perfect quality
2. **Edit in design software** - Adobe Illustrator, Inkscape
3. **Export at desired size** - From design software
4. **Professional printing** - Use SVG directly

---

**Your QR codes are now exported at professional print quality!** 🎨✨

For questions or issues, check the main documentation files.
