// import Image from "next/image";

// import Counter from "./counter";
// export default function Page() {
//   return (
//     <main>
//       <Counter />
//       <ul>
//         <li>Save and see your changes instantly.</li>
//         <li>こんにちは</li>
//       </ul>
//     </main>
//   )
// }
// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       // {/* <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"> */}
//         // {/* <Image */}
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         // {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"> */}
//           // {/* <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"> */}
//             // {/* To get started, edit the page.tsx file. */}
//           // {/* </h1> */}
//           // {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"> */}
//             // {/* Looking for a starting point or more instructions? Head over to{" "} */}
//             // {/* <a */}
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               // {/* Templates */}
//             // {/* </a>{" "} */}
//             // {/* or the{" "} */}
//             // {/* <a */}
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               // {/* Learning */}
//             // {/* </a>{" "} */}
//             // {/* center. */}
//           // {/* </p> */}
//         // {/* </div> */}
//         // {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"> */}
//           // {/* <a */}
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             // {/* <Image */}
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             // {/* Deploy Now */}
//           // {/* </a> */}
//           // {/* <a */}
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             // {/* Documentation */}
//           // {/* </a> */}
//         // {/* </div> */}
//       // {/* </main> */}
//     // {/* </div> */}
//   );
// }

import Image from "next/image";
import Counter from "./counter";
import Link from "next/link";

export default function Page() {
  const postIds = [1, 2, 3];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-20 px-16 bg-white dark:bg-black shadow-xl rounded-2xl">
        
        {/* ロゴ部分 */}
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        {/* 記事一覧とリンク}*/}
        <h1>記事一覧</h1>
        <ul>
          {postIds.map((id) => (
            <li key={id}>
              <Link href={`/post/${id}`}>記事 {id} を読む</Link>
            </li>
          ))}
        </ul>
          
        <Link href="/about">Aboutページへ移動</Link>

        {/* メインコンテンツ：カウンター */}
        <div className="flex flex-col items-center gap-8 text-center mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
            React State & Event Mission
          </h1>
          
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg w-full">
            <Counter />
          </div>
        </div>

        {/* 課題のリスト部分 */}
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <ul className="text-left space-y-2 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Save and see your changes instantly.
            </li>
            <li className="flex items-center gap-2 text-lg font-medium text-black dark:text-white">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              こんにちは
            </li>
          </ul>
        </div>

      </main>
    </div>
  );
}