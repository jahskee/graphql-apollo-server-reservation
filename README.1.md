https://www.apollographql.com/docs/apollo-server/getting-started.html

## make babel run with node.js

    npm install @babel/core @babel/node @babel/preset-env --save-dev

    touch .babelrc

    {
       "presets": ["@babel/preset-env"]
    }

## Add Typescript preset
    npm install --save-dev @babel/preset-typescript @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread