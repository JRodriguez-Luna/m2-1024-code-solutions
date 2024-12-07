select "customers"."firstName", "customers"."lastName",
  count("amount") as "totalAmount"
  from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("customerId")
  group by "customerId";
