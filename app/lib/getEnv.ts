type TReturnType = string | number | undefined;
export const getEnv = (key: string | number): TReturnType => {
  if (key) {
    return process.env[key];
  }
  return undefined;
};
