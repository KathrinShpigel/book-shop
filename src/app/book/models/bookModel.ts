export interface IBook {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ECategory;
  createDate: number;
  isAvailable: boolean;
  img: string;
}
export enum ECategory {
  'Детективы',
  'Комиксы и манга',
  'Любовные романы',
  'Поэзия',
  'Приключения',
  'Проза',
  'Триллеры',
  'Ужастик',
}
