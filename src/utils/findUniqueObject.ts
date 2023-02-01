// export function uniqueFilms<T>(array: T[], propertyName: keyof T) {
// 	return array.filter(
// 		(e, i) => array.findIndex((a) => a[propertyName] === e[propertyName]) === i
// 	);
// }

export const uniqueFilms = <T>(array: T[], prop: keyof T) => {
	const set = new Set();
	return array.filter(
		(object) => !set.has(object[prop]) && set.add(object[prop])
	);
};
