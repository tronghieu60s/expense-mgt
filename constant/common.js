export const JARS = {
  necessities: {
    name: 'Thiết yếu',
    color: '#e93b70',
  },
  education: {
    name: 'Giáo dục',
    color: '#0c78e4',
  },
  saving: {
    name: 'Tiết kiệm',
    color: '#e6a63c',
  },
  play: {
    name: 'Hưởng thụ',
    color: '#8d4de9',
  },
  investment: {
    name: 'Đầu tư',
    color: '#7ed320',
  },
  give: {
    name: 'Thiện tâm',
    color: '#fd51d9',
  },
};

export const GROUPS = {
  food: {
    name: 'Ăn uống',
    parent: 'necessities',
  },
  'bill-utilities': {
    name: 'Hóa đơn & Tiện ích',
    parent: 'necessities',
  },
  transportation: {
    name: 'Di chuyển',
    parent: 'necessities',
  },
  shopping: {
    name: 'Mua sắm',
    parent: 'necessities',
  },
  'friend-lover': {
    name: 'Bạn bè & Người yêu',
    parent: 'play',
  },
  movies: {
    name: 'Phim ảnh',
    parent: 'play',
  },
  games: {
    name: 'Trò chơi',
    parent: 'play',
  },
  travel: {
    name: 'Du lịch',
    parent: 'play',
  },
  health: {
    name: 'Sức khỏe',
    parent: 'necessities',
  },
  marriage: {
    name: 'Cưới hỏi',
    parent: 'give',
  },
  funeral: {
    name: 'Tang lễ',
    parent: 'give',
  },
  charity: {
    name: 'Từ thiện',
    parent: 'give',
  },
  'children-babies': {
    name: 'Con cái',
    parent: 'saving',
  },
  'home-improvement': {
    name: 'Sửa chữa nhà cửa',
    parent: 'saving',
  },
  pets: {
    name: 'Vật nuôi',
    parent: 'saving',
  },
  books: {
    name: 'Mua sách',
    parent: 'education',
  },
  investment: {
    name: 'Đầu tư',
    parent: 'investment',
  },
  business: {
    name: 'Kinh doanh',
    parent: 'investment',
  },
  insurances: {
    name: 'Bảo hiểm',
    parent: 'necessities',
  },
  'fees-charges': {
    name: 'Chi phí',
    parent: 'investment',
  },
  withdrawal: {
    name: 'Rút tiền',
    parent: 'necessities',
  },
};
