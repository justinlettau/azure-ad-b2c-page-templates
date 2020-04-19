// tslint:disable: no-console
import * as chalk from 'chalk';
import * as del from 'del';
import * as fs from 'fs-extra';
import * as glob from 'glob';

import { TemplateConfig, ThemesConfig } from '../interfaces';

// prepare dist folder
fs.ensureDirSync('dist/');
del.sync('dist/**');

const { themes } = fs.readJsonSync('b2c-themes.json') as ThemesConfig;
const config = fs.readJsonSync('b2c-template.json') as TemplateConfig;
const keys = Object.keys(config);

themes.forEach(item => {
  console.log(`Building ${item.name} ...`);
  fs.copySync(`src/${item.directory}`, `dist/${item.directory}`);
  fs.copySync('public', `dist/${item.directory}`);
});

const files = glob.sync('dist/**/*.{html,js,css}');

files.forEach(file => {
  keys.forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    const value = config[key];
    const content = fs.readFileSync(file, 'utf8');

    fs.writeFileSync(file, content.replace(regex, value));
  });
});

console.log(chalk.green('Done!'));
