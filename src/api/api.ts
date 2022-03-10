import { message } from "antd";
export const getRecipies = async (searchTerm: string) => {
  try {
    const raw = await fetch(`/search?q=${searchTerm}`);
    const res = await raw.json();
    return res;
  } catch (e) {
    console.error(
      "Something eldritch from the dungeon dimensions ate your request, pray it doesn't eat you next\n",
      e
    );
    message.warn("Request for recipies failed");
  }
};

export const getRecipie = async (fileName: string) => {
  try {
    console.log("inAPI", fileName);
    const raw = await fetch(`recipie/${fileName}`);
    const res = await raw.json();
    return res.body;
  } catch (e) {
    console.error(
      "Something eldritch from the dungeon dimensions ate your request, pray it doesn't eat you next\n",
      e
    );
    message.warn(`Request for the recipie for ${fileName.split(" ")} failed`);
  }
};
