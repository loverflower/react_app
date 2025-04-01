import { useRef } from "react"

export const useDebounce = (callBack: any, delay: number) => {

    const timer = useRef<ReturnType<typeof setTimeout>>(null)

    const debouncedCallback =
        (...args: any) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                callBack(...args)
            }, delay)

        }
    return debouncedCallback


}

