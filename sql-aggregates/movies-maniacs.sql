select "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
    sum("p"."amount") as "totalAmount"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  group by "c"."firstName", "c"."lastName", "c"."customerId"
  order by "totalAmount" desc;
