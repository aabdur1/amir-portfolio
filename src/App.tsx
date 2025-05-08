import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <Button
        asChild
        variant="outline"
        className="absolute top-4 right-4 font-avenir border-stone-300 rounded-xl hover:bg-stone-300 hover:text-black transition-colors"
      >
        <Link to="/gallery">View Gallery</Link>
      </Button>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 px-4">
        <img
          src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
          alt="Amir Abdur-Rahim"
          className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
        />
        <div>
          <h1 className="text-orange-200 text-6xl font-avenir font-normal mb-4">
            Amir Abdur-Rahim
          </h1>
          <p className="font-avenir font-thin text-2xl text-stone-200 mb-2">
            Photographer & Creative Technologist
          </p>
          <p className="font-avenir font-xl text-sm text-gray-400">
            Chicago-based | JavaScript | AWS | Epic EMR
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
