import LinkType from "./link_type";

type PortofolioType = {
    logo?: string,
    logoAlt: string,
    illustration?: string,
    title: string,
    description: string,
    place: string,
    previews: string[],
    links: LinkType[]
}

export default PortofolioType;