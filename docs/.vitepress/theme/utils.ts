type Post = {
  frontMatter: {
    data?: string
    title?: string
    tags?: string[]
    description?: string
  }
  regularPath: string
}

export function initTags(post: Post[]) {}
