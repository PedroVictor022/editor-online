import { useState } from "react";

function App() {

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">
      <div className="bg-white w-[1100px] grid grid-cols-[16rem_1fr] mx-auto overflow-hidden rounded-xl min-h-[720px] shadow-lg border-black/60">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-emerald">
            <div>
              <h1>Blogging about the Advantages of Tailwind CSS</h1>

              <div className="post">
                <h2>Introduction</h2>
                <p className="post-date">Posted on July 10, 2023</p>
                <p>
                  Tailwind CSS is a utility-first CSS framework that provides a
                  set of low-level utility classes to build custom user
                  interfaces. It offers several advantages that make it a
                  popular choice for many developers. In this blog post, we will
                  explore some of the key benefits of using Tailwind CSS.
                </p>
              </div>

              <div className="post">
                <h2>Advantage 1: Rapid Development</h2>
                <p className="post-date">Posted on July 12, 2023</p>
                <p>
                  One of the significant advantages of Tailwind CSS is its
                  ability to speed up the development process. With its
                  extensive collection of utility classes, you can quickly
                  compose complex UI components without writing custom CSS.
                  Let's take a look at an example:
                </p>

                <pre>
                  <code>
                    {`<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Sign In
</button>`}
                  </code>
                </pre>

                <p>
                  The above code snippet demonstrates how easy it is to create a
                  styled button using Tailwind CSS classes. You can apply
                  various utility classes like `bg-blue-500`,
                  `hover:bg-blue-700`, `text-white`, `font-bold`, `py-2`,
                  `px-4`, and `rounded` to achieve the desired look and
                  behavior. This level of flexibility and convenience makes
                  Tailwind CSS a great choice for rapid development.
                </p>
              </div>

              <div className="post">
                <h2>Advantage 2: Consistent Design System</h2>
                <p className="post-date">Posted on July 15, 2023</p>
                <p>
                  Another advantage of Tailwind CSS is that it promotes
                  consistency in design. By using a predefined set of utility
                  classes, you can ensure a consistent look and feel throughout
                  your application. The consistent naming convention and class
                  structure provided by Tailwind CSS help maintain a coherent
                  design system. Here's an example:
                </p>

                <pre>
                  <code>
                    {`<div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg">
  <span className="text-xl font-bold">Welcome!</span>
</div>`}
                  </code>
                </pre>

                <p>
                  In the code snippet above, the utility classes `flex`,
                  `justify-center`, `items-center`, `bg-gray-200`, `p-4`, and
                  `rounded-lg` are used to create a centered and styled
                  container with a welcome message. This consistent approach to
                  styling ensures a cohesive design system across different
                  components of your application.
                </p>
              </div>

              <div className="post">
                <h2>Advantage 3: Customization and Theming</h2>
                <p className="post-date">Posted on July 18, 2023</p>
                <p>
                  Tailwind CSS offers extensive customization options and
                  theming capabilities. You can easily customize various aspects
                  of your design, such as colors, spacing, breakpoints, and
                  more, by editing the configuration file. This allows you to
                  tailor Tailwind CSS to match your specific design
                  requirements. Here's an example of how you can customize the
                  default color palette:
                </p>

                <pre>
                  <code>
                    {`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
        tertiary: '#0000ff',
      },
    },
  },
};`}
                  </code>
                </pre>

                <p>
                  By extending the `colors` section in the configuration file,
                  you can define additional custom colors or override existing
                  ones. This level of customization and theming flexibility
                  makes Tailwind CSS adaptable to your specific project
                  requirements.
                </p>
                <p>
                  You can learn more about Tailwind CSS customization <a href="https://tailwindcss.com/docs/theme">here</a>.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
