SELECT amount FROM cart
WHERE product_id = $1 AND user_id = $2;