export const  PageWrapper = ({children, ...props}: {children: React.ReactNode}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}