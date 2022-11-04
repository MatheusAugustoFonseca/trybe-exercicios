SELECT COUNT(*) AS clientes_ativos FROM customer
WHERE active IS TRUE AND store_id = 1;