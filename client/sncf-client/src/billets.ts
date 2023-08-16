



type TypeItemList = { title: string; href: string };

type ArrayItemList = TypeItemList[];



const voyage: ArrayItemList = [
  {
    title: "Tous vos voyages",
    href: "https://www.sncf-connect.com/billet-train",
  },
  {
    title: "Importer un voyage",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Compensation en cas de retard",
    href: "/docs/primitives/progress",
  },
  {
    title: "Faire une réclamation",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Modifier un voyage",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Assurance Allianz",
    href: "/docs/primitives/tabs",
  }
];

const carte: ArrayItemList = [
  {
    title: "Importer une carte ou abonnement",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Acheter une carte ou abonnement",
    href: "/docs/primitives/hover-card",
  }
];

const completevoyage: ArrayItemList = [
  {
    title: "Louer une voiture",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Transports urbains",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Réserver un taxi / VTC",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Restauration à bord TGV INOUI",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Restauration à bord INTERCITES",
    href: "/docs/primitives/hover-card",
  }
];



export const billet = {
	voyage: voyage,
	carte: carte,
	completevoyage: completevoyage,
}
