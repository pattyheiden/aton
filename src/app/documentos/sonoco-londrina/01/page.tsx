import { PDFViewer } from "@/components/PDFViewer";
import Image from "next/image";
import logo from "@/assets/aton-logotipo-branca.png"
import { FaGripLines, FaWhatsapp } from "react-icons/fa6";
import { BsEnvelopeAt } from "react-icons/bs";
import { Footer } from "@/components/Footer";

export default function SonocoLondrina() {
    const pdfFile = "https://atonsolucoes.com.br/wp-content/uploads/2024/08/Skid_Prichasso_SONOCO_2024_V2_R0.pdf"
    return (
        <div className="flex flex-col items-center lg:bg-zinc-950 bg-zinc-800 text-zinc-100">
            <div className="flex flex-col justify-center items-center w-full pt-14 lg:hidden">
                <Image src={logo} alt="aton soluções técnicas" width={150} height={0} className="flex w-[150px] h-auto justify-center items-center" />
            </div>
            <div className="flex mt-10 mb-6 justify-center items-center gap-2 lg:mt-6">
                <FaGripLines className="h-4 w-4 " />
                <span className=" text-base uppercase font-semibold ">SONOCO LONDRINA</span>
                <FaGripLines className="h-4 w-4" />
            </div>

            <PDFViewer url={pdfFile} />
            <Footer />
        </div>
    )
}
