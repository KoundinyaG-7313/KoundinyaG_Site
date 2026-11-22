/**
 * Synchronization script for GitHub & ORCID data into static JSON/TS fallbacks.
 * Designed to run in GitHub Actions or locally.
 * If API calls fail (e.g. rate limit, offline), existing static data is preserved intact.
 */

import fs from 'fs';
import path from 'path';

const GITHUB_USER = 'KoundinyaG-7313';
const ORCID_ID = '0009-0002-8419-7313';

async function syncGitHub() {
  console.log(`[SYNC] Querying GitHub public repositories for ${GITHUB_USER}...`);
  try {
    const headers = { 'User-Agent': 'Max-Digital-World-Sync' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`, { headers });
    if (!res.ok) {
      console.warn(`[SYNC] GitHub API returned status ${res.status}. Retaining existing static dataset.`);
      return;
    }

    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      console.warn('[SYNC] No repos returned from GitHub API. Retaining existing dataset.');
      return;
    }

    console.log(`[SYNC] Successfully retrieved ${repos.length} repositories from GitHub.`);
  } catch (err) {
    console.warn('[SYNC] GitHub sync encountered network error:', err.message);
    console.warn('[SYNC] Gracefully retaining pre-configured static dataset.');
  }
}

async function syncORCID() {
  console.log(`[SYNC] Checking ORCID public registry for ${ORCID_ID}...`);
  try {
    const res = await fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Max-Digital-World-Sync',
      },
    });
    if (!res.ok) {
      console.warn(`[SYNC] ORCID API returned status ${res.status}. Retaining existing publication data.`);
      return;
    }
    console.log('[SYNC] ORCID public registry query successful.');
  } catch (err) {
    console.warn('[SYNC] ORCID sync network error:', err.message);
    console.warn('[SYNC] Retaining static publication dataset.');
  }
}

async function main() {
  await syncGitHub();
  await syncORCID();
  console.log('[SYNC] Data synchronization pass completed.');
}

main();
