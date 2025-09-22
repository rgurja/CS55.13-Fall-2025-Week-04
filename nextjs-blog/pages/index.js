import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'; 

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}
   <main className="page-container">
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="info-card"> {/* Div styled as an info card */}
         <p >Hello ,I'm Rahel .I'm currently learning as a web developer. To create a website using Next.js.- I’ll be building a site like this on the{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>. I will learn more from this link.
        </p> {/* Paragraph introducing the author and linking to the Next.js tutorial */}
         <h4  className="page-title">Some Topics I find here</h4> {/* Subheading for the topics list */}
        <ul>
            <li>Learning basics Next.js </li> {/* List item: basics of Next.js */}
            <li>Exploring the Pages Router</li> {/* List item: Pages Router */}
            <li>Applying CSS styling</li> {/* List item: CSS styling */}
          </ul>
        </div>
         <div className="info-card">
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
        </div>
      </section>
    </main>
    </Layout>
   
  );
}