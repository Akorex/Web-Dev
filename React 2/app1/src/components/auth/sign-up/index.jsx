import CommonForm from "@/components/common-form"
import { signUpFormControls } from "@/config"
import { useForm } from "react-hook-form"

function SignUp() {
    return <div> Sign Up

        <CommonForm formControls={signUpFormControls} btnText={"Sign Up"} />



    </div>
}

export default SignUp