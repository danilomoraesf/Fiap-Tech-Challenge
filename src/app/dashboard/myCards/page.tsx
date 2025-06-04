import Card from "@/components/Card";

export const MyCards = () => {
  return (
    <div className='w-full bg-[#CBCBCB] rounded-lg w-full px-4 sm:px-[24px] py-[24px] flex flex-col gap-[32px]'>
      <label className='text-[#000000] text-[25px] font-bold'>
        Meus cartões
      </label>
      <Card
        valueCard='Platinum'
        cardType='Cartão Físico'
        name='Joana Fonseca Gomes'
      />
      <Card
        valueCard='Platinum'
        cardType='Cartão Físico'
        name='Joana Fonseca Gomes'
      />
    </div>
  );
};

export default MyCards;
