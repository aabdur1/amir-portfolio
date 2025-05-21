import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-4 bg-background text-foreground font-avant">
      <Navbar />
      <main className=" flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 px-4">
          <img
            src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
            alt="Amir Abdur-Rahim"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover shadow-floaty"
          />
          <div>
            <h1 className="text-6xl font-avant font-light mb-1">Amir</h1>
            <h1 className="text-6xl font-avant font-light mb-4">Abdur-Rahim</h1>
            <p className="font-avenir font-thin text-2xl mb-2">
              Aspiring Data Analyst & Engineer
            </p>
            <p className="font-avenir font-xl text-sm ">
              Based in Chicago | SQL • Python • AWS • Tableau • Epic EMR
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
