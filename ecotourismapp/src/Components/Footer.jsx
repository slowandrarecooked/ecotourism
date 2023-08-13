import "../Styles/Footer.css";
let Footer = () => {
  return (
    <div id="footer">
      <div>
        <p>SUBSCRIBE</p>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
        <div>
          <input type="checkbox" id="marketing" />
          <label for="marketing">
            By checking this box,i'm opting in to marketing from early majority
          </label>
        </div>
      </div>
      <div>
        <div>
          <p>COMPANY</p>
          <a href="">About us</a>
          <a href="">Be an ambassador</a>
          <a href="">Team</a>
          <a href="">Board selector</a>
        </div>
        <div>
          <p>SUPPORT</p>
          <a href="">On Site expert</a>
          <a href="">Cancellations</a>
          <a href="">FAQ</a>
          <a href="">Size quide</a>
        </div>
        <div>
          <p>INFO</p>
          <a href="">Terms of service</a>
          <a href="">Privacy</a>
          <a href="">FAQ</a>
          <a href="">Contacts</a>
        </div>
        <div>
          <p>FOLLOW US</p>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
          <a href="">facebook</a>
        </div>
      </div>
    </div>
  );
};
export { Footer };
