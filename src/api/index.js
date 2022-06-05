export const fetchHomeData = async () => {
  try {
    const res = await fetch('https://api.abstruct.co/api/packs');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchWallPackfromId = async (id, pageNo) => {
  try {
    const res = await fetch(
      `https://api.abstruct.co/api/packs/${id}/wallpapers?page=${pageNo}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
