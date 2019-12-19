UPDATE cart
SET amount = $1
WHERE product_id = $2 AND user_id = $3