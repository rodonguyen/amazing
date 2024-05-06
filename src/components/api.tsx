export type Birthday = {
  name: string;
  nickname?: string;
  cardTitle?: string;
  cardMessage?: string;
};

// const HAPPY_BIRTHDAY_API = "http://localhost:3000/birthday";
const HAPPY_BIRTHDAY_API = "https://homie-birthday-nest-api-rodonguyen-rodonguyens-projects.vercel.app/birthday";

export const fetchTodayBirthdays = (
  code: string = "rodo8888",
): Promise<Array<Birthday>> => {
  return fetch(`${HAPPY_BIRTHDAY_API}/${code}`)
    .then(response => response.json()) 
};
