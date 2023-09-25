import faker from "faker";
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const datasetData = labels.map(() =>
  faker.datatype.number({ min: 0, max: 1000 })
);
export const data2 = {
  labels,
  datasets: [
    {
      label: "Paid",
      data: datasetData,
      backgroundColor: "#1C9ABB", // Color for Paid
    },
    
  ],
};

