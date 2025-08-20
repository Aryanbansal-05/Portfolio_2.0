const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/aryanbansal-05"
            className="w-1/2 h-1/2 cursor-pointer"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/aryan-bansal-44a2a6260/" className="w-1/2 h-1/2"><img src="/assets/linkedin.png" alt="twitter"  /></a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/aryanbansal.05?igsh=MXJhM2o3Z3A3MW9iag==" className="w-1/2 h-1/2"><img src="/assets/instagram.svg" alt="instagram"  /></a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Aryan Bansal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;