"use client";

import Advert from "@/app/components/Advert";
import { usePathname } from "next/navigation";
import data from "@/app/components/data.json";
import SportCard from "@/app/components/SportCard";
import styles from "@/app/styles/football.module.css";
import MobileFilter from "@/app/components/MobileFilter";

export default function OtherSport() {
  const pathname = usePathname();
  const currentSport = pathname.split("/").pop();


  return (
    <div className={styles.footballContainer}>
      <Advert />
      <MobileFilter />
      <div className={styles.content}>
        {data.map((data, index) => (
          <SportCard
            key={index}
            formationA={data.formationA}
            formationB={data.formationB}
            leagueImage={data.leagueImage}
            teamAImage={data.teamAImage}
            teamBImage={data.teamBImage}
            tip={data.tip}
            league={data.league}
            teamA={data.teamA}
            teamB={data.teamB}
            teamAscore={data.teamAscore}
            teamBscore={data.teamBscore}
            time={data.time}
            status={data.status}
            sport={currentSport}
            showScore={data.showScore}
          />
        ))}
      </div>
    </div>
  );
}
