import { cva } from "class-variance-authority";
import { LucideIcon, Link } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../utils";

export interface NavItemProps {
    name: string;
    href: string;
    icon: LucideIcon;
  }
  
  const navItemStyles = cva("flex grow items-center gap-2 p-3 rounded-md transition", {
    variants: {
      selected: {
        primary: ["bg-primary-container", "text-on-primary-container"],
        tertiary: ["bg-tertiary-container", "text-on-tertiary-container"],
      },
    },
    defaultVariants: {
      selected: "tertiary",
    },
  });
  
export function NavItem({ name, href, icon: Icon }: NavItemProps) {
    const pathname = usePathname();
    return (
      <Link href={href}>
        <span className={cn(navItemStyles({ selected: pathname === href ? "primary" : "tertiary" }))}>
          <Icon className="w-5 h-5" />
          {name}
        </span>
      </Link>
    );
  }
