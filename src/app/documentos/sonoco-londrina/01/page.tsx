import { PDFViewer } from "@/components/PDFViewer";
import Image from "next/image";
import logo from "@/assets/aton-logo.png"

export default function SonocoLondrina() {
    const pdfFile = "https://atonsolucoes.com.br/wp-content/uploads/2024/08/Skid_Prichasso_SONOCO_2024_V2_R0.pdf"
    return (

        <div>
            <div className="flex flex-col justify-center items-center w-full pt-20 lg:hidden">
                <Image src={logo} alt="aton soluções técnicas" width={150} height={0} className="flex w-[150px] h-auto justify-center items-center" />
            </div>
            <PDFViewer url={pdfFile} />
        </div>
    )
}