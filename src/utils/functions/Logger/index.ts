import pino from "pino";

//eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * An logger function created using pino
 * @params info | debug | error | silent | ...
 */
export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});
