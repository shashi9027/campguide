import SignInContent from "./signin-content";
import SignInFields from "./signin-field";

export default function SignIn(){
    return (
        <div className="flex h-full">
            <div className="w-3/5 h-full">
            <SignInFields/>
            </div>
            <div className="w-2/5 h-full">
             <SignInContent/>
            </div>

             
        </div>
    )
}