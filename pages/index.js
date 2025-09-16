
import Head from 'next/head'; // Imports Head for setting page title and meta tags
import Link from 'next/link'; // Imports Link for navigation between pages

export default function Home() { // Exports the Home component as default for the root route
  
  return ( 
    <home>
      {/* Head component sets the HTML <head> section */}
      <Head>
        <title> Welcome to Next.js </title> {/* Sets the browser tab title */}
        <meta name="description" content="Homepage of a Next.js " /> {/* Sets the meta description for SEO */}
      </Head>

      {/* Main content of the page */}
      <main className="page-container"> {/* Main container with a CSS class */}
        <h1 className="page-title">Welcome to my Next.js</h1> {/* Main heading with a CSS class */}
        
        {/* Info card section with more details */}
        <div className="info-card"> {/* Div styled as an info card */}
         <p>Hello ,I'm Rahel .I'm currently learning as a web developer. To create a website using Next.js.- I’ll be building a site like this on the{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>. I will learn more from this link.
        </p> {/* Paragraph introducing the author and linking to the Next.js tutorial */}
         <h4>Topics I find here</h4> {/* Subheading for the topics list */}
        <ul>
            <li>Learning basics Next.js </li> {/* List item: basics of Next.js */}
            <li>Exploring the Pages Router</li> {/* List item: Pages Router */}
            <li>Applying CSS styling</li> {/* List item: CSS styling */}
          </ul>
        </div>

        {/* Navigation link to the first post */}
        <Link className="nav-link" href="/posts/first-post">
          Read the First Post →
        </Link>
      </main>
    </home>
  ); 
} // End of Home component