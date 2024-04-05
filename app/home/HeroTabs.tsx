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
        <Tabs defaultValue="languages" className="w-full max-w-md mx-auto">
            <TabsList aria-label="Manage your settings">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                <TabsTrigger value="devtools">Development Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
                <p>Languages</p>
            </TabsContent>
            <TabsContent value="frontend">
                <p>Frontend</p>
            </TabsContent>
            <TabsContent value="infrastructure">
                <p>Infrastructure</p>
            </TabsContent>
            <TabsContent value="devtools">
                <p>Development Tools</p>
            </TabsContent>
        </Tabs>

    )
}


export default HeroTabs