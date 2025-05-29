import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Database,
  Heart,
  Car,
  Code2,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

// Import your existing components
import SQLiteDemo from "./components/sql/SQLiteDemo";
import FullCarTable from "./components/sql/FullCarTable";

export default function SQLProjects() {
  const [activeDataset, setActiveDataset] = useState("automotive");

  // Sample healthcare data for demonstration
  const healthcareInsights = [
    { zip: "60002", diabetesRate: 69.6, totalDischarges: 9590 },
    { zip: "60010", diabetesRate: 43.5, totalDischarges: 8956 },
    { zip: "60015", diabetesRate: 18.7, totalDischarges: 8240 },
    { zip: "60031", diabetesRate: 85.2, totalDischarges: 12450 },
    { zip: "60048", diabetesRate: 92.1, totalDischarges: 11200 },
  ];

  const advancedQueries: Record<
    string,
    Array<{
      title: string;
      difficulty: string;
      description: string;
      sql: string;
      insight: string;
      business_impact: string;
    }>
  > = {
    automotive: [
      {
        title: "Market Segmentation Analysis",
        difficulty: "Advanced",
        description:
          "Using window functions to analyze competitive positioning",
        sql: `WITH price_quartiles AS (
  SELECT Car, Size, 
         CAST(REPLACE("Price ($)", ',', '') AS INTEGER) as price,
         "Value Score",
         NTILE(4) OVER (ORDER BY CAST(REPLACE("Price ($)", ',', '') AS INTEGER)) as price_quartile,
         ROW_NUMBER() OVER (PARTITION BY Size ORDER BY "Value Score" DESC) as value_rank
  FROM carvalues
)
SELECT Size, price_quartile, COUNT(*) as car_count,
       AVG(price) as avg_price,
       MAX(CASE WHEN value_rank = 1 THEN Car END) as segment_leader
FROM price_quartiles  
GROUP BY Size, price_quartile
ORDER BY Size, price_quartile;`,
        insight: "Identifies market leaders and gaps in each price segment",
        business_impact: "Guides product positioning and competitive strategy",
      },
    ],
    healthcare: [
      {
        title: "Population Health Risk Assessment",
        difficulty: "Advanced",
        description: "Identifying high-risk ZIP codes using composite scoring",
        sql: `WITH risk_scores AS (
  SELECT 
    ZIP,
    Diabetes,
    Total_MH,
    Discharges,
    -- Create composite risk score
    (Diabetes * 0.4 + Total_MH * 0.3 + (Discharges/100) * 0.3) as composite_risk
  FROM lake_county_health
),
risk_categories AS (
  SELECT *,
    PERCENT_RANK() OVER (ORDER BY composite_risk DESC) as risk_percentile,
    CASE 
      WHEN composite_risk > 200 THEN 'Critical Risk'
      WHEN composite_risk > 150 THEN 'High Risk'
      WHEN composite_risk > 100 THEN 'Moderate Risk'
      ELSE 'Low Risk'
    END as risk_category
  FROM risk_scores
)
SELECT ZIP, 
       ROUND(composite_risk, 1) as risk_score,
       risk_category,
       ROUND(Diabetes, 1) as diabetes_rate,
       ROUND(Total_MH, 1) as mental_health_burden
FROM risk_categories
ORDER BY composite_risk DESC;`,
        insight:
          "Creates data-driven risk stratification for targeted interventions",
        business_impact:
          "Enables efficient allocation of public health resources",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Advanced SQL Analytics - Car Values & Healthcare Data | Amir
          Abdur-Rahim
        </title>
        <meta
          name="description"
          content="Interactive SQL analysis showcasing automotive market intelligence and healthcare population analytics. Advanced queries with window functions, CTEs, and statistical analysis."
        />
        <meta
          name="keywords"
          content="SQL projects, healthcare analytics, automotive analysis, population health, data analyst portfolio, Epic EMR, clinical data analysis"
        />

        <meta
          property="og:title"
          content="Advanced SQL Analytics - Automotive & Healthcare"
        />
        <meta
          property="og:description"
          content="Comprehensive SQL analysis demonstrating domain expertise in automotive markets and healthcare population data"
        />
        <meta
          property="og:url"
          content="https://amirabdurrahim.com/sql-projects"
        />

        <link rel="canonical" href="https://amirabdurrahim.com/sql-projects" />
      </Helmet>

      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        <main className="px-4 py-8 font-avant">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Enhanced Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
                <Database className="w-10 h-10 text-blue-600" />
                Advanced SQL Analytics Portfolio
              </h1>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Demonstrating advanced SQL capabilities through comprehensive
                analysis of
                <span className="font-semibold text-blue-600">
                  {" "}
                  automotive market data
                </span>{" "}
                and
                <span className="font-semibold text-red-600">
                  {" "}
                  healthcare population insights
                </span>
                .
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Healthcare Analytics</Badge>
                <Badge variant="secondary">Market Intelligence</Badge>
                <Badge variant="secondary">Statistical Analysis</Badge>
                <Badge variant="secondary">Epic EMR Experience</Badge>
              </div>
            </div>

            {/* Dataset Toggle */}
            <div className="flex justify-center space-x-4">
              <Button
                variant={activeDataset === "automotive" ? "default" : "outline"}
                onClick={() => setActiveDataset("automotive")}
                className="flex items-center gap-2"
              >
                <Car className="w-4 h-4" />
                Automotive Analysis
              </Button>
              <Button
                variant={activeDataset === "healthcare" ? "default" : "outline"}
                onClick={() => setActiveDataset("healthcare")}
                className="flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Healthcare Analytics
              </Button>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="advanced">Advanced SQL</TabsTrigger>
                <TabsTrigger value="live-demo">Live Demo</TabsTrigger>
                <TabsTrigger value="insights">Data Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {activeDataset === "automotive" ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Dataset Size</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                          54 Cars
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Comprehensive market analysis
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Price Range</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                          $16K-$89K
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Full market coverage
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Analysis Focus
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg font-bold text-purple-600">
                          Market Intelligence
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Competitive positioning
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-red-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Coverage Area</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                          26 ZIP Codes
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Lake County, Illinois
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Conditions Tracked
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600">
                          8+ Conditions
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Diabetes, mental health, more
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Analysis Focus
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg font-bold text-blue-600">
                          Population Health
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Risk stratification
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle
                      className={
                        activeDataset === "healthcare"
                          ? "text-red-600"
                          : "text-blue-600"
                      }
                    >
                      {activeDataset === "healthcare"
                        ? "Healthcare Domain Expertise"
                        : "Automotive Market Intelligence"}
                    </CardTitle>
                    <CardDescription>
                      {activeDataset === "healthcare"
                        ? "Leveraging Epic EMR experience and clinical knowledge for advanced population health analytics"
                        : "Comprehensive market analysis and competitive intelligence using advanced SQL techniques"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeDataset === "healthcare" ? (
                        <>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-red-600">
                              Clinical Analytics
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Population health risk stratification</li>
                              <li>• Chronic disease correlation analysis</li>
                              <li>• Healthcare utilization patterns</li>
                              <li>• Geographic health disparities</li>
                              <li>• Mental health burden assessment</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-blue-600">
                              Epic EMR Connection
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>
                                • 2+ years clinical documentation experience
                              </li>
                              <li>• Understanding of healthcare workflows</li>
                              <li>• HIPAA compliance knowledge</li>
                              <li>• Clinical decision support insights</li>
                              <li>• Quality measure calculations</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-blue-600">
                              Market Analysis
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>
                                • Price segmentation and quartile analysis
                              </li>
                              <li>• Competitive positioning matrices</li>
                              <li>• Value proposition assessment</li>
                              <li>• Statistical correlation modeling</li>
                              <li>• Performance benchmarking</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-green-600">
                              Business Applications
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Product positioning strategy</li>
                              <li>• Market gap identification</li>
                              <li>• Pricing optimization</li>
                              <li>• Quality prediction modeling</li>
                              <li>• Consumer value analysis</li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Advanced SQL Query -{" "}
                      {activeDataset === "healthcare"
                        ? "Healthcare Analytics"
                        : "Market Intelligence"}
                    </CardTitle>
                    <CardDescription>
                      {
                        advancedQueries[
                          activeDataset as keyof typeof advancedQueries
                        ][0]?.description
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2 mb-4">
                      <Badge
                        variant={
                          advancedQueries[
                            activeDataset as keyof typeof advancedQueries
                          ][0]?.difficulty === "Advanced"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {
                          advancedQueries[
                            activeDataset as keyof typeof advancedQueries
                          ][0]?.difficulty
                        }
                      </Badge>
                      <Badge
                        variant="outline"
                        className={
                          activeDataset === "healthcare"
                            ? "text-red-600"
                            : "text-blue-600"
                        }
                      >
                        {activeDataset === "healthcare"
                          ? "Population Health"
                          : "Market Analysis"}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-green-600">
                        SQL Query:
                      </h4>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto font-mono">
                        {
                          advancedQueries[
                            activeDataset as keyof typeof advancedQueries
                          ][0]?.sql
                        }
                      </pre>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4
                          className={`font-medium mb-2 ${
                            activeDataset === "healthcare"
                              ? "text-red-600"
                              : "text-blue-600"
                          }`}
                        >
                          Key Insight:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {
                            advancedQueries[
                              activeDataset as keyof typeof advancedQueries
                            ][0]?.insight
                          }
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-purple-600">
                          Business Impact:
                        </h4>
                        <p className="text-sm text-gray-600">
                          {
                            advancedQueries[
                              activeDataset as keyof typeof advancedQueries
                            ][0]?.business_impact
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="live-demo" className="space-y-6">
                {activeDataset === "automotive" ? (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-blue-600 mb-2">
                        Live Automotive Data Analysis
                      </h2>
                      <p className="text-gray-600">
                        Interactive SQL queries running in your browser using
                        SQLite
                      </p>
                    </div>
                    <FullCarTable />
                    <SQLiteDemo />
                  </>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">
                        Healthcare Analytics Demo
                      </CardTitle>
                      <CardDescription>
                        Sample analysis of Lake County health data -
                        demonstrating population health insights
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">
                            🎯 High-Risk Area Identification
                          </h4>
                          <p className="text-sm text-gray-700 mb-2">
                            ZIP codes 60002 and 60048 show diabetes rates &gt;85
                            per 1,000 population
                          </p>
                          <p className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
                            SELECT ZIP, Diabetes FROM health_data WHERE Diabetes
                            &gt; 85 ORDER BY Diabetes DESC;
                          </p>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2">
                            📊 Mental Health Correlation
                          </h4>
                          <p className="text-sm text-gray-700 mb-2">
                            Areas with high diabetes also show elevated mental
                            health ER visits
                          </p>
                          <p className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
                            SELECT ZIP, Diabetes, MH_ER, (Diabetes + MH_ER/10)
                            as composite_risk...
                          </p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">
                            💡 Clinical Insight
                          </h4>
                          <p className="text-sm text-gray-700">
                            <strong>Epic EMR Connection:</strong> This analysis
                            could integrate with Epic's population health
                            modules to trigger care management protocols for
                            high-risk patients automatically.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                {activeDataset === "healthcare" ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">
                        Healthcare Population Insights
                      </CardTitle>
                      <CardDescription>
                        Diabetes rates across Lake County ZIP codes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={healthcareInsights}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="zip" />
                          <YAxis />
                          <Tooltip
                            formatter={(value, name) => [
                              name === "diabetesRate"
                                ? `${value} per 1,000`
                                : value.toLocaleString(),
                              name === "diabetesRate"
                                ? "Diabetes Rate"
                                : "Total Discharges",
                            ]}
                          />
                          <Bar
                            dataKey="diabetesRate"
                            fill="#dc2626"
                            name="Diabetes Rate"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">
                      Switch to Healthcare Analytics to see population health
                      visualizations, or view the Live Demo tab for automotive
                      data insights.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
