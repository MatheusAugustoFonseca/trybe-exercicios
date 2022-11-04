SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01'; 

USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;