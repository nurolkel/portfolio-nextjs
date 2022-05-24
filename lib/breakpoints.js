// sm: 425px md: 768px lg: 1024px xl:1200px
const size = {
    mobile: `425px`,
    tablet: `768px`,
    desktop: `1200px`,
}

export const breakpoints = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
}