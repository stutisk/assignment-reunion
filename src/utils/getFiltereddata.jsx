export const getFiltereddata = (state, property) => {
  const { price, house } = state;

  if (price === "all") return property;
  let filteredData = [...property.filter((item) => item.price >= price)];
  console.log("after-rating", filteredData);

 
  filteredData = house.length
  ? [
      ...filteredData.filter((property) =>
        house.includes(property.house)
      ),
    ]
  : [...filteredData];
 
  return [...filteredData];

};
