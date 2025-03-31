export interface IUserPageHeader {
    title: string;
    children: React.ReactNode
}

export default function UserPageHeader({title, children} : IUserPageHeader) {
    return(
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}