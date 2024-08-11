import Image from "next/image";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import ATON from "@/assets/aton-logotipo-branca.png"
import HMSIS from "@/assets/hmsis-logo-branca.png"
import Link from "next/link";

export function Footer() {
    return (
        <div className="flex flex-col bg-zinc-950 pb-6 text-zinc-100 w-full justify-center items-center lg:flex-row lg:items-start gap-10">
            <div className="flex flex-col gap-2 lg:hidden">
                <div className="flex justify-center mt-10">
                    <Image src={ATON} alt="Aton Soluções Técnicas" width={110} height={0} className="w-[110px] h-auto" />
                </div>
                <span className="flex mt-6 mb-6 text-base uppercase font-semibold justify-center">contato</span>
                <Link href="https://api.whatsapp.com/send?phone=5547996173103" target="_blank" className="flex justify-center">
                    <div className="flex gap-x-2">
                        <FaWhatsapp className="h-6 w-6" />
                        <span>(47) 99617-3103</span>
                    </div>
                </Link>
                <div className="flex gap-x-2 justify-center">
                    <BsEnvelopeAt className="h-6 w-6" />
                    <span>comercial@atonsolucoes.com.br</span>
                </div>
                <span className="flex mt-10 text-base uppercase font-semibold justify-center">desenvolvimento</span>
                <Link href="https://www.hmsis.com.br/" target="_blank" className="flex justify-center">
                    <Image src={HMSIS} alt="HMsis Sistemas" width={100} height={0} className="w-[100px] h-auto" />
                </Link>
            </div>
            <div className="lg:flex hidden">
                    <Image src={ATON} alt="Aton Soluções Técnicas" width={130} height={0} className="w-[130px] h-auto my-6 mx-4" />
                </div>
            <div className="lg:flex flex-col gap-2 hidden">                
                <span className="flex mt-6 mb-6 text-base uppercase font-semibold ">contato</span>
                <Link href="https://api.whatsapp.com/send?phone=5547996173103" target="_blank">
                    <div className="flex gap-x-2">
                        <FaWhatsapp className="h-6 w-6" />
                        <span>(47) 99617-3103</span>
                    </div>
                </Link>
                <div className="flex gap-x-2">
                    <BsEnvelopeAt className="h-6 w-6" />
                    <span>comercial@atonsolucoes.com.br</span>
                </div>
            </div>
            <div className="min-w-[100px]">
                
            </div>
            <div className="lg:flex flex-col hidden">
                <span className="flex mt-6  text-base uppercase font-semibold">desenvolvimento</span>
                <Link href="https://www.hmsis.com.br/" target="_blank">
                    <Image src={HMSIS} alt="HMsis Sistemas" width={100} height={0} className="w-[100px] h-auto" />
                </Link>
            </div>
        </div>
    )
}