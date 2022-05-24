import Link from "next/link";
import { FooterContainer } from "../styles/container.styles";



const Footer = () =>  (
    <FooterContainer clasName="bg-black--filter padding-top-bottom flow flow--space-small margin-top-bottom">
        <p className="fs-400 letter-spacing-3 text-white uppercase">&copy; <Link  href="/" aria-label="Kelvin Nunez Portfolio" className="text-blue"><a>Kelvin Nunez</a></Link> {new Date().getFullYear()}</p>
    </FooterContainer>
)


export default Footer;