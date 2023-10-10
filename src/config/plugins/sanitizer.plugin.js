import sanitizer from "perfect-express-sanitizer";

export const sanitizerClean = () => {
  return sanitizer.clean({
    xss: true,
    noSql: true,
    sql: false, //obligatoriamente ir en false, porque si le colocas true no podras recibir data en formData
  });
};
