const offices = [
  {
    name: "Head Office – Hyderabad",
    contactPerson: "Nani Honey",
    phoneIndex: 0,
    lines: [
      "Rama Constructions",
      "Plot No. 11, 3rd Floor",
      "Gulmohar Park, Serilingampally",
      "Hyderabad, Telangana",
      "PIN: 500019",
    ],
    mapAddress:
      "Head Office: Hyderabad, Rama Constructions, Plot No. 11, 3rd Floor, Gulmohar Park, Serilingampally, Hyderabad, Telangana, PIN: 500019",
  },
  {
    name: "Local Office – Visakhapatnam",
    lines: [
      "37-7-56",
      "G/F, Sathya Nagar",
      "Opp 5th Town Police Station",
      "Industrial Estate",
      "Visakhapatnam - 07",
    ],
    mapAddress:
      "Local Office, 37-7-56, G/F, Sathya Nagar, Opp 5th Town Police Station, Industrial Estate, Visakhapatnam - 07",
  },
].map((office) => ({
  ...office,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapAddress)}`,
}));

const contactInfo = {
  email: "Biocurex9@gmail.com",
  emailHref: "mailto:Biocurex9@gmail.com",
  phones: [
    {
      label: "Primary Phone",
      display: "+91 70757 67646",
      href: "tel:+917075767646",
    },
    {
      label: "Alternate Phone",
      display: "+91 89772 67646",
      href: "tel:+918977267646",
    },
  ],
  offices,
  whatsappNumber: "917075767646",
};

export default contactInfo;
