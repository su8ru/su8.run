export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  avatar_jpg: '/avatar.jpg',
  avatar_webp: '/avatar.webp',
  favicon_ico: '/favicon.ico'
} as const

export type StaticPath = typeof staticPath
