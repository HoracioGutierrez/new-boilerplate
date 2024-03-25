interface PageProps {
    children?: React.ReactNode,
    title?: string
}

export default function Page({ children, title = "Page Demo" }: PageProps) {
    return (
        <main className="grow p-6 self-start pt-28 z-10">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {title}
            </h2>
            {children}
        </main>
    )
}