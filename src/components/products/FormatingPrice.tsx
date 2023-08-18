interface Props {
    amount: number;
  }
  
  const FormatingPrice = ({ amount }: Props) => {
    const formattedAmount = new Number(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 1,
    });
    return <span>{formattedAmount}</span>;
  };
  
  export default FormatingPrice;