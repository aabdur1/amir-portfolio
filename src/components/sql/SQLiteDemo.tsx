import initSqlJs from "sql.js";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SQLiteDemo() {
  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: () => "https://sql.js.org/dist/sql-wasm.wasm",
      });

      const response = await fetch("/data/sql-project/car_analysis.db");
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));

      const sqlQuery = `
        SELECT "Car", CAST(REPLACE("Price ($)", ',', '') AS INTEGER) AS price,
               "Predicted Reliability", "Road-Test Score"
        FROM carvalues
        WHERE CAST(REPLACE("Price ($)", ',', '') AS INTEGER) < 30000
          AND "Predicted Reliability" >= 4
        ORDER BY "Predicted Reliability" DESC, "Road-Test Score" DESC;
      `;

      setQuery(sqlQuery);

      const result = db.exec(sqlQuery);
      if (result.length > 0) {
        const columns = result[0].columns;
        const values = result[0].values;
        const rows = values.map((row: any[]) =>
          Object.fromEntries(row.map((val, i) => [columns[i], val]))
        );
        setResults(rows);
      }
    })();
  }, []);

  return (
    <Card className="w-full font-avenir mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-2">
          Live SQL Query (SQLite in Browser)
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          This query selects cars under $30,000 with a reliability score of 4 or
          higher.
        </CardDescription>
        <pre className="bg-muted text-sm p-4 rounded font-mono overflow-x-auto whitespace-pre-wrap border mb-4">
          {query}
        </pre>
      </CardHeader>

      <CardContent className="p-6">
        <ScrollArea className="rounded border">
          <div className="max-h-[400px] overflow-auto relative">
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Car
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Price
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Reliability
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Score
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((row, i) => (
                  <TableRow key={i} className="hover:bg-gray-800">
                    <TableCell>{row["Car"]}</TableCell>
                    <TableCell>${row["price"].toLocaleString()}</TableCell>
                    <TableCell>{row["Predicted Reliability"]}</TableCell>
                    <TableCell>{row["Road-Test Score"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
