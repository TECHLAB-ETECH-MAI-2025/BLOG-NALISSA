<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250610235410 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

   public function up(Schema $schema): void
{
    // Étape 1 : Ajouter la colonne nullable temporairement
    $this->addSql("ALTER TABLE user ADD created_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'");

    // Étape 2 : Mettre à jour les lignes existantes avec une date par défaut (ex: NOW())
    $this->addSql("UPDATE user SET created_at = NOW() WHERE created_at IS NULL OR created_at = '0000-00-00 00:00:00'");

    // Étape 3 : Rendre la colonne NOT NULL maintenant qu'elle est remplie
    $this->addSql("ALTER TABLE user MODIFY created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)'");
}


    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE user DROP created_at
        SQL);
    }
}
