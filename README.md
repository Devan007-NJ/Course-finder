# Course Catalog App 🎓

A beautiful, responsive course catalog application built with React. Features a modern design, real-time search, category filtering, and integration with external APIs.

![Course Catalog](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Search Functionality**: Filter courses by name, description, or category
- **Category Filtering**: Easy-to-use category buttons
- **Responsive Design**: Works perfectly on desktop (1600×900) and mobile (414×749)
- **Component Architecture**: Clean, reusable components
- **Beautiful UI**: Custom animations, gradients, and hover effects

## 🎨 Design Highlights

- Distinctive warm gradient background (amber/orange/rose palette)
- Playfair Display serif font for headlines
- Work Sans for body text
- Smooth animations and transitions
- Interactive hover effects
- Level badges and enrollment counts

## 📁 Project Structure

```
course-catalog-app/
├── src/
│   ├── components/
│   │   ├── header.jsx          
│   │   ├── searchbar.jsx      
│   │   ├── hero.jsx                    
│   │   └── Loading.jsx       
│   ├── App.js                  
│   ├── App.css                
│   └── index.js                
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Create a new React app**:
   ```bash
   npx create-react-app course-catalog
   cd course-catalog
   ```

2. **Install dependencies**:
   ```bash
   npm install lucide-react
   ```

3. **Copy the components**:
   - Create a `components` folder in `src/`
   - Copy all component files from this repository into `src/components/`
   - Replace `src/App.js` with the provided App.js
   - Replace `src/App.css` with the provided App.css

4. **Update index.js** (if needed):
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';
   import App from './App';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

5. **Run the app**:
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Components

### Header.jsx
- Displays the main title and subtitle

### SearchBar.jsx
- Search input with icon
- Filters courses in real-time
- Responsive design

### Hero.jsx
- Highlights selected category
- Smooth transitions
- Individual course display
- Shows level, duration, enrollment count

### Loading.jsx
- Animated loading spinner
- Displayed while fetching data

## 🎯 How to Copy Components

Each component is self-contained and can be copied individually:

1. Create the file in your `src/components/` directory
2. Copy the entire component code
3. Make sure to import the component in App.js
4. Verify all dependencies (lucide-react) are installed

Example:
```javascript
// In App.js
import Header from './components/Header';
import SearchBar from './components/SearchBar';
// ... other imports
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

## 📱 Responsive Breakpoints

- **Mobile**: 414×749px
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1600×900px

## 🛠️ Customization

### Change Colors

Edit the gradient colors in `App.css`:
```css
.hero-title {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 50%, #your-color-3 100%);
}
```

### Change Fonts

Update the Google Fonts import in `App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Add More Courses

Modify the `fetchCourses` function in `App.js` or update the fallback data.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ and React
