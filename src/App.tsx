import { Images } from './assets/Images';
import TrendingCard from './components/TrendingCard';

function App() {
  const trendingArr = [
    {
      img: Images.Bitcoin,
      title: 'Bitcoin (BTC)',
      price: '$31,812.80',
      change: { up: true, value: '10%' },
      tvl: '$60,000',
      popularPairs: [Images.Solana, Images.Ethereum, Images.Binance],
    },
    {
      img: Images.Solana,
      title: 'Solana (SOL)',
      price: '$32.83',
      change: { up: false, value: '12.32%' },
      tvl: '$60,000',
      popularPairs: [Images.Bitcoin, Images.Ethereum, Images.Binance],
    },
    {
      img: Images.Ethereum,
      title: 'Ethereum (ETH)',
      price: '$1,466.45',
      change: { up: false, value: '11.93%' },
      tvl: '$60,000',
      popularPairs: [Images.Solana, Images.Bitcoin, Images.Binance],
    },
    {
      img: Images.Binance,
      title: 'Binance USD (BUSD)',
      price: '$1.00',
      change: { up: true, value: '0.26%' },
      tvl: '$60,000',
      popularPairs: [Images.Solana, Images.Ethereum, Images.Binance],
    },
    {
      img: Images.ShibaInu,
      title: 'Shiba Inu (SHIB)',
      price: '$0.00000001948',
      change: { up: false, value: '8.1%' },
      tvl: '$60,000',
      popularPairs: [Images.Solana, Images.Ethereum, Images.Binance],
    },
  ];

  return (
    <div className='h-screen flex flex-col items-center mx-10'>
      <div className='border border-red-500 w-full mb-10'>
        <img
          src={Images.Activity}
          alt='Activity'
          className='mr-4 inline-block'
        />
        <span className='leading-8 tracking-[-0.01em]'>Trending Assets</span>
      </div>
      <div className='border p-0 border-red-500 w-full grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
        {trendingArr.map((el) => (
          <TrendingCard headerElement={<img src={el.img} alt={el.title} />}>
            <div>
              <p className='text-[#737BAE]'>{el.title}</p>
              <p className='bg-[#14172B] rounded-2xl mt-4 mb-2 p-3 relative'>
                {el.price}
                <span
                  className={`absolute right-3 ${
                    el.change.up ? 'text-[#00FFA3]' : 'text-[#FF4D4D]'
                  }`}
                >
                  {(el.change.up ? '+' : '-') + el.change.value}
                </span>
              </p>
              <p className='text-[#737BAE]'>Price</p>
              <p className='bg-[#14172B] rounded-2xl mt-4 mb-2 p-3'>{el.tvl}</p>
              <p className='text-[#737BAE]'>TVL</p>
              <div className='flex justify-center  mt-4 mb-2'>
                <div className='flex bg-[#14172B] rounded-2xl p-3'>
                  {el.popularPairs.map((p) => (
                    <div>
                      <img
                        width={'60%'}
                        className='mx-auto'
                        src={p}
                        alt='popular Pairs'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className='text-[#737BAE]'>Popular pairs</p>
            </div>
          </TrendingCard>
        ))}
      </div>
    </div>
  );
}

export default App;
