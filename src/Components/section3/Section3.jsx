const Section3 = () => {
  return (
    <div>
      <div className='p-10'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex rounded-xl bg-syte-card bg-opacity-80 p-4'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-extrabold'>Mobile Compiled</h1>
              <h2 className='text-xl'>Track your stock in/out and profits</h2>
              <div className='flex flex-row gap-2'>
                <img
                  src='/check.png'
                  alt='check'
                  className='contain h-4 mt-1'
                />
                <h2 className='text-xl'>
                  Detailed stock history with sale & purchase price with notes
                </h2>
              </div>
              <div className='flex flex-row gap-2'>
                <img
                  src='/check.png'
                  alt='check'
                  className='contain h-4 mt-1'
                />
                <h2 className='text-xl'>Low stock tracking</h2>
              </div>
              <div className='flex flex-row gap-2'>
                <img
                  src='/check.png'
                  alt='check'
                  className='contain h-4 mt-1'
                />
                <h2 className='text-xl'>
                  Profit tracking at daily, weekly and monthly level
                </h2>
              </div>
            </div>
          </div>
          <div className='flex rounded-xl bg-syte-card bg-opacity-80 p-4'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-extrabold'>
                Implementation Made Easy
              </h1>
              <h2 className='text-xl'>Use SYTE across different devices</h2>
              <div className='flex flex-row gap-2'>
                <img
                  src='/check.png'
                  alt='check'
                  className='contain h-4 mt-1'
                />
                <h2 className='text-xl'>
                  Data synced across mobile and desktop devices
                </h2>
              </div>
              <div className='flex flex-row gap-2'>
                <img
                  src='/check.png'
                  alt='check'
                  className='contain h-4 mt-1'
                />
                <h2 className='text-xl'>
                  Use SYTE in both online and offline mode (Coming Soon)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid  p-10'>
        <div className='flex bg-syte-card bg-opacity-80 items-center justify-evenly p-4'>
          <div className='flex flex-col items-center justify-center gap-1 w-1/4'>
            <img
              src='./DPR.png'
              alt='DPR'
              className='contain'
              height={120}
              width={120}
            />
            <h1 className='text-xl font-bold'>Manage Daily DPR</h1>
            <h2>Manage multiple businesses from the same account</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/4'>
            <img
              src='./material.png'
              alt='DPR'
              className='contain'
              height={120}
              width={120}
            />
            <h1 className='text-xl font-bold'>Material Tracking</h1>
            <h2>
              Your data is automatically backed up when connected to internet in
              a secured way.
            </h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-1 w-1/4'>
            <img
              src='./backup.png'
              alt='DPR'
              className='contain'
              height={120}
              width={120}
            />
            <h1 className='text-xl font-bold'>Automatic Backup</h1>
            <h2>
              Get all GST reports & other insights to run your business
              efficiently.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
