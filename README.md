# ResumeCraft

## Description

ResumeCraft streamlines resume creation using the [JSONResume Schema](https://jsonresume.org/schema) and [resumed](https://github.com/rbardini/resumed). You can generate resumes in PDF formats using [resumed](https://github.com/rbardini/resumed) and customize your own resume website using Vue.js, integrating your private resume.json data.

## Getting Started

1. **Clone the Repository**: Start by cloning the ResumeCraft repository to your local machine. After cloning, navigate into the project directory and install its dependencies using npm:

```sh
git clone https://github.com/dshiro/ResumeCraft.git
```

```sh
cd ResumeCraft
npm install
```

2. **Prepare Your Resume Data**: Navigate to the root directory of the cloned repository and locate the `resume.json` file located in the `src/assets` directory. Open this file and update it with your personal information, work experience, education, skills, and any other relevant details following the JSON Resume Schema.

3. **Choose a Theme**: Explore the available public [themes](https://www.npmjs.com/search?ranking=maintenance&q=jsonresume-theme) provided by JSONResume. Once you've selected a theme that suits your style and preferences, use npm to install it. Then, navigate to the root folder of your project and modify the `export.js` and `render.js` files, replacing the following line with the name of the theme you installed and desire:

```javascript
import * as theme from "jsonresume-theme-mantra";
```

4. **Customize Your Resume Website (Optional)**: If you wish to highlight your programming skills, feel free to modify any files in the `src` folder as needed.

5. **Generate Your Resume**: Once you've prepared your resume data and customized your website (if desired), proceed to generate your resume in PDF and build your production files by executing `npm run build-all`

6. **Result**: Upon completion, your PDF and build files will be located in the `dist` directory. You can then proceed to host or utilize them as needed.

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
