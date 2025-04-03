
import { NavDrawer } from "@/components/navDrawer";
import { Info, Briefcase, Mail, HomeIcon } from "lucide-react";
import { NavItemProps } from "../navDrawer/navItem";

export interface HeaderProps {
    navItems: NavItemProps[]
    pathname: string
}

export function Header({navItems, pathname}: HeaderProps) {


    return (
        <div className="flex flex-row w-full">
            <div className="h-full ">
                <NavDrawer pathname={pathname} navItems={navItems} />
            </div>
            <div className="flex flex-col rounded-lg">
                <div className="bg-surface-container-lowest p-2">
                    <h1 className="text-on-surface font-bold text-2xl text-center">
                        Rosla Technologies
                    </h1>
                </div>
                <div className="bg-primary text-wrap p-4 text-on-primary">
                    <h3>
                        Rosla Technolgies is a green engery company focused on sustainability
                    </h3>
                </div>
            </div>
        </div>
    );
}
