# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

After cloning the repo, cd to the repo and run the following command
```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

If neither work, use:
```
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

### Libraries Used
- Infima (built into Docusaurus): https://infima.dev/docs/getting-started/introduction 
- Material UI: https://mui.com/material-ui/getting-started/
- React Slick: https://react-slick.neostack.com/docs/get-started