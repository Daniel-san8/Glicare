import Circle from "@/public/svg/circle";
import IconAppleStoreDarkDesktop from "@/public/svg/icon-apple-store-dark-desktop";
import IconAppleStoreDarkMobile from "@/public/svg/icon-apple-store-dark-mobile";
import IconPlayStoreDarkDesktop from "@/public/svg/icon-play-store-dark-desktop";
import IconPlayStoreDarkMobile from "@/public/svg/icon-play-store-dark-mobile";

export default function CallToDownloadSecondary() {
    return <section className="my-16 bg-white">
        <div className="flex flex-col items-center px-9 text-center">
            <span className="pt-9"><Circle /></span>
            <p className="font-inter text-xl font-medium text-primary pt-6 pb-8 lg:pt-10">Baixe o Glicare agora e transforme sua saúde!</p>
        </div>
        <div className="flex justify-center px-6 pb-6 gap-4 lg:pb-9">
            <a
                target="_blank"
                className="lg:hidden"
                href="https://play.google.com/store"
                aria-label="Baixar na Play Store">
                <IconPlayStoreDarkMobile />
            </a>
            <a
                target="_blank"
                className="lg:hidden"
                href="https://apps.apple.com"
                aria-label="Baixar na Apple Store">
                <IconAppleStoreDarkMobile />
            </a>

            <a
                target="_blank"
                className="hidden lg:block"
                href="https://play.google.com/store"
                aria-label="Baixar na Play Store">
                <IconPlayStoreDarkDesktop />
            </a>
            <a
                target="_blank"
                className="hidden lg:block"
                href="https://apps.apple.com"
                aria-label="Baixar na Apple Store">
                <IconAppleStoreDarkDesktop />
            </a>
        </div>
    </section>
}