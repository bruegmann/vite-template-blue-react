export default function HomePage() {
    return (
        <div className="container">
            <h1 className="page-header mt-4 mb-3">
                Yay, your new app is ready! What now?
            </h1>

            <ol>
                <li>
                    Install Inter font family and embed it in{" "}
                    <code>index.html</code>.{" "}
                    <a href="https://bruegmann.github.io/blue/typography/">
                        More information.
                    </a>
                </li>
                <li>
                    Remove this placeholder content by editing{" "}
                    <code>./src/pages/HomePage.tsx</code>.
                </li>
                <li>
                    Check out the entry point in <code>./src/App.tsx</code>. If
                    you need your app to have multiple pages, you should use
                    something like{" "}
                    <a href="https://reactrouter.com/">React Router</a> or{" "}
                    <a href="https://tanstack.com/router/latest">
                        TanStack Router
                    </a>
                    .
                </li>
                <li>
                    Take a look at the stylesheets in <code>./src/styles</code>.
                </li>
                <li>
                    <a href="https://bruegmann.github.io/blue/react/">
                        Check out the docs
                    </a>{" "}
                    to find out more about the components, utilities and
                    classes. You'll also find many examples there.
                </li>
            </ol>
        </div>
    )
}
