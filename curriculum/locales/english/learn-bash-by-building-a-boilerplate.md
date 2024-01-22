# .NET - Introduction to ASP.NET Core Development

## 0

### --description--

Welcome to the ASP.NET course. Start by using `cd` in the terminal to change into the `introduction-to-asp-dotnet-core-development` folder.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `introduction-to-asp-dotnet-core-development` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'introduction-to-asp-dotnet-core-development');
```

## 1

### --description--

The `dotnet` CLI tools are already installed on your machine. Verify this by running `dotnet --version` in the terminal.

### --tests--

You should run `dotnet --version` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet --version/);
```

## 2

### --description--

These tools will help you with .NET development. View what the command can do with `dotnet --help`.

### --tests--

You should run `dotnet --help` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet --help/);
```

## 3

### --description--

One of the commands listed is `new`. It helps you to start a new project. Run `dotnet new list` to see the available project templates.

### --tests--

You should run `dotnet new list` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet new list/);
```

## 4

### --description--

It shows the name of the template and some other info about what the template starts you with. Run `dotnet new web --output my-first-app` to create a project from the `web` template.

### --tests--

You should run `dotnet new web --output my-first-app` in the terminal from the `introduction-to-asp-dotnet-core-development` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*dotnet new web (--output|-o) my-first-app/);
```

You should have a `my-first-app` folder in the `introduction-to-asp-dotnet-core-development` folder as a result of creating the project

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development'
);
assert.include(folder, 'my-first-app');
```

## 5

### --description--

Your project was created in the `my-first-app` folder. Before you take a look at it, run `node update-settings.js` to update some config. This is only necessary for this course.

### --tests--

You should run `node update-settings.js` in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^node update-settings\.js/);
```

## 6

### --description--

Your project was created in the `my-first-app` folder. Expand the folder in the file explorer so you can see what was created. Then use `cd` to change into that folder.

### --tests--

You should use the change directory (`cd`) command in the terminal

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
assert.match(lastCommand, /^\s*cd/);
```

You should be in the `my-first-app` folder in your terminal

```js
await new Promise(res => setTimeout(res, 1000));
const cwdFile = await __helpers.getCWD();
const cwd = cwdFile.split('\n').filter(Boolean).pop();
assert.include(cwd, 'my-first-app');
```

## 7

### --description--

In the file explorer, find and open the `Program.cs` file to see the server code, then run `dotnet run` in the termial to run the program. Open the browser to the suggested port to see your app running. When you are done, press `ctrl+c` in the terminal to close your app.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
const terminalOut = await __helpers.getTerminalOutput();
assert.match(lastCommand, /^\s*dotnet run/);
assert.match(terminalOut, /Application is shutting down...\s*$/);
```

## 8

### --description--

In the `Program.cs` file, change the endpoint to `/api/hello` instead of `/`.

### --tests--

Your endpoint should point to `/api/hello`.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Program.cs'
);
assert.match(fileContents, /api\/hello/);
```

## 9

### --description--

Run `dotnet run` again to run the new code. After it's running, go to your app in the browser and add `/api/hello` to the domain to see the endpoint. When you are done, press `ctrl+c` in the terminal to close your app.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
const terminalOut = await __helpers.getTerminalOutput();
const temp = await __helpers.getTemp();
assert.match(lastCommand, /^\s*dotnet run/);
assert.match(terminalOut, /Application is shutting down...\s*$/);
assert(!/Content root path: \/workspace\/dotnet-curriculum\/introduction-to-asp-dotnet-core-development\/my-first-app\s*$/.test(temp))
```

## 10

### --description--

In your `my-first-app` folder, create a `Pages` folder. This will be for some web pages in your project.

### --tests--

You should have a `Pages` folder in the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app'
);
assert.include(folder, 'Pages');
```

## 11

### --description--

Create an `Index.cshtml` file in your `Pages` folder.

### --tests--

