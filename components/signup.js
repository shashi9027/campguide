import SignInContent from "./signin-content";
import SignUpFields from "./signup-fields";

export default function SignUp() {
    return (
        <div className="flex h-full">
            <div className="w-3/5 h-full">
                <SignUpFields />
            </div>
            <div className="w-2/5 h-full">
                <SignInContent />
            </div>
        </div>
    )
}