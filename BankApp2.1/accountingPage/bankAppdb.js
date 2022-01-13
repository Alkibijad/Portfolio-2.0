let db = [
  {
    id: 1,
    first: "Danilo",
    last: "Vesovic",
    deposit: "11000",
    card: "Visa",
  },
  {
    id: 2,
    first: "Danilo",
    last: "Markovic",
    deposit: "11000",
    card: "Visa",
  },
  {
    id: 3,
    first: "Danilo",
    last: "Jovanovic",
    deposit: "11000",
    card: "Visa",
  },
  {
    id: 4,
    first: "Sasha",
    first: "Danilo",
    last: "Vesovic",
    deposit: "11000",
    card: "Visa",
  },
  {
    id: 5,
    first: "Sasha",
    last: "Vesovic",
    deposit: "11000",
    card: "Visa",
  },
  {
    id: 6,
    first: "Marko",
    last: "Vesovic",
    deposit: "11000",
    card: "Visa",
  },
];

localStorage.setItem("dataBase", JSON.stringify(db));
