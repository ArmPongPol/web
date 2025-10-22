// app/auth/login/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LoginForm from './LoginForm'

export const dynamic = 'force-dynamic' // ให้ SSR ทุกครั้ง (ไม่ cache)

export default async function LoginPage() {
    // ✅ ตรวจว่ามี token แล้วไหม (เช่น JWT ที่เก็บใน cookie)
    const cookieStore = await cookies()
    const token = cookieStore.get('access_token')?.value

    if (token) {
        // ถ้ามี token แปลว่า login แล้ว → redirect ไป dashboard
        redirect('/dashboard')
    }

    // ❌ ถ้าไม่มี token → แสดงหน้า login
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4] text-black">
            <div className="w-full max-w-sm p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-[#E8E2D9]">
                <h1 className="text-2xl font-semibold text-[#3F3F3F] mb-6 text-center">
                    Welcome Back
                </h1>

                <LoginForm />
            </div>
        </div>
    )
}
