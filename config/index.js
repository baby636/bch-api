/*
  Common configuration settings.
*/

const config = {
  // This is the same secret used by jwt-bch-api
  apiTokenSecret: process.env.TOKENSECRET
    ? process.env.TOKENSECRET
    : 'secret-jwt-token',

  // Rate Limits
  anonRateLimit: process.env.ANON_RATE_LIMIT ? process.env.ANON_RATE_LIMIT : 50,
  whitelistRateLimit: process.env.WHITELIST_RATE_LIMIT
    ? process.env.WHITELIST_RATE_LIMIT
    : 10,
  whitelistDomains: process.env.WHITELIST_DOMAINS
    ? process.env.WHITELIST_DOMAINS.split(',')
    : ['fullstack.cash', 'psfoundation.cash']
}

module.exports = config
