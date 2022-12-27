import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const ShinyColors = () => {
  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <Head>
        <title>STREAM@S - Shiny Colors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header brand="shinycolors" />
      <p className="my-2">
        ストリーミングサービスで聴けるシャイニーカラーズの楽曲
      </p>
      <h2 className="text-xl font-bold">COLORFUL FE@THERS</h2>
      <ul>
        <li>
          <Link href="/album/laca-15863" className="underline">
            COLORFUL FE@THERS -Sol-
          </Link>
        </li>
      </ul>
      <h2 className="text-xl font-bold">Synthe-Side</h2>
      <ul>
        <li>
          <Link href="/album/lacm-24244" className="underline">
            Synthe-Side 01
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24245" className="underline">
            Synthe-Side 02
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24246" className="underline">
            Synthe-Side 03
          </Link>
        </li>
      </ul>
      <h2 className="text-xl font-bold">P@NORAMA WING</h2>
      <ul>
        <li>
          <Link href="/album/lacm-24251" className="underline">
            P@NORAMA WING 01
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24252" className="underline">
            P@NORAMA WING 02
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24253" className="underline">
            P@NORAMA WING 03
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24254" className="underline">
            P@NORAMA WING 04
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24255" className="underline">
            P@NORAMA WING 05
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24256" className="underline">
            P@NORAMA WING 06
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24257" className="underline">
            P@NORAMA WING 07
          </Link>
        </li>
        <li>
          <Link href="/album/lacm-24258" className="underline">
            P@NORAMA WING 08
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShinyColors;
