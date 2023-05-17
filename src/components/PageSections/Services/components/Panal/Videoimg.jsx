import Section from '@/components/Section/Section'
import React, { Fragment, useState } from 'react'
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { iconsList } from '@/components/icons';

const Videoimg = () => {
    const imageVideo = 'https://res.cloudinary.com/drd52d73n/image/upload/v1683055003/Panal/video.png';
    const Video = 'https://www.youtube.com/embed/sfWqabJ-bcE';

    /* MODAL */
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className='relative px-4 bg-white'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='relative flex justify-center items-center'>
                    <Image src={imageVideo} alt="img-video" className='select-none h-[400px] w-[900px]' width={800} height={800} />
                    <button onClick={openModal} className='w-[90px] h-[90px] bg-panal-orange rounded-full absolute flex justify-center items-center z-10 overflow-hidden transition-all duration-700 hover:w-[108px] hover:h-[108px] group'>
                        <span className='content-[""] absolute translate-x-[-40%] -translate-y-2/4 w-0 h-0 z-[100] border-l-[25px] border-l-white border-y-[15px] border-y-transparent border-solid left-2/4 top-2/4 transition-all duration-700 group-hover:border-y-[10rem] group-hover:border-l-[10rem] group-hover:border-l-panal-orange'>
                        </span>
                        <span className='content-[""] absolute translate-x-[-40%] -translate-y-2/4 w-0 h-0 z-[100] border-l-[25px] border-y-[15px] border-y-transparent border-solid left-2/4 top-2/4 transition-all duration-700 group-hover:border-l-white'>
                        </span>
                    </button>
                    <div className='w-[94px] h-[94px] bg-panal-orange rounded-full absolute flex justify-center items-center animate-pingLow'></div>
                </div>

            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[950px] flex flex-col gap-1 transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                                    >
                                        Demo Video
                                        <button type="button" onClick={closeModal}>
                                            <p className='text-2xl flex items-center justify-center bg-panal-yellow transition-all duration-300 hover:bg-panal-orange text-white rounded-full w-8 h-8'>
                                                X
                                            </p>
                                        </button>

                                    </Dialog.Title>
                                    <hr />
                                    <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '1rem', overflow: 'hidden' }}>
                                        <iframe
                                            src={Video}
                                            title="Demo Video"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

    )
}

export default Videoimg
