"use client";
import { motion } from "framer-motion";
import { FormEvent, startTransition, useState } from "react";

interface ContaceFormProps {
  onClick?: () => void;
}

export default function ContactForm({ onClick }: ContaceFormProps) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  let toEmailFromClipboard = "no2jfamily@gmail.com";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // nodemailer로 전송할 데이터
    startTransition(async () => {
      try {
        const payload = {
          userName,
          userEmail,
          message,
          toEmail: toEmailFromClipboard,
        };

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error("메일 전송 실패!");
        }

        alert("메일이 전송되었습니다!");
      } catch (error) {
        console.error(error);
        alert("메일 전송 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
      } finally {
        // 제출 끝나면 로딩 해제
        setIsSubmitting(false);
      }
    });
  };
  return (
    <motion.form
      className="bg-gray-700 p-6 rounded-md flex flex-col gap-4 items-center w-[400px] relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
    >
      <div onClick={onClick} className="absolute top-7 right-8 cursor-pointer">
        X
      </div>
      <h2 className="text-xl font-bold mb-2">Send a Message</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 text-black rounded-md"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 text-black rounded-md"
        required
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        className="p-2 text-black rounded-md w-full"
        rows={4}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full flex justify-center items-center gap-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}

        {isSubmitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
        ) : null}
      </button>
    </motion.form>
  );
}
