FROM php:7.4-cli-alpine

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/

RUN install-php-extensions pdo_mysql

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY composer*.json ./
COPY package*.json ./

RUN apk add --no-cache bash

RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/bin --filename=composer \
    && apk add --update nodejs nodejs-npm

COPY . /var/www/

WORKDIR /var/www/
