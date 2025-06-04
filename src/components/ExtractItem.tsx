interface ExtractItemProp {
  month: string;
  type: string;
  date: string;
  value: string;
}

export const ExtractItem: React.FC<ExtractItemProp> = ({
  month,
  type,
  date,
  value,
}) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <label className='font-semibold text-[#47A138] text-sm'>{month}</label>
      <div className='flex flex-row items-center justify-between'>
        <label className='font-normal text-base text-[#000000]'>{type}</label>
        <label className='text-[#8B8B8B] text-sm font-normal'>{date}</label>
      </div>
      <label className='font-semibold text-[#000000] text-base'>
        R$ {value}
      </label>
      <div className='border border-[#47A13880] w-[100%]' />
    </div>
  );
};

export default ExtractItem;
