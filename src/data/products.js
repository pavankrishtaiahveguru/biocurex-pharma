const products = [
  {
    id: 1,
    name: "Azimed-500",
    category: "Antibiotic",
    description: "Azithromycin Tablets I.P. 500 mg",
    image: "/images/catlogs/azimid-500.jpeg",
  },
  {
    id: 2,
    name: "Wellcit-P",
    category: "Neurological Care",
    description:
      "Nutritional support for memory, learning, concentration and cognitive function",
    image: "/images/catlogs/Wellcit-P.jpeg",
  },
  {
    id: 3,
    name: "Rosuclear-10",
    category: "Cardiovascular Care",
    description: "Rosuvastatin Tablets I.P. 10 mg for cholesterol management",
    image: "/images/catlogs/Rosuclear-10.jpeg",
  },
  {
    id: 4,
    name: "Nerve Q Plus",
    category: "Neuropathic Care",
    description:
      "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Pyridoxine HCl, Inositol and Folic Acid Capsules",
    image: "/images/catlogs/NERVE Q PLUS.jpeg",
  },
  {
    id: 5,
    name: "Pantojoy-40",
    category: "Gastrointestinal Care",
    description: "Pantoprazole 40 mg Tablets I.P. for acid control",
    image: "/images/catlogs/PANTOJOY-40.jpeg",
  },
  {
    id: 6,
    name: "Lifeclear",
    category: "Respiratory Care",
    description:
      "Acebrophylline & N-Acetylcysteine Tablets for clearer airways",
    image: "/images/catlogs/LIFECLEAR.jpeg",
  },
  {
    id: 7,
    name: "C-Gluta",
    category: "Clinical Nutrition",
    description: "L-Alanyl-L-Glutamine Solution for Infusion 20% w/v",
    image: "/images/catlogs/C-GLUTA.jpeg",
  },
  {
    id: 8,
    name: "Gutwell Plus",
    category: "Digestive Health",
    description:
      "Pre & Probiotic with Zinc Capsules for digestive and gut health",
    image: "/images/catlogs/GUTWELL PLUS.jpeg",
  },
  {
    id: 9,
    name: "Curemac-SP",
    category: "Pain & Inflammation",
    description: "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    image: "/images/catlogs/Curemac-SP.jpeg",
  },
  {
    id: 10,
    name: "Rosuclear-20",
    category: "Cardiovascular Care",
    description: "Rosuvastatin Tablets I.P. 20 mg for cholesterol management",
    image: "/images/catlogs/Rosuclear-20.jpeg",
  },
  {
    id: 11,
    name: "Lifecall-D3 60K",
    category: "Bone & Joint Health",
    description: "Cholecalciferol 60,000 I.U. Softgel Capsules",
    image: "/images/catlogs/Lifecall-D3.jpeg",
  },
  {
    id: 12,
    name: "Curemac-Q10",
    category: "Nutraceutical",
    description:
      "Coenzyme Q10, L-Arginine, L-Carnitine, Lycopene, Selenium & Omega 3 Fatty Acid Softgel Capsules",
    image: "/images/catlogs/CUREMAC-Q10.jpeg",
  },
  {
    id: 13,
    name: "Curecort-6",
    category: "Anti-Inflammatory",
    description: "Deflazacort Tablets 6 mg for inflammation control",
    image: "/images/catlogs/Curecort-6.jpeg",
  },
  {
    id: 14,
    name: "Lifecal D3 Plus",
    category: "Nutraceutical",
    description:
      "Calcium, Vitamin D3 and essential nutrients supplement for bone health and wellness",
    image: "/images/catlogs/Lifecal D3 Plus.jpeg",
  },
  {
    id: 15,
    name: "Rosuclear-CV 10",
    category: "Cardiovascular Care",
    description: "Rosuvastatin Calcium and Clopidogrel Bisulphate Tablets",
    image: "/images/catlogs/ROSUCLEAR-CV 10.jpeg",
  },
  {
    id: 16,
    name: "Nerve-Q NT",
    category: "Neuropathic Care",
    description: "Pregabalin & Nortriptyline Tablets for neuropathic pain",
    image: "/images/catlogs/Nerve-Q NT.jpeg",
  },
  {
    id: 17,
    name: "Q-RICH",
    category: "Neurological Care",
    description:
      "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Pyridoxine HCl, Inositol and Folic Acid Capsules",
    image: "/images/catlogs/Q-RICH.jpeg",
  },
  {
    id: 18,
    name: "Pantojoy-DSR",
    category: "Gastrointestinal Care",
    description:
      "Pantoprazole Sodium and Domperidone Sustained Release Capsules",
    image: "/images/catlogs/PANTOJOY-DSR.jpeg",
  },
  {
    id: 19,
    name: "Curemac-Q10 Forte",
    category: "Nutraceutical",
    description:
      "Coenzyme Q10, L-Arginine, L-Carnitine, Lycopene, Selenium & Omega 3 Fatty Acid Softgel Capsules",
    image: "/images/catlogs/CUREMAC -Q10 FORTE.jpeg",
  },
  {
    id: 20,
    name: "NerveQ",
    category: "Neurological Care",
    description:
      "Methylcobalamin, Pyridoxine HCl and Niacinamide Injection 2 ml",
    image: "/images/catlogs/NERVEQ.jpeg",
  },
  {
    id: 21,
    name: "Curepro",
    category: "Nutraceutical",
    description:
      "Complete nutritional supplement with protein, calcium, vitamins and minerals",
    image: "/images/catlogs/CUREPRO.jpeg",
  },
  {
    id: 22,
    name: "Curemac-P",
    category: "Pain & Inflammation",
    description: "Aceclofenac & Paracetamol Tablets I.P.",
    image: "/images/catlogs/Curemac-P.jpeg",
  },
  {
    id: 23,
    name: "Nerve-Q-75",
    category: "Neuropathic Care",
    description: "Pregabalin Capsules I.P. for neuropathic pain management",
    image: "/images/catlogs/NERVE-Q-75.jpeg",
  },
  {
    id: 24,
    name: "M Cure-LC",
    category: "Allergy & Respiratory Care",
    description: "Levocetirizine HCl & Montelukast Sodium Tablets I.P.",
    image: "/images/catlogs/M CURE-LC.jpeg",
  },
  {
    id: 25,
    name: "Lifecall",
    category: "Bone & Joint Health",
    description:
      "Calcium Citrate, Magnesium Hydroxide, Vitamin D3 & Zinc Tablets",
    image: "/images/catlogs/Lifecall.jpeg",
  },
  {
    id: 26,
    name: "Gaba-Q NT",
    category: "Neuropathic Care",
    description: "Gabapentin & Nortriptyline Tablets for neuropathic pain",
    image: "/images/catlogs/Gaba-Q NT.jpeg",
  },
  {
    id: 27,
    name: "Cefcure-CV 500",
    category: "Antibiotic",
    description: "Cefuroxime Axetil & Potassium Clavulanate Tablets I.P.",
    image: "/images/catlogs/CEFCURE-CV 500.jpeg",
  },
  {
    id: 28,
    name: "Nerve Q M75",
    category: "Neuropathic Care",
    description: "Pregabalin & Methylcobalamin Capsules I.P.",
    image: "/images/catlogs/NERVE Q M7.jpeg",
  },
  {
    id: 29,
    name: "Esowell-DSR",
    category: "Gastrointestinal Care",
    description: "Esomeprazole and Domperidone Sustained Release Capsules",
    image: "/images/catlogs/ESOWELL-DSR.jpeg",
  },
  {
    id: 30,
    name: "Wellit-200",
    category: "Antifungal",
    description: "Itraconazole Capsules I.P. 200 mg",
    image: "/images/catlogs/Wellit-200.jpeg",
  },
  {
    id: 31,
    name: "Goodpod-CV",
    category: "Antibiotic",
    description: "Cefpodoxime Proxetil & Potassium Clavulanate Tablets",
    image: "/images/catlogs/Goodpod-CV.jpeg",
  },
  {
    id: 32,
    name: "Folcare-D3",
    category: "Bone Health",
    description:
      "Ferrous Fumarate, Folic Acid, Vitamin-D3 & Cyanocobalamin Tablets",
    image: "/images/catlogs/Folcare-D3.jpeg",
  },
  {
    id: 33,
    name: "NerveQ CD3",
    category: "Neuro",
    description:
      "Methylcobalamin, Alpha Lipoic Acid, Benfotiamine, Pyridoxine HCl, Myo-Inositol, Calcium Carbonate, Vitamin D3, Folic Acid, Chromium & Selenium Tablets",
    image: "/images/catlogs/NerveQ CD3.jpeg",
  },
  {
    id: 34,
    name: "Curemac 8MG",
    category: "Pain Management",
    description: "Aceclofenac & Thiocolchicoside Tablets",
    image: "/images/catlogs/Curemac 8MG.jpeg",
  },
];

export default products;
