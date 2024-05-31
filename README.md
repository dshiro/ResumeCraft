# ResumeCraft

## Description

This repository serves as my personal portfolio, although you're welcome to clone it if you'd like.
Resume managing tool that use [JSONResume Schema](https://jsonresume.org/schema) as data structure, integrates with [resumed](https://github.com/rbardini/resumed) for PDF creation, and offers an editable Vue3 + TypeScript + Tailwind CSS template all based on the same JSON file.

## Getting Started

1. Clone this repo and install its dependencies using npm

```sh
git clone https://github.com/dshiro/ResumeCraft.git
```

```sh
cd ResumeCraft
npm install
```

2. Update your resume data in the `resume.json` file located in the `src/assets` folder from the root directory

3. Explore the available public [themes](https://www.npmjs.com/search?ranking=maintenance&q=jsonresume-theme) and use npm to install it. Then modify the `export.js` and `render.js` files in your root directory, replacing the following line with the name of the theme you installed and desire:

```javascript
import * as theme from "jsonresume-theme-mantra";
```

4. Modify any files in the `src` folder as needed.

5. Generate your resume in PDF and build your production files by executing `npm run build-all`

6. Look for the `dist` folder in root directory. You can then proceed to host or utilize them as needed.

**NOTE:** resume website's password can be modify at `password.json` in `src/assets`

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
