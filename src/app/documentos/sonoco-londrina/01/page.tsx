import { PDFViewer } from "@/components/PDFViewer";
import Image from "next/image";
import logo from "@/assets/aton-logo.png"
import Link from "next/link";
import { PiFilePdfLight } from "react-icons/pi";

export default function SonocoLondrina() {
    const pdfFile = "https://atonsolucoes.com.br/wp-content/uploads/2024/08/Skid_Prichasso_SONOCO_2024_V2_R0.pdf"
    return (

        <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center w-full pt-20 lg:hidden">
                <Image src={logo} alt="aton soluções técnicas" width={150} height={0} className="flex w-[150px] h-auto justify-center items-center" />
            </div>
            <PDFViewer url={pdfFile} />
            <div className="bg-zinc-50 rounded-lg mt-6 w-3/4">
                <div className="flex flex-col justify-center items-center mt-14 mb-14 lg:hidden">
                    <PiFilePdfLight className="h-9 w-9" />
                    <div className=" bg-blue-700 text-white rounded-3xl w-20 py-3 mt-6 ">
                        <Link href={pdfFile} target="_blank" className="flex justify-center items-start lg:hidden">
                            abrir
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
