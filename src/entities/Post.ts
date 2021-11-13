interface IPost {
  id?: number
  title: string
  author: string
  created_utc: number
  ups: number
  num_comments: number
}

class Post implements IPost {
  id?: number
  title: string
  author: string
  created_utc: number
  ups: number
  num_comments: number

  private constructor({ title, author, created_utc, ups, num_comments }: Post) {
    this.title = title
    this.author = author
    this.created_utc = created_utc
    this.ups = ups
    this.num_comments = num_comments

    return Object.assign(this, {
      title,
      author,
      created_utc,
      ups,
      num_comments,
    })
  }

  static create({ title, author, created_utc, ups, num_comments }: Post) {
    const post = new Post({ title, author, created_utc, ups, num_comments })
    return post
  }
}

export { Post, IPost }
