-- 11-best_score.sql
--
-- Affiche les enregistrements de `second_table` dont le score est ≥ 10,
-- triés du plus grand au plus petit.

SELECT score, name
FROM   second_table
WHERE  score >= 10
ORDER BY score DESC;
