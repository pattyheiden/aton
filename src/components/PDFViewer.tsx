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
        <div className="lg:hidden h-screen w-full">
            <iframe
                src={url}
                style={{ width: '100%', height: '50%', border: 'none' }}
            />
        </div>
        </>
    )
}