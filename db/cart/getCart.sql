SELECT * FROM cart
INNER JOIN products
ON cart.product_id = products.product_id
WHERE user_id = $1