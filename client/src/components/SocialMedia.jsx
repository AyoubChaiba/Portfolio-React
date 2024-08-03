import { BsLinkedin , BsGithub } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ayoub-chaiba-611576257/"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/AyoubChaiba"><BsGithub /></a>
    </div>
    <div>
      <a href="https://dev.to/ayoubchaiba"><FaDev /></a>
    </div>
  </div>
);

export default SocialMedia;
