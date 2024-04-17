import './hero.scss';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='textContainer'>
          <div>
            <h1>Ab Kaam Hua</h1>
            <h1>Aasan</h1>
          </div>
          <h2>
            <span>with</span> Construction Sites <span>on your fingertips</span>
          </h2>

          <div>
            <p>Want to replace your WhatsApp groups?</p>
            <p>register here and book a demo with us.</p>
          </div>
          <div className='inputs'>
            <label htmlFor='number'>+91</label>
            <input
              type='text'
              id='number'
              name='number'
              placeholder='Enter your phone number.'
            />
            <button>Book Demo</button>
          </div>
          <img src='/scroll.png' alt=''></img>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='/hero-image.png' height={600} width={820} />
      </div>
    </div>
  );
};
export default Hero;
