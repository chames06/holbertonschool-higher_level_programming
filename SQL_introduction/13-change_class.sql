-- 13-change_class.sql
--
-- Supprime les lignes dont le score est inférieur ou égal à 5.
-- La base de données est fournie en argument à mysql.

DELETE FROM second_table
WHERE score <= 5;
