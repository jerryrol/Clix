"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <form className="waitlist-form-wrap" onSubmit={handleSubmit}>
      <div className="waitlist-form">
        <label htmlFor="email" className="sr-only">
          이메일 주소
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby="waitlist-feedback"
        />
        <button type="submit" className="primary-button">
          신청하기
        </button>
      </div>
      <p id="waitlist-feedback" className="waitlist-feedback" aria-live="polite">
        {submitted
          ? "대기자 등록이 완료되었습니다. 출시 소식을 가장 먼저 전해드릴게요."
          : "출시 전 업데이트와 얼리 액세스 안내를 이메일로 보내드립니다."}
      </p>
    </form>
  );
}
