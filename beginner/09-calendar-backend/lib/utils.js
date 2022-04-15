module.exports.renderErrors = error => {
  return Object.assign(
    {},
    ...error.details.map(({ message, context }) => ({
      [context.key || 'base']: message
    }))
  );
};
