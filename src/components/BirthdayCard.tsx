import React from "react";
import "./BirthdayCard.css";
import { Birthday } from "./api";

export const BirthdayCard = (birthday: Birthday) => {
  return (
    <div className="card happy-birthday-card">
      <div className="card-content">
        <h3 className="card-title">
          Have a Fking Lit Birthday, {birthday.name}!
        </h3>
        <p className="card-description">{birthday.message}</p>
      </div>
    </div>
  );
};
