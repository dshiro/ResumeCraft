import { promises as fs } from "fs";
import * as theme from "jsonresume-theme-stackoverflow";
import { render } from "resumed";

const resume = JSON.parse(await fs.readFile("src/assets/resume.json", "utf-8"));
const html = await render(resume, theme);

await fs.writeFile("public/resume.html", html);
