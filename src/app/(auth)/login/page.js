function Login() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
        
            <div className="flex flex-col items-center text-center gap-3 text-[#F5F5F5]">
                <h1 className="font-bold text-3xl">Login to Disney Clone</h1>

                <p className="font-semibold text-lg text-[#BDBDBD]">Start watching from where you left off, personalize for kids and more</p>

                <button className="mt-2 px-24 py-3 font-semibold text-lg w-fit rounded-md bg-[#095AE5] bg-gradient-to-r from-[#07327D]/0 via-[#07327D]/25 to-[#07327D] hover:scale-105 transition delay-100 ease-linear">Log In</button>
            </div>
        </div>
    )
}

export default Login;
