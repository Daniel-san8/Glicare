import IconPlayStore from "@/public/svg/icon-play-store";
import Button from "./ui/button";
import IconAppleStore from "@/public/svg/icon-apple-store";

export default function CallToDownload() {
  return (
    <section className="lg:px-8">
      <div className="flex items-end mx-8 rounded-3xl bg-gradient-background h-full lg:pt-36 lg:mx-16">
        <div className="flex flex-col justify-between px-4 py-10 gap-16 text-center h-full lg:flex-row lg:items-center lg:text-start">
          <div className="flex flex-col lg:gap-6 font-inter  lg:px-10  ">
            <div className="flex flex-col  gap-4">
              <h1 className="font-medium p-2 text-4xl text-blue-dark lg:w-480 lg:text-6xl/tight">
                Seu controle da diabetes muito mais simples!
              </h1>
              <p className="font-normal text-gray-dark text-xl lg:w-400">
                Se alimente nos horários certos, registre o histórico da sua
                glicemia e configure lembretes para medir a glicose.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-6">
              <p className="font-medium text-xl ">
                Baixe o Glicare agora e transforme sua saúde!
              </p>
              <div className="flex gap-8 pb-10">
                <a
                  href="https://play.google.com/store"
                  aria-label="Baixar na Play Store"
                  target="_blank"
                >
                  <IconPlayStore />
                </a>
                <a
                  href="https://apps.apple.com"
                  aria-label="Baixar na Apple Store"
                  target="_blank"
                >
                  <IconAppleStore />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-48 lg:hidden">
            <Button classAttributes="bg-primary w-full">
              Baixe o Glicare
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
