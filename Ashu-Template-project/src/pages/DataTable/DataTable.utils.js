export const tenkRows = () => {
  let refObj = {
    rowNo: 1,
    name: "Cy Ganderton",
    job: "Quality Control Specialist",
    company: "Littel, Schaden and Vandervort",
    location: "Canada",
    lastLogin: "12/16/2020",
    favColor: "Blue",
    id: 123,
  };
  let result = [];
  const noOfRow = 1000; // 1K

  for (let i = 0; i < noOfRow; i++) {
    result.push({
      rowNo: i + 1,
      name: `Cy Ganderton_${i + 1}`,
      job: `Quality Control Specialist_${i + 1}`,
      company: `Littel, Schaden and Vandervort_${i + 1}`,
      location: `Canada_${i + 1}`,
      lastLogin: `12/16/2020`,
      favColor: `Blue_${i + 1}`,
      id: 123 + i + 1,
    });
  }
  return result;
};
