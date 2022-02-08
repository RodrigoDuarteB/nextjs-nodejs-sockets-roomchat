import logger from 'pino'
import daysjs from 'dayjs'

const log = logger({
    prettifier: true,
    base: {
        pid: false
    },
    timestamp: () => `"time":"${daysjs().format()}"`
})

export default log
