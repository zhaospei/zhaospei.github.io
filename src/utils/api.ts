import { DOMParser } from 'xmldom'

interface GitHubRepoInfo {
  name: string
  description: string
  stargazers_count: number
  language: string
  owner: {
    avatar_url: string
  }
  html_url: string
}

async function fetchGitHubApi(url: string): Promise<GitHubRepoInfo> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`)
  }
  return await response.json()
}

interface ArxivArticleInfo {
  title: string
  authors: string
  id: string
  url: string
}

async function fetchArxivApi(id: string): Promise<ArxivArticleInfo> {
  const response = await fetch(`https://export.arxiv.org/api/query?id_list=${id}`)
  if (!response.ok) {
    throw new Error(
      `Arxiv API request failed: ${response.statusText}, https://export.arxiv.org/api/query?id_list=${id}`
    )
  }
  const text = await response.text()
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(text, 'application/xml')

  const entry = xmlDoc.getElementsByTagName('entry')[0]
  const title = entry.getElementsByTagName('title')[0].textContent || ''
  const authors = Array.from(entry.getElementsByTagName('author'))
    .map((author: any) => author.getElementsByTagName('name')[0].textContent || '')
    .join(', ')

  return {
    title,
    authors,
    id,
    url: `https://arxiv.org/abs/${id}`
  }
}

export { fetchGitHubApi, fetchArxivApi }
