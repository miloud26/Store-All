// Small helpers shared by the store pages. Purely derived from data.js — no
// product data is duplicated and nothing assumes a category that is not there.

export const UNCATEGORISED = "منتجات أخرى";

export const categoryOf = (product) => product.category || UNCATEGORISED;

export const getCategories = (products) => {
  const counts = new Map();

  products.forEach((product) => {
    const name = categoryOf(product);

    counts.set(name, (counts.get(name) || 0) + 1);
  });

  return [...counts.entries()].map(([name, count]) => ({ name, count }));
};
