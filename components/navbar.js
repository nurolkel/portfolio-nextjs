import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../lib/breakpoints";
import NavLink from "./navlink";

const Hamburger = styled.div`
    background-color: hsl( var(--clr-v-blue));
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};
    z-index: 1002;

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: hsl( var(--clr-v-blue));
        content: "";
        position: absolute;
        transition: all 0.3s linear;
        z-index: 1002;
    }

    ::before {
        transform: ${({open}) => open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${({open}) => open ? "0" : "1"};
        transform: ${({open}) => open ? "rotate(90deg) " : "rotate(0deg)"};
        top: 10px;
    }

    @media ${breakpoints.desktop} {
        display: none;
    }
`;



const Navbar = () =>  {
    
    const [open, setOpen] = useState(false);
    const [background, setBackground] = useState(false);
    const ref = useRef(null);

    const changeBackground = () => {
        if (window.scrollY > 25) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }

    const toggleNavBar = () => setOpen(open => !open);

    

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    },[background])

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setOpen(false);
        }

    },[open])

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
          }
          
        document.addEventListener('click', handleClickOutside);

        return () => {
           document.removeEventListener('click', handleClickOutside);
          };
    },[ref,open])

    return (
        <nav className='navbar flex' ref={ref}>
            <div className="nav-center">
                <div className="nav-header flex">
                    <Link href='/'>
                        <a><h2 className="text-blue uppercase fs-600 letter-spacing-2">Kelvin Nunez</h2></a>
                    </Link>
                    <div className="toggle" role="Nav Menu" onClick={toggleNavBar}>
                        <Hamburger open={open} />
                    </div>
                </div>
                <div className={open ? "nav-links show-links flex underline-indicators" : "nav-links underline-indicators flex"}>
                    <NavLink href="/">
                        <a 
                            className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                            onClick={toggleNavBar}
                        >
                            Home
                        </a>
                    </NavLink>
                    <NavLink href="/projects">
                        <a 
                            className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                            onClick={toggleNavBar}    
                        >
                            Projects
                        </a>
                    </NavLink>
                    <NavLink href="/contact">
                        <a 
                            className="nav-link text-white fs-400 uppercase letter-spacing-2" 
                            onClick={toggleNavBar}
                        >
                            Contact
                        </a>
                    </NavLink>  
                </div>
            </div>    
        </nav>
    )
}

export default Navbar;