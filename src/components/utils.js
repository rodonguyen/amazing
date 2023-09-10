export const createHyperlink = (link, content) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {content}
    </a>
  );
};

export const changeWindowTitle = (title) => {
  if (title === '/timeihaveleft') {
    document.title = "Time I Have Left";
  }
  else if (title === '/') {
    document.title = "Amazing by Rodo";
  }
}