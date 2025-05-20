-- Reliable and affordable cars under $30,000
-- Only includes cars with predicted reliability ≥ 4
-- Prices are cleaned to remove commas before numeric comparison
SELECT "Car",
       CAST(REPLACE("Price ($)", ',', '') AS INTEGER) AS price,
       "Predicted Reliability",
       "Road-Test Score"
FROM carvalues
WHERE price < 30000
  AND "Predicted Reliability" >= 4
ORDER BY "Predicted Reliability" DESC, "Road-Test Score" DESC;