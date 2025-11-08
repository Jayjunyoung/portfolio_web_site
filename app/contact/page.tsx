import ContactClient from "./_client/ContactClient";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me through various channels",
};

// 페이지를 정적으로 생성하도록 명시
export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div className="w-full h-full overflow-y-scroll no-scrollbar relative">
      {/* 클라이언트 인터랙티브 부분 */}
      <ContactClient />

      <footer className="w-full h-72 flex justify-center items-center bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p>📞: 010-9085-7377</p>
          <p>✉️: no2jfamily@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
