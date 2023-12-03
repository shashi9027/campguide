import SignInContent from "./signin-content";
import SignUpFields from "./signup-fields";

export default function SignUp() {
    return (
        <div className="flex h-full absolute w-full">
            <div className="md:w-3/5 h-full w-full">
                <SignUpFields />
            </div>
            <div className="md:w-2/5 h-full md:block hidden">
                <SignInContent />
            </div>
        </div>
    )
}