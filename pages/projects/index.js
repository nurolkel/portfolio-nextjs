import { ProjectsGrid } from "../../styles/container.styles";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import Meta from "../../components/meta";


const portfolioQuery = `*[_type == "portfolio"]{
    name,
    image,
    slug,
    _id
  }`

const ProjectPage = ({ myPortfolio }) => {

    return (
        <>
            <Meta title="Kelvin's Portfolio | Portfolio Page" />
            <h1 className="text-blue text-center uppercase letter-spacing-2 padding-top-bottom fs-650">Projects Page</h1>
            <ProjectsGrid>
                {myPortfolio.map(element => {
                    
                    return (
                        <Link href={`projects/${element.slug.current}`} key={element.name}>
                            <a className="img-link">
                                <Image src={urlFor(element.image).url()} layout="fill" alt={element.name} className="projects-img" />
                                <div className="projects-grid">
                                    <span className="text-blue fs-600 text-bold uppercase">{element.name}</span>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </ProjectsGrid>
        </>
    )
}

export async function getStaticProps({ preview = false}) {
    const myPortfolio = await getClient(preview).fetch(groq`${portfolioQuery}`);

    return {
        props: {
            myPortfolio
        }
    }
}

export default ProjectPage;