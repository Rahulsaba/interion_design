import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <>
            <div className="container grid md:grid-cols-4 gap-4 sm:grid-cols-1 justify-between px-5 pt-5">
                <div>
                    <ul>
                        <li>
                            Quick Links
                        </li>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Projects
                        </li>
                        <li>
                            Elegant Brick House
                        </li>
                        <li>
                            Elegant Cultural Center
                        </li>
                        <li>
                            Rustic Steel House
                        </li>
                        <li>
                            Modern Minimalist House
                        </li>
                        <li>
                            Eco Friendly House
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Reach Us
                        </li>
                        <li>
                            123 East 26th Street,Fifth Floor,New York, NY 10011
                        </li>
                        <li>
                            hello@archive.com

                            (212) 563-7765
                        </li>
                    </ul>
                </div>
                <div>
                    Subscribe to Newsletter

                    <div className="flex">
                        <Input type="text" placeholder="name@email.com" /> <Button>Subscribe</Button>
                    </div>
                    <ul className="flex gap-3">
                        <li>
                            f
                        </li>
                        <li>i</li>
                        <li>m</li>
                    </ul>
                </div>
            </div>

            <div className="container  grid grid-cols-2 gap-4 justify-between mt-4 bg-black text-white p-4">
                <div>
                    Copyright @2026, Archive
                </div>
                <div className="text-end">
                    Developed By Rahul Saba
                </div>
            </div>
        </>
    );
}
