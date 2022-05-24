import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import { WrapperPortfolio} from "../styles/container.styles";
import { urlFor } from "../lib/sanity";
import { useRouter } from "next/router";





const PortfolioComponent = ({ title, text, image, github, url, description, skill, slug, _id, route }) => {

    const router = useRouter();
   
    return (
        <WrapperPortfolio key={_id} className="padding-top-bottom">
            <div className="flex-item--portfolio">
                <Link href={route === "home" ? `${`projects/${slug}`}` : `${`${router.asPath}`}`}>
                    <a className="img-link">
                        <Image src={urlFor(image).url()} alt={title} layout="fill" className="img--portfolio"/>
                    </a>
                </Link>
                <div className="padding-inline">
                    <h3 className="letter-spacing-3 text-blue fs-700 uppercase padding-top-bottom">{title}<span className="d-block text-white letter-spacing-2 padding-top-bottom fs-400">{description}</span></h3>
                    <div className="padding-inline flex">
                        <a href={github} target="_blank" rel="noreferrer"><span className="sr-only">Github Link</span><BsGithub className="icons text-purple"/></a>
                        <a href={url} target="_blank" rel="noreferrer"><span className="sr-only">Netlify Link</span><SiNetlify className="icons text-purple" /></a>
                    </div>
                </div>
            </div>
            <div className="skill-container padding-top-bottom margin-top-bottom ">
                {skill.map(element => (
                    <span className="text-light-grey fs-300 bg-dark-blue letter-spacing-3" key={element.name}>{element.name}</span>
                ))}
            </div>
            <p className="letter-spacing-2 fs-400 text-light-grey padding-top-bottom padding-inline">{text}</p>
        </WrapperPortfolio>
    )
}

export default PortfolioComponent;