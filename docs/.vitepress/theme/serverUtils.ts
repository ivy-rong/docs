//获取文件目录
import { globby } from 'globby'
//Converts a string with front-matter
import matter from 'gray-matter'
import fs from 'fs-extra'
//
/**
 * @description posts/DeFi科普.md
 * @returns 得到post文件夹下md文件名字
 */
export async function getPostMDFilePaths() {
  let paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md']
  })
  return paths.filter((item) => item.includes('posts/'))
}

/**
 *
 */
export async function getPosts() {
  let paths = await getPostMDFilePaths()
  let posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      // data.data =
      return {
        frontMatter: data,
        regularPath: `/${item.replace('.md', '.html')}`
      }
    })
  )
  return posts
}

/**
 *
 */
export async function getPostLength() {
  return [...(await getPostMDFilePaths())].length
}
