// import { motion } from 'framer-motion';
// import './section2.scss';

const Section2 = () => {
  return (
    <div>
      <div className='grid grid-cols-2 items-center justify-center p-10 '>
        <div className=' rounded-xl mr-10 h-32 bg-syte-primary'>
          <div className='flex'>
            <div className='flex items-center justify-center h-32 rounded-xl  w-1/5'>
              <img src='/logo.png' className='contain p-8' />
            </div>
            <div className='flex  h-32 rounded-r-full  w-1/12'>
              <img src='/rt-vector.png' className='contain' />
            </div>
            <div className='flex flex-col p-4'>
              <h1 className='text-xl text-bold'>
                250+ Businesses using our free apps
              </h1>
              <h2 className='text-md ml-2 pt-1 text-gray-500'>
                Access your account anywhere, anytime.
              </h2>
              <div className='flex'>
                <div className='flex items-center justify-center hover:scale-110 cursor-pointer'>
                  <img src='/play.png' className='contain ' />
                  <span className='text-lg font-medium hover:underline'>
                    Play Store
                  </span>
                </div>
                <div className='flex items-center justify-center hover:scale-110 ml-2 cursor-pointer'>
                  <img src='/apple.png' className='contain' />
                  <span className='text-lg font-medium hover:underline'>
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' rounded-xl mr-10 h-32 bg-syte-primary'>
          <div className='flex flex-row-reverse'>
            <div className='flex items-center justify-center h-32 rounded-xl  w-1/5'>
              <img src='/logo.png' className='contain p-8' />
            </div>
            <div className='flex   h-32 rounded-r-full  w-1/12'>
              <img src='/lt-vector.png' className='contain ' />
            </div>
            <div className='mr-44  flex'>
              <div className='flex flex-col pt-4'>
                <h1 className='text-xl text-bold'>Need custom ERP? *</h1>
                <h2 className='text-md ml-2 text-gray-500 pt-1'>Contact Us</h2>
                <div className='flex pt-3 gap-2 cursor-pointer hover:scale-110'>
                  <img src='/link.png' className='contain ' />
                  <span className='text-lg font-medium hover:underline'>
                    Go to Syte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between  '>
        <div>
          <img src='/building-l.png' className='contain ' />
        </div>
        <div className='flex flex-col items-center mt-10'>
          <h1 className='text-syte-red text-xl font-semibold'>
            DYNAMIC FEATURES TO HELP YOU
          </h1>
          <h2 className=' text-2xl font-semibold'>
            {` "Revolutionizing Construction:`}
          </h2>
          <h2 className=' text-2xl font-semibold'>
            {`SYTE, Building India's Future Online."`}
          </h2>
        </div>
        <div>
          <img src='/building-r.png' className='contain ' />
        </div>
      </div>
    </div>
  );
};
export default Section2;
