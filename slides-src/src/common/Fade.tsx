export default function Fade({
    visible,
    children,
}: {
    visible: boolean;
    children: React.ReactNode;
}) {
    return (
        <g className="fade" style={{ opacity: visible ? 1 : 0 }}>
            {children}
        </g>
    );
}
