# Ajvad Cheniyath Portfolio

A professional portfolio website showcasing projects, skills, and experience, along with an integrated CLI tool for enhanced functionality.

## 📁 Project Structure

```
├── index.html              # Main portfolio website
├── style.css              # Website styles
├── script.js              # Website interactivity
├── no-popups.css          # CSS for popup handling
├── package.json           # Node.js dependencies
├── install.ps1            # Windows installation script
├── cli/                   # Command-line interface tool
│   ├── src/              # TypeScript source files
│   ├── docs/             # CLI documentation
│   ├── package.json      # CLI dependencies
│   └── ...
└── images/               # Portfolio images
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajvadc/ajvad-portfolio.git
   cd ajvad-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **For Windows users:**
   ```powershell
   .\install.ps1
   ```

### Running the Portfolio

**Open the website:**
Simply open `index.html` in your web browser or serve it with a local server:

```bash
npx http-server
```

Then navigate to `http://localhost:8080`

**Using the CLI:**
```bash
cd cli
npm install
npm run build
npm start
```

## 🎨 Features

- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean and professional interface
- **Interactive Elements** - Engaging user experience with JavaScript
- **Integrated CLI** - Command-line tools for additional functionality
- **Cross-platform** - Windows, macOS, and Linux support

## 📝 File Descriptions

- **index.html** - Main portfolio page with project showcase
- **style.css** - Primary styling for the portfolio
- **no-popups.css** - Additional styling to control popup behaviors
- **script.js** - JavaScript for interactivity and dynamic content
- **install.ps1** - Automated setup script for Windows users
- **cli/** - Separate CLI application with extended functionality

## 🛠️ Development

### Building the CLI
```bash
cd cli
npm run build
```

### Running Tests
```bash
cd cli
npm test
```

### Linting
```bash
cd cli
npm run lint
```

## 📦 Dependencies

See `package.json` and `cli/package.json` for a complete list of dependencies.

## 🌐 Deployment

To deploy the portfolio:

1. Build the project (if needed)
2. Push changes to GitHub
3. Configure your hosting provider (GitHub Pages, Vercel, Netlify, etc.)
4. Deploy from the main branch

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Select "main" branch as the source
3. Wait for the deployment to complete
4. Your site will be live at `https://ajvadc.github.io/ajvad-portfolio`

## 📄 License

See LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For inquiries or feedback, please reach out through the portfolio website.

---

**Last Updated:** February 2026
