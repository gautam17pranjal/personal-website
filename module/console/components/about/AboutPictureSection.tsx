import Image from "next/image";
import logo from '../../../../public/images/Gautam.jpeg';

const AboutPictureSection = () => {
    return (
        <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-md">
                <Image
                    loading="lazy"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    width={700}
                    height={700}
                    src={logo}
                    alt={"me"}
                />
            </div>
        </div>
    )
}

export default AboutPictureSection;