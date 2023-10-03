export interface Gallery {
  id: string;
  title: string;
  content: string;
  path: string;
}

export const galleryDefault: Gallery[] = [
  {
    title: 'fondue Savoyarde',
    content: "goûtez ça vous m'en direz des nouvelles",
    id: '17',
    path: 'https://res.cloudinary.com/dhyk0iygb/image/upload/v1683466568/fondue-2.jpg-1679674124826.jpg-1683467170728.jpg',
  },
  {
    title: 'tartiflette',
    content: 'aie aie aie la tartiflette du chef !',
    id: '16',
    path: 'https://res.cloudinary.com/dhyk0iygb/image/upload/v1683466568/raclette.jpeg-1679674223301.jpg-1683467197646.jpg',
  },
  {
    title: 'du bon fromage fondue. Miam',
    content: 'raclette',
    id: '15',
    path: 'https://res.cloudinary.com/dhyk0iygb/image/upload/v1683466568/raclette.jpeg-1679674223301.jpg-1683467197646.jpg',
  },
];
