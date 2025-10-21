'use client';

import { useState } from 'react';
import { apiFetch } from '@/lib/api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string|null|unknown>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setStatusMessage(null);

        try {
            const res = await apiFetch('/auth/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            // ถ้า login สำเร็จ
            setIsSuccess(true);
            setStatusMessage('ลงทะเบียนสำเร็จ 🎉');
        } catch (err) {
            // ถ้า login ล้มเหลว
            setIsSuccess(false);
            setStatusMessage(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4] text-black">
            <div className="w-full max-w-sm p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-[#E8E2D9]">
                <h1 className="text-2xl font-semibold text-[#3F3F3F] mb-6 text-center">
                    Welcome Back
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm text-[#5A5A5A] mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full p-3 border border-[#E0D9CF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A67B5B] bg-[#FCFAF8]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-[#5A5A5A] mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full p-3 border border-[#E0D9CF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A67B5B] bg-[#FCFAF8]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-[#5A5A5A] mb-1">First Name</label>
                        <input
                            type="password"
                            required
                            className="w-full p-3 border border-[#E0D9CF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A67B5B] bg-[#FCFAF8]"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-[#5A5A5A] mb-1">Last Name</label>
                        <input
                            type="password"
                            required
                            className="w-full p-3 border border-[#E0D9CF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A67B5B] bg-[#FCFAF8]"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-[#A67B5B] text-white rounded-md hover:bg-[#8E6A4F] transition-all duration-200 shadow-sm disabled:opacity-50"
                    >
                        {loading ? 'Signing in...' : 'Login'}
                    </button>
                </form>

                {/* ✅ แสดงข้อความสถานะ */}
                {statusMessage && (
                    <p
                        className={`mt-4 text-center text-sm font-medium ${
                            isSuccess ? 'text-green-600' : 'text-red-600'
                        }`}
                    >
                        {statusMessage}
                    </p>
                )}

                <p className="text-center text-sm text-[#7A7A7A] mt-6">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-[#A67B5B] hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
