import { socialImgs } from "../constants";

const socialLinks = {
  insta: "https://instagram.com/priyankbagad",
  fb: "https://facebook.com/priyankbagad",
  x: "https://x.com/priyankbagad",
  linkedin: "https://linkedin.com/in/priyankbagad",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialLinks[socialImg.name]}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Priyank Bagad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
