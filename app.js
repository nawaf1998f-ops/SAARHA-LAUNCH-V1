const apps = [
  {
    id: 1,
    name: "مكيف سبليت 18000 وحدة",
    category: "مكيفات",
    price: 1899,
  },
  {
    id: 2,
    name: "مكيف سبليت 24000 وحدة",
    category: "مكيفات",
    price: 2399,
  },
  {
    id: 3,
    name: "مكيف شباك 18000 وحدة",
    category: "مكيفات",
    price: 1299,
  },
  {
    id: 4,
    name: "مكيف شباك 24000 وحدة",
    category: "مكيفات",
    price: 1599,
  },
];

function searchProducts(searchText) {
  const text = searchText.trim().toLowerCase();

  if (!text) {
    return apps;
  }

  return apps.filter((product) => {
    return (
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });
}

export { apps, searchProducts };
