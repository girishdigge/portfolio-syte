import './section4.scss';
const Section4 = () => {
  const blogs = [
    {
      image: '1.jpg',
      date: '21 June 2024',
      title: 'Blog1',
      author: 'John Doe',
      content:
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, repellendus!',
      link: '#',
    },
  ];
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='w-11/12 mt-6 items-center rounded-lg justify-center bg-gradient-to-b from-syte-primary to-transparent'>
          <div className='relative flex h-60  justify-between'>
            <img src='./tools.png' alt='tools' className='contain' />
            <img src='./building.png' alt='' className='contain scale-125' />
            <div className='absolute inset-0 flex flex-row  gap-2 '>
              <div className='w-1/3 '></div>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>Confused? How it works?</h1>
                <h2 className='text-5xl font-bold'>Book a Demo!</h2>

                <div className='inputs1  mt-2'>
                  <label htmlFor='number'>+91</label>
                  <input
                    type='text'
                    id='number'
                    name='number'
                    placeholder='Enter phone number.'
                  />
                  <button className='hover:scale-105 '>Book Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col m-14'>
        <div className='flex items-center gap-6'>
          <h1 className='text-2xl font-bold'>SYTE Blogs</h1>
          <hr className='w-20 border-2 border-syte-red' />
        </div>
        {/* <div className='grid grid-cols-4'>
          <div>
            {blogs.map(blog,index)=({
              
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Section4;
