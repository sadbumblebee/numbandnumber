export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/p/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const formatAuthors = (authors) => {
	if (authors.length === 0) {
		return '';
	} else if (authors.length === 1) {
		return authors[0];
	} else if (authors.length === 2) {
		return authors.join(' and ');
	} else {
		const lastAuthor = authors.pop();
		return authors.join(', ') + ', and ' + lastAuthor;
	}
};
