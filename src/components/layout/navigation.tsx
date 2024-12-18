interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavigationItem({ href, children, onClick }: NavigationItemProps) {
  return (
    <a
      href={href}
      className="text-[#001F54] hover:text-[#DAA520] transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export function Navigation({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <>
      <NavigationItem href="#about" onClick={onItemClick}>About</NavigationItem>
      <NavigationItem href="#services" onClick={onItemClick}>Services</NavigationItem>
      <NavigationItem href="#contact" onClick={onItemClick}>Contact</NavigationItem>
    </>
  );
}