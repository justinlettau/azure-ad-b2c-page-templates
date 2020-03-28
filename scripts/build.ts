import * as chalk from 'chalk';
import * as del from 'del';
import * as fs from 'fs-extra';

import { ThemesConfig } from '../interfaces';

// prepare dist folder
fs.ensureDirSync('dist/');
del.sync('dist/**');

const { themes } = fs.readJsonSync('b2c-themes.json') as ThemesConfig;

themes.forEach(item => {
  fs.copySync(`src/${item.directory}`, `dist/${item.directory}`);
  fs.copySync('public', `dist/${item.directory}`);

  console.log(chalk.green(`Successfully built ${item.name}!`));
});
