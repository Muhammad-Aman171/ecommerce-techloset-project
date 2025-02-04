import BoxImg from "../assets/imgs/box-tick.png";
import CrownImg from "../assets/imgs/crown.png";
import SheildImg from "../assets/imgs/shield-security.png";
import OrganizationImg1 from "../assets/imgs/organization1.png";
import OrganizationImg2 from "../assets/imgs/organization2.png";
import OrganizationImg3 from "../assets/imgs/organization3.png";
import OrganizationImg4 from "../assets/imgs/organization4.png";
import OrganizationImg5 from "../assets/imgs/organization5.png";
import LatestProductImg1 from "../assets/imgs/latestProductimg1.png";
import LatestProductImg2 from "../assets/imgs/latestProductimg2.png";

export const BUTTONS = [
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
];

export const FACILITY_CARD = [
  { img: BoxImg, heading: "Free delivery", para: "on order above $5,000" },
  {
    img: CrownImg,
    heading: "Best quality",
    para: "best quality in low price",
  },
  {
    img: SheildImg,
    heading: "1 year warrenty",
    para: "Avaliable warranty here",
  },
];

export const ABOUT_US = [
  { bullets: "\u2022", title: "News" },
  { bullets: "\u2022", title: "Service" },
  { bullets: "\u2022", title: "Our policy" },
  { bullets: "\u2022", title: "Custmer care" },
  { bullets: "\u2022", title: "Faq’s" },
];
export const GET_HELP = [
  { bullets: "\u2022", title: "About us" },
  { bullets: "\u2022", title: "Contact us" },
  { bullets: "\u2022", title: "Return policy" },
  { bullets: "\u2022", title: "Privacy policy" },
  { bullets: "\u2022", title: "Payment policy" },
];
export const FIND_PRODUCT = [
  { bullets: "\u2022", title: "Brownze arnold" },
  { bullets: "\u2022", title: "Chronograph blue" },
  { bullets: "\u2022", title: "Smart phones" },
  { bullets: "\u2022", title: "Automatic watch" },
  { bullets: "\u2022", title: "Hair straighteners" },
];

export const ORGANNIZATION_SECTION = [
  { scr: OrganizationImg1, alt: "organizationImg does not show" },
  { scr: OrganizationImg2, alt: "organizationImg does not show" },
  { scr: OrganizationImg3, alt: "organizationImg does not show" },
  { scr: OrganizationImg4, alt: "organizationImg does not show" },
  { scr: OrganizationImg5, alt: "organizationImg does not show" },
];

export const NUMBER_CIRCLE = [57, 11, 33, 59];

export const HERO_BUTTON = [
  {
    content: "Shop now",
    className:
      "bg-primary text-white font-semibold text-[16px] leading-[24px] px-[32px] py-[18.5px] rounded-[20px] max-md:w-[300px] max-md:h-[61px] max-md:mx-0 ",
  },
  {
    content: "View more",
    className:
      "border border-tenTextColor text-tenTextColor font-semibold text-[16px] leading-[24px] px-[28px] py-[18.5px] rounded-[20px] max-md:w-[300px] max-md:h-[61px] max-md:mx-auto ",
  },
];

export const LATEST_NEWS_DATA = [
  {
    scr: LatestProductImg1,
  },
  {
    scr: LatestProductImg2,
  },
  {
    scr: LatestProductImg1,
  },
  {
    scr: LatestProductImg2,
  },
];
