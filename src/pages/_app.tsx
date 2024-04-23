import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <p className="text-red-500 pt-4">App persona: {router.query.persona}</p>
    </>
  );
}
