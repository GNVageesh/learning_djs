export const validateEnv = () => {
  if (!process.env.TOKEN) {
    console.warn("MISSING TOKEN");
    return false;
  }

  if (!process.env.MONGO_URI) {
    console.warn("MISSING DB CONNECTION");
    return false;
  }

  return true;
};
