import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Laptop, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";

export default function App() {
  return (
    <>
      <Helmet>
        <title>
          Amir Abdur-Rahim - Data Analyst & Engineer | SQL, Python, AWS
        </title>
        <meta
          name="description"
          content="Aspiring Data Analyst transitioning from healthcare to tech. Expertise in SQL, Python, AWS, and Epic EMR. Chicago-based professional seeking data analytics opportunities."
        />
        <meta
          name="keywords"
          content="data analyst, SQL developer, python developer, AWS, Epic EMR, healthcare data, Chicago data analyst, portfolio, UIC student"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Amir Abdur-Rahim - Data Analyst Portfolio"
        />
        <meta
          property="og:description"
          content="Data analyst portfolio showcasing SQL, Python, and AWS projects. Healthcare to tech transition story."
        />
        <meta
          property="og:image"
          content="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
        />
        <meta property="og:url" content="https://amirabdurrahim.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Amir Abdur-Rahim - Data Analyst Portfolio"
        />
        <meta
          name="twitter:description"
          content="Data analyst portfolio showcasing SQL, Python, and AWS projects"
        />
        <meta
          name="twitter:image"
          content="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://amirabdurrahim.com/" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amir Abdur-Rahim",
            jobTitle: "Data Analyst",
            description:
              "Aspiring Data Analyst transitioning from healthcare to tech",
            url: "https://amirabdurrahim.com",
            image:
              "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chicago",
              addressRegion: "IL",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.linkedin.com/in/amir-abdur-rahim/",
              "https://github.com/aabdur1",
            ],
            knowsAbout: [
              "SQL",
              "Python",
              "AWS",
              "Data Analysis",
              "Epic EMR",
              "Tableau",
              "JavaScript",
            ],
            alumniOf: {
              "@type": "Organization",
              name: "University of Illinois at Chicago",
            },
            hasOccupation: {
              "@type": "Occupation",
              name: "Data Analyst",
              occupationLocation: {
                "@type": "City",
                name: "Chicago",
              },
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <div className="min-h-screen bg-background text-foreground font-avenir">
        <main className="px-4 py-8 flex flex-col gap-6 md:gap-8 md:px-8 max-w-5xl mx-auto">
          {/* CARD 1: Profile */}
          <section aria-label="Profile">
            <Card className="shadow-floaty">
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
                  alt="Professional headshot of Amir Abdur-Rahim, Data Analyst and Engineer"
                  className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover"
                  width="224"
                  height="224"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-light">Amir Abdur-Rahim</h1>
                  <h2 className="mt-2 text-lg font-avenir">
                    Aspiring Data Analyst & Engineer
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based in Chicago | SQL • Python • AWS • Tableau • Epic EMR
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start text-muted-foreground">
                    <a
                      href="https://github.com/aabdur1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Amir's GitHub profile"
                    >
                      <Github className="w-5 h-5 hover:text-primary" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amir-abdur-rahim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with Amir on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 hover:text-primary" />
                    </a>
                    <a
                      href="mailto:amirabdurrahim@gmail.com"
                      aria-label="Send email to Amir"
                    >
                      <Mail className="w-5 h-5 hover:text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CARD 2: Skills & Tools */}
          <section aria-label="Skills and Tools">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Laptop className="w-5 h-5" /> Skills & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Languages</strong>
                  <p>SQL, Python, JavaScript</p>
                </div>
                <div>
                  <strong>Tools</strong>
                  <p>Excel, Tableau, Git</p>
                </div>
                <div>
                  <strong>Cloud</strong>
                  <p>AWS (S3, EC2)</p>
                </div>
                <div>
                  <strong>Certs</strong>
                  <p>AWS Academy (Data Engineering)</p>
                </div>
                <div>
                  <strong>Healthcare</strong>
                  <p>Epic EMR, Clinical Workflows</p>
                </div>
                <div>
                  <strong>Soft Skills</strong>
                  <p>Communication, Detail-Oriented</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CARD 3: Education & Experience */}
          <section aria-label="Education and Experience">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="w-5 h-5" /> Education & Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold">
                    M.S. Management Information Systems (In Progress)
                  </h3>
                  <p className="text-muted-foreground">
                    University of Illinois at Chicago · 2024–2026
                  </p>
                  <p>
                    Relevant Coursework: Java, Databases, Statistics, Accounting
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Medical Scribe → Tech Transition
                  </h3>
                  <p className="text-muted-foreground">
                    Epic EMR · Clinical Settings · Remote Documentation
                  </p>
                  <p>
                    Translating healthcare experience into data-focused tech
                    work
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
