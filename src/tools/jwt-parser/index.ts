import { Key } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate as t } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: t('tools.jwt-parser.title'),
  path: '/jwt-parser',
  description: t('tools.jwt-parser.description'),
  keywords: [
    'jwt',
    'parser',
    'decode',
    'typ',
    'alg',
    'iss',
    'sub',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'json',
    'web',
    'token',
  ],
  component: () => import('./jwt-parser.vue'),
  icon: Key,
});
