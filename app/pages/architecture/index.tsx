import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Architecture() {
    return (
        <>
            <section className="container">
                architecture
                <div className="grid grid-cols-2">
                    <div>
                        <ul>
                            <li>
                                Creating a Brighter Future for Property Owners
                            </li>
                            <li className="text-3xl">
                                State Your
                                Inspiration
                                Dream
                                Design
                                Inspiration
                                Dream
                                to Build a Future
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            In the world of architecture and construction, we're not just builders; we're creators of exceptional spaces. Our team is dedicated to delivering innovative designs and impeccable craftsmanship, leaving a lasting mark on both our clients and the landscape we shape.
                        </p>
                        <Button>
                            SEE DETAILS
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
