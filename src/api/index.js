export const fetchHomeData = async () => {
  const res = await fetch('https://api.abstruct.co/api/packs');
  const data = await res.json();
  return data;
};
