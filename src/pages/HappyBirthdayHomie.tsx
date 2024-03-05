import React, { useState, useEffect } from "react";
import { changeWindowTitle } from "../components/utils";
import { Birthday, fetchTodayBirthdays } from "../components/api";
import { BirthdayCard } from "../components/BirthdayCard";
import { useParams } from "react-router-dom";

const HappyBirthdayHomie = () => {
  changeWindowTitle(window.location.pathname);
  const { code } = useParams();
  const [birthdays, setBirthdays] = useState<Array<Birthday>>([]);

  useEffect(() => {
    fetchTodayBirthdays(code).then((data) => setBirthdays(data));
  }, [code]);

  return (
    <div className="container happy-birthday-homie">
      {birthdays.map((birthday) => (
        <BirthdayCard {...birthday} />
      ))}
    </div>
  );
};

export default HappyBirthdayHomie;
