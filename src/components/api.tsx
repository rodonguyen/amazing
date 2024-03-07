export type Birthday = {
  name: string;
  message: string;
};

const HAPPY_BIRTHDAY_API = "http://localhost:3000/birthdays";

export const fetchTodayBirthdays = (
  code: string = "rodo8888",
): Promise<Array<Birthday>> => {
  return fetch(`${HAPPY_BIRTHDAY_API}/${code}`)
    .then(response => response.json()) 
};
