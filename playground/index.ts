import * as cheerio from 'cheerio';
import * as express from 'express';
import * as fs from 'fs-extra';
import * as open from 'open';
import * as path from 'path';

import { TemplateConfig, ThemesConfig } from '../interfaces';

const root = path.join(__dirname, '../');
const { themes } = fs.readJsonSync(path.join(root, 'b2c-themes.json')) as ThemesConfig;
const app = express();
const port = 3000;

// static files
app.use(express.static(path.join(root, 'public')));

themes.forEach(item => {
  app.use('/assets', express.static(path.join(root, 'src', item.directory, 'assets')));
});

// index
app.get('/', (req, res) => {
  const file = path.join(__dirname, 'index.html');
  const content = fs.readFileSync(file, 'utf8');

  res.send(content);
});

// themes
app.get('/themes/:theme/:page', (req, res) => {
  const { theme, page } = req.params;
  const config = getTemplateConfig();
  const fragment = getAzureFragment(page);
  let html = getThemePage(theme, page);

  Object.keys(config).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    const value = config[key];

    html = html.replace(regex, value);
  });

  const $ = cheerio.load(html);

  $('#api').append(fragment);
  res.send($.html());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
  open(`http://localhost:${port}`);
});

/**
 * Get template configuration.
 */
function getTemplateConfig() {
  const file = path.join(root, 'b2c-template.json');

  return fs.readJsonSync(file) as TemplateConfig;
}

/**
 * Get theme page.
 *
 * @param theme Theme name.
 * @param page Page name.
 */
function getThemePage(theme: string, page: string) {
  const file = path.join(root, 'src', theme, `${page}.html`);

  return fs.readFileSync(file, 'utf8');
}

/**
 * Get Azure B2C sample HTML fragment.
 *
 * @param file Filename.
 */
function getAzureFragment(file: string) {
  const content = path.join(__dirname, 'fragments', `${file}.html`);

  return fs.readFileSync(content, 'utf8');
}
