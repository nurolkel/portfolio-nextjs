import styled from "styled-components";
import { breakpoints } from "../lib/breakpoints";

export const GridWrapper = styled.main`
    --gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    gap: var(--gap, 1rem);

    @media ${breakpoints.desktop} {
        grid-template-columns:  minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
        --gap: 4rem;
        
        .grid-item {
            grid-column: 2;
            position: relative;
            z-index: 1;
            background-color: hsl( var(--clr-black));
            border-radius: 15px;
        }

        .span {
            grid-column: 3 / span 2;
            justify-self: end;
            border-radius: 15px;
       }
   }
`


export const IconGrid = styled.div`
    display: grid;
    --gap: 1rem;
    grid-template-columns: 1fr;
    align-items: center;

    box-sizing: border-box;
    justify-items: center;
    gap:var(--gap, 1rem);

    @media ${breakpoints.tablet} {
        grid-template-columns: repeat(2, minmax(0,25rem));
    }

    @media ${breakpoints.desktop} {
        grid-template-columns:  repeat(4, minmax(0, 16rem)) ;
        --gap: 3rem;

    }
`

export const ImgGallery = styled.div`
    display: grid;
    --gap: 1rem;
    gap: var(--gap, 1rem);
    grid-template-columns: 1fr;

    @media ${breakpoints.tablet} {
        align-items: center;
        justify-content: center;
        --gap:1.5rem;
    }

   

    @media ${breakpoints.desktop} {
        grid-template-columns:  minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
        gap: 2rem;
        justify-items: center;

        .span:nth-of-type(odd) {
            grid-column: 2;
        }
        .span:nth-of-type(even) {
            grid-column: 3;
        }
    }
`

export const ProjectsGrid = styled.div`
    display: grid;
    --gap: 2rem;
    gap: var(--gap, 2rem);
    align-items: center;
    width: 100%;

    .img-link {
        position: relative;
        z-index: 10;
        pointer: cursor;
        width: 100%;
        height: 350px;

        .projects-img {
            width: 100%;
            aspect-ratio: 1;
        }

        .projects-grid {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: hsl(var(--clr-light-grey) / .50);
            backdrop-filter: blur(10px);
            width: 100%;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media ${breakpoints.tablet} {
        .img-link {
            height: 425px;

            .projects-img {
                aspect-ratio: 2/1.5;
            }

            .projects-grid {
                height: 75px;
            }
        }
    }

    @media ${breakpoints.desktop} {
        grid-template-columns: repeat(2, 1fr);
        
        .img-link {
            height: 500px;

            .projects-img {
                aspect-ratio: 1;
            }
        }
    }
`

export const ContactContainer = styled.main`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        label {
            padding: 1rem;
            display: grid;
            grid-template-columns: minmax(0,5rem) minmax(0,50rem);
            align-items: center;
            gap: 1rem;

            input, 
            textarea {
                padding: 0.5rem;
                border: 1px solid hsl(var(--clr-purple));

                &:focus,
                &:hover {
                    outline: 2px solid hsl( var(--clr-v-blue) /.50);
                }
            }
        }

        button {
            padding: 1rem 2rem;
            border-radius: 15px;
            background-color: hsl( var(--clr-purple));
            border: 1px solid hsl( var(--clr-purple) /.50);
            color: hsl( var(--clr-white));
            transition: background-color 500ms ease-out;
            pointer: cursor;

            &:hover,
            &:focus {
                background-color: hsl( var(--clr-purple) / .50);
            }
        }
    }

    @media ${breakpoints.desktop} {
        grid-template-columns: minmax(0,35rem) minmax(0,30rem);
        align-items: center;
        justify-content: center;


        form {
            gap: 1rem;
            justify-content: space-evenly;
        }
    }
`


export const PageContainer = styled.main`
    height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`


export const BreadcrumbsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
`

export const BreadContent = styled.div`
    display: flex;
    width: 100%; 
    padding: 0 20px;
     
    a {
        &:hover,
        &:focus {
            border-bottom: 1px solid hsl( var(--clr-light-grey));
        }
    }

    span {
        margin-left: 1rem;
        margin-right: 1rem;
        

        
    }
`;

export const ImageWrapper = styled.span`
    width: 100%;
    position: relative;
    height: 375px;

    .img-w {
        width: 100%;
        aspect-ratio: 1;
    }
   

    @media ${breakpoints.tablet} {
        height: 425px;

        .img-w {
            aspect-ratio: 1;
        }
       
    }

    @media ${breakpoints.desktop}{
        height: 600px;

        .img-w {
            aspect-ratio: 1;
            border-radius: 15px;
        }
       
    }
`
export const WrapperPortfolio = styled.div`
    --margin: 2rem;
    margin-top: var(--margin);
    margin-bottom: var(--margin);

    .flex-item--portfolio {
        display: flex;
        flex-direction: column;
        .img-link{
            position: relative;
            width: 100%;
            height: 350px;

            .img--portfolio {
                width: 100%;
                aspect-ratio: 1.5;
            }
        }
    }

    .skill-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, 8rem);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        span {
            padding: 15px;
            border-radius: 15px;
        }
    }

    @media ${breakpoints.tablet} {
        .flex-item--portfolio {

            .img-link {
                height: 400px;
                .img--portfolio {
                    aspect-ratio: 2/1.5;
                } 
            }
        }
    }

    @media ${breakpoints.desktop} {
            
            .flex-item--portfolio {
                flex-direction: row;

                .img-link {
                    width: 900px;
                    height: 500px;

                    .img--portfolio {
                        aspect-ratio: 1;
                    }
                }
            }
    }

`