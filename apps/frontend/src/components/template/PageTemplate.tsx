export interface PageTemplateProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTemplate(props: PageTemplateProps) {
    return (
        <div className="
            flex flex-col items-center py-10
        ">
            <main className={props.className}>
                {props.children}
            </main>
        </div>
    )
}