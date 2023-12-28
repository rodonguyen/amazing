import { useEffect, useState } from "react"

export const createHyperlink = (link, content) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {content}
    </a>
  );
};

export const useDarkMode = () => {
	// Utilise cache/local storage to store themeMode, keep it consistent throughout the session
	let darkThemeEnabledOnStorage = localStorage.getItem("darkThemeEnabled")
	darkThemeEnabledOnStorage = darkThemeEnabledOnStorage
		? JSON.parse(darkThemeEnabledOnStorage)
		: false
	const [darkThemeEnabled, changeTheme] = useState(darkThemeEnabledOnStorage)

	useEffect(() => {
		if (darkThemeEnabled === true) {
			document.body.classList.add("dark")
			localStorage.setItem("darkThemeEnabled", "true")
		} else if (darkThemeEnabled === false) {
			document.body.classList.remove("dark")
			localStorage.setItem("darkThemeEnabled", "false")
		}
	}, [darkThemeEnabled])

	return [darkThemeEnabled, changeTheme]
}

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