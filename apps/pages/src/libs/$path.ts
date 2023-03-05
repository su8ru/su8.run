export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  images: {
    $6stars_jpg: '/images/6stars.jpg',
    $6stars_webp: '/images/6stars.webp',
    avatar_jpg: '/images/avatar.jpg',
    avatar_webp: '/images/avatar.webp',
    portfolio_jpg: '/images/portfolio.jpg',
    portfolio_webp: '/images/portfolio.webp'
  }
} as const

export type StaticPath = typeof staticPath
