import { createGlobalStyle } from 'styled-components'
import { breakpoints } from '../lib/breakpoints';

const GlobalStyles = createGlobalStyle`
    :root {
        --clr-black: 228 31% 6%;
        --clr-metal-grey: 213 39% 20%;
        
        --clr-light-grey: 210 1% 78%;
        --clr-dark-grey: 208 11% 48%;
        --clr-purple: 271 90% 49%;
        --clr-white: 0 0% 100%;
        --clr-v-blue: 255 100% 42%;
        --clr-dark-blue: 255 100% 28%;

        --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
        --fs-800: 3.5rem;
        --fs-700: 1.5rem;
        --fs-650: 1.3rem;
        --fs-600: 1rem;
        --fs-500: 1rem;
        --fs-400: 0.9375rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;

        --max-width: 900px;
        --fixed-width: 600px;
        
        @media ${breakpoints.tablet} {
            --fs-900: 9.375rem;
            --fs-800: 5rem;
            --fs-700: 2.5rem;
            --fs-650: 2.25rem;
            --fs-600: 1.5rem;
            --fs-500: 1.25rem;
            --fs-400: 1rem;
        }

        @media ${breakpoints.desktop} {
            --fs-800: 6.25rem;
            --fs-700: 3.5rem;
            --fs-650: 2.75rem;
            --fs-600: 2rem;
            --fs-500: 1.75rem;
            --fs-400: 1.125rem;
        }
    }
/* Reset */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    picture {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }


    html {
        font-size: 20px;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding:0;
        line-height: 1.5;
        background-color: hsl( var(--clr-black));
        min-height: 100vh;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
    }
    
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    /* utility */
    .flex {
        display: flex;
        gap: var(--gap, 1rem); 
    }

    .flex--gap {
        --gap: 2rem;
    }


    .grid {
        display: grid;
        gap: var(--gap, 1rem); 
    }

    
    .d-block {
        display: block;
    }

    .d-none {
        display: none;
    }

    .position-relative {
        position: relative;
    }

    .position-absolute {
        position: absolute;
    }

    .flow > *:where(:not(:first-child)) {
        margin-top: var(--flow-space, 1rem);
    }

    .flow--space-small {
        --flow-space: .75rem
    }

    .flow--space-medium {
        --flow-space: 1.5rem;
    }

    .flow--space-large {
        --flow-space: 2.25rem;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border: 0;
    }
    
    .bg-black {
        background-color: hsl( var(--clr-black));
    }


    .bg-black--filter {
        background-color: hsl( var(--clr-black) /.75);
        backdrop-filter: blur(2rem);
    }

    .bg-white {
        background-color: hsl( var(--clr-white))
    }

    .bg-white--filter {
        background-color: hsl( var(--clr-white) /.75 );
        backdrop-filter: blur(3rem);
    }

    .bg-dark-blue {
        background-color: hsl( var(--clr-dark-blue));
    }

    .text-light-grey {
        color: hsl( var(--clr-light-grey));
    }

    .text-purple {
        color: hsl( var(--clr-purple));
    }

    .text-blue {
        color: hsl( var(--clr-v-blue));
    }

    .text-dark-blue {
        color: hsl( var(--clr-dark-blue));
    }

    .text-white {
        color: hsl( var(--clr-white));
    }

    .text-black {
        color: hsl( var(--clr-black));
    }

    .text-center {
        text-align: center;
    }

    .letter-spacing-1 { 
        letter-spacing: 4.75px; 
    } 
    .letter-spacing-2 { 
        letter-spacing: 2.7px; 
    } 
    .letter-spacing-3 { 
        letter-spacing: 2.35px; 
    } 

    .uppercase { 
        text-transform: uppercase; 
    }

    .text-bold {
        font-weight: bold;
    }

    .fs-900 { 
        font-size: var(--fs-900); 
    }
    .fs-800 { 
        font-size: var(--fs-800); 
    }
    .fs-700 { 
        font-size: var(--fs-700); 
    }
    .fs-650 { 
        font-size: var(--fs-650); 
    }
    .fs-600 { 
        font-size: var(--fs-600); 
    }
    .fs-500 { 
        font-size: var(--fs-500); 
    }
    .fs-400 { 
        font-size: var(--fs-400); 
    }
    .fs-300 { 
        font-size: var(--fs-300); 
    }
    .fs-200 { 
        font-size: var(--fs-200); 
    }

    .fs-900,
    .fs-800,
    .fs-700,
    .fs-600 {
        line-height: 1.1;
    }

    .height-1 {
        max-height: 400px;

        @media ${breakpoints.tablet} {
            max-height: 650px;
        }
    }

    .padding-main {
        --padding: 1rem;
        padding-top: var(--padding);
        padding-bottom: var(--padding);
    }

    .padding-inline {
        --padding: 1rem;
        padding-inline: var(--padding,1rem);
    }
    
    .padding-inline--2 {
        --padding: 2rem;
        padding-inline: var(--padding);
    }

    .padding-inline--small {
        padding-inline: 0.7rem;
    }

    .padding-top-bottom {
        --padding: 1rem;
        padding-top: var(--paddding, 1rem);
        padding-bottom: var(--paddding, 1rem);
        
        @media ${breakpoints.tablet} {
            --padding: 3rem;
        }
        @media ${breakpoints.desktop} {
            --padding: 5rem;
        }
    }
    .padding-top-bottom--big {
        --padding: 2.5rem;
        padding-top: var(--paddding, 2.5rem);
        padding-bottom: var(--paddding, 2.5rem);
        
        @media ${breakpoints.tablet} {
            --padding: 3.25rem;
        }
        @media ${breakpoints.desktop} {
            --padding: 6rem;
        }
    }

    .padding-relative-bottom {
        padding-bottom: 125%;
    }

    .margin-top-bottom {
        --margin: 1rem;
        margin-top: var(--margin, 1rem);
        margin-bottom: var(--margin, 1rem);
    }
    

    .img {
        width: 100%;
        height: 100%;
        
        @media ${breakpoints.desktop} {
            border-radius: 15px;
        }
    }

    .a-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;
    }

    /* components */
    .navbar {
        position: sticky;
        top:0;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        height: 100px;
    }

    .nav-center {
        width: 100%;
        padding-inline: 1rem;
        max-width: var(--max-width);
    }

    .nav-toggle {
        @media ${breakpoints.desktop} {
            display: none;
        }
    }

    .nav-header {
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    
    .nav-links {
        --gap: 0rem;
        position: fixed;
        z-index: 1001;
        top: 0;
        right: -100%;
        overflow-x: hidden;
        justify-content: space-evenly;
        flex-direction: column;
        
        transition: right 500ms ease-out;
        
        @media ${breakpoints.desktop} {
            position: static; 
        }
    }

    .nav-links.show-links {
        background-color: hsl( var(--clr-black) /.50);
        backdrop-filter: blur(2rem);
        top:0;
        right: 0;
        width: 65vw;
        height: 100vh;

        @media ${breakpoints.desktop} {
            background-color: none;
        }
    }

    @media ${breakpoints.desktop} {
        
        .nav-center {
            display: flex;
            align-items: center;
        }
        .nav-header {
            padding: 0;
            margin-right: 2rem;
            height: auto;
        }

        .nav-btn {
            display: none;
        }
        .nav-links {
            height: auto !important;
            flex-direction: row;
            align-items: center;
            width: 100%;
        }
        .nav-link {
            padding: 0;
            border-top: none;
            margin-right: 1rem;
            
        }
    }

    .underline-indicators > * {
        cursor: pointer;
        padding: var(--underline-gap, 1rem) 0;
        border: 0;
        border-bottom: .2rem solid hsl( var(--clr-v-blue) / 0 );
        background-color: transparent;
    }

    .underline-indicators > *:hover,
    .underline-indicators > *:focus {
        border-color: hsl( var(--clr-v-blue) / .5);
    }

    .underline-indicators > .active,
    .underline-indicators > [aria-current="page"] {
        color: hsl( var(--clr-white) / 1);
        border-color: hsl( var(--clr-white) / 1);
    }

    .nav-link {
        display: block;
        text-align: center;
        
        padding: 1rem 0;
        transition: var(--transition);
        
        &[aria-current="page"] {
                color:hsl( var(--clr-v-blue));
            }
    }
    
    .contact-link {
        display: flex;
        justify-content: center;
    }
    .contact-link a {
        padding: 0.15rem 1rem;
    }

    .icon-container {
        justify-content: start;
        align-items: center;

        @media ${breakpoints.desktop} {
            
        }
    }

    .main-content {
        position: relative;
        box-sizing: border-box;
    }

    .relative-container {
        z-index: 100;
    }

    .img-gallery {
        width: 100%;
        aspect-ratio: 1;
    }

    .icons {
        height: 50px;
        width: 50px;
        cursor: pointer;
        transition: transform 500ms ease-out;
    }

    .icons:hover,
    .icons:focus {
        transform: scale(125%);
    }

    .icons-1 {
        width: 100%;
        height: 75px;
    }

    .link-btn {
        padding: 1.5rem 2rem;
        background-color: hsl( var(--clr-purple));
        border-radius: 15px;
        margin: 0 auto;
        transition: background-color 500ms ease-out;
    }

    .link-btn:hover,
    .link-btn:focus {
            background-color: hsl( var(--clr-purple) / .50);
        }

    .grid-container {
        --gap: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        gap: var(--gap, 1rem);

        @media ${breakpoints.desktop} {
            grid-template-columns:  minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
        }
    }

    .grid-container > .card {
        @media ${breakpoints.desktop} {
            &:nth-of-type(odd) {
                grid-column: 2;
            }
            &:nth-of-type(even) {
                grid-column: 3;
            }
        }
    }


    .card {
        position: relative;
        z-index: 20;
        box-shadow: 4px 4px 4px hsl(var(--clr-black)/ .15);
        
        display: grid;
        width: 80%;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        --gap: 1rem;
        gap: var(--gap, 1rem);
    }
`

export default GlobalStyles;