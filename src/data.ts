const dummyData = [
  {
    date: "2020-02-21",
    error: true,
  },
  {
    date: "2020-01-24",
    error: false,
  },
  {
    date: "2020-01-24",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-01-22",
    error: false,
  },
  {
    date: "2020-01-26",
    error: true,
  },
  {
    date: "2020-02-20",
    error: false,
  },
  {
    date: "2020-02-26",
    error: false,
  },
  {
    date: "2020-03-14",
    error: false,
  },
  {
    date: "2020-02-29",
    error: false,
  },
  {
    date: "2020-02-16",
    error: false,
  },
  {
    date: "2020-03-21",
    error: false,
  },
  {
    date: "2020-01-30",
    error: false,
  },
  {
    date: "2020-03-27",
    error: false,
  },
  {
    date: "2020-03-26",
    error: false,
  },
  {
    date: "2020-03-10",
    error: false,
  },
  {
    date: "2020-03-9",
    error: false,
  },
  {
    date: "2020-02-6",
    error: false,
  },
  {
    date: "2020-02-17",
    error: false,
  },
  {
    date: "2020-02-6",
    error: false,
  },
  {
    date: "2020-02-8",
    error: false,
  },
  {
    date: "2020-01-19",
    error: false,
  },
  {
    date: "2020-03-19",
    error: false,
  },
  {
    date: "2020-03-20",
    error: false,
  },
  {
    date: "2020-03-11",
    error: false,
  },
  {
    date: "2020-01-28",
    error: false,
  },
  {
    date: "2020-02-10",
    error: false,
  },
  {
    date: "2020-01-23",
    error: false,
  },
  {
    date: "2020-03-12",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-03-11",
    error: false,
  },
  {
    date: "2020-03-25",
    error: false,
  },
  {
    date: "2020-03-11",
    error: false,
  },
  {
    date: "2020-01-12",
    error: false,
  },
  {
    date: "2020-03-3",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-02-19",
    error: false,
  },
  {
    date: "2020-01-10",
    error: false,
  },
  {
    date: "2020-01-9",
    error: false,
  },
  {
    date: "2020-03-26",
    error: false,
  },
  {
    date: "2020-02-17",
    error: false,
  },
  {
    date: "2020-01-9",
    error: false,
  },
  {
    date: "2020-01-3",
    error: false,
  },
  {
    date: "2020-03-18",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-02-6",
    error: false,
  },
  {
    date: "2020-01-3",
    error: false,
  },
  {
    date: "2020-02-24",
    error: false,
  },
  {
    date: "2020-01-27",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-01-21",
    error: false,
  },
  {
    date: "2020-03-28",
    error: false,
  },
  {
    date: "2020-02-19",
    error: false,
  },
  {
    date: "2020-03-13",
    error: false,
  },
  {
    date: "2020-03-15",
    error: false,
  },
  {
    date: "2020-03-19",
    error: false,
  },
  {
    date: "2020-01-23",
    error: false,
  },
  {
    date: "2020-02-5",
    error: false,
  },
  {
    date: "2020-02-24",
    error: false,
  },
  {
    date: "2020-01-29",
    error: false,
  },
  {
    date: "2020-03-28",
    error: false,
  },
  {
    date: "2020-03-19",
    error: false,
  },
  {
    date: "2020-02-24",
    error: false,
  },
  {
    date: "2020-03-17",
    error: false,
  },
  {
    date: "2020-02-2",
    error: false,
  },
  {
    date: "2020-02-10",
    error: false,
  },
  {
    date: "2020-01-15",
    error: false,
  },
  {
    date: "2020-02-6",
    error: false,
  },
  {
    date: "2020-01-2",
    error: false,
  },
  {
    date: "2020-02-21",
    error: false,
  },
  {
    date: "2020-01-20",
    error: false,
  },
  {
    date: "2020-03-28",
    error: false,
  },
  {
    date: "2020-03-1",
    error: false,
  },
  {
    date: "2020-03-11",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-01-27",
    error: false,
  },
  {
    date: "2020-01-24",
    error: false,
  },
  {
    date: "2020-01-28",
    error: false,
  },
  {
    date: "2020-02-7",
    error: false,
  },
  {
    date: "2020-02-18",
    error: false,
  },
  {
    date: "2020-02-27",
    error: false,
  },
  {
    date: "2020-02-15",
    error: false,
  },
  {
    date: "2020-03-4",
    error: false,
  },
  {
    date: "2020-02-15",
    error: false,
  },
  {
    date: "2020-03-27",
    error: false,
  },
  {
    date: "2020-01-22",
    error: false,
  },
  {
    date: "2020-02-11",
    error: false,
  },
  {
    date: "2020-01-21",
    error: false,
  },
  {
    date: "2020-02-23",
    error: false,
  },
  {
    date: "2020-03-17",
    error: false,
  },
  {
    date: "2020-03-25",
    error: false,
  },
  {
    date: "2020-03-6",
    error: false,
  },
  {
    date: "2020-02-22",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-02-21",
    error: false,
  },
  {
    date: "2020-01-8",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-03-13",
    error: false,
  },
  {
    date: "2020-01-17",
    error: false,
  },
  {
    date: "2020-03-4",
    error: false,
  },
  {
    date: "2020-02-18",
    error: false,
  },
  {
    date: "2020-01-2",
    error: false,
  },
  {
    date: "2020-01-14",
    error: false,
  },
  {
    date: "2020-01-8",
    error: false,
  },
  {
    date: "2020-01-6",
    error: false,
  },
  {
    date: "2020-01-21",
    error: false,
  },
  {
    date: "2020-02-27",
    error: false,
  },
  {
    date: "2020-02-12",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-01-7",
    error: false,
  },
  {
    date: "2020-01-14",
    error: false,
  },
  {
    date: "2020-03-21",
    error: false,
  },
  {
    date: "2020-03-6",
    error: false,
  },
  {
    date: "2020-03-7",
    error: false,
  },
  {
    date: "2020-02-24",
    error: false,
  },
  {
    date: "2020-01-28",
    error: false,
  },
  {
    date: "2020-02-10",
    error: false,
  },
  {
    date: "2020-03-16",
    error: false,
  },
  {
    date: "2020-03-14",
    error: false,
  },
  {
    date: "2020-03-9",
    error: false,
  },
  {
    date: "2020-02-18",
    error: false,
  },
  {
    date: "2020-01-22",
    error: false,
  },
  {
    date: "2020-02-7",
    error: false,
  },
  {
    date: "2020-03-10",
    error: false,
  },
  {
    date: "2020-03-3",
    error: false,
  },
  {
    date: "2020-01-24",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-01-26",
    error: false,
  },
  {
    date: "2020-01-3",
    error: false,
  },
  {
    date: "2020-02-9",
    error: false,
  },
  {
    date: "2020-03-18",
    error: false,
  },
  {
    date: "2020-03-1",
    error: false,
  },
  {
    date: "2020-03-20",
    error: false,
  },
  {
    date: "2020-03-18",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-03-18",
    error: false,
  },
  {
    date: "2020-01-20",
    error: false,
  },
  {
    date: "2020-02-19",
    error: false,
  },
  {
    date: "2020-01-13",
    error: false,
  },
  {
    date: "2020-03-3",
    error: false,
  },
  {
    date: "2020-03-3",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-01-31",
    error: false,
  },
  {
    date: "2020-02-4",
    error: false,
  },
  {
    date: "2020-03-15",
    error: false,
  },
  {
    date: "2020-02-3",
    error: false,
  },
  {
    date: "2020-03-24",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-03-24",
    error: false,
  },
  {
    date: "2020-03-4",
    error: false,
  },
  {
    date: "2020-02-27",
    error: false,
  },
  {
    date: "2020-03-25",
    error: false,
  },
  {
    date: "2020-01-5",
    error: false,
  },
  {
    date: "2020-03-17",
    error: false,
  },
  {
    date: "2020-03-12",
    error: false,
  },
  {
    date: "2020-02-8",
    error: false,
  },
  {
    date: "2020-01-15",
    error: false,
  },
  {
    date: "2020-02-22",
    error: false,
  },
  {
    date: "2020-03-9",
    error: false,
  },
  {
    date: "2020-03-13",
    error: false,
  },
  {
    date: "2020-02-5",
    error: false,
  },
  {
    date: "2020-02-2",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-01-3",
    error: false,
  },
  {
    date: "2020-01-7",
    error: false,
  },
  {
    date: "2020-03-3",
    error: false,
  },
  {
    date: "2020-03-6",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-03-11",
    error: false,
  },
  {
    date: "2020-02-19",
    error: false,
  },
  {
    date: "2020-02-18",
    error: false,
  },
  {
    date: "2020-01-7",
    error: false,
  },
  {
    date: "2020-03-13",
    error: false,
  },
  {
    date: "2020-02-4",
    error: false,
  },
  {
    date: "2020-03-2",
    error: false,
  },
  {
    date: "2020-01-4",
    error: false,
  },
  {
    date: "2020-03-10",
    error: false,
  },
  {
    date: "2020-02-12",
    error: false,
  },
  {
    date: "2020-01-11",
    error: false,
  },
  {
    date: "2020-02-24",
    error: false,
  },
  {
    date: "2020-01-12",
    error: false,
  },
  {
    date: "2020-01-23",
    error: false,
  },
  {
    date: "2020-03-16",
    error: false,
  },
  {
    date: "2020-02-3",
    error: false,
  },
  {
    date: "2020-03-25",
    error: false,
  },
  {
    date: "2020-01-22",
    error: false,
  },
  {
    date: "2020-01-9",
    error: false,
  },
  {
    date: "2020-01-6",
    error: false,
  },
  {
    date: "2020-02-13",
    error: false,
  },
  {
    date: "2020-02-17",
    error: false,
  },
  {
    date: "2020-01-6",
    error: false,
  },
  {
    date: "2020-03-7",
    error: false,
  },
  {
    date: "2020-02-19",
    error: false,
  },
  {
    date: "2020-02-17",
    error: false,
  },
  {
    date: "2020-01-9",
    error: false,
  },
  {
    date: "2020-01-31",
    error: false,
  },
  {
    date: "2020-02-6",
    error: false,
  },
  {
    date: "2020-01-16",
    error: false,
  },
  {
    date: "2020-03-7",
    error: false,
  },
];
export default dummyData;
