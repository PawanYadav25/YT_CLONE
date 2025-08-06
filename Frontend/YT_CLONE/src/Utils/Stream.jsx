import React from 'react'
import like from '../IMage/like.png'
import dislike from '../IMage/dislike.png'
import share from '../IMage/share.png'

export default function Stream() {
    const obj = {
        video : "https://ik.imagekit.io/Pawan2509/sample-video.mp4?updatedAt=1754415925990",
        Title : "Hello this is my title of the video",
        channelDetail : {
            chnlImage : "data:image/jpeg;base64,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",
            chnlName : "Pawan Yadav",
            like : 120,
            disLike: 0
        },
        Description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aliquam at perspiciatis quisquam quos ipsa odio dignissimos quas id illo dolores dolor, consequatur asperiores eum, blanditiis velit! Quo, laboriosam nam",
        comment : [
            {
                userName : 'Pawan Yadav',
                cmnt : 'Amazing video'
            },
            {
                userName : 'Manish Rai',
                cmnt : 'Loving it'
            },
            {
                userName : 'Sunil billa',
                cmnt : 'Nice, lga reh londe'
            }
        ]
    }

  return (
    <>
    <div className='lg:flex md:ml-18 lg:ml-20'>
        <div className='lg:w-7/10 md:mr-18 lg:mr-20'>
            <div className='mt-5'>
                <div className=''>
                    <video className='w-10/10 md:rounded-2xl' src={obj.video} controls></video>
                </div>
                <p className='font-bold ml-3 md:ml-0 md:mt-2 md:text-2xl' >{obj.Title}</p>
            </div>
            <div>
                <div className='flex md:justify-between flex-wrap ml-2'>
                    <div className='flex items-center mt-3'>
                        <img className='h-10 rounded-4xl mr-3' src={obj.channelDetail.chnlImage} alt="" />
                        <div className='mr-5'>
                            <p className='font-bold'>{obj.channelDetail.chnlName}</p>
                            <p className='text-gray-500'>12k subscriber</p>
                        </div>
                        <button className='bg-black rounded-3xl text-white p-2 w-29'>Subscribe</button>
                    </div>
                    <div className='flex mt-3'>
                        <button className='bg-gray-300 w-20 h-8 rounded-l-4xl flex justify-center items-center hover:bg-gray-400'><img className='h-6' src={like} alt="Like" /><span>{obj.channelDetail.like}</span></button>
                        <button className='bg-gray-300 w-20 h-8 rounded-r-4xl flex justify-center items-center mr-3 hover:bg-gray-400' ><img className='h-6' src={dislike} alt="dislike" /></button>
                        <button className='bg-gray-300 w-25 h-8 rounded-4xl flex justify-center items-center mr-5 hover:bg-gray-400' ><img className='h-6' src={share} alt="Share" /><span className='ml-1'>Share</span></button>
                    </div>
                </div>
            </div>
            <div className='p-3 bg-gray-400 rounded-2xl mt-3'>
                <p>{obj.Description}</p>
            </div>
            <div>
                <div>
                    <p>Add comment</p>
                </div>
                <div>
                    Show comment
                </div>
            </div>
        </div>
        <div className='bg-blue-500 h-screen lg:w-3/10'>
            <p>Side bar</p>
        </div>
    </div>
    </>
  )
}
