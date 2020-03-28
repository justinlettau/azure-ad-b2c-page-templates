/**
 * Template configuration.
 */
export interface TemplateConfig {
  url: string;
  name: string;
}

/**
 * Themes configuration.
 */
export interface ThemesConfig {
  themes: Theme[];
}

/**
 * Theme definition.
 */
export interface Theme {
  name: string;
  version: string;
  website: string;
  directory: string;
}
