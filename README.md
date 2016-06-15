
## What is this?

It's a template project for a SPA application on [asp.net core](https://www.microsoft.com/net) using [React.js](https://facebook.github.io/react/) and [Redux](http://redux.js.org/) written in ES2015 syntax. It's the same template as the one in [original repository](https://github.com/aspnet/JavaScriptServices) that is called [ReacReduxSpa](https://github.com/aspnet/JavaScriptServices/tree/master/templates/ReactReduxSpa) but it's developed in JavaScript rather than TypeScript.

## What is JavaScript services?

`JavaScriptServices` is a set of technologies for ASP.NET Core developers. It provides infrastructure that you'll find useful if you use Angular 2 / React / Knockout / etc. on the client, or if you build your client-side resources using Webpack, or otherwise want to execute JavaScript on the server at runtime. Everything is cross-platform, and works with .NET Core 1.0 RC2 or later on Windows, Linux, or OS X.

## Differences with the TypeScript version
There are small differences with the [corresponding](https://github.com/aspnet/JavaScriptServices/tree/master/templates/ReactReduxSpa) TypeScript version. Most importantly there is no yo generator for this template so far. So if you want to create an application based on this template you have to clone it locally and modify it according to your needs.

On top of that there is a slightly difference in the way the bundles are created during development and for production. Initially there is no need to create explicitly the vendor bundle by executing the webpack command before launching the project. It's enough to just execute `dotnet run` and the library will take care creating the bundles. For production now you have to manually create the bundles and probably add them to source control as they are part of your application. In order to create these bundles you have to execute `.\node_modules\.bin\webpack --config webpack.config.prod.js` from the root of the app. This will have as a result to create all the required files inside the `wwwroot\dist` folder.

**For more information please visit the [JavaScriptServices project](https://github.com/aspnet/JavaScriptServices)**