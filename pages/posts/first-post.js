import Head from 'next/head'; // Imports the Head component to manage the HTML <head> section (title, meta tags, etc.)
import Link from 'next/link'; // Imports the Link component for client-side navigation between pages

export default function FirstPost() { // Exports the FirstPost component as the default export
  return ( 
    <>
      {/* Head component lets you set the page title and meta tags */}
      <Head>
        <title>First Post of next.js</title> {/* Sets the browser tab title */}
        <meta name="description" content="First post of a Next.js website" /> {/* Sets the meta description for SEO */}
      </Head>

      {/* Main content of the page */}
      <main className="page-container">
        <h1 className="page-title">First post of a Next.js creating website</h1> {/* Main heading */}
        <p className="page">
          This is my first post. I styled it using custom CSS! {/* Introductory paragraph */}
        </p>

        {/* Info card section listing what was learned */}
        <div className="info-card">
          <h4>I Learned more about Next.js in this module. I list some of it  :</h4> {/* Subheading */}
          <ul>
            <li>Set up a Next.js Pages Router project</li> {/* List item 1 */}
            <li>Add navigation using the Link component</li> {/* List item 2 */}
            <li>CSS to improve page design</li> {/* List item 3 */}
          </ul>
        </div>
        {/* Link component for navigation back to the home page */}
        <Link className="nav-link" href="/">← Back to Home</Link>
      </main>
   </>
  ); 
} // End of FirstPost