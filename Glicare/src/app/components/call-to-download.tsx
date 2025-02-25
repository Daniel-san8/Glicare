import Button from "./ui/button";

export default function CallToDownload() {
  return (
    <section>
      <div className="p-8 m-8 rounded-3xl bg-gradient-background h-screen">
        <div className="flex flex-col justify-between text-center h-full">
          <div className="flex flex-col font-inter gap-6 ">
            <h1 className="font-medium text-4xl text-secondaryDark ">
              Seu controle da diabetes muito mais simples!
            </h1>
            <p className="font-normal text-xl text-colorColorDark ">
              Se alimente nos horários certos, registre o histórico da sua
              glicemia e configure lembretes para medir a glicose.
            </p>
          </div>
          <Button classAttributes="bg-secondary w-full lg:hidden">Baixe o Glicare</Button>
        </div>
      </div>
    </section>
  );
}
