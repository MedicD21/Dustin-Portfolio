/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR SITE, ONE FILE.
 *  Everything personal about the site lives here. Edit freely —
 *  every page reads from this object.
 * ─────────────────────────────────────────────────────────────
 */
export const SITE = {
  /** Shown in the header wordmark, hero, and page titles. */
  name: 'Dustin',

  /** One line under your name. Keep it human. */
  tagline: 'Software engineering student, learning in public.',

  /**
   * The hero paragraph. A couple of sentences about who you are
   * and what you're working toward.
   */
  intro:
    "I'm studying software engineering and building small things to " +
    'understand big ideas. This site is where my coursework, side ' +
    'projects, and notes end up as I learn.',

  /** Used for the contact section and the footer mailto link. */
  email: 'dustin@thegoodkitchen.org',

  /** Your GitHub username — powers the live repos section too. */
  github: 'MedicD21',

  /**
   * Social / connect links. Add, remove, or reorder — the footer
   * and connect section render whatever is in this list.
   */
  socials: [
    { label: 'GitHub', url: 'https://github.com/MedicD21' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' }, // ← add your profile
  ],

  /**
   * The "Now" list on the homepage — what you're currently
   * learning or building. Update it every few weeks; it makes
   * the site feel alive.
   */
  now: [
    'First semester of software engineering coursework',
    'Fundamentals: data structures, Git, and the command line',
    'Building this site with Astro',
  ],

  /** Small print in the footer. */
  footerNote: 'Built from scratch with Astro. Design and code by me (with some help).',
} as const;
