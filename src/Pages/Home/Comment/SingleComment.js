import React from 'react';
import { VscTerminalLinux } from 'react-icons/vsc'

const SingleComment = ({comment}) => {
    return (
        <div className="card w-96 ccard h-96 text-start text-black">
            <div className="card-body">
                <div className='flex'>
                    <VscTerminalLinux className='text-2xl' />
                    <VscTerminalLinux className='text-2xl' />
                </div>
                <p>{comment?.comment}</p>
                <div className='flex justify-between items-center'>
                    <img className='w-24 rounded-full' src={comment?.img} alt="" />
                    <div>
                        <p className='font-semibold'>{comment?.name}</p>
                        <p>{comment?.nick}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;