export const fixedCardBrand = {
  company: 'Alianza Sócios de Salud',
  website: 'alianza.health',
  websiteUrl: 'https://alianza.health',
} as const;

export type SocialPlatform = 'linkedin' | 'instagram' | 'facebook' | 'whatsapp';

const socialHosts: Record<Exclude<SocialPlatform, 'whatsapp'>, string> = {
  linkedin: 'https://www.linkedin.com/in/',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
};

export function isAlianzaEmail(value: string): boolean {
  return /^[^\s@]+@alianza\.health$/i.test(value.trim());
}

export function normalizeSocialValue(platform: SocialPlatform, value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';

  if (platform === 'whatsapp') {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:wa\.me|api\.whatsapp\.com)\//i.test(trimmed)) {
      return trimmed.replace(/\D/g, '');
    }
    return trimmed;
  }

  let username = trimmed;
  if (/^(?:https?:\/\/)?(?:www\.)?[^/]+\//i.test(username)) {
    try {
      const url = new URL(/^https?:\/\//i.test(username) ? username : `https://${username}`);
      const parts = url.pathname.split('/').filter(Boolean);
      username = platform === 'linkedin' && parts[0]?.toLowerCase() === 'in' ? parts[1] || '' : parts[0] || '';
    } catch {}
  }

  return username.replace(/^@+/, '').replace(/\/+$/, '');
}

export function socialProfileUrl(platform: SocialPlatform, value: string): string {
  const normalized = normalizeSocialValue(platform, value);
  if (!normalized) return '';

  if (platform === 'whatsapp') {
    const digits = normalized.replace(/\D/g, '');
    return digits ? `https://wa.me/${digits}` : '';
  }

  return `${socialHosts[platform]}${encodeURIComponent(normalized)}`;
}

export function isValidWhatsAppNumber(value: string): boolean {
  if (!value.trim()) return true;
  if (!/^\+?[\d\s().-]+$/.test(value.trim())) return false;
  const digits = value.replace(/\D/g, '');
  return /^[1-9]\d{7,14}$/.test(digits);
}

export const cardDefaults = {
  name: 'Maya Torres',
  title: 'Community Partnerships',
  company: fixedCardBrand.company,
  headline: 'Building healthier partnerships across communities.',
  email: 'maya@alianza.health',
  phone: '+1 (787) 555-0146',
  website: fixedCardBrand.website,
  location: 'San Juan, Puerto Rico',
  linkedin: '',
  instagram: '',
  facebook: '',
  whatsapp: '',
  color: '#53646e',
  profileImage: '',
  coverImage: '',
};

export type CardState = typeof cardDefaults & Record<string, string>;

export function withFixedBrand(value: Partial<CardState> = {}): CardState {
  const keys = Object.keys(cardDefaults) as Array<keyof typeof cardDefaults>;
  const sanitized = Object.fromEntries(
    keys.map((key) => [key, typeof value[key] === 'string' ? value[key] : cardDefaults[key]]),
  ) as CardState;

  return {
    ...sanitized,
    email: isAlianzaEmail(sanitized.email) ? sanitized.email.trim() : '',
    linkedin: normalizeSocialValue('linkedin', sanitized.linkedin),
    instagram: normalizeSocialValue('instagram', sanitized.instagram),
    facebook: normalizeSocialValue('facebook', sanitized.facebook),
    whatsapp: normalizeSocialValue('whatsapp', sanitized.whatsapp),
    company: fixedCardBrand.company,
    website: fixedCardBrand.website,
  };
}

export function encodeCardPayload(payload: CardState): string {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeCardPayload(value: string): CardState {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const base64 = padded + '='.repeat((4 - (padded.length % 4)) % 4);
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const parsed: unknown = JSON.parse(new TextDecoder().decode(bytes));
  if (!parsed || typeof parsed !== 'object') throw new Error('Invalid card payload');
  return withFixedBrand(parsed as Partial<CardState>);
}

export function cardShareUrl(origin: string, state: CardState): string {
  const shareable = withFixedBrand({ ...state, profileImage: '', coverImage: '' });
  return `${origin}/card/?data=${encodeCardPayload(shareable)}`;
}
