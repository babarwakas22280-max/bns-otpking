export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
  };
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
};

export type MainNavItem = NavItem & {
  items?: NavItem[];
};

export type SidebarNavItem = NavItem & {
  items: NavItem[];
};