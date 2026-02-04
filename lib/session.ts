// session kezelés iron-session könyvtárral - cookie alapú

import { getIronSession } from "iron-session";
import type { SessionOptions } from "iron-session";


export const sessionOptions: SessionOptions = {
  cookieName: "myapp_session",
  password: process.env.SESSION_PASSWORD!,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function getSession(
  req: Request, 
  res: Response 
) {
  return getIronSession(req, res, sessionOptions);
}
