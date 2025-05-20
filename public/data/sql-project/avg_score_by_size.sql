
-- Average value score by size
SELECT "Size", AVG("Value Score") AS avg_value_score
FROM carvalues
GROUP BY "Size"
ORDER BY avg_value_score DESC;