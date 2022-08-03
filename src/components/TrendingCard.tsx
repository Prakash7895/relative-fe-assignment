interface TrendingCardProps {
  bgColor?: string;
  borderColor?: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  bgColor,
  borderColor,
}) => {
  const sideCurves = 'border-t border-green-600 flex-1 h-20 rounded-t-2xl';

  const backgroundStyle = {
    background:
      'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)',
    backdropFilter: 'blur(100px)',
  };

  return (
    <div className={`flex flex-col items-center m-3`}>
      <div className='flex flex-row w-full items-end'>
        <div
          className={`${sideCurves} border-l rounded-tr-[35px]`}
          style={{
            ...backgroundStyle,
            // backgroundColor: bgColor,
            // borderColor: borderColor,
          }}
        ></div>
        <div className='h-28 w-28 relative'>
          <div
            className='h-11 absolute bottom-0 w-full z-0'
            style={{
              ...backgroundStyle,
            }}
          ></div>
          <div
            className='border-b rounded-full h-full w-full relative z-10 p-3 ring-bw-head-body'
            style={{
              borderColor: borderColor,
            }}
          >
            <div
              className='border rounded-full h-full w-full'
              style={{
                borderColor: borderColor,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`${sideCurves} border-r rounded-tl-[35px]`}
          style={{
            ...backgroundStyle,
          }}
        ></div>
      </div>
      <div
        className='border border-t-0 rounded-b-2xl w-full h-[300px]'
        style={{ ...backgroundStyle }}
      ></div>
    </div>
  );
};

export default TrendingCard;

TrendingCard.defaultProps = {
  bgColor: 'white',
  borderColor: 'grey',
};
