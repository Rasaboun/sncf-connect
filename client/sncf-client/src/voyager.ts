



type TypeItemList = { title: string; href: string };

type ArrayItemList = TypeItemList[];



const reserver: ArrayItemList = [
  {
    title: "Billets de train",
    href: "https://www.sncf-connect.com/billet-train",
  },
  {
    title: "Voyages en bus",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Trajets en covoiturage",
    href: "/docs/primitives/progress",
  },
  {
    title: "Location de voiture",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Taxi ou VTC",
    href: "/docs/primitives/tabs",
  }
];

const bonplans: ArrayItemList = [
  {
    title: "Bons plans train",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Voyages en groupe",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Voyages pro",
    href: "/docs/primitives/progress",
  },
  {
    title: "Enfant voyageant seul",
    href: "/docs/primitives/scroll-area",
  }
];

const guidevoyage: ArrayItemList = [
  {
    title: "Où voyager en France, en Europe",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Voyager selon vos envies",
    href: "/docs/primitives/hover-card",
  }
];

const informations: ArrayItemList = [
  {
    title: "Info trafic",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Handicap et accessibilité",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Tous les transporteurs",
    href: "/docs/primitives/progress",
  },
  {
    title: "Tous les services",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Nos réponses à vos questions",
    href: "/docs/primitives/tabs",
  }
];

export const voyage = {
	reserve: reserver,
	information: informations,
	guidevoyage: guidevoyage,
	bonplans: bonplans
}
