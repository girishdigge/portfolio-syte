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
            <div className='features'>
              <h4>
                <span> Project Documentation at one place</span>
                <span className='vl'></span>
                <span>Accounts made easy</span>
                <span className='vl'></span>
                <span> Inventory management with payment tracking</span>
              </h4>
            </div>
          </div>
          <div className='download'>
            <img
              className='store'
              src='/appStore.png'
              width={168}
              height={50}
              alt='app store'
            />
            <img
              className='store'
              src='/playStore.png'
              width={168}
              height={50}
              alt='app store'
            />
            <div className='madeIn'>
              {' '}
              Made with{' '}
              <span>
                <img className='heart' src='/heart.png' alt='heart' />
              </span>{' '}
              in India{' '}
            </div>
          </div>
          <img className='scroll' src='/scroll.png' alt=''></img>
        </div>
      </div>

      <div className='imageContainer'>
        <img src='/hero-image.png' height={458} width={700} />
      </div>
    </div>
  );
};
export default Hero;
