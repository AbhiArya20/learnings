import { nanoid } from "nanoid";

type Data = {
  id: string;
  name: string;
  developer: string;
};

export const operatingSystems = {
  columns: [
    {
      key: nanoid(),
      label: "Operating System",
      accessor: (row: Data) => row.name,
    },
    {
      key: nanoid(),
      label: "Developer",
      accessor: (row: Data) => row.developer,
    },
  ],
  data: [
    {
      id: nanoid(),
      name: "Windows",
      developer: "Microsoft",
    },
    {
      id: nanoid(),
      name: "Linux",
      developer: "Linux Foundation",
    },
    {
      id: nanoid(),
      name: "macOS",
      developer: "Apple Inc.",
    },
    {
      id: nanoid(),
      name: "Android",
      developer: "Google",
    },
    {
      id: nanoid(),
      name: "iOS",
      developer: "Apple Inc.",
    },
    {
      id: nanoid(),
      name: "FreeBSD",
      developer: "FreeBSD Foundation",
    },
    {
      id: nanoid(),
      name: "OpenBSD",
      developer: "OpenBSD Foundation",
    },
    {
      id: nanoid(),
      name: "NetBSD",
      developer: "NetBSD Foundation",
    },
  ],
};
