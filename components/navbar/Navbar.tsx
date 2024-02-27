import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between'>
            <div>
                <Link href="/" className='text-2x1 font-bold'>Key Knowledge</Link>    
            </div>
            <Button variant="outline" className='flex items-center gap-2'>
                <FaGithub />
                Login
            </Button>
        </nav>
    )
}
