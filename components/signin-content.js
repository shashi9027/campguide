import Avatars from "./avatar";

export default function SignInContent() {
    return (
        <div className="bg-pink_200 h-full flex items-center px-20 ">
            <div>
                <div className="text-xl font-bold ">
                    "YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."
                </div>
                <div className="flex  items-center mt-4 gap-4">
                    
                    <Avatars/>
                    <div>
                        <div className="font-semibold">
                            May Andrews
                        </div>
                        <div>
                            Professional Hiker
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}