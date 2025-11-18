-- 100-move_to_utf8.sql
--
-- Convertir la base, la table et le champ `name` en UTF‑8 (utf8mb4).
-- Le serveur MySQL accepte les commandes DDL à partir de 5.7.

-- 1️⃣ Sélectionner la base hbtn_0c_0
USE hbtn_0c_0;

-- 2️⃣ Changer l’encodage par défaut de la base (optionnel mais recommandé)
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 3️⃣ Convertir toutes les colonnes existantes de first_table vers UTF‑8
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 4️⃣ (optionnel) Vérifier/ajuster explicitement le champ `name`
ALTER TABLE first_table
MODIFY COLUMN name VARCHAR(256)
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL;
