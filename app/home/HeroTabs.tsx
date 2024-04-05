import { CiServer } from "react-icons/ci";
import { FaJava, FaReact, FaAws, FaDocker } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { PiFileSqlLight } from "react-icons/pi";
import { SiCplusplus, SiWireshark } from "react-icons/si";
import {
    TbBrandPython,
    TbBrandTypescript,
    TbBrandNextjs,
} from "react-icons/tb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const iconMap = {
    Languages: [
        { name: "Python", Icon: TbBrandPython },
        { name: "C++", Icon: SiCplusplus },
        { name: "Java", Icon: FaJava },
        { name: "TypeScript", Icon: TbBrandTypescript },
    ],

    Frontend: [
        { name: "React", Icon: FaReact },
        { name: "Next.js", Icon: TbBrandNextjs },
    ],

    Infrastructure: [
        { name: "AWS", Icon: FaAws },
        { name: "Linux", Icon: CiServer },
        { name: "Docker", Icon: FaDocker },
    ],

    DevTools: [
        { name: "Jenkins", Icon: GoGear },
        { name: "SQL", Icon: PiFileSqlLight },
        { name: "Wireshark", Icon: SiWireshark },
    ]
};

const HeroTabs = () => {
    return (
        <Tabs defaultValue="Languages" className="w-full max-w-md mx-auto">
            <TabsList aria-label="Manage your settings">
                {Object.keys(iconMap).map((category) => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
            </TabsList>

            {Object.entries(iconMap).map(([category, iconsList]) => (
                <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-4 gap-4 mt-8">
                        {iconsList.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <tech.Icon className="text-white text-3xl" />
                                <span className="text-white text-lg">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}


export default HeroTabs