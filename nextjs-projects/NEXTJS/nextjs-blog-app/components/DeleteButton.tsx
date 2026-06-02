"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
// import { METHODS } from "node:http" // 使っていないので不要

type DeleteButtomProps = {
    id: string
}

export default function DeleteButton({ id }: DeleteButtomProps) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
    const {
        data: { session },
    } = await supabase.auth.getSession()

    const token = session?.access_token
    setLoading(true)
    try {
      // Supabaseクライアントから直接blogsテーブルの対象記事を削除
      const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id)

      if (error) {
        throw error
      }

      console.log("実行されました");

      router.replace("/");
    } catch (error: any) {
      alert("削除に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-blue-500 hover:underline"
    >
      {loading ? "削除中..." : "削除する"}
    </button>
  );
}