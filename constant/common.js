export const TYPES = {
  income: {
    name: 'Thu Nhập',
    color: '#5e72e4',
    mark: '+',
    markColor: '#2dce89',
  },
  expense: {
    name: 'Chi Tiêu',
    color: '#f5365c',
    mark: '-',
    markColor: '#f5365c',
  },
};

export const JARS = {
  necessities: {
    name: 'Thiết yếu',
    color: '#5e72e4',
  },
  education: {
    name: 'Giáo dục',
    color: '#11cdef',
  },
  saving: {
    name: 'Tiết kiệm',
    color: '#2dce89',
  },
  play: {
    name: 'Hưởng thụ',
    color: '#172b4d',
  },
  investment: {
    name: 'Đầu tư',
    color: '#fb6340',
  },
  give: {
    name: 'Thiện tâm',
    color: '#f5365c',
  },
};

export const JARSPERCENT = {
  necessities: 60,
  education: 10,
  saving: 10,
  play: 10,
  investment: 5,
  give: 5,
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
  other: {
    name: 'Khác',
    parent: 'necessities',
  },
};
