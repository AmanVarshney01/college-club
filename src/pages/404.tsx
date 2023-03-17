import mrincredible from 'public/cute_mr_incredible.png'
import Image from "next/image";
import "./errorpage.css"

export default function Custom404() {

    return (<div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: "100%",
            gap: '2rem',
            backgroundColor: '#121212',
            margin: '0px',
            padding: '0px',
        }}>
            <Image style={{
                width: 'auto', height: '35%',
            }} src={mrincredible} alt={"cute mr.incredible"}/>

            <h1 style={{
                fontSize: '3rem', fontFamily: 'monospace', color: '#F2F2F2'
            }}>404 - Page Not Found</h1>
        </div>);
};
