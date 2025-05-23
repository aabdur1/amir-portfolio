import SQLiteDemo from "./components/sql/SQLiteDemo";
import FullCarTable from "./components/sql/FullCarTable";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function SQLProjects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <main className="px-4 py-8 font-avant font-light">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Car Value SQL Analysis</h1>
            <p className="mb-4">
              This project analyzes car values using SQL. The dataset contains
              information about various car models, including their prices,
              sizes, and performance metrics.
            </p>
            <FullCarTable />
            <SQLiteDemo />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