You should have an `Index.cshtml` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages'
);
assert.include(folder, 'Index.cshtml');
```

## 12

### --description--

At the top of your new file, add `@page`.

### --tests--

You should have `@page` at the top of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml'
);
assert.match(fileContents, /@page/);
```

## 13

### --description--

Add the code below at the bottom of the file:

```cs
@{
  ViewData["Title"] = "Home";
}
```

### --tests--

You should have the suggested code at the bottom of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /@{\s*ViewData\["Title"\] = "Home";\s*}/);
```

## 14

### --description--

Finally, add this at the end of the file: `<p>This is the @ViewData["Title"] page.</p>`.

### --tests--

You should have the suggested code at the bottom of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml');
assert.match(fileContents, /<p>This is the @ViewData\["Title"\] page\.<\/p>/);
```

## 15

### --description--

Create an `Index.cshtml.cs` file in the `Pages` folder.

### --tests--

You should have an `Index.cshtml.cs` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages'
);
assert.include(folder, 'Index.cshtml.cs');
```

## 16

### --description--

At the top of your new file, add `using Microsoft.AspNetCore.Mvc.RazorPages;`

### --tests--

You should have `using Microsoft.AspNetCore.Mvc.RazorPages;` in your `Index.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml.cs'
);
assert.match(fileContents, /using Microsoft\.AspNetCore\.Mvc\.RazorPages;/);
```

## 17

### --description--

Below that, add `public class IndexModel : PageModel {}`.

### --tests--

You should have `public class IndexModel : PageModel {}` at the bottom of your `Index.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml.cs'
);
assert.match(fileContents, /public class IndexModel : PageModel {}/);
```

## 18

### --description--

Back in the `Program.cs` file, add `builder.Services.AddRazorPages();` above the `app` variable.

### --tests--

You should have `builder.Services.AddRazorPages();` in your `Program.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Program.cs');
assert.match(fileContents, /builder\.Services\.AddRazorPages\(\);/);
```

## 19

### --description--

Next, add `app.MapRazorPages();` above the `app.Run()` command so your app creates the pages.

### --tests--

You should have `app.MapRazorPages();` in your `Program.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Program.cs');
assert.match(fileContents, /app\.MapRazorPages\(\);/);
```

## 20

### --description--

Run the app again to start the new changes. Then, open the app in the browser to see the home page. When you are done, press `ctrl+c` in the terminal to close the app.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
const terminalOut = await __helpers.getTerminalOutput();
const temp = await __helpers.getTemp();
assert.match(lastCommand, /^\s*dotnet run/);
assert.match(terminalOut, /Application is shutting down...\s*$/);
assert(!/Content root path: \/workspace\/dotnet-curriculum\/introduction-to-asp-dotnet-core-development\/my-first-app\s*$/.test(temp))
```

## 21

### --description--

You should have seen your home page in the browser. In the `Pages` folder, create an `About.cshtml` file to add another page to your app.

### --tests--

You should have an `About.cshtml` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages'
);
assert.include(folder, 'About.cshtml');
```

## 22

### --description--

In the new file, add `@page`.

### --tests--

You should have `@page` at the top of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml'
);
assert.match(fileContents, /@page/);
```

## 23

### --description--

Below that, add:

```cs
@{
  ViewData["Title"] = "About";
}
```

### --tests--

You should have the suggested code at the bottom of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /@{\s*ViewData\["Title"\] = "About";\s*}/);
```

## 24

### --description--

Finally, add `<p>This is the @ViewData["Title"] page.</p>` at the bottom.

### --tests--

You should have the suggested code at the bottom of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile('introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml');
assert.match(fileContents, /<p>This is the @ViewData\["Title"\] page\.<\/p>/);
```

## 25

### --description--

Create an `About.cshtml.cs` file in the `Pages` folder.

### --tests--

