import { promises as fs } from 'fs'
import * as theme from 'jsonresume-theme-even'
import { render } from 'resumed'

const resume = JSON.parse(await fs.readFile('public/resume.json', 'utf-8'))
const html = await render(resume, theme)

await fs.writeFile('public/resume.html', html)