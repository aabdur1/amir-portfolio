import { Navbar } from "./components/ui/navbar";

function App() {
  return (
    <div className="px-4 py-4 bg-black text-white">
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 px-4">
          <img
            src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
            alt="Amir Abdur-Rahim"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
          />
          <div>
            <h1 className="text-orange-200 text-6xl font-avenir font-normal mb-1">
              Amir
            </h1>
            <h1 className="text-orange-200 text-6xl font-avenir font-normal mb-4">
              Abdur-Rahim
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
    </div>
  );
}

export default App;
