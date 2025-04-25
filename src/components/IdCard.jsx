import React from 'react'


function IdCard() {
    return (
        <div className='bg-[#4DA8DA]'>
            <div className='max-w-2xl mx-auto pt-10 '>
                <div className='bg-[#F5F5F5] text-black text-start py-7 text-4xl r '>
                    <h2 className='text-5xl text-center font-semibold'>Medical Card</h2>
                    <div className='flex flex-col justify-evenly items-center'>
                        <div className='mt-3 flex items-center gap-x-36'>
                            <h2 className='font-Jost'>Jhon Doe</h2>
                            <div className=''>
                                <img src="https://tse4.mm.bing.net/th?id=OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa&pid=Api&P=0&h=180" alt="Image" />
                            </div>

                        </div>

                        <div className='flex items-center mt-5'>
                            <h2 className='max-w-[20rem]'>(815) 436-6914
                                21949 W Renwick Rd
                                Plainfield, Illinois(IL), 60544
                            </h2>
                            <div>
                                <img src="https://tse4.mm.bing.net/th?id=OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa&pid=Api&P=0&h=180" alt="Qr Code" className='w-32 h-32' />
                            </div>
                        </div>
                        <div className='mt-5 space-x-8'>
                            <span>ID:</span><span>ABC12XTY25</span>
                        </div>
                    </div>

                </div>
            </div>
            <button className='justify-center'>Claim Amount</button>
        </div>
    )
}

export default IdCard
