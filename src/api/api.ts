export const getRecipies = async (searchTerm: string) => {
  try {
    const raw = await fetch(`/search?q=${searchTerm}`);
    const res = await raw.json();
    return res;
  } catch (e) {
    throw new Error("getRecpies failed");
  }
};

export const getRecipie = async (fileName: string) => {
  try {
    const raw = await fetch(`/recipie/${fileName}.txt`);
    const res = await raw.text();
    return res;
  } catch (e) {
    throw new Error("getRecipie failed");
  }
};
