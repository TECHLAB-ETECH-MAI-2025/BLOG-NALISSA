<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250614084534 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE comment_like (id INT AUTO_INCREMENT NOT NULL, comment_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_8A55E25FF8697D13 (comment_id), INDEX IDX_8A55E25FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FF8697D13 FOREIGN KEY (comment_id) REFERENCES comment (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE comment_like ADD CONSTRAINT FK_8A55E25FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_like ADD user_id INT NOT NULL, DROP ip_address, DROP created_at, CHANGE article_id article_id INT NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_like ADD CONSTRAINT FK_1C21C7B2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1C21C7B2A76ED395 ON article_like (user_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FF8697D13
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE comment_like DROP FOREIGN KEY FK_8A55E25FA76ED395
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE comment_like
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_like DROP FOREIGN KEY FK_1C21C7B2A76ED395
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1C21C7B2A76ED395 ON article_like
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE article_like ADD ip_address VARCHAR(45) NOT NULL, ADD created_at DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', DROP user_id, CHANGE article_id article_id INT DEFAULT NULL
        SQL);
    }
}
