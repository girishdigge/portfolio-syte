import './section5.scss';
const Section5 = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-11/12 mt-20 items-center rounded-lg justify-center bg-syte-primary bg-opacity-50'>
        <div className='relative flex h-72  justify-between'>
          <div className='flex flex-col w-1/4 items-center gap-1 justify-center'>
            <img src='./qr.png' alt='QR' className='contain h-36' />
            <h1>Scan to download the app</h1>
            <img
              src='./playStore.png'
              alt='app store'
              className='h-12 hover:scale-105'
            />
            <img
              src='./appStore.png'
              alt='app store'
              className='h-12 hover:scale-105'
            />
          </div>
          <div className='inputs mr-8 flex flex-col items-center justify-center'>
            <div className='flex'>
              <label htmlFor='number'>+91</label>
              <input
                type='text'
                id='number'
                name='number'
                placeholder='Enter your phone number. '
              />
              <button className='hover:scale-105 '>Book Demo</button>
            </div>
            <div className='features gap-2 text-lg '>
              <h4>
                <span> Manage Multiple Projects</span>
                <span className='vl'></span>
                <span>Labour Attendance and Report </span>
                <span className='vl'></span>
                <span>Material In-Out tracking made simple.</span>
              </h4>
            </div>
          </div>
          <img
            src='./phone.png'
            alt='phone'
            className='scale-125 -translate-y-9 -translate-x-8'
          />
        </div>
      </div>
    </div>
  );
};
export default Section5;
