import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import type { Root, Paragraph, Link, Html, Blockquote, FootnoteDefinition, ListItem } from 'mdast'
import { fetchGitHubApi, fetchArxivApi } from './api'

export function remarkReadingTime() {
  // @ts-expect-error:next-line
  return function (tree, { data }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}

const initGitHubCard = async (
  node: Paragraph,
  index?: number,
  parent?: Root | Blockquote | FootnoteDefinition | ListItem
) => {
  if (
    node.type === 'paragraph' &&
    node.children.length === 1 &&
    node.children[0].type === 'link' &&
    index &&
    parent &&
    parent.type === 'root'
  ) {
    const link = node.children[0] as Link
    const match = link.url.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)/)

    if (match) {
      const [, owner, repo] = match
      try {
        const data = await fetchGitHubApi(`https://api.github.com/repos/${owner}/${repo}`)

        const newNode: Html = {
          type: 'html',
          value: `
  <a href="${data.html_url}" target="_blank" class="not-prose block my-4">
            <div
    class="github-card bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-center items-center [&_*]:!no-underline"
  >
    <img
      src="${data.owner.avatar_url}"
      alt="avatar"
      class="w-12 h-12 rounded-full mb-4 sm:mb-0 sm:mr-4 mt-0"
    />
    <div class="flex-grow">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3
          class="text-gray-900 dark:text-white font-bold text-center sm:text-left mt-0 mb-1 text-lg"
        >
          ${data.name}
        </h3>
        <div class="flex items-center mt-2 sm:mt-0 mx-auto sm:mx-0">
          <span class="text-yellow-500 flex items-center mr-4">
            <svg class="w-4 h-4 mr-1">
              <use href="/icons/ui.svg#mingcute-star-line"></use>
            </svg>
            ${data.stargazers_count}
          </span>
          <span
            class="text-gray-700 dark:text-gray-400 text-xs flex items-center"
          >
            <span
              class="inline-block w-3 h-3 rounded-full mr-2 bg-gray-700 dark:bg-slate-100"
            ></span>
            ${data.language}
          </span>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-400 text-sm mt-2">
         ${data.description}
      </p>
    </div>
</div>
  </a>
          `
        }

        parent.children[index] = newNode
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
      }
    }
  }
}

export function remarkGithubCards() {
  return async function transformer(tree: Root) {
    const promises: any = []
    visit(tree, 'paragraph', (node, index, parent) => {
      promises.push(initGitHubCard(node, index, parent))
    })
    await Promise.all(promises)
    return tree
  }
}

const initArxivCard = async (
  node: Paragraph,
  index?: number,
  parent?: Root | Blockquote | FootnoteDefinition | ListItem
) => {
  if (
    node.type === 'paragraph' &&
    node.children.length === 1 &&
    node.children[0].type === 'link' &&
    index &&
    parent &&
    parent.type === 'root'
  ) {
    const link = node.children[0] as Link
    const match = link.url.match(/https:\/\/arxiv\.org\/(abs|pdf)\/(\d{4}\.\d+(?:v\d+)?)/)

    if (match) {
      const [, , id] = match
      try {
        const data = await fetchArxivApi(id)

        const newNode: Html = {
          type: 'html',
          value: `
  <a href="${data.url}" target="_blank" class="not-prose block my-4">
            <div
    class="arxiv-card bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-center items-center [&_*]:!no-underline"
  >
    <div class="flex-grow">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3
          class="text-gray-900 dark:text-white font-bold text-center sm:text-left mt-0 mb-1 text-lg"
        >
          ${data.title}
        </h3>
        <div class="flex items-center mt-2 sm:mt-0 mx-auto sm:mx-0">
          <span class="text-yellow-500 flex items-center">
            <svg class="w-4 h-4 mr-1">
              <use href="/icons/ui.svg#mingcute-paper-line"></use>
            </svg>
            ${data.id}
          </span>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-400 text-sm mt-2">
         ${data.authors}
      </p>
    </div>
</div>
  </a>
          `
        }

        parent.children[index] = newNode
      } catch (err) {
        console.error('Error fetching Arxiv data:', err)
      }
    }
  }
}

// 创建处理Markdown中Arxiv链接的插件
export function remarkArxivCards() {
  return async function transformer(tree: Root) {
    const promises: any[] = []
    visit(tree, 'paragraph', (node, index, parent) => {
      promises.push(initArxivCard(node, index, parent))
    })
    await Promise.all(promises)
    return tree
  }
}
