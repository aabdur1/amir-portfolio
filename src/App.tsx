function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-black text-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 px-4">
        <img
          src="https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4482.jpg"
          alt="Amir Abdur-Rahim"
          className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
        />
        <div>
          <h1 className="text-emerald-100 text-5xl font-bold mb-4">
            Amir Abdur-Rahim
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Photographer & Creative Technologist
          </p>
          <p className="text-sm text-gray-400">
            Chicago-based | JavaScript | AWS | Epic EMR
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
