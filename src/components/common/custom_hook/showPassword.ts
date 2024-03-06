import { useState } from "react";

const usePassword = (val: boolean) => {
    const [showPassword, setShowPassword] = useState(val);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return { showPassword, handleClickShowPassword };
}

export default usePassword;