You should have an `About.cshtml.cs` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages'
);
assert.include(folder, 'About.cshtml.cs');
```

## 26

### --description--

Add `using Microsoft.AspNetCore.Mvc.RazorPages;` at the top of the new file.

### --tests--

You should have `using Microsoft.AspNetCore.Mvc.RazorPages;` in your `About.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml.cs'
);
assert.match(fileContents, /using Microsoft\.AspNetCore\.Mvc\.RazorPages;/);
```

## 27

### --description--

Next, add `public class AboutModel : PageModel {}` at the bottom.

### --tests--

You should have `public class AboutModel : PageModel {}` at the bottom of your `About.cshtml.cs` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml.cs'
);
assert.match(fileContents, /public class AboutModel : PageModel {}/);
```

## 28

### --description--

Run your app again and then open the app in the browser and visit the `/about` page. You should see: "This is the about page." on the webpage. When you are done, press `ctrl+c` in the terminal to close the app.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
const terminalOut = await __helpers.getTerminalOutput();
const temp = await __helpers.getTemp();
assert.match(lastCommand, /^\s*dotnet run/);
assert.match(terminalOut, /Application is shutting down...\s*$/);
assert(!/Content root path: \/workspace\/dotnet-curriculum\/introduction-to-asp-dotnet-core-development\/my-first-app\s*$/.test(temp))
```

## 29

### --description--

In the `Pages` folder, create a new `Shared` folder.

### --tests--

You should have an `Shared` folder in the `Pages` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages'
);
assert.include(folder, 'Shared');
```

## 30

### --description--

In the `Shared` folder, create a `_Layout.cshtml` file.

### --tests--

You should have an `_Layout.cshtml` folder in the `Shared` folder

```js
await new Promise(res => setTimeout(res, 1000));
const folder = await __helpers.getDirectory(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Shared'
);
assert.include(folder, '_Layout.cshtml');
```

## 31

### --description--

Add this HTML boilerplate to the file:

```sh
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@ViewData["Title"] | My First App</title>
  </head>
  <body>
    <header>
      <h1>Welcome to your ASP.NET Core app!</h1>
    </header>

    <main>@RenderBody()</main>
  </body>
</html>
```

### --tests--

You should have the suggested code in your `_Layout.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Shared/_Layout.cshtml'
);
assert.match(fileContents, /<!DOCTYPE html>/);
assert.match(fileContents, /@RenderBody\(\)/);
```

## 32

### --description--

In the `Index.cshtml` file, add `Layout = "_Layout";` in the `@` code block to use the layout on the home page.

### --tests--

You should have `Layout = "_Layout";` in the `@` code block of your `Index.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/Index.cshtml'
);
assert.match(fileContents, /Layout = "_Layout";/);
```

## 33

### --description--

In the `About.cshtml` file, add `Layout = "_Layout";` in the `@` code block to use the layout on the about page.

### --tests--

You should have `Layout = "_Layout";` in the `@` code block of your `About.cshtml` file.

```js
await new Promise(res => setTimeout(res, 1000));
const fileContents = await __helpers.getFile(
  'introduction-to-asp-dotnet-core-development/my-first-app/Pages/About.cshtml'
);
assert.match(fileContents, /Layout = "_Layout";/);
```

## 34

### --description--

Run your app again. Then open it in the browser and visit your two pages to see the changes. When you are done, press `ctrl+c` in the terminal to close the app.

### --tests--

You should run `dotnet run` in the terminal from the `my-first-app` folder

```js
await new Promise(res => setTimeout(res, 1000));
const lastCommand = await __helpers.getLastCommand();
const terminalOut = await __helpers.getTerminalOutput();
const temp = await __helpers.getTemp();
assert.match(lastCommand, /^\s*dotnet run/);
assert.match(terminalOut, /Application is shutting down...\s*$/);
assert(!/Content root path: \/workspace\/dotnet-curriculum\/introduction-to-asp-dotnet-core-development\/my-first-app\s*$/.test(temp))
```

## --fcc-end--
