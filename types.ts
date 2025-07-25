

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  imgSrc: string;
  title: string;
  description: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface StrengthItem {
  title: string;
}

export interface Work {
  imgSrc: string;
  title: string;
  category: string;
  description?: string;
}

export interface Client {
  name: string;
  logo?: string;
}