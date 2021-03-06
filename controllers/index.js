'use strict'
const HTTP_STATUS_CODES = require('http').STATUS_CODES
const logger = require('pino')()

async function healthCheck(req, res) {
  const child = logger.child({ type: 'pino', prop: 'value' })
  child.info('HealthCheck endpoint processed succesfully')
  res.status(200).send(HTTP_STATUS_CODES[200])
}

async function notFound(req, res) {
  if (!req.route) {
    const logChild = logger.child({ endpoint: req.originalUrl })
    logChild.info('A not found endpoint was requested')
    res.status(404).send(HTTP_STATUS_CODES[404])
  }
}

module.exports = {
  healthCheck,
  notFound
}
