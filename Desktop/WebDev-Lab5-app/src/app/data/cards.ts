export interface ICard { image: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
  id: number;
  title: string;
  category: string;
  link: string
}

  export const cards: ICard[] = [
    {
      id: 1,
      title: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
      price: 630980,
      
    description: `
    Details
    Диагональ: 6.7 дюйм,
    Размер оперативной памяти: 8 ГБ,
    Процессор: 6-ядерный Apple A17 Pro,
    Объем встроенной памяти: 256.0 ГБ,
  `,
  
      category: 'Smartphones',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      rating: {
        rate: 5,
        count: 120
      },
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
    },
    {
      id: 2,
      title: 'Смарт-часы Apple Watch SE 2 Gen (2023) GPS M/L 44 мм черно-синий',
      price: 132767,
      description: `
      Details
      поддержка платформ: iOS
  материал корпуса: алюминий
  цвет корпуса: черно-синий
  форма корпуса: прямоугольная
  интерфейсы: Bluetooth, ,Wi-Fi
  технология экрана: OLED
    `,
      category: 'Smart-Watch',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h5e/84373305294878.jpg?format=gallery-medium',
      rating: {
        rate: 4.1,
        count: 109
      },
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2023-gps-m-l-44-mm-cherno-sinii-114111998/?c=750000000'
    },
    {
      id: 3,
      title: 'Ноутбук Lenovo Legion Slim 5 16APH8 82Y9001JRK серый',
      price: 550990,
      description: `
      Details
      диагональ экрана: 16.0 дюйм
  процессор: AMD Ryzen 7 7840HS
  видеокарта: NVIDIA GeForce RTX 4050
  размер оперативной памяти: 16.0 Гб
  тип жесткого диска: SSD
  общий объем накопителей: 512.0 Гб
    `,
      category: 'Laptop',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/ha2/83315313541150.jpg?format=gallery-medium',
      rating: {
        rate: 3.8,
        count: 89
      },
      link: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16aph8-82y9001jrk-seryi-112916915/?c=750000000'
    },
  ]