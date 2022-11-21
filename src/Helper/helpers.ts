import moment from 'moment';

const currencyFormat = (num: string, type: string) => {
  if (num) {
    return `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, type || type)}`;
  }
  return '';
};

export default currencyFormat;

export const formatDate = (date: string) => {
  return moment(date).format('DD MMMM YYYY');
};
