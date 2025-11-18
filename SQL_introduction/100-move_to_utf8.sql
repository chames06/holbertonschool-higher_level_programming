-- 100-move_to_utf8.sql (corrigé)
--
-- Convertir hbtn_0c_0, first_table et le champ name en UTF‑8 (utf8mb4_unicode_ci).

USE hbtn_0c_0;

-- 1️⃣ Changer l’encodage de la base (facultatif mais recommandé)
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2️⃣ Convertir toutes les colonnes existantes de first_table vers UTF‑8
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 3️⃣ Ajuster explicitement le champ `name` pour ne garder que le collate
ALTER TABLE first_table
MODIFY COLUMN name VARCHAR(256)
    COLLATE utf8mb4_unicode_ci NULL;
