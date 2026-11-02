/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Generate one with `npm run setup`;
 * check it against the live API with `npm run check`.
 *
 * City of San Jose del Monte, Bulacan (Lone District, Region III).
 *
 * SJDM has no DPWH office of its own. It is served by the Bulacan 2nd District
 * Engineering Office, a Tier B office shared with Bulacan's 4th and 6th
 * districts (Meycauayan, Marilao, Obando, Santa Maria, Norzagaray, Angat...).
 * Listing that office under `offices` would pull in its whole ledger (~191
 * lines, ~₱3.47B in the House bill), most of it outside SJDM. So the scope is
 * by place name only: every line in the four programs whose title names
 * San Jose del Monte. The district card still shows the shared office whole,
 * labelled as shared, for context.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'san-jose-del-monte-city',
  kind: 'city',
  name: 'City of San Jose del Monte',
  shortName: 'San Jose del Monte',
  operator: { name: 'Jerome Policarpio', url: 'https://budget-csjdm.vercel.app' },
  // Set this once the deployment URL is known (used for link previews).
  // siteUrl: 'https://<your-deployment>.vercel.app',
  scope: {
    offices: [],
    places: [{ label: 'San Jose del Monte', q: 'San Jose del Monte', region: 'III' }],
    districts: ['leg:san-jose-del-monte-city:lone'],
    exclude: [],
  },
  reporting: { enabled: false },
});
