![CI](https://github.com/justinlettau/azure-ad-b2c-page-templates/workflows/CI/badge.svg)
[![Dev Dependency Status](https://david-dm.org/justinlettau/azure-ad-b2c-page-templates/dev-status.svg)](https://david-dm.org/justinlettau/azure-ad-b2c-page-templates?type=dev)

# Azure B2C Page Templates

Custom template content for Azure AD B2C pages.

Templates:

- [Bootstrap v4](./screenshots/bootstrap)

# Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Playground](#playground)
- [Build](#build)
- [References](#references)

# Features

- 💻 **Live preview** templates.
- 🔗 Builds templates with **absolute URLs**.
- 📑 **Sample** HTML from Azure B2C fragments.

# Setup

```
git checkout https://github.com/justinlettau/azure-ad-b2c-page-templates.git
npm install
```

# Playground

The playground is a local server used to edit and preview templates.

```
npm start
```

Note: `./playground/fragments/` is a collection of sample HTML content that Azure will automatically inject into
templates. The current fragments are taken from an environment with minimal settings enabled.

# Build

When your ready to deploy a template, edit the values of `b2c-template.json` and run the following:

```
npm run build
```

Copy the files built to the `dist/[theme]/` folder and deploy!

| Property   | Description                                       |
| ---------- | ------------------------------------------------- |
| `ROOT_URL` | Absolute URL of endpoint hosting custom template. |
| `APP_NAME` | Application name.                                 |

# References

- https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-customize-ui
- https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-ui-customization
- https://docs.microsoft.com/en-us/azure/active-directory-b2c/customize-ui-overview
