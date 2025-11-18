-- 16-no_link.sql
--
-- Affiche les lignes où la colonne `name` n’est pas NULL ou vide.
-- Les résultats sont triés par score décroissant.

SELECT score, name
FROM   second_table
WHERE  name IS NOT NULL AND TRIM(name) <> ''
ORDER BY score DESC;
