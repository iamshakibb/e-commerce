export const randomId = (length = 5) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export const categorie = [
  {
    id: randomId(),
    name: "Shop all",
    link: "shop-all"
  },
  {
    id: randomId(),
    name: "Tops",
    link: "tops"
  },
  {
    id: randomId(),
    name: "Shirts",
    link: "shirts"
  },
  {
    id: randomId(),
    name: "Jackets",
    link: "jackets"
  },
  {
    id: randomId(),
    name: "Bottoms",
    link: "bottoms"
  },
  {
    id: randomId(),
    name: "Skirts",
    link: "skirts"
  }
]

export const filters = [
  {
    id: randomId(),
    name: 'Size',
    subMenus: [
      {
        id: randomId(),
        name: "s",
      },
      {
        id: randomId(),
        name: "m",
      },
      {
        id: randomId(),
        name: "l",
      },
      {
        id: randomId(),
        name: "xl",
      },
    ]
  },
  {
    id: randomId(),
    name: 'Price',
  },
  {
    id: randomId(),
    name: 'Color',
    subMenus: [
      {
        id: randomId(),
        name: "white",
      },
      {
        id: randomId(),
        name: "grey",
      },
      {
        id: randomId(),
        name: "yellow",
      },
      {
        id: randomId(),
        name: "blue",
      },
    ]
  },
  // {
  //   id: randomId(),
  //   name: 'Fabric',
  //   icon: BsPlus
  // }
]