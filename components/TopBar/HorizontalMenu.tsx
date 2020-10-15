import { List } from 'components/@basic';

export const menuItems = Object.entries({
  About: '/#about',
  Tokenomics: '/#tokenomics',
  Roadmap: '/#roadmap',
  FAQ: '/#faq',
  Socials: '/#footer',
  Blog: "/blog",
  Application: '/application',
});

const HorizontalMenu = () => (
  <List fontSize={2} display="flex">
    {menuItems.map(([label, href]) => (
      <List.Item key={href} ml={4}>
        <a href={href}>{label}</a>
      </List.Item>
    ))}
  </List>
);

export default HorizontalMenu;
