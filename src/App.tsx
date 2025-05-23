import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Laptop, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground font-avant">
        <main className="px-4 py-8 flex flex-col gap-6 md:gap-8 md:px-8 max-w-5xl mx-auto">
          {/* CARD 1: Profile */}
          <Card className="shadow-floaty">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
                alt="Amir Abdur-Rahim"
                className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-light">Amir Abdur-Rahim</h1>
                <p className="mt-2 text-lg font-avenir">
                  Aspiring Data Analyst & Engineer
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Based in Chicago | SQL • Python • AWS • Tableau • Epic EMR
                </p>
                <div className="flex gap-4 justify-center md:justify-start text-muted-foreground">
                  <a
                    href="https://github.com/aabdur1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 hover:text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amir-abdur-rahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-primary" />
                  </a>
                  <a href="mailto:amirabdurrahim@gmail.com">
                    <Mail className="w-5 h-5 hover:text-primary" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CARD 2: Skills & Tools */}
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

          {/* CARD 3: Education & Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <GraduationCap className="w-5 h-5" /> Education & Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm flex flex-col gap-4">
              <div>
                <p className="font-semibold">
                  M.S. Management Information Systems (In Progress)
                </p>
                <p className="text-muted-foreground">
                  University of Illinois at Chicago · 2024–2026
                </p>
                <p>
                  Relevant Coursework: Java, Databases, Statistics, Accounting
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Medical Scribe → Tech Transition
                </p>
                <p className="text-muted-foreground">
                  Epic EMR · Clinical Settings · Remote Documentation
                </p>
                <p>
                  Translating healthcare experience into data-focused tech work
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <Footer />
    </>
  );
}
