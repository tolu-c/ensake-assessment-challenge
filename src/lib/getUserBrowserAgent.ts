export const getDeviceName = (): string => {
  if (typeof window === "undefined") {
    return "Server";
  }

  const userAgent = navigator.userAgent;

  // Extract browser and version
  if (userAgent.indexOf("Chrome") > -1) {
    const version =
      userAgent.match(/Chrome\/([0-9.]+)/)?.[1]?.split(".")?.[0] || "";
    return `Chrome ${version}`;
  } else if (userAgent.indexOf("Firefox") > -1) {
    const version =
      userAgent.match(/Firefox\/([0-9.]+)/)?.[1]?.split(".")?.[0] || "";
    return `Firefox ${version}`;
  } else if (userAgent.indexOf("Safari") > -1) {
    const version =
      userAgent.match(/Version\/([0-9.]+)/)?.[1]?.split(".")?.[0] || "";
    return `Safari ${version}`;
  } else if (userAgent.indexOf("Edge") > -1 || userAgent.indexOf("Edg") > -1) {
    const version =
      userAgent.match(/Edg(?:e)?\/([0-9.]+)/)?.[1]?.split(".")?.[0] || "";
    return `Edge ${version}`;
  } else {
    return "Unknown Browser";
  }
};
