import './section5.scss';
const Section5 = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-11/12 mt-20 items-center rounded-lg justify-center bg-syte-primary bg-opacity-50'>
          <div className='relative flex h-72  justify-between'>
            <div className='flex flex-col w-1/5 items-center gap-1 justify-center'>
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
              <div className='features'>
                <span> Manage Multiple Projects</span>
                <span className='vl'></span>
                <span>Labour Attendance and Report </span>
                <span className='vl'></span>
                <span>Material In-Out tracking made simple.</span>
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
      <div className='bg-syte-primary mt-4 p-6'>
        <div className='flex '>
          <div className='flex flex-col w-1/3'>
            <div className='flex items-center '>
              <img src='./logo.png' alt='logo' className='contain w-12' />
              <h1 className='text-2xl font-bold'>SYTE</h1>
            </div>
            <p>
              SYTE is comprehensive mobile application system that streamlines
              communication between worksites and offices, enhancing
              collaboration for your construction ventures.
            </p>
            <div className='flex gap-1 mt-2'>
              <div className='flex items-center  justify-center bg-white rounded-xl p-1'>
                <img src='./yt.png' alt='youtube' className='contain ' />
              </div>
              <div className='flex items-center  justify-center bg-white rounded-xl p-1 pl-2 pr-2'>
                <img src='./ig1.png' alt='ig' className='contain ' />
              </div>
              <div className='flex items-center  justify-center bg-white rounded-xl p-1 pl-2 pr-2'>
                <img src='./x1.png' alt='x' className='contain w-5' />
              </div>
              <div className='flex items-center  justify-center bg-white rounded-xl p-1 pl-2 pr-2'>
                <img src='./fb1.png' alt='fb' className='contain ' />
              </div>
              <div className='flex items-center  justify-center bg-white rounded-xl p-1 pl-2 pr-2'>
                <img src='./ln.png' alt='ln' className='contain w-6' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 w-1/3 ml-16'>
            <h1 className='text-xl font-bold'>Company</h1>
            <h2 className='mt-2'>About Us</h2>
            <h2>Careers</h2>
            <h2>Blogs</h2>
            <h2>Newsroom</h2>
            <h2>Leading Partner</h2>
          </div>
          <div className='flex flex-col gap-3  w-1/2 ml-16'>
            <div>
              <h1 className='text-xl font-bold'>{`We'd love to hear from you!`}</h1>
              <h2>You can reach out to us at:</h2>
            </div>
            <div className='flex items-center mt-4'>
              <img src='./telephone.png' alt='logo' className='contain ' />
              <h1 className='ml-2'>+91-8446656437</h1>
            </div>
            <div className='flex items-center '>
              <img src='./email.png' alt='logo' className='contain ' />
              <h1 className='ml-2'>feedback@syteapplications.com</h1>
            </div>
            <div className='flex items-center '>
              <img src='./pin.png' alt='logo' className='contain w-7' />
              <div>
                <h1 className='ml-2 '>
                  5B, Nirapalm Society, Ashok Nagar, Vijapur Road,Solapur,
                  413004.
                </h1>
                <h1 className='ml-2'></h1>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-4 mb-6' />
        <div className='flex'>
          <div className='w-1/3'>
            <h1 className='font-extralight'>
              © 2023 SYTE, Inc. All rights reserved.
            </h1>
          </div>
          <div className='w-1/4'></div>
          <div className='flex gap-4 ml-10'>
            <h1 className=''>Terms & Conditions</h1>
            <h1 className=''>Privacy Policy</h1>
            <h1 className=''>Grievances & Redressal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section5;
