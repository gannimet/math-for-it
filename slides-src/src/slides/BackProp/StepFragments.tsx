export default function BackPropStepFragments({ count }: { count: number }) {
    return (
        <>
            {Array.from({ length: count }, (_, i) => {
                return (
                    <span key={i} className="fragment" data-fragment-index={i} aria-hidden="true" />
                );
            })}
        </>
    );
}
