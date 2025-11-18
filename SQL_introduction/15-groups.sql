-- 15-groups.sql
--
-- Compte le nombre d’enregistrements pour chaque score.
-- Le résultat doit afficher `score` et `number`, trié par `number` décroissant.

SELECT
    score,
    COUNT(*) AS number
FROM   second_table
GROUP BY score
ORDER BY number DESC;
