<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250530211903 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
    ALTER TABLE user 
    ADD created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD last_name VARCHAR(100) DEFAULT NULL,
    ADD is_verified TINYINT(1) NOT NULL,
    ADD first_name VARCHAR(100) DEFAULT NULL
SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE user DROP created_at, DROP last_name, DROP is_verified, DROP first_name
        SQL);
    }
}
