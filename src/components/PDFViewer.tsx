import Link from "next/link"
import { PiFilePdfLight } from "react-icons/pi"

interface PDFViewerProps {
    url: string
}
export function PDFViewer({ url }: PDFViewerProps) {
    return (
        <>
        <div className="lg:flex h-screen w-full hidden">
            <iframe
                src={url}
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
        <div className="flex flex-col mb-14 bg-zinc-300 rounded-lg w-3/4 lg:hidden">
                <div className="flex flex-col justify-center items-center mt-14 mb-14 lg:hidden">
                    <PiFilePdfLight className="h-9 w-9 text-zinc-950" />
                    <div className=" bg-blue-700 text-white rounded-3xl w-20 py-3 mt-6 ">
                        <Link href={url} target="_blank" className="flex justify-center items-start lg:hidden">
                            abrir
                        </Link>
                    </div>
                </div>
            </div>
        {/* <div className="lg:hidden h-screen w-full">
            <iframe            
                src={url}
                style={{ width: '100%', height: '50%', border: 'none' }}
            />
        </div> */}
        </>
    )
}

