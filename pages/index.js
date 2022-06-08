import Head from "next/head";
import Scene from "../components/3d/scene/scene";
import GameMechanism from "../components/game-mechanism/game-mechanism";
import Landing from "../components/landing/landing";
import SectionSeparator from "../components/section-separator/section-separator";
import SocialMedias from "../components/social-medias/social-medias";
import Story from "../components/story/story";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dystopi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <SocialMedias />
      <Story />
      <SectionSeparator />
      <GameMechanism />
      <SectionSeparator />
      <Scene />
    </div>
  );
}
