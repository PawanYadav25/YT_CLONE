function SignUp(){
    return (
        <>
        <div className='flex justify-center items-center'>
        <div className='bg-violet-300 mt-10 w-90 md:w-150 h-120 flex items-center justify-center rounded-3xl'>
            <form className='text-center'>
                <label className='block m-5 font-bold'>Email ID</label>
                <input className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center' type="text" placeholder='Enter Email ID' /><br />
                <label className='block m-5 font-bold'>User Name</label>
                <input className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center' type="text" placeholder='Enter Username' /><br />
                <label className='block m-5 font-bold'>Password</label>
                <input className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center' type="text" placeholder='Enter Password' /><br />
                <button className=' mt-5 border-2 p-2 md:w-90 w-70 bg-violet-600 focus:bg-white'>Create Account</button>
            </form>
        </div>
    </div>
        </>
    )
}

export default SignUp