import Image from "next/image";
import graph from "../../../assets/graph.svg";

export const Investiments = () => {
  return (
    <div className='w-full bg-[#CBCBCB] rounded-lg sm:max-w-[690px] px-4 sm:px-[24px] py-[24px] flex flex-col gap-[32px]'>
      <label className='text-[#000000] text-[25px] font-bold'>
        Investimentos
      </label>
      <div>
        <label className='text-[#004D61] text-base text-[25px]'>
          Total: R$ 50.000,00
        </label>
        <div className='flex gap-[24px] mt-[32px]'>
          <div className='bg-[#004D61] rounded-lg py-[16px] w-full flex justify-center items-center flex-col gap-[16px]'>
            <label className='text-base text-[#DADADA] font-normal'>
              Renda fixa
            </label>
            <label className='text-xl text-white text-base'>R$ 36.000,00</label>
          </div>
          <div className='bg-[#004D61] rounded-lg py-[16px] w-full flex justify-center items-center flex-col gap-[16px]'>
            <label className='text-base text-[#DADADA] font-normal'>
              Renda fixa
            </label>
            <label className='text-xl text-white text-base'>R$ 36.000,00</label>
          </div>
        </div>
        <div className='mt-[56px]'>
          <label className='text-base font-normal text-xl text-black'>
            Estatísticas
          </label>
          <div className='bg-[#004D61] rounded-lg py-[16px] w-full flex justify-center items-center flex-col mt-[24px]'>
            <Image width={380} src={graph} alt='grafico' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investiments;
