select "line1", "cities"."name", "district"
  from "addresses"
  join "cities" using ("cityId");
select "countries"."name"
  from "countries"
  join "countries" using ("countryId");
