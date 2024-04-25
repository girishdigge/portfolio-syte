import { motion } from 'framer-motion';
import './hero.scss';
const textVarients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVarients}
          initial='initial'
          animate='animate'
        >
          <div>
            <motion.h1 variants={textVarients}>Ab Kaam Hua</motion.h1>
            <motion.h1 variants={textVarients}>Aasan</motion.h1>
          </div>
          <motion.h2 variants={textVarients}>
            <span>with</span> Construction Sites <span>on your fingertips</span>
          </motion.h2>

          <motion.div variants={textVarients}>
            <p>Want to replace your WhatsApp groups?</p>
            <p>register here and book a demo with us.</p>
          </motion.div>
          <motion.div variants={textVarients} className='inputs'>
            <label htmlFor='number'>+91</label>
            <motion.input
              type='text'
              id='number'
              name='number'
              placeholder='Enter your phone number. '
              variants={textVarients}
            />
            <button className='hover:scale-105 '>Book Demo</button>
            <motion.div className='features gap-2 text-lg w-3/5'>
              <motion.h4 variants={textVarients}>
                <span> Project Documentation at one place</span>
                <span className='vl'></span>
                <span>Accounts made easy</span>
                <span className='vl'></span>
                <span> Inventory management with payment tracking</span>
              </motion.h4>
            </motion.div>
          </motion.div>
          <motion.div className='download gap-2' variants={textVarients}>
            <img
              className='store hover:scale-105'
              src='/appStore.png'
              width={168}
              height={50}
              alt='app store'
            />
            <img
              className='store hover:scale-105'
              src='/playStore.png'
              width={168}
              height={50}
              alt='app store'
            />
            <motion.div className='madeIn ' variants={textVarients}>
              <span className='flex'>
                Made with{' '}
                <span>
                  <img
                    className='heart ml-2 mr-2 hover:scale-125'
                    src='/heart.png'
                    alt='heart'
                  />
                </span>{' '}
                in India{' '}
              </span>
            </motion.div>
          </motion.div>
          <motion.img
            className='scroll'
            src='/scroll-black.png'
            alt=''
            variants={textVarients}
            animate='scrollButton'
          ></motion.img>
        </motion.div>
      </div>

      <div className='imageContainer'>
        <img src='/hero-image.png' height={458} width={700} />
      </div>
    </div>
  );
};
export default Hero;
