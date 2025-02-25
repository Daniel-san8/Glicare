import IconPlayStore from "@/public/svg/icon-play-store";
import Button from "./ui/button";
import IconAppleStore from "@/public/svg/icon-apple-store";

export default function CallToDownload() {
  return (
    <section>
      <div className="flex items-end mx-8 rounded-3xl bg-gradient-background h-full lg:pt-36 lg:mx-16">
        <div className="flex flex-col justify-between text-center h-full lg:flex-row lg:items-center lg:text-start">
          <div className="flex flex-col font-inter gap-16 p-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-4xl text-secondaryDark lg:w-[30rem] lg:text-6xl/tight">
                Seu controle da diabetes muito mais simples!
              </h1>
              <p className="font-normal text-xl text-colorColorDark lg:w-[25rem]">
                Se alimente nos horários certos, registre o histórico da sua glicemia e configure lembretes para medir a glicose.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <p className="font-medium text-xl text-colorColorDark">
                Baixe o Glicare agora e transforme sua saúde!
              </p>
              <div className="flex gap-8">
                <a href="#" aria-label="Baixar na Play Store">
                  <IconPlayStore />
                </a>
                <a href="#" aria-label="Baixar na Apple Store">
                  <IconAppleStore />
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 lg:hidden">
            <Button classAttributes="bg-secondary w-full">Baixe o Glicare</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
