export const createHyperlink = (link, content) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {content}
    </a>
  );
};

export const changeWindowTitle = (path) => {
  if (path === '/') {
    document.title = "Amazing by Rodo";
  }
  else if (path === '/timeihaveleft') {
    document.title = "Time I Have Left";
  }
  else {
    document.title = path;
  }
}