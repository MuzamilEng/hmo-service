import faker from "faker";
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const datasetData = labels.map(() =>
  faker.datatype.number({ min: 0, max: 1000 })
);
export const data = {
  labels,
  datasets: [
    {
      label: "Paid",
      data: datasetData,
      backgroundColor: "#D05B5B", // Color for Paid
    },
    {
      label: "UnPaid",
      data: datasetData,
      backgroundColor: "#92CFDE", // Color for UnPaid
    },
  ],
};

