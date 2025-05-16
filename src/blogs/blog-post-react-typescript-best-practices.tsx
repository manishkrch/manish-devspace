import React from 'react';

const BlogPostReactTypescriptBestPractices: React.FC = () => (
  <>
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">React & TypeScript: Best Practices for Modern Web Apps</h2>
          <div className="meta mb-3"><span className="date">Published February 2025</span><span className="time">5 min read</span><span className="comment"><a href="#comments">10 comments</a></span></div>
        </header>
        <div className="blog-post-body">
          <figure className="blog-banner">
            <img className="img-fluid" src="/assets/images/blog/blog-post-thumb-4.jpg" alt="React & TypeScript" />
            <figcaption className="mt-2 text-center image-caption">Modern web app development with React and TypeScript</figcaption>
          </figure>
          <p>React and TypeScript are a powerful combination for building scalable, maintainable web applications. This post covers actionable best practices, code examples, and tips for professional React+TS development.</p>

          <h3>1. Type Your Props and State</h3>
          <ul>
            <li>Use <code>interface</code> or <code>type</code> to define props and state shapes.</li>
            <li>Leverage TypeScript’s inference for hooks like <code>useState</code> and <code>useReducer</code>.</li>
          </ul>
          <pre><code>{`interface UserProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserProps> = ({ name, age }) => (
  <div>{name} ({age})</div>
);`}</code></pre>

          <h3>2. Use Functional Components and Hooks</h3>
          <ul>
            <li>Prefer function components for simplicity and testability.</li>
            <li>Use hooks for state, effects, and context. Type hook return values and parameters.</li>
          </ul>
          <pre><code>{`const [count, setCount] = React.useState<number>(0);
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => setCount(count + 1);`}</code></pre>

          <h3>3. Organize Code for Scale</h3>
          <ul>
            <li>Group related components, hooks, and types in feature folders.</li>
            <li>Use index files for clean imports.</li>
            <li>Keep components small and focused.</li>
          </ul>

          <h3>4. Strict Linting and Formatting</h3>
          <ul>
            <li>Enable <code>strict</code> mode in <code>tsconfig.json</code> for maximum type safety.</li>
            <li>Use ESLint and Prettier to enforce code quality and consistency.</li>
          </ul>

          <h3>5. Reusable Types and Utility Functions</h3>
          <ul>
            <li>Extract common types and interfaces to shared files.</li>
            <li>Use utility types like <code>Partial&lt;T&gt;</code>, <code>Pick&lt;T, K&gt;</code>, and <code>Record&lt;K, T&gt;</code>.</li>
          </ul>

          <h3>6. Safe Event Handling and DOM Access</h3>
          <ul>
            <li>Type event handlers explicitly (e.g., <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code>).</li>
            <li>Use <code>ref</code> and <code>useRef</code> with correct types for DOM elements.</li>
          </ul>

          <h3>Table: React vs. React+TypeScript</h3>
          <table className="table table-striped my-5">
            <thead>
              <tr>
                <th>Feature</th>
                <th>React (JS)</th>
                <th>React + TypeScript</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type Safety</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Editor Autocomplete</td>
                <td>Basic</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Refactoring</td>
                <td>Manual</td>
                <td>Safe & Automated</td>
              </tr>
            </tbody>
          </table>

          <h3>7. Testing and Documentation</h3>
          <ul>
            <li>Write unit and integration tests for components and hooks.</li>
            <li>Document component APIs with JSDoc or Storybook.</li>
          </ul>

          <h3>Quote Example</h3>
          <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
            <p className="mb-2">“TypeScript turns runtime bugs into compile-time errors, making your React apps more robust.”</p>
            <footer className="blockquote-footer">React Developer</footer>
          </blockquote>

          <h3>Further Learning</h3>
          <ul>
            <li>Explore the <a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer">React TypeScript Cheatsheet</a> for advanced patterns.</li>
            <li>Stay updated with the <a href="https://react.dev/learn/typescript" target="_blank" rel="noopener noreferrer">official React+TS docs</a>.</li>
          </ul>

          <h3>Conclusion</h3>
          <p>Adopting these best practices will help you build robust, maintainable, and enjoyable React+TypeScript applications. Invest in type safety, code quality, and clear structure for long-term success.</p>
        </div>
        <hr />
      </div>
    </article>
  </>
);

export default BlogPostReactTypescriptBestPractices;
