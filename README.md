## Getting Started

Website Link: [availe.io](https://availe.io)

To download file dependencies:
```bash
npm install
```

To run the development local server:

```bash
npm run dev
```

To run the game-test local server (slower but with cross-origin headers):

```bash
npm run devg
```

To run the production local server:

```bash
npx eslint --fix .
npm run build
npm start
```

Note ```npx eslint --fix .``` is only necessary if npm run build fails to transpile.  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
