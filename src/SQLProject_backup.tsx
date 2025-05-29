import { Helmet } from "react-helmet-async";
import SQLiteDemo from "./components/sql/SQLiteDemo";
import FullCarTable from "./components/sql/FullCarTable";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function SQLProjects() {
  return (
    <>
      <Helmet>
        <title>SQL Projects - Car Value Analysis | Amir Abdur-Rahim</title>
        <meta
          name="description"
          content="Interactive SQL analysis of car values dataset with 150+ vehicle records. Live browser-based SQLite queries demonstrating joins, aggregations, and data insights. View live SQL code execution."
        />
        <meta
          name="keywords"
          content="SQL projects, SQLite browser, car data analysis, interactive SQL queries, data analysis portfolio, live SQL demo, database analysis, data visualization"
        />

        <meta property="og:title" content="SQL Projects - Car Value Analysis" />
        <meta
          property="og:description"
          content="Interactive SQL analysis demonstrating data query skills with live browser execution. Analyze 150+ car records with real SQL queries."
        />
        <meta
          property="og:url"
          content="https://amirabdurrahim.com/sql-projects"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SQL Projects - Car Value Analysis"
        />
        <meta
          name="twitter:description"
          content="Interactive SQL analysis with live browser execution"
        />

        <link rel="canonical" href="https://amirabdurrahim.com/sql-projects" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Car Value SQL Analysis",
            description:
              "Interactive SQL analysis of car values with live browser execution",
            applicationCategory: "Data Analysis Tool",
            operatingSystem: "Web Browser",
            author: {
              "@type": "Person",
              name: "Amir Abdur-Rahim",
              url: "https://amirabdurrahim.com",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "1",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <main className="px-4 py-8 font-avant font-light">
          <div className="max-w-5xl mx-auto">
            <header>
              <h1 className="text-4xl font-bold mb-6">
                Car Value SQL Analysis
              </h1>
              <p className="mb-4">
                This project analyzes car values using SQL. The dataset contains
                information about various car models, including their prices,
                sizes, and performance metrics.
              </p>
            </header>
            <FullCarTable />
            <SQLiteDemo />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
