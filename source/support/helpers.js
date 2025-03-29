function env(prop) {
  return process.env[prop.toUpperCase()] || null;
}

export {
  env
};
