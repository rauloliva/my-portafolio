import { ReactNode } from 'react'

interface PProps {
    children: ReactNode
}

const P = ({ children }: PProps) => <p style={{ margin: '1rem 0' }}>{children}</p>;

export default P;
