const rupiahFormat = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number).replace(/,00$/, '');
  }
  
  export default rupiahFormat;
  