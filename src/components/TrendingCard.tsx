import { ReactNode } from 'react';

interface TrendingCardProps {
  borderColor?: string;
  gradientFromColor?: string;
  gradientToColor?: string;
  headerElement: ReactNode;
  children: ReactNode;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  borderColor,
  gradientFromColor,
  gradientToColor,
  headerElement,
  children,
}) => {
  const sideCurves = 'border-t flex-1 h-20 rounded-t-2xl';

  const backgroundStyle = {
    borderColor: borderColor,
    background: `linear-gradient(180deg, ${gradientFromColor} 0%, ${gradientToColor} 107.43%)`,
    backdropFilter: 'blur(100px)',
  };

  return (
    <div className={`flex flex-col items-center`}>
      <div className='flex flex-row w-full items-end'>
        <div
          className={`${sideCurves} border-l rounded-tr-[35px]`}
          style={{
            backgroundColor: gradientFromColor,
            borderColor: borderColor,
          }}
        ></div>
        <div className='h-28 w-28 relative'>
          <div
            className='h-11 absolute bottom-0 w-full z-0'
            style={{
              background: gradientFromColor,
            }}
          ></div>
          <div
            className='border-b rounded-full h-full w-full relative z-10 p-3 ring-bw-head-body'
            style={{
              borderColor: borderColor,
            }}
          >
            <div
              className='border rounded-full h-full w-full flex justify-center items-center'
              style={{
                // background: gradientFromColor,
                borderColor: borderColor,
              }}
            >
              {headerElement}
            </div>
          </div>
        </div>
        <div
          className={`${sideCurves} border-r rounded-tl-[35px]`}
          style={{
            background: gradientFromColor,
            borderColor: borderColor,
          }}
        ></div>
      </div>
      <div
        className='border border-t-0 rounded-b-2xl w-full p-5 text-center'
        style={{ ...backgroundStyle }}
      >
        {children}
      </div>
    </div>
  );
};

export default TrendingCard;

TrendingCard.defaultProps = {
  borderColor: '#ECF0FF1A',
  gradientFromColor: 'rgba(98, 106, 136, 0.1)',
  gradientToColor: 'rgba(46, 49, 73, 0.1)',
};
