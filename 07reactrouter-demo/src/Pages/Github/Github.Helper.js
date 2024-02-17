export const getGitHubInfo = async () => {
  const res = await fetch("https://api.github.com/users/Ashutoshsarangi");
  const temp = await res.json();
  console.log(temp);

  return temp;
};
