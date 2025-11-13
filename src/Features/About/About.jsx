import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { aboutData } from "../data";

export default function About() {
  return (
    <Card>
      <Header>{aboutData.Header}</Header>

      {/* Content */}
      <div className="flex flex-col text-base text-white sm:text-lg text-center items-center justify-center w-full sm:w-3/4">
        <p>{aboutData.description}</p>
      </div>
    </Card>
  );
}
