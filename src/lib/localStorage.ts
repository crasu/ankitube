export function loadWordlist(): string[] {
	let wstr = localStorage.getItem('wordlist');
	return wstr ? JSON.parse(wstr) : ['Computer'];
}

export function loadVideoLink(): string {
	let vl = localStorage.getItem('videoLink');
	return vl ? vl : 'https://www.youtube.com/watch?v=G__fWfF4wYM';
}

export function loadVideoId(): string {
	return new URL(loadVideoLink()).searchParams.get('v') as string;
}
