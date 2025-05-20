import SQLiteDemo from "./components/sql/SQLiteDemo";
import FullCarTable from "./components/sql/FullCarTable";
import { Navbar } from "@/components/ui/navbar";

export default function SQLProjects() {
  return (
    <div className="px-4 py-4 bg-black text-white">
      <Navbar />
      <main className="min-h-screen bg-black text-white flex-row mt-4 items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Car Value SQL Analysis</h1>
        <FullCarTable />
        <SQLiteDemo />
      </main>
    </div>
  );
}
