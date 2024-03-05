import React, { useState, useEffect } from "react";
import { createHyperlink, changeWindowTitle } from "../components/utils";

type Birthday = {
  name: string;
  message: string;
};

const HAPPY_BIRTHDAY_API = "http://localhost:3333/birthdays";
const HappyBirthdayCard = (birthday: Birthday) => {
  return (
    <div className="happy-birthday-card">
      <h1>Have a Fking Lit Birthday, {birthday.name}! </h1>
      <p>{birthday.message}</p>
    </div>
  );
};

const HappyBirthdayHomie = () => {
  changeWindowTitle(window.location.pathname);

  let query = window.location.search;
  query = query.replace("?c=", ""); // get the query value of "c"

  const [birthday, setBirthday] = useState<Array<Birthday>>([]);

  useEffect(() => {
    fetch(`${HAPPY_BIRTHDAY_API}/${query}`)
      .then((response) => response.json())
      .then((data) => setBirthday(data));
  }, [query]);

  return <div className="container happy-birthday-homie"></div>;
};

export default HappyBirthdayHomie;
