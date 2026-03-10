export type ActionVariant = "primary" | "secondary";

export type QuickAction = {
  label: string;
  href: string;
  variant: ActionVariant;
  icon: "message" | "store" | "instagram" | "star" | "phone" | "map";
};

export type Review = {
  author: string;
  text: string;
};

export const brand = {
  name: "Ótica Braga",
  tagline: "Elegância, estilo e visão em cada detalhe",
  subtitle:
    "Atendimento premium, peças sofisticadas e experiência completa em Bauru.",
  premiumBadge: "Atendimento premium em Bauru",
  instagramHandle: "@oticabragabauru",
  instagramUrl: "https://www.instagram.com/oticabragabauru/",
  whatsappDisplay: "(14) 99654-3793",
  whatsappUrl: "https://wa.me/5514996543793",
  phoneUrl: "tel:+5514996543793",
  googleRating: "5,0",
  googleReviews: 9,
  badges: [
    "5,0 no Google",
    "12x sem juros",
    "2 lojas em Bauru",
    "+ de 8 países atendidos",
  ],
  highlights: [
    "+ de 8 países atendidos",
    "Em até 12x sem juros",
    "2 lojas em Bauru - SP",
    "Compras na loja",
    "Retirada na loja",
    "Entrega",
  ],
  quickActions: [
    {
      label: "Falar no WhatsApp",
      href: "https://wa.me/5514996543793",
      variant: "primary",
      icon: "message",
    },
    { label: "Ver lojas", href: "#lojas", variant: "secondary", icon: "store" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/oticabragabauru/",
      variant: "secondary",
      icon: "instagram",
    },
    {
      label: "Avaliações",
      href: "#avaliacoes",
      variant: "secondary",
      icon: "star",
    },
    {
      label: "Ligar agora",
      href: "tel:+5514996543793",
      variant: "secondary",
      icon: "phone",
    },
    { label: "Como chegar", href: "#lojas", variant: "secondary", icon: "map" },
  ] as QuickAction[],

  reviews: [
    {
      author: "Graziela M.",
      text: "Ótimo atendimento, produtos de qualidade.",
    },
    {
      author: "Fabrício P.",
      text: "Atendimento excelente e produtos de alta qualidade.",
    },
    {
      author: "Mariana S.",
      text: "Variedade incrível de peças com valor acessível.",
    },
  ] as Review[],

  stores: [
    {
      name: "Ótica Braga Loja",
      address: "R. Bandeirantes, 9-02 - Centro, Bauru - SP, 17015-012",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=R.+Bandeirantes,+9-02+-+Centro,+Bauru+-+SP,+17015-012",
      whatsappUrl: "https://wa.me/5514996543793",
    },
    {
      name: "Ótica Braga Loja",
      address:
        "R. Rio Branco, 22 - 64 lj - Jardim Estoril, Bauru - SP, 17014-037",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=R.+Rio+Branco,+22+-+64+lj+-+Jardim+Estoril,+Bauru+-+SP,+17014-037",
      whatsappUrl: "https://wa.me/5514996543793",
    },
  ],

  handle: "@oticabragabauru",
  instagram: "https://www.instagram.com/oticabragabauru/",
  whatsappLink: "https://wa.me/5514996543793",
  headline: "Mais que óculos. Elegância, presença e visão em cada detalhe.",
  subheadline:
    "Descubra modelos que unem estilo, personalidade e atendimento premium em uma experiência completa na Ótica Braga.",
  rating: {
    score: "5,0",
    count: "9 avaliações",
  },
  institutionalBadges: [
    "Empresa de empreendedoras",
    "Atendimento acolhedor",
    "Marca com presença digital forte",
    "Comunidade acolhida com respeito",
  ],
  about: {
    title: "Uma marca que une estilo, confiança e atendimento de excelência",
    text: "A Ótica Braga construiu sua presença com atendimento próximo, curadoria de peças sofisticadas e uma experiência pensada para quem valoriza qualidade, elegância e personalidade. Com forte presença digital e atendimento reconhecido, a marca se destaca por oferecer muito mais do que óculos: entrega autoestima, estilo e confiança em cada escolha.",
    extra:
      "Com atendimento acolhedor, estrutura comercial sólida e duas unidades em Bauru, a Ótica Braga atende clientes que buscam beleza, conforto e credibilidade em cada detalhe.",
  },
  locations: [
    {
      name: "Ótica Braga Loja",
      address: "R. Bandeirantes, 9-02 - Centro, Bauru - SP, 17015-012",
    },
    {
      name: "Ótica Braga Loja",
      address:
        "R. Rio Branco, 22 - 64 lj - Jardim Estoril, Bauru - SP, 17014-037",
    },
  ],
};

export const sectionCopy = {
  reviewsTitle: "Quem compra, recomenda",
  reviewsSubtitle:
    "Atendimento elogiado, qualidade percebida e experiência que fideliza.",
  locationsTitle: "Nossas lojas em Bauru",
  locationsSubtitle:
    "Escolha a unidade mais conveniente e fale com nossa equipe.",
  contactTitle: "Fale com a Ótica Braga",
  contactText:
    "Quer atendimento rápido, tirar dúvidas ou conhecer os modelos disponíveis? Entre em contato agora e fale com a equipe da Ótica Braga.",
  finalCtaTitle: "Encontre o modelo ideal para valorizar seu estilo",
  finalCtaText:
    "Fale agora com a equipe da Ótica Braga e viva uma experiência completa em atendimento, elegância e qualidade.",
};
