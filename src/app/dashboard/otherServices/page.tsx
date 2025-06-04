import Services from "@/components/Services";
import loan from "../../../assets/loan.svg";
import card from "../../../assets/card.svg";
import donation from "../../../assets/donation.svg";
import pix from "../../../assets/pix.svg";
import ensurance from "../../../assets/ensurance.svg";
import phone from "../../../assets/phone.svg";

export const OtherServices = () => {
  return (
    <div className='bg-[#CBCBCB] rounded-lg w-full sm:max-w-[690px] px-4 sm:px-[24px] py-[24px] flex flex-col gap-[32px]'>
      <label className='text-[#000000] text-[25px] font-bold'>
        Confira os serviços disponíveis
      </label>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[16px]'>
        <Services imageAlt='Emprestimo' image={loan} title='Empréstimo' />
        <Services imageAlt='Cartao' image={card} title='Meus cartões' />
        <Services imageAlt='Doacao' image={donation} title='Doações' />
        <Services imageAlt='Pix' image={pix} title='Pix' />
        <Services imageAlt='Seguro' image={ensurance} title='Seguros' />
        <Services imageAlt='Celular' image={phone} title='Credito celular' />
      </div>
    </div>
  );
};

export default OtherServices;
