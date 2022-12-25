import {useForm} from "react-hook-form";
import { useState } from "react";
import Axios from "axios";

export default function Body(){
    const { register, handleSubmit, errors } = useForm();
   
    const onSubmit = (datas) => {
      
        console.log(datas);
        Axios.post(url,{
            name:datas.name,
            email:datas.email,
            number:datas.number,
            test:datas.test
        })
        
        .then(res=>{
            console.log(res.datas);
        })
    };
    
    const url = "https://mint-forms.ieee-mint.org/api/form/addresponse?formld=task"
    const [datas,setDatas] = useState({
            name: "",
            email: "",
            number:"",
            test:[],

    });


    function handle(e){
        const newdata = {...datas}
        newdata[e.target.id] = e.target.value
        setDatas(newdata)
        console.log(newdata)
    };
    
    
    return(
        <>
        <div className="lg:grid grid-cols-2 hidden">
            <div className="h-0 sm:h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="flex justify-center">
               
               <div> <h1 className="text-3xl pb-5">Lets level up your <br/>brand, together</h1>
                <span>You can reach us anytime.</span>
                <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="">Name</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="text" id="name" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="Your Name" {...register('name', { required: "Name is required" })}/>
                    </div>
                    
                    
                    <div>
                        <label className="">Email</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="email" id="email" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="you@company.com" {...register('email', { required: "email is required" })}/>
                    </div>
                    <div>
                        <label className="">Phone Number</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="number" id="number" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="+1(555) 000 0000" {...register('number', { required: "Phone number is required" })}/>
                    </div>
                    <div>
                        <label className="">How can we help?</label><br/>
                        <textarea onChange={(e)=>handle(e)} value={datas.id} type="text" id="test" className="border solid-black p-1 pl-3 rounded-lg w-80 h-full" placeholder="Tell us a little about the project" {...register('test', { required: false })}/>
                    </div>
                    <span>Services</span>
                    <div className="grid grid-cols-2 p-5">
                        <div>
                            <div>
                                <input type="checkbox" name="service1" className="border solid-black" {...register('service1')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service2" className="border solid-black " {...register('service2')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service3" className="border solid-black" {...register('service3')}/>
                                <label className="" >Website design</label>
                            </div>
                        </div>
                        <div>
                        <div>
                                <input type="checkbox" name="service4" className="border solid-black" {...register('service4')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service5" className="border solid-black" {...register('service5')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service6" className="border solid-black" {...register('service6')}/>
                                <label className="" >Website design</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-[#5F4D4D] text-white p-1 rounded w-full" >Send message</button>
                    </div>
                </form></div>
            </div>
        </div>


        {/*Same mobile view*/}

        <div className="lg:hidden">
           
            <div className="flex justify-center">
               
               <div> <h1 className="text-3xl pb-5">Lets level up your <br/>brand, together</h1>
                <span>You can reach us anytime.</span>
                <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="">Name</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="text" id="name" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="Your Name" {...register('name', { required: "Name is required" })}/>
                    </div>
                    
                    
                    <div>
                        <label className="">Email</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="email" id="email" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="you@company.com" {...register('email', { required: "email is required" })}/>
                    </div>
                    <div>
                        <label className="">Phone Number</label><br/>
                        <input onChange={(e)=>handle(e)} value={datas.id} type="number" id="number" className="border solid-black p-1 pl-3 rounded-lg w-80" placeholder="+1(555) 000 0000" {...register('number', { required: "Phone number is required" })}/>
                    </div>
                    <div>
                        <label className="">How can we help?</label><br/>
                        <textarea onChange={(e)=>handle(e)} value={datas.id} type="text" id="test" className="border solid-black p-1 pl-3 rounded-lg w-80 h-full" placeholder="Tell us a little about the project" {...register('test', { required: false })}/>
                    </div>
                    <span>Services</span>
                    <div className="grid grid-cols-2 p-5">
                        <div>
                            <div>
                                <input type="checkbox" name="service1" className="border solid-black" {...register('service1')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service2" className="border solid-black " {...register('service2')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service3" className="border solid-black" {...register('service3')}/>
                                <label className="" >Website design</label>
                            </div>
                        </div>
                        <div>
                        <div>
                                <input type="checkbox" name="service4" className="border solid-black" {...register('service4')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service5" className="border solid-black" {...register('service5')}/>
                                <label className="" >Website design</label>
                            </div>
                            <div>
                                <input type="checkbox" name="service6" className="border solid-black" {...register('service6')}/>
                                <label className="" >Website design</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-[#5F4D4D] text-white p-1 rounded w-full" >Send message</button>
                    </div>
                </form></div>
            </div>
        </div>
        </>
    )
}