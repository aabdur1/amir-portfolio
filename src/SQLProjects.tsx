import SQLiteDemo from "./components/sql/SQLiteDemo";
import FullCarTable from "./components/sql/FullCarTable";
import { Navbar } from "@/components/ui/navbar";

export default function SQLProjects() {
  return (
    <div className="px-4 py-4 bg-background font-avant font-light text-foreground">
      <Navbar />
      <main className="min-h-screen flex-row mt-4 items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Car Value SQL Analysis</h1>
        <p className="mb-4">
          This project analyzes car values using SQL. The dataset contains
          information about various car models, including their prices, sizes,
          and performance metrics.
        </p>
        <FullCarTable />
        <SQLiteDemo />
      </main>
    </div>
  );
}
