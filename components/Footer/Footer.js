export default function Footer(){
    return(
        <div className="bg-[#ffffff] mx-auto px-8 md:px-40 w-full">
           


            <div className="grid lg:grid-cols-4 pt-10 pb-10 lg:pl-0">
                <div className="">
                    
                        <img src="/logo.jpeg" alt="untitled" className="h-5 w-30"/>
                    
                    
                </div>
               
                <div className="grid grid-cols-2 py-10 lg:py-0">
                    <div>
                        <div className="mb-4 text-[10px]">COURSES</div>
                        <a className="block text-[12px] mb-4">Consumertech</a>
                        <a className="block text-[12px] mb-4">SAAS</a>
                    </div>
                    <div>
                        <div className="mb-4 text- text-[10px]">COMMUNITY</div>
                        <a className="block text-[12px] mb-4">Events</a>
                        <a className="block text-[12px] mb-4">Deals</a>
                        <a className="block text-[12px] mb-4">Stories</a>
                        <a className="block text-[12px] mb-4">News</a>
                    </div>
                </div>
                <div className="sm:grid grid-cols-2 flex gap-16">
                <div>
                    <div>
                        <div className="mb-4 text-[10px]">Podcast Series</div>
                        <a className="block text-[12px] mb-4">Future X</a>
                        <a className="block text-[12px] mb-4">Insights</a>
                        <a className="block text-[12px] mb-4">Untold Seed Stories</a>
                        <a className="block text-[12px] mb-4">The Scale Playbook</a>
                        <a className="block text-[12px] mb-4">Grit Stories</a>
                    </div>
                </div>

                <div>
                    <div className="">
                        <div className="mb-4 text-[10px]">ABOUT</div>
                        <a className="block  text-[12px] mb-4">About us</a>
                    </div>
                    <div>
                        <div className="mb-4 text-[10px]">LEGAL</div>
                        <a className="block text-[12px] mb-4">Privacy Policy</a>
                        <a className="block text-[12px] mb-4">Terms of Use</a>
                    </div>
                      
                </div>
             </div>
             
             <div className="sm:grid grid-cols-1 flex gap-10 py-10 lg:py-0">
                <div>
                    <div>
                        <div className="mb-4 text-[10px]">Podcast Series</div>
                        <a className="block text-[12px] mb-4">Future X</a>
                        <a className="block text-[12px] mb-4">Insights</a>
                        <a className="block text-[12px] mb-4">Untold Seed Stories</a>
                        <a className="block text-[12px] mb-4">The Scale Playbook</a>
                        <a className="block text-[12px] mb-4">Grit Stories</a>
                    </div>
                </div>

               
             </div>
               
                
            </div>
            
        </div>
    )
}