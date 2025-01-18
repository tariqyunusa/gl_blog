import { useEffect } from "react";
import { textReveal } from "../animations/textReveal";

const useTextReveal = () => {
    useEffect(() => {
        textReveal()
    },[])
}
export default useTextReveal