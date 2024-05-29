# ResumeCraft

## Description

ResumeCraft streamlines resume creation using the JSONResume Schema and resumed. With ResumeCraft, you can effortlessly generate resumes in webpage and PDF formats, utilizing public themes from JSONResume for PDF generation. Additionally, you have the option to customize your own website using Vue.js, integrating your private resume.json data.

## How to Use ResumeCraft

1. **Clone the Repository**: Start by cloning the ResumeCraft repository to your local machine: git clone https://github.com/dshiro/ResumeCraft.git

2. **Prepare Your Resume Data**: Navigate to the root directory of the cloned repository and locate the `resume.json` file located in the `src/assets` directory. Open this file and update it with your personal information, work experience, education, skills, and any other relevant details following the JSON Resume Schema.

3. **Choose a Theme**: Explore the available public themes provided by JSONResume. Once you've selected a theme that suits your style and preferences, use npm to install it. Then, navigate to the root folder of your project and modify the `export.js` and `render.js` files, replacing the following line with the name of the theme you installed and desire:

```javascript
import * as theme from 'jsonresume-theme-mantra'
```
4. **Customize Your Website (Optional)**: If you wish to highlight your programming skills by building your own website using Vue.js, feel free to create or modify Vue components or files in the `src` folder as needed.

5. **Generate Your Resume**: Once you've prepared your resume data and customized your website (if desired), proceed to generate your resume in both webpage and PDF formats using the appropriate command:

## Project Setup

```sh
npm install
```

## Render HTML

```sh
npm run render
```

## Export PDF

```sh
npm run export
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Generate PDF, HTML file to public folder & Production Build

```sh
npm run build-full
```
