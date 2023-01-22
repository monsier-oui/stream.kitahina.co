import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const ShinyColors = () => {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>STREAM@S - 765PRO ALL STARS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="allstars" />
      <p className="mb-4">
        「ぷちます！」シリーズの楽曲がすでに配信されていますが(
        <Link href="http://www.fwinc.co.jp/news/79341/" className="underline">
          http://www.fwinc.co.jp/news/79341/
        </Link>
        )、掲載は後日を予定しております。
      </p>
      <h2 className="text-xl font-bold">765PRO ALLSTARS+ GRE@TEST BEST!</h2>
      <ul>
        <li>
          <Link
            href="/album/cocx-38070"
            className="underline hover:text-rose-500 transition"
          >
            -THE IDOLM@STER HISTORY-
          </Link>
        </li>
        <li>
          <Link
            href="/album/cocx-38071"
            className="underline hover:text-rose-500 transition"
          >
            -SWEET&SMILE!-
          </Link>
        </li>
        <li>
          <Link
            href="/album/cocx-38073"
            className="underline hover:text-rose-500 transition"
          >
            -COOL&BITTER!-
          </Link>
        </li>
        <li>
          <Link
            href="/album/cocx-38075"
            className="underline hover:text-rose-500 transition"
          >
            -LOVE&PEACE!-
          </Link>
        </li>
      </ul>
      <h2 className="text-xl font-bold">M@STERS OF IDOL WORLD!!</h2>
      <ul>
        <li>
          <Link
            href="/album/moiw2014"
            className="underline hover:text-rose-500 transition"
          >
            IDOL POWER RAINBOW
          </Link>
        </li>
        <li>
          <Link
            href="/album/moiw2015"
            className="underline hover:text-rose-500 transition"
          >
            アイ MUST GO!
          </Link>
        </li>
        <li>
          <Link
            href="/album/moiw2023"
            className="underline hover:text-rose-500 transition"
          >
            CRYST@LOUD
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShinyColors;
