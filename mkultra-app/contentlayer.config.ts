import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.md`,
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => {
        return `/content/${post._raw.flattenedPath.split('/')[1]}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});
