// app/auth/login/page.tsx
import LoginForm from './LoginForm'

export const dynamic = 'force-dynamic' // ให้ Next.js ทำ SSR ทุกครั้ง (ไม่ cache)

export default async function LoginPage() {
    // 👇 ตัวอย่าง SSR: ดึงข้อมูลจาก server ก่อน render ได้
    // เช่น ตรวจว่าผู้ใช้ login แล้วหรือยัง
    // const res = await fetch(`${process.env.API_URL}/auth/check`, { cache: 'no-store' })
    // const { isLoggedIn } = await res.json()
    //
    // if (isLoggedIn) {
    //     // redirect ฝั่ง server ได้เลย
    //     return (
    //         <div className="flex h-screen items-center justify-center">
    //             <p>คุณเข้าสู่ระบบแล้ว 🎉</p>
    //         </div>
    //     )
    // }

    // ถ้ายังไม่ login -> render form (Client Component)
    return <LoginForm />
}
