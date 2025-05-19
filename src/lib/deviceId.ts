import { randomUUID } from "crypto";

export const generateDeviceId = (): string => {
  const deviceId = randomUUID();

  return deviceId;
};
