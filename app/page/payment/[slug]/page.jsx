"use client";

import Image from "next/image";
import data from "@/app/components/data.json";
import styles from "@/app/styles/single.module.css";
import SingleSportCard from "@/app/components/SingleSportCard";


export default function SingleSport({ params }) {
  const slug = decodeURIComponent(params.slug || "");
  const [teamAPart, teamBPart] = slug.split(" vs ");
  const teamA = teamAPart?.trim() || "";
  const teamB = teamBPart?.trim() || "";


  return (
    <div className={styles.singleContainer}>
      
    </div>
  );
}
