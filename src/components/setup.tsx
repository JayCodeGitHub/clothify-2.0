import { useEffect } from "react";

export default function Setup() {
    useEffect(() => {
        console.log("Hello from Setup");
    }, [])
    return null;
}