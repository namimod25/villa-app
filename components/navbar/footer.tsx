import Link from "next/link"
import Image from "next/image"
const footer = () => {
  return (
    <footer className='bg-gray-900'>
        <div className='max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16'>
            <div className='grid md:grid-cols-3 gap-6'>
                <div>
                    <Link href="/" className="mb-10 block">
                        <Image src={'/footer.png'} width={128} height={49} alt={'logo'} priority/>
                    </Link>
                    <p className="text-shadow-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias autem commodi quibusdam quo sit officiis!
                    </p>
                </div>
                <div className="flex gap-20">
                    <div className="flex-1 md:flex-none">
                        <h4 className="mb-8 text-xl font-semibold text-white">Link</h4>
                        <ul className="list-item space-y-5 text-gray-400">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link href={'/room'}>Room</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 md:flex-none">
                        <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                        <ul className="list-item space-y-5 text-gray-400">
                            <li>
                                <Link href={'#'}>Legal</Link>
                            </li>
                            <li>
                                <Link href={'#'}>Term & Condition</Link>
                            </li>
                            <li>
                                <Link href={'#'}>Payment method</Link>
                            </li>
                            <li>
                                <Link href={'#'}>Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="mb-8 text-xl font-semibold text-white">NewsLetter</h4>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <input type="text" name="email" className="w-full p-3 rounded-sm bg-white" placeholder="masukan email kamu"/>
                        </div>
                        <button className="bg-amber-400 p-3 font-bold text-white w-full text-center rounded-s-sm hover:bg-amber-500">Subcribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='mac-w-screen-xl mx-auto px-4 border-t-blue-700 py-8 text-center text-base text-gray-500'>
            &copy; Copyright 2025. All right reserved. | SoloDev <br/>
        </div> 

    </footer>
  )
}

export default footer