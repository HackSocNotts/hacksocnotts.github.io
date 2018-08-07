import * as postsManifest from '_posts/postsManifest.json';

const retrievePosts = () => {
  const promises = postsManifest.posts.map(async (post) => {
    try {
      const description = await import(`../_posts/${post.description}`);
      return Promise.resolve({
        ...post,
        description,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  });

  return Promise.all(promises);
};

export default {
  retrievePosts,
};
