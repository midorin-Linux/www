import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DiscordLogo from "@/components/icons/DiscordLogo";
import TwitterLogo from "@/components/icons/TwitterLogo";
import GithubLogo from "@/components/icons/GithubLogo";

export default function Home() {
    return (
        <div className="flex h-screen flex-row">
            <div className="fixed h-screen w-80 flex-shrink-0 border-r border-gray-200 bg-slate-50 pt-10 pl-5 pr-5 flex flex-col">
                <Image
                    src="/avater-big.png"
                    alt="avater"
                    width={250}
                    height={250}
                    className="mx-auto rounded-full shadow"
                />
                <p className="pt-5 text-2xl font-medium">wayokan_</p>
                <nav>
                    <ul className="font-light text-gray-600">
                        <li className="flex items-center gap-2">
                            <TwitterLogo className="size-4" />
                            <a href="https://x.com/wayokan_beta" className="hover:text-blue-500 hover:underline">
                                @wayokan_beta
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <GithubLogo className="size-4" />
                            <a href="https://github.com/midorin-Linux" className="hover:text-blue-500 hover:underline">
                                @midorin-Linux
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col pt-5">
                    <Button variant="outline" asChild>
                        <a href="https://discord.gg/KXvEzpKkyK">
                            <DiscordLogo className="size-4" />
                            Join my Discord server
                        </a>
                    </Button>
                </div>
            </div>
            <div className="flex flex-1 flex-col pt-10 pl-85 pr-5">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Introduction
                </h2>
                <p className="pb-5 leading-7 [&:not(:first-child)]:mt-6">
                    ただの学生コーダー(自称)
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Skills
                </h2>
                <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Coding</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                主にRustなどのコンパイラ言語を扱うほか、Pythonなどの有名な言語も扱っています。
                                <br />
                                幅広くやっていますが専門はバックエンドと人工知能です。
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Design</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                Fusion360を使用したCADや、Blenderを使用した簡単なモデリング程度ならできます。
                                <br />
                                KiCADを使用した基盤設計は勉強中です。
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Others</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                動画編集は前までやっていましたが、腕はもう落ちました。
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}