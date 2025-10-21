'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FAF8F4] border-b border-[#E8E2D9] px-6 py-4 flex justify-between items-center shadow-sm">
            {/* Left side - Logo */}
            <Link href="/" className="text-xl font-semibold text-[#3F3F3F] tracking-wide">
                Cozy<span className="text-[#A67B5B]">Space</span>
            </Link>

            {/* Right side - Navigation */}
            <div className="flex items-center space-x-6">
                <Link href="/about" className="text-[#5A5A5A] hover:text-[#A67B5B] transition-colors">
                    About
                </Link>
                <Link href="/auth/register" className="text-[#5A5A5A] hover:text-[#A67B5B] transition-colors">
                    Register
                </Link>

                <Link
                    href="/auth/login"
                    className="px-4 py-2 bg-[#A67B5B] text-white rounded-md hover:bg-[#8E6A4F] transition-all duration-200 shadow-sm"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
