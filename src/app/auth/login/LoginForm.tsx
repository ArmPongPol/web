// app/auth/login/LoginForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setStatusMessage(null)

        try {
            const res = await fetch('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            if (!res.ok) throw new Error('Login failed')

            setIsSuccess(true)
            setStatusMessage('เข้าสู่ระบบสำเร็จ 🎉')

            // redirect ไปหน้า dashboard
            setTimeout(() => router.push('/'), 800)
        } catch (err) {
            setIsSuccess(false)
            setStatusMessage('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
        } finally {
            setLoading(false)
        }
    }

    return (
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

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#A67B5B] text-white rounded-md hover:bg-[#8E6A4F] transition-all duration-200 shadow-sm disabled:opacity-50"
            >
                {loading ? 'Signing in...' : 'Login'}
            </button>

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
                <a href="/auth/register" className="text-[#A67B5B] hover:underline">
                    Sign up
                </a>
            </p>
        </form>
    )
}
