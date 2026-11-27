import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {Registerschema} from "../components/Formschema/Registerschema"
function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(Registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/",{
            state:data
        })
    }
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
        <form onSubmit={handleSubmit(onSubmit1)} className="w-full max-w-md flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800">Register</h1>
            <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input id="name" placeholder="Enter your name" type="text" {...register("name")} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input id="email" placeholder="Enter your email" type="email" {...register("email")} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input id="password" placeholder="Enter Password" type="password" {...register("password")} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label>
            <input id="age" placeholder="Enter your age" type="number" {...register("age")} className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
            <p className="text-sm text-red-500">{errors.age?.message}</p>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200">Submit</button>
        </form>
        </div>
        </>
    );
}
export default Register;