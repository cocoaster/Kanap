import apartmentsData from "../data/logements.json";

export function getApartments() {
  return new Promise((resolve) => {
    resolve(apartmentsData);
  });
}