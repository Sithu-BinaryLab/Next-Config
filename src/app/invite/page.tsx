"use client";
import { useSearchParams } from "next/navigation";

function Invite() {
  const searchParams = useSearchParams();
  const inviter = searchParams.get("inviter") || "Anonymous";
  const code = searchParams.get("code") || "";

  return (
    <div>
      Invite {inviter} {code}
    </div>
  );
}

export default Invite;
