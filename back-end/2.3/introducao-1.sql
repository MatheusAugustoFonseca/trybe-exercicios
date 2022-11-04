SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.customer
WHERE active IS false
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;