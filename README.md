<h1 align="center" id="header">
  ATS Generate CV - Automated Resume Builder
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/PDF-EC1C24?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="PDF">
</p>

<p align="center">
  Modern ATS-optimized CV generator that builds professional resumes from structured data and exports them to PDF format.
</p>

---

<h2 id="stack">
  Tech Stack
</h2>

<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" width="48" title="HTML5"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/JavaScript.svg" width="48" title="JavaScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/CSS.svg" width="48" title="CSS">
</p>

### Core Technologies

- **Bun** - Fast JavaScript runtime and package manager
- **JavaScript** - Language for building dynamic web applications
- **Playwright** - Browser automation for PDF generation
- **HTML5** - Semantic markup for CV structure

### Features

- **ATS-Optimized** - CV format optimized for Applicant Tracking Systems
- **PDF Export** - High-quality PDF generation using Playwright
- **Fast Build** - Powered by Bun for lightning-fast builds
- **Structured Data** - Clean separation between content and presentation
- **Professional Layout** - Modern, clean design that passes ATS scanners

---

<h2 id="prerequisites">
  Prerequisites
</h2>

Before starting, ensure you have the following installed:

- [Bun](https://bun.sh/docs) (v1 or higher) – primary runtime & package manager
- [Git](https://git-scm.com/)

> **Note:** Playwright will be automatically installed during the setup process.

---

<h2 id="installation">
  Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/generate-cv
cd generate-cv
```

### 2. Initial Setup

Run the setup command to install all dependencies and Playwright browsers:

```bash
make setup
```

Or manually with bun:

```bash
bun install && bunx playwright install
```

---

<h2 id="usage">
  Usage
</h2>

### Available Commands

View all available Make commands:

```bash
make help
```

### Build Your CV

Generate the HTML version of your CV:

```bash
make build
```

This will execute the `scripts/render.mjs` file and create your CV in HTML format in the `dist/` directory.

### Generate PDF

Create a PDF version of your CV:

```bash
make pdf
```

This command will:

1. Build the HTML version (if not already built)
2. Use Playwright to render and export the CV as PDF

The PDF will be generated in the `dist/` folder.

### Quick Workflow

To build and generate PDF in one go:

```bash
make build && make pdf
```

### Clean Environment

Remove all build artifacts and dependencies:

```bash
make clean
```

---

<h2 id="makefile-commands">
  Makefile Commands Reference
</h2>

| Command      | Description                                      |
| ------------ | ------------------------------------------------ |
| `make setup` | Install dependencies and setup Playwright        |
| `make build` | Build the HTML version of the CV                 |
| `make pdf`   | Generate a PDF version of the CV                 |
| `make clean` | Clean up the project (remove node_modules, dist) |
| `make help`  | Display all available commands                   |

---

<h2 id="project-structure">
  Project Structure
</h2>

```
ats-generate-cv/
├── scripts/                # Build and export scripts
│   ├── render.mjs          # HTML rendering script
│   └── export-pdf.mjs      # PDF export script
├── dist/                   # Generated output (HTML & PDF)
├── package.json            # Project dependencies
├── Makefile               # Build automation
└── README.md              # This file
```

---

<h2 id="customization">
  Customization
</h2>

### Editing Your CV Content

To customize your CV with your own information:

1. Locate your CV data file (typically in the project root or a `data/` folder)
2. Update your personal information, work experience, education, and skills
3. Run `make build` to regenerate the HTML
4. Run `make pdf` to create the updated PDF

### Styling

The CV uses HTML and CSS for styling. To customize the appearance:

1. Edit the CSS styles in your template files
2. Rebuild using `make build`
3. Regenerate PDF with `make pdf`

---

<h2 id="ats-optimization">
  ATS Optimization Tips
</h2>

This CV generator is designed with ATS (Applicant Tracking Systems) in mind:

- **Semantic HTML** - Proper heading hierarchy and semantic tags
- **Standard Sections** - Common section names (Experience, Education, Skills)
- **Plain Text Friendly** - No complex graphics or tables that confuse parsers
- **Keyword Optimization** - Structure allows easy keyword placement
- **Clean PDF** - Searchable, selectable text in PDF format

---

<h2 id="troubleshooting">
  Troubleshooting
</h2>

### Playwright Installation Issues

If you encounter issues with Playwright installation:

```bash
bunx playwright install --force
```

### Permission Errors on Clean

If `make clean` fails due to permission issues:

```bash
sudo make clean
```

Or manually:

```bash
sudo rm -rf node_modules dist
```

---

<h2 id="contributing">
  Contributing
</h2>

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="license">
  License
</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="contact">
  Contact
</h2>

Your Name - [@victorzarzar](https://github.com/victorzarzar)

Project Link: [https://github.com/victorzarzar/ats-generate-cv](https://github.com/victorzarzar/ats-generate-cv)

---

# ats-generate-cv
