import CommonForm from "@/components/common-form"
import { useForm } from "react-hook-form"
import { signInFormControls } from "@/config"

function SignIn() {

    const formData = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function handleSubmit(getData) {
        
    }

    return <div> Sign In
    <CommonForm
    form={formData}
    handleSubmit={handleSubmit}
    formControls={signInFormControls}
    btnText={"Sign In"}

    />
    </div>

}

export default SignIn