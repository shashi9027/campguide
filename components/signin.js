import SignInContent from "./signin-content";
import SignInFields from "./signin-field";

export default function SignIn(){
    return (
        <div className="flex h-full absolute w-full">
            <div className="md:w-3/5 h-full w-full">
            <SignInFields/>
            </div>
            <div className="md:w-2/5 h-full md:block hidden">
             <SignInContent/>
            </div>

             
        </div>
    )
}