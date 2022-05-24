import Link from "next/link";
import { BreadcrumbsWrapper, BreadContent } from "../styles/container.styles";



const BreadCrumbs = ({ page }) => {
    return (
        <BreadcrumbsWrapper>
            <BreadContent>
                <Link href="/projects">
                    <a className="fs-400 text-purple">Projects</a>
                </Link>
                <span className="text-light-grey span"><span className="sr-only">Go Back to Projects</span> ← </span>
                <span className="text-purple fs-400">{page}</span>
            </BreadContent>
        </BreadcrumbsWrapper>
    )
}

export default BreadCrumbs;