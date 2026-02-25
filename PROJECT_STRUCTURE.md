# Font Picker - Project Structure

## 📁 New Folder Structure

```
src/
├── components/          # React components
│   ├── FontList.jsx            # Font list selector component
│   ├── PreviewSection.jsx       # Live preview and copy section
│   ├── PairingsSuggestions.jsx  # Suggested font pairings
│   ├── Title.jsx               # Header and title section
│   ├── Footer.jsx              # Footer section
│   └── index.js                # Component exports
│
├── data/                # Application data
│   └── google-fonts.js  # Font lists, descriptions, and sample pairs
│
├── styles/             # CSS modules
│   ├── App.module.css        # Main app styles
│   └── FontList.module.css   # FontList component styles
│
├── utils/              # Utility functions
│   └── fontLoader.js   # Google Fonts dynamic loader
│
├── App.jsx             # Main app component (clean & simple)
├── index.js            # Entry point
└── ...other files
```

## 🎯 What Changed

### Before
- All styles were inline in JSX components
- Font data was scattered across App.jsx
- Utility functions mixed with component logic
- App.jsx was 400+ lines long

### After
- **Components** separated into individual files for reusability
- **Styles** extracted to CSS modules (App.module.css, FontList.module.css)
- **Data** centralized in data/google-fonts.js
- **Utilities** isolated in utils/fontLoader.js
- **App.jsx** reduced to 71 clean lines

## 📦 Component Files

| File | Purpose |
|------|---------|
| `FontList.jsx` | Displays scrollable font list with selection |
| `PreviewSection.jsx` | Live preview area + copy pairing button |
| `PairingsSuggestions.jsx` | Quick pairing suggestion buttons |
| `Title.jsx` | Header and title section |
| `Footer.jsx` | Footer with instructions |

## 🎨 Style Files

| File | Purpose |
|------|---------|
| `App.module.css` | Main layout and global component styles |
| `FontList.module.css` | FontList-specific styles |

## 🔧 Utility Files

| File | Purpose |
|------|---------|
| `fontLoader.js` | Dynamically loads Google Fonts via CDN |

## 📊 Data Files

| File | Purpose |
|------|---------|
| `google-fonts.js` | Exports: HEADING_FONTS, BODY_FONTS, SAMPLE_PAIRS, FONT_DESCRIPTIONS |

## ✨ Benefits

✅ **Maintainability** - Each component has a single responsibility
✅ **Reusability** - Components can be easily imported elsewhere
✅ **Scalability** - Easy to add new features or components
✅ **Clean Code** - Separation of concerns (logic, styles, data)
✅ **Performance** - CSS modules enable better tree-shaking
✅ **Readability** - App.jsx is now easy to understand at a glance
