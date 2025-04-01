import { useEffect, useState } from "react";
import { Devices } from "../enum/Devices";


export const useDevice = () => {
    const [device, setDevice] = useState(Devices.Unknown);

    useEffect(() => {
        const handleResize = () => {
            const dev = window.innerWidth < 768 ? Devices.Mobile : Devices.Desktop
            setDevice(dev)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return device
}

