export type Birthday = {
  name: string;
  message: string;
};

// const HAPPY_BIRTHDAY_API = "http://localhost:3000/birthdays";
const HAPPY_BIRTHDAY_API = "https://homie-birthday-nest-api-rodonguyen-rodonguyens-projects.vercel.app/birthdays";

export const fetchTodayBirthdays = (
  code: string = "rodo8888",
): Promise<Array<Birthday>> => {
  return fetch(`${HAPPY_BIRTHDAY_API}/${code}`)
    .then(response => response.json()) 
};
