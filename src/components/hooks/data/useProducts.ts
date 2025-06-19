function useProduct() {
  const products = [
    {
      id: 1,
      name: "Pure Pineapple",
      price: 100,
      priceOld: 120,
      description: "AGELOC",
      imageUrl: "https://media.nuskin.com/m/13122c65d264914a/webimage-VN_ARO.png?width=600",
    },
    {
      id: 2,
      name: "AP 24 Whitening Toothpaste (VN)",
      price: 200,
      priceOld: 250,
      description: "NU SKIN",
      imageUrl: "https://media.nuskin.com/m/2668ebb211853f72/webimage-VN_ARO.png?width=600",
    },
    {
      id: 3,
      name: "ageLOC LumiSpa iO - Oil Skin",
      price: 300,
      priceOld: 350,
      description: "Nu Skin",
      imageUrl:
        "https://media.nuskin.com/m/3bc7abd03b22f109/webimage-ageLOC-LumiSpa-iO-Oily.png?width=600",
    },
    {
      id: 4,
      name: "Dietary supplement AGELOC® Y - SPAN",
      price: 400,
      priceOld: 450,
      description: "PHARMANEX",
      imageUrl: "https://media.nuskin.com/m/13122c65d264914a/webimage-VN_ARO.png",
    },
    {
      id: 5,
      name: "ageLOC Y-Span (6 boxes) & ageLOC R2 (6 boxes) 1000PV",
      price: 500,
      priceOld: 550,
      description: "AGELOC",
      imageUrl: "https://media.nuskin.com/m/39cfd438d9d445e0/webimage-R2_YSpan.png",
    },
    {
      id: 6,
      name: "g3",
      price: 600,
      priceOld: 650,
      description: "PHARMANEX",
      imageUrl: "https://media.nuskin.com/m/71e99938f49f6742/webimage-G3.png",
    },
  ];
  return { products };
}

export default useProduct;
