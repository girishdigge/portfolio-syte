import './navbar.scss';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <a href='#'>
          <img src='/syte-logo.png' alt='syte logo' />
        </a>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SYTE
        </motion.h1>
      </div>
    </div>
  );
};
export default Navbar;
