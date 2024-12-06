select "firstName", "lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("customerId");
  join "films" on "rentals"."inventoryId" = "films"."filmId"
  where "films"."title" = 'Magic Mallrats';
