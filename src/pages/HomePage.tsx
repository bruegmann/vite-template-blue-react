export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-header mt-4 mb-3">
        Yay, your new app is ready! What now?
      </h1>

      <ol>
        <li>
          Check the dependencies. Since this is a template, which isn't updated
          regularly, you should take a look at the <code>package.json</code>.
          You can also try to delete <code>package-lock.json</code> and
          reinstall with <code>npm i</code> to force install latest minor and
          patch versions. If you use an alternative to NPM like Bun or PNPM, you
          maybe don't need that file at all. Install with your package manager
          instead.
        </li>
        <li>
          Install Inter font family and embed it in <code>index.html</code>.{" "}
          <a href="https://bruegmann.github.io/blue/typography/">
            More information.
          </a>
        </li>
        <li>
          Remove this placeholder content by editing{" "}
          <code>./src/pages/HomePage.tsx</code>.
        </li>
        <li>
          Check out the entry point in <code>./src/App.tsx</code>. If you need
          your app to have multiple pages, you should use something like{" "}
          <a href="https://reactrouter.com/">React Router</a> or{" "}
          <a href="https://tanstack.com/router/latest">TanStack Router</a>.
        </li>
        <li>
          Take a look at the stylesheets in <code>./src/styles</code>.
        </li>
        <li>
          <a href="https://bruegmann.github.io/blue/react/">
            Check out the docs
          </a>{" "}
          to find out more about the components, utilities and classes. You'll
          also find many examples there.
        </li>
      </ol>
    </div>
  );
}
