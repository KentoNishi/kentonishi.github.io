import { asset, base } from '$app/paths';

export const isLocalPath = (href: string) => href.startsWith('/');

export const localAsset = (href: string) => (isLocalPath(href) ? asset(href) : href);

export const localHref = (href: string) => (isLocalPath(href) ? `${base}${href}` : href);

export const cssAssetUrl = (href: string) => `url('${localAsset(href)}')`;
