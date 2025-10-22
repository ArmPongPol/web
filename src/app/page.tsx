export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#3F3F3F]">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-[#FAF8F4]">
                <h1 className="text-5xl font-light tracking-wide mb-4 leading-snug">
                    เขียน แบ่งปัน และค้นพบแรงบันดาลใจใหม่ ๆ
                </h1>
                <p className="text-[#5A5A5A] max-w-xl text-sm leading-relaxed mb-10">
                    CozySpace คือพื้นที่เรียบง่ายและอบอุ่น
                    สำหรับนักเขียนและนักอ่านที่รักในตัวอักษรและความสงบ
                </p>
                <a
                    href="/src/app/auth/login"
                    className="px-8 py-3 bg-[#A67B5B] text-white rounded-md hover:bg-[#8E6A4F] transition-all duration-200 shadow-sm"
                >
                    เริ่มต้นเขียนเลย
                </a>
            </section>

            {/* Feature Section */}
            <section className="bg-[#F4F2ED] py-16 px-8 md:px-20 text-center">
                <h2 className="text-2xl font-light mb-10">สิ่งที่คุณจะได้จาก CozySpace</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {[
                        {
                            title: "พื้นที่ที่สงบและเป็นของคุณ",
                            desc: "ไม่มีเสียงรบกวน ไม่มีความซับซ้อน — แค่คุณและเรื่องราวของคุณ",
                        },
                        {
                            title: "การออกแบบที่เรียบง่าย",
                            desc: "สไตล์มินิมอล สีอบอุ่น สบายตา เหมาะกับการอ่านและเขียน",
                        },
                        {
                            title: "เชื่อมต่อกับแรงบันดาลใจ",
                            desc: "ค้นพบมุมมองใหม่ ๆ ผ่านบทความจากผู้คนที่มีความคิดเหมือนคุณ",
                        },
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm p-8 border border-[#E8E2D9] hover:shadow-md transition-all"
                        >
                            <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                            <p className="text-sm text-[#5A5A5A] leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-light mb-4">
                    พร้อมที่จะเริ่มต้นการเขียนแล้วหรือยัง?
                </h2>
                <p className="text-[#5A5A5A] mb-8">
                    สร้างบัญชีฟรีและเริ่มต้นบทความแรกของคุณวันนี้
                </p>
                <a
                    href="/src/app/auth/register"
                    className="px-8 py-3 bg-[#A67B5B] text-white rounded-md hover:bg-[#8E6A4F] transition-all duration-200 shadow-sm"
                >
                    สร้างบัญชีใหม่
                </a>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#E8E2D9] py-10 text-center text-xs text-[#6B6B6B]">
                © 2025 CozySpace — Crafted with calm & coffee ☕
            </footer>
        </main>
    );
}