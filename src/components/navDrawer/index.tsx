import { Drawer as DrawPrimitive } from 'vaul';
import { cn } from '../utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { NavItemProps, NavItem } from './navItem';

export interface NavDrawerProps {
  navItems: NavItemProps[];
  className?: string;
  pathname: string;
  isOpen: boolean; // New prop to control the open state
  onToggle: () => void; // New prop to handle toggle action
}

export function NavDrawer({ navItems, className, pathname, isOpen, onToggle }: NavDrawerProps) {
  const currentNavItem = navItems.find((item) => item.href === pathname) || navItems[0];

  if (!currentNavItem) return null;

  return (
    <DrawPrimitive.Root open={isOpen} onOpenChange={onToggle} direction='left'>
      <DrawPrimitive.Trigger asChild>
        <div className="cursor-pointer" onClick={onToggle}>
          <NavItem name={currentNavItem.name} href={currentNavItem.href} icon={currentNavItem.icon} />
        </div>
      </DrawPrimitive.Trigger>
      <DrawPrimitive.Overlay className="hidden" />
      <DrawPrimitive.Portal>
        <DrawPrimitive.Content className={cn("fixed left-0 top-0 h-full w-64 bg-surface shadow-lg p-4", className)}>
          <VisuallyHidden>
            <DrawPrimitive.Title>Navigation Menu</DrawPrimitive.Title>
          </VisuallyHidden>
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <nav>
            {navItems.map((item) => (
              <NavItem key={item.href} name={item.name} href={item.href} icon={item.icon} />
            ))}
          </nav>
          <DrawPrimitive.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onToggle}>✕</DrawPrimitive.Close>
        </DrawPrimitive.Content>
      </DrawPrimitive.Portal>
    </DrawPrimitive.Root>
  );
}