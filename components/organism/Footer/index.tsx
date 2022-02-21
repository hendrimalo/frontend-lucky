const Footer = function () {
  return (
    <div
      id="about-us"
      className="footer text-center mt-4"
      style={{ height: '130px' }}
    >
      <h2 className="display-5 font-weight-bold mt-5">Lucky Barbershop</h2>
      <p>As Good As You Will Be</p>
      <div className="col">
        <a href="https://www.instagram.com/cukurlucky/" target="_blank" rel="noreferrer">
          <img src="/images/logo-instagram.png" alt="" style={{ width: '30px', height: '30px', marginRight: '8px' }} />
        </a>
        <a href="https://wa.link/dvwa5w" target="_blank" rel="noreferrer">
          <img src="/images/logo-whatsapp.png" alt="" style={{ width: '30px', height: '30px' }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
