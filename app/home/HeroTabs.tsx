import { CiServer } from "react-icons/ci";
import { FaJava, FaReact, FaAws, FaDocker } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { PiFileSqlLight } from "react-icons/pi";
import { SiCplusplus, SiWireshark, SiPostgresql } from "react-icons/si";
import {
    TbBrandPython,
    TbBrandTypescript,
    TbBrandNextjs,
    TbBrandPrisma
} from "react-icons/tb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataScience from "../data/page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap = {
    Languages: [
        { name: "Python", Icon: TbBrandPython },
        { name: "C++", Icon: SiCplusplus },
        { name: "Java", Icon: FaJava },
        { name: "TypeScript", Icon: TbBrandTypescript },
    ],

    WebDevelopment: [
        { name: "React", Icon: FaReact },
        { name: "Next.js", Icon: TbBrandNextjs },
        { name: "AWS", Icon: FaAws },
        { name: "Linux", Icon: CiServer },
        { name: "Docker", Icon: FaDocker },
        { name: "Jenkins", Icon: GoGear },
        { name: "Postgres", Icon: SiPostgresql },
        { name: "Prisma", Icon: TbBrandPrisma }
    ],

    DataScience: [
        { name: "SQL", Icon: PiFileSqlLight },
    ],

    Tools: [
        { name: "Wireshark", Icon: SiWireshark },
    ]
};

const HeroTabs = () => {
    return (<>
        {/* tabs component (desktop) */}
        <Tabs defaultValue="Languages" className="hidden md:block w-full max-w-md mx-auto">
            <TabsList aria-label="Manage your settings">
                {Object.keys(iconMap).map((category) => (
                    <TabsTrigger key={category} value={category} className="text-indigo-100 data-[state=active]:border-white data-[state=active]:text-white">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                    </TabsTrigger>
                ))}
            </TabsList>

            {Object.entries(iconMap).map(([category, iconsList]) => (
                <TabsContent key={category} value={category} className="min-h-[150px]">
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

        {/* accordion component (mobile) */}
        <Accordion type="single" collapsible className="md:hidden w-2/3 text-white">
            {Object.entries(iconMap).map(([category, iconsList]) => (
                <AccordionItem key={category} value={category}>
                    <AccordionTrigger>{category.replace(/([A-Z])/g, ' $1').trim()}</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-4">
                            {iconsList.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <tech.Icon className="text-3xl" />
                                    <span className="text-lg">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </>
    )
}


export default HeroTabs