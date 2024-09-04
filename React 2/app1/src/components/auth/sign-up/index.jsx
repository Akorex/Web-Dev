import CommonForm from "@/components/common-form"
import { signUpFormControls } from "@/config"
import { useForm } from "react-hook-form"

function SignUp() {
    const formData = useForm({
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      });


      async function handleSubmit(getData) {
        
      }

    return <div> Sign Up

        <CommonForm 
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signUpFormControls} 
        btnText={"Sign Up"} 
        />



    </div>
}

export default SignUp