select "countries"."name",
  count("cityId") as "totalCitiesPerCountry"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
