export const navLinks = [
  {
    id: "Quiz",
    title: "Quiz",
  },
];

const questions = [
  {
    question:
      "Le corps humain est composé d'environ 60% d'eau, tout comme l'océan couvre environ 70% de la surface terrestre. Ainsi, polluer l'un revient à affecter un système vital.",
    answer: true,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    question:
      "Les déchets plastiques dans l’océan n’ont aucun impact sur les organismes marins, tout comme les toxines n’affectent pas le corps humain.",
    answer: false,
    image: "https://www.istockphoto.com/photos/ocean-acidification",
  },
  {
    question:
      "L’acidification de l’océan peut être comparée à un déséquilibre du pH dans le sang humain, mettant en danger le fonctionnement normal des systèmes internes.",
    answer: true,c
    image: "https://www.livescience.com/ocean-acidification.html",
  },
  {
    question:
      "Les microplastiques dans l’océan agissent exactement comme des nutriments essentiels dans le corps humain.",
    answer: false,
    image:
      "https://www.statista.com/chart/17957/where-the-oceans-microplastics-come-from/",
  },
  {
    question:
      "Lorsque l’océan est pollué, cela perturbe le cycle de vie marin, tout comme des toxines dans le corps perturbent le métabolisme humain.",
    answer: true,
    image:
      "https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2021/2/images/ocean_pollution.jpg",
  },
  {
    question:
      "Le corail dans l’océan joue un rôle similaire aux poumons dans le corps humain, filtrant et maintenant un équilibre vital.",
    answer: true,
    image:
      "https://maritimecyprus.com/wp-content/uploads/2023/02/Ocean-Pollution.jpg",
  },
  {
    question:
      "La surpêche est à l’océan ce qu’un apport équilibré en nutriments est au corps humain, c’est-à-dire une action qui ne pose aucun problème.",
    answer: false,
    image:
      "https://www.weforum.org/agenda/2023/03/pictures-ocean-marine-impact-climate-crisis/",
  },
  {
    question:
      "Réduire la pollution des eaux n’a aucun lien avec la préservation de la santé humaine à long terme.",
    answer: false,
    image:
      "https://www.ucl.ac.uk/news/2021/feb/analysis-why-ocean-pollution-clear-danger-human-health",
  },
  {
    question:
      "Les substances chimiques déversées dans l’océan peuvent être comparées aux polluants présents dans le sang humain, créant des dysfonctionnements dans les deux cas.",
    answer: true,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "Le réchauffement des eaux océaniques n’a aucune conséquence sur les créatures marines, tout comme une forte fièvre est sans conséquence pour le corps humain.",
    answer: false,
    image: "https://www.climatecentral.org/media/ocean-acidification.jpg",
  },
  {
    question:
      "La biodiversité marine diminue avec la pollution, tout comme la destruction de certains tissus réduit les capacités du corps humain.",
    answer: true,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "Les marées noires dans l’océan n’affectent pas la chaîne alimentaire marine, un peu comme une intoxication n’affecterait pas la digestion humaine.",
    answer: false,
    image:
      "https://www.nhm.ac.uk/content/dam/nhmwww/discover/images/ocean/oil-spill/oil-spill.jpg",
  },
  {
    question:
      "Le dioxyde de carbone absorbé par l’océan peut modifier sa chimie interne, un peu comme une mauvaise alimentation modifie la chimie interne du corps humain.",
    answer: true,
    image:
      "https://www.weforum.org/agenda/2021/02/ocean-pollution-human-health-coasts-microplastics/",
  },
  {
    question:
      "Les déchets rejetés en mer se décomposent instantanément sans affecter la faune, comme si les virus disparaissaient instantanément dans le corps humain.",
    answer: false,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "L’accumulation de microplastiques dans la chaîne alimentaire marine est comparable à l’accumulation de toxines dans les tissus humains.",
    answer: true,
    image:
      "https://www.statista.com/chart/17957/where-the-oceans-microplastics-come-from/",
  },
  {
    question:
      "Un océan sain, riche en nutriments, est aussi essentiel à la planète qu’un régime équilibré l’est pour le corps humain.",
    answer: true,
    image:
      "https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2021/2/images/ocean_pollution.jpg",
  },
  {
    question:
      "La pollution sonore sous-marine n’a aucun effet sur les mammifères marins, comme le bruit excessif n’affecte pas l’oreille interne humaine.",
    answer: false,
    image:
      "https://www.nhm.ac.uk/content/dam/nhmwww/discover/images/ocean/noise-pollution/noise-pollution.jpg",
  },
  {
    question:
      "La diminution de la quantité d’oxygène dans les eaux est comparable à une baisse d’oxygénation du sang dans le corps humain.",
    answer: true,
    image: "https://www.climatecentral.org/media/ocean-acidification.jpg",
  },
  {
    question:
      "Les coraux ne sont pas affectés par la température ou la pollution de l’eau, tout comme le cœur humain n’est pas affecté par la qualité du sang qui y circule.",
    answer: false,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "Le mercure dans les poissons accumulé par la pollution océanique est similaire aux métaux lourds que le corps humain peut accumuler, perturbant ainsi ses fonctions.",
    answer: true,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "La présence de plastiques sur les plages n’influence en rien l’état des écosystèmes marins, tout comme la présence de toxines n’affecte pas la peau humaine.",
    answer: false,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "Une eau de mauvaise qualité dans l’océan peut se comparer à un déséquilibre des fluides corporels dans l’organisme humain, nuisant à la santé globale.",
    answer: true,
    image:
      "https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2021/2/images/ocean_pollution.jpg",
  },
  {
    question:
      "L’ingestion de déchets par les animaux marins n’a aucun impact sur les prédateurs ultérieurs, contrairement à la bioaccumulation de toxines dans le corps humain.",
    answer: false,
    image:
      "https://www.statista.com/chart/17957/where-the-oceans-microplastics-come-from/",
  },
  {
    question:
      "La pollution par les engrais dans les eaux côtières provoque des zones mortes, un peu comme un excès de toxines provoque une défaillance organique dans le corps.",
    answer: true,
    image:
      "https://lotusarise.com/wp-content/uploads/2020/12/Ocean-Acidification.jpg",
  },
  {
    question:
      "Les micro-organismes nocifs ne se multiplient pas dans un océan pollué, tout comme les bactéries nocives ne se multiplient pas dans un corps affaibli.",
    answer: false,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "Le blanchiment des coraux à cause de la chaleur et de la pollution est similaire à la destruction de cellules essentielles dans le corps humain due à des toxines.",
    answer: true,
    image: "https://www.climatecentral.org/media/ocean-acidification.jpg",
  },
  {
    question:
      "Les produits chimiques rejetés en mer disparaissent immédiatement sans laisser de traces, comme si les polluants sanguins disparaissaient instantanément dans le corps.",
    answer: false,
    image:
      "https://www.newsweek.com/heartbreaking-images-plastic-pollution-ocean-1459494",
  },
  {
    question:
      "Un océan équilibré est à la planète ce qu’un microbiote équilibré est au corps humain : un facteur de bonne santé générale.",
    answer: true,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "L’excès de nutriments dans l’eau de mer n’a aucun impact sur l’équilibre naturel des espèces, comme un excès de sucre n’a aucun effet sur la santé humaine.",
    answer: false,
    image:
      "https://lotusarise.com/wp-content/uploads/2020/12/Ocean-Acidification.jpg",
  },
  {
    question:
      "Les nappes de pétrole perturbent les écosystèmes marins comme des toxines dans le sang perturbent les fonctions organiques humaines.",
    answer: true,
    image:
      "https://maritimecyprus.com/wp-content/uploads/2023/02/Ocean-Pollution.jpg",
  },
  {
    question:
      "Des températures océaniques extrêmes n’ont aucune conséquence sur la vie marine, comme une forte fièvre n’a aucune conséquence sur le corps humain.",
    answer: false,
    image:
      "https://www.weforum.org/agenda/2023/03/pictures-ocean-marine-impact-climate-crisis/",
  },
  {
    question:
      "La pollution plastique crée des lésions internes chez les animaux marins, un peu comme des particules nocives peuvent endommager les organes internes chez l’homme.",
    answer: true,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "Des déchets radioactifs dans l’océan sont totalement inoffensifs, comme des radiations seraient inoffensives dans le corps humain.",
    answer: false,
    image: "https://www.climatecentral.org/media/ocean-acidification.jpg",
  },
  {
    question:
      "Un déséquilibre des courants marins lié à la pollution est comparable à une mauvaise circulation sanguine dans le corps humain.",
    answer: true,
    image:
      "https://passportocean.com/wp-content/uploads/2017/11/ocean-pollution.jpg",
  },
  {
    question:
      "L’augmentation de la salinité due à la pollution n’a aucun impact sur la vie marine, tout comme un déséquilibre en minéraux dans le sang n’affecte pas le métabolisme humain.",
    answer: false,
    image:
      "https://www.newsweek.com/heartbreaking-images-plastic-pollution-ocean-1459494",
  },
  {
    question:
      "Les barrières de corail endommagées par la pollution sont comparables à des organes vitaux endommagés dans le corps humain, compromettant la santé globale.",
    answer: true,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "La pollution des eaux n’affecte que la surface de l’océan, comme une maladie n’affecterait que la surface de la peau humaine.",
    answer: false,
    image:
      "https://lotusarise.com/wp-content/uploads/2020/12/Ocean-Acidification.jpg",
  },
  {
    question:
      "L’accumulation de métaux lourds dans les poissons est similaire à l’accumulation de substances toxiques dans les tissus humains.",
    answer: true,
    image:
      "https://maritimecyprus.com/wp-content/uploads/2023/02/Ocean-Pollution.jpg",
  },
  {
    question:
      "La diminution du plancton liée à la pollution n’affecte pas la chaîne alimentaire marine, comme une carence en nutriments n’affecte pas la santé humaine.",
    answer: false,
    image:
      "https://www.nationalgeographic.com/environment/article/ocean-pollution",
  },
  {
    question:
      "Un océan sain favorise la régulation du climat, tout comme un corps en bonne santé régule sa température.",
    answer: true,
    image:
      "https://www.newsweek.com/heartbreaking-images-plastic-pollution-ocean-1459494",
  },
];

export { questions };
