import { Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <p>© Akshay More | Web Developer</p>
        <Link href="https://github.com/theakshaymore">Github</Link>
        <br />
        <Link href="https://www.linkedin.com/in/akshay-more-275616177/">
          Linkedin
        </Link>
        <br />
        <Link href="https://twitter.com/AkshhayMore">Twitter</Link>
        <br />
        <Link href="https://www.instagram.com/akshhay.more/">Instagram</Link>
      </footer>
    </div>
  );
};

export default Footer;
