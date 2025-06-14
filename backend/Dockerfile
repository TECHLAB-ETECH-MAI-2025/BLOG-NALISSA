# Backend Dockerfile

FROM php:8.2-fpm

# Installer les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libpq-dev libzip-dev zip libonig-dev \
    && docker-php-ext-install intl pdo pdo_mysql zip mbstring

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier le code
WORKDIR /var/www/backend
COPY . .

# Installer les dépendances PHP
RUN composer install --no-interaction --optimize-autoloader

# Permissions (ajuster selon ton setup)
RUN chown -R www-data:www-data /var/www/backend

EXPOSE 9000
CMD ["php-fpm"]
