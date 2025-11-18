-- 10-top_score.sql
--
-- Ce script affiche tous les enregistrements de la table `second_table`
-- dans l’ordre décroissant du score.
-- Le nom de la base de données est passé en argument à mysql.

SELECT score, name
FROM   second_table
ORDER BY score DESC;
