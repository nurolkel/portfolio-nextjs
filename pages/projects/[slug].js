import groq from "groq";
import PortfolioComponent from "../../components/portfolio";
import BreadCrumbs from "../../components/breadcrumbs";
import { getClient } from "../../lib/sanity.server";

const portfolioQuery = `*[_type == "portfolio" && slug.current == $slug][0]{
    name,
    url,
    github,
    image,
    slug,
    description,
    text,
    "skills": skill[]->{name},
    _id
}`


const PortfolioItems = ({ portfolio }) => {
    const { name, url, github, image, slug, description, text, skills, _id } = portfolio;

    return (
        <>
            <BreadCrumbs page={name} />
            <PortfolioComponent name={name} key={_id} slug={slug.current} skill={skills} text={text} description={description} github={github} url={url} image={image}/>
        </>
    );
}







export async function getStaticPaths() {
    const paths = await getClient().fetch(groq`
    *[_type == "portfolio" && defined(slug.current)]{
        "params": {
            "slug": slug.current
        }
    }
    `)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params, preview = false }) {
    const portfolio = await getClient(preview).fetch(groq`${portfolioQuery}`, {
        slug: params.slug,
    })

    return {
        props: {
            portfolio
        }
    }
}

export default PortfolioItems