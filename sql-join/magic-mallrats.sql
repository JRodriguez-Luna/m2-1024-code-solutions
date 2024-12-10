select "firstName", "lastName"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" on "rentals"."inventoryId" = "inventory"."inventoryId"
  join "films" on "inventory"."filmId" = "films"."filmId"
  where "films"."title" = 'Magic Mallrats';
