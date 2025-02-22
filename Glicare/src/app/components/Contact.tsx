import Image from "next/image";

const Contact = () => {
  return (
    <section className="min-h-screen w-full flex-shrink-0 bg-[#F5F5F5]">
      <div className="text-left py-12 px-6 bg-gray-100">
        <h2 className="text-[24px] sm:text-[24px] lg:text-[28px] font-medium text-[#1C1C1C] leading-[34px] pl-6 lg:pl-[84px] font-inter w-full pr-16">
          Entre em contato com o Glicare
        </h2>
        <p className="text-[#6F6F6F] mt-2 pl-6 lg:pl-[84px] font-inter pr-10 text-[18px] lg:text-[20px] sm:text-[18px] font-normal leading-[24px] text-left w-full sm:w-[700px]">
          Caso ainda tenha dúvidas ou esteja com problema para utilizar o
          Glicare, você pode entrar em contato conosco abaixo:
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-[64px] ml-[200px]">
          <div className="w-[336px] h-[310px] flex-shrink-0 bg-[#FFF] rounded-[16px] p-6 text-center hidden md:block">
            <Image
              src="/Images/Icons/ÍCONE _ Telefone.svg"
              alt="Ícone de Telefone"
              width={40}
              height={40}
              className="mx-auto mt-[54px] fill-[#1C1C1C]"
            />
            <h3 className="font-semibold text-lg mt-4 text-[#1C1C1C]">
              Nos contate diretamente
            </h3>
            <p className="text-[#0D1978] text-center font-inter text-[20px] font-semibold leading-normal w-[214px] h-[22px] mt-[78px] ml-6">
              +55 12 34567-8901
            </p>
          </div>

          <div className="w-[336px] h-[310px] flex-shrink-0 bg-[#FFF] rounded-[16px] p-6 text-center hidden md:block">
            <Image
              src="/Images/Icons/ÍCONE _ WhatsApp.svg"
              alt="Ícone de WhatsApp"
              width={40}
              height={40}
              className="mx-auto mt-[54px] fill-[#1C1C1C]"
            />
            <h3 className="font-semibold text-lg mt-4 text-[#1C1C1C]">
              Nos chame no WhatsApp
            </h3>
            <a
              href="https://wa.me/5512345678901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex justify-center items-center gap-2 mt-[70px] px-6 py-3 bg-[#4568FC] text-white rounded-[8px] hover:bg-[#3b56d7]">
                <span className="text-[#FFF] text-center text-[16px] font-semibold leading-normal font-inter">
                  Chamar no WhatsApp
                </span>
              </button>
            </a>
          </div>

          <div className="w-[336px] h-[310px] flex-shrink-0 bg-[#FFF] rounded-[16px] p-6 text-center hidden md:block">
            <Image
              src="/Images/Icons/ÍCONE _ Email.svg"
              alt="Ícone de E-mail"
              width={40}
              height={40}
              className="mx-auto mt-[54px] fill-[#1C1C1C]"
            />
            <h3 className="font-semibold text-lg mt-4 text-[#1C1C1C]">
              Entre em contato pelo e-mail
            </h3>
            <p className="text-[#0D1978] mt-[78px] font-inter text-[20px] font-semibold leading-normal">
              contato@glicare.com
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;