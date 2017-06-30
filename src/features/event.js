import ga from '../ga'
import config from '../config'

/**
 * Event tracking
 * @param  {any} args
 */
export default function event (...args) {
  ga(`${config.sendPrefix}.send`, 'event', ...args)
}
