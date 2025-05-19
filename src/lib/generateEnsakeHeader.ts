import { generateDeviceId } from "./deviceId";
import { getDeviceName } from "./getUserBrowserAgent";

export const getEnsakeDeviceHeader = (): string => {
  const deviceId = generateDeviceId();
  const platform = "web";
  const deviceName = getDeviceName();

  return `${deviceId}/${platform}/${deviceName}`;
};
