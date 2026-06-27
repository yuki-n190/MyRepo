"use client";
import { useState } from "react";// usestateをインポート

export default function Counter() {
    const [count, setCount] = useState(0);// countとsetCountを定義　初期値は0

    const handleIncrement = () => {
        setCount(count + 1);// countを1増やす
    };
    return (
        <div>
            <p>現在のカウント：{count}</p>
            <button onClick={handleIncrement}>カウントを増やす</button>
        </div>
    );
}