import { BsLinkedin , BsInstagram , BsGithub } from 'react-icons/bs';
import { FaFacebookF , FaDev } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin  />
    </div>
    <div>
      <BsGithub  />
    </div>
    <div>
      <FaDev   />
    </div>
    {/* <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
