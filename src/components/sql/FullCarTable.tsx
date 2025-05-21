import initSqlJs from "sql.js";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
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

export default function FullCarTable() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({
        locateFile: () => "https://sql.js.org/dist/sql-wasm.wasm",
      });

      const response = await fetch("/data/sql-project/car_analysis.db");
      const buffer = await response.arrayBuffer();
      const db = new SQL.Database(new Uint8Array(buffer));

      const query = `
        SELECT "Car", "Size", REPLACE("Price ($)", ',', '') AS price,
               "Cost/Mile", "Road-Test Score", "Predicted Reliability", "Value Score"
        FROM carvalues
        ORDER BY price ASC;
      `;

      const result = db.exec(query);
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
    <Card className="w-full font-avenir mt-8 mb-10 border-foreground shadow-floaty">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-semibold mb-2">
          Full Car Dataset
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          This table displays the full dataset of car values, including their
          prices, sizes, and performance metrics.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="rounded border border-foreground">
          <div className="max-h-[500px] overflow-auto relative">
            <Table className="min-w-[900px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Car
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Size
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Price ($)
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Cost/Mile
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Road-Test Score
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Reliability
                  </TableHead>
                  <TableHead className="sticky top-0 bg-background z-10 font-semibold">
                    Value Score
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((row, i) => (
                  <TableRow key={i} className="hover:bg-muted">
                    <TableCell>{row["Car"]}</TableCell>
                    <TableCell>{row["Size"]}</TableCell>
                    <TableCell>
                      ${parseFloat(row["price"]).toLocaleString()}
                    </TableCell>
                    <TableCell>{row["Cost/Mile"]}</TableCell>
                    <TableCell>{row["Road-Test Score"]}</TableCell>
                    <TableCell>{row["Predicted Reliability"]}</TableCell>
                    <TableCell>{row["Value Score"]}</TableCell>
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
