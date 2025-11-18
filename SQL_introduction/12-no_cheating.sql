-- 12-no_cheating.sql
--
-- Met à jour le score de l’utilisateur dont le nom est 'Bob'.
-- On ne peut pas utiliser la valeur `id`, uniquement le champ `name`.

UPDATE second_table
SET    score = 10
WHERE  name = 'Bob';
