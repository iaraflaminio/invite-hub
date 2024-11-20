export interface PageTemplateProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTemplate(props: PageTemplateProps) {
    return (
        <div className={``}>
            <main className={props.className}>
                {props.children}
            </main>
        </div>
    )
